import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { DataStorageService } from '../shared/data-storage.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Offer } from '../_models/Offer';
import { Router } from '@angular/router';
import { TSPToastrService } from '../_service/TSPToastrService';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  currencySymbol: any
  offerData: Response;
  closeResult: string;
  constructor( 
    private dataStorageService : DataStorageService,
    private modalService: NgbModal,
    private router:Router,
    private toastr : TSPToastrService) { }

  ngOnInit() {
   this.currencySymbol =  getCurrencySymbol('INR', 'wide');
    this.getOfferList();
  }

  getOfferList(){
    this.dataStorageService.getOfferData()
    .subscribe(
      (response :Response) =>{
        this.offerData = response;
        console.log(response);
      }
    )
  }

  deleteOffer(offer : Offer){
    this.dataStorageService.deleteOffer(offer).subscribe(
      (response : Response) =>{
        console.log("Delete Offer"+response);
        this.getOfferList();
        this.toastr.sendSuccessMessage("Offer Deleted Successfully!")
      }
    );
  }


  modifyOffer(offer:Offer){
    this.router.navigate(['/sideBar/modifyOffer', offer]); 
  }



 

}
