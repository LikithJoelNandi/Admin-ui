import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { Offer } from '../_models/Offer';
import { TSPToastrService } from '../_service/TSPToastrService';

@Component({
  selector: 'app-create-single-offer',
  templateUrl: './create-single-offer.component.html',
  styleUrls: ['./create-single-offer.component.css']
})
export class CreateSingleOfferComponent implements OnInit {
  public get toastr(): TSPToastrService {
    return this._toastr;
  }
  public set toastr(value: TSPToastrService) {
    this._toastr = value;
  }

  createOfferForm:FormGroup;
  private offer:Offer;
  submitted =  false;

  constructor(
  private  formBuilder : FormBuilder,
  private dataStorageService : DataStorageService,
  private _toastr: TSPToastrService,
  ) { 
    this.offer = new Offer();
  }

  ngOnInit() {
   this.createOfferForm = this.formBuilder.group({
    offerName : [ '', Validators.required ],
    validity : [ '' , Validators.required ],
    price : [ '' , Validators.required ],
   });
  }

  get f() { return this.createOfferForm.controls; }


  onSubmit(value : JSON){

    this.submitted = true;

    // stop here if form is invalid
    if (this.createOfferForm.invalid) {
        return;
    }

    this.offer.offerName = value['offerName'];
    this.offer.validityInDays = value['validity'];
    this.offer.price = value['price'];
    this.dataStorageService.createSingleOffer(this.offer)
    .subscribe(
      (response : Response) => {
        this.toastr.sendSuccessMessage("Offer Created Successfully!");
        console.log(response);
      }
    )
  }

}
