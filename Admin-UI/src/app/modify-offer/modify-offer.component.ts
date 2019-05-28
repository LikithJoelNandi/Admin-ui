import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { Offer } from '../_models/Offer';
import { ToastrService } from 'ngx-toastr';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { TSPToastrService } from '../_service/TSPToastrService';

@Component({
  selector: 'app-modify-offer',
  templateUrl: './modify-offer.component.html',
  styleUrls: ['./modify-offer.component.css']
})
export class ModifyOfferComponent implements OnInit {

  modifyOfferForm:FormGroup;
  offerName: string;
  validityInDays:number;
  price:number;
  offer:Offer;
  offerId: number;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private toastrService : TSPToastrService,
    private dataStorageService : DataStorageService,
    private spinner: SpinnerVisibilityService) {
      this.offer = new Offer();
     }

  ngOnInit() {
    this.route.params.subscribe(params => {  
      this.offerName = params['offerName'];   
      this.validityInDays = params['validityInDays'];   
      this.price = params['price'];   
      this.offerId = params['offerId'];
    });  

   

    this.modifyOfferForm = this.formBuilder.group(
      {
        offerName : [this.offerName, Validators.required],
        validityInDays : [this.validityInDays, Validators.required],
        price : [this.price, Validators.required]
      }
    )
  }

  get f() { return this.modifyOfferForm.controls; }

  onSubmit(value : JSON){
    this.spinner.show();
    this.submitted = true;
      // stop here if form is invalid
      if (this.modifyOfferForm.invalid) {
          return;
      }
    this.offer.offerName = value['offerName'];
    this.offer.price = value['price'];
    this.offer.validityInDays = value['validityInDays'];
    this.offer.offerId = this.offerId;
    this.dataStorageService.modifyOffer(this.offer)
    .subscribe(
      (response : Response) => {
        this.toastrService.sendSuccessMessage("Offer Successfully Modified!");
        this.spinner.hide();
      },
      error => {
        this.toastrService.sendErrorMessage("Not Modified")
      }
    );
  }

}
