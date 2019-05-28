import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { SigninService } from '../_service/sign-in.service';
/* import { Angular2Csv } from  */

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showEnrollPage:boolean;
  showDeleteOfferPage:boolean;
  showCreateOfferPage:boolean;
  showReportPage:boolean;
  userName: string;
  status: string[];
  formula: any;
  filteredReviews: Response;

  constructor(
  private dataStorageService : DataStorageService,
  private signInService : SigninService,
  private router : Router
  ) { }

  ngOnInit() {
    this.dataStorageService.hideButton = false;
    this.showEnrollPage = false;
    this.showDeleteOfferPage = false;
    this.showCreateOfferPage = false;
    this.showReportPage = false;
    this.userName = this.signInService.user.userName;
    console.log(this.signInService.user.userName);
  }

  enrollClicked() {
    console.log('enroll clicked');
    this.showDeleteOfferPage = false;
    this.showCreateOfferPage = false;
    this.showReportPage = false;
    this.showEnrollPage = true;
  }
  deleteOfferClicked(){
    console.log('delete clicked');
    this.showCreateOfferPage = false;
    this.showEnrollPage = false;
    this.showReportPage = false;
    this.showDeleteOfferPage = true;
  }
  createOfferClicked(){
    console.log('create clicked');
    this.showDeleteOfferPage = false;
    this.showEnrollPage = false;
    this.showReportPage = false;
    this.showCreateOfferPage = true;    
  }
  generateReportClicked(){
    console.log('create clicked');
    this.showDeleteOfferPage = false;
    this.showEnrollPage = false;
    this.showCreateOfferPage = false;
    this.showReportPage = true;
  }

  enrollUser(){
    this.router.navigate(['/enroll']);
  }

}
