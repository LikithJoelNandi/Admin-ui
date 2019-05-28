import { Component, OnInit } from '@angular/core';
import { SubscriberData } from '../data/subscriber-data';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { SigninService } from '../_service/sign-in.service';
import { TSPToastrService } from '../_service/TSPToastrService';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-enroll-subscriber',
  templateUrl: './enroll-subscriber.component.html',
  styleUrls: ['./enroll-subscriber.component.css']
})
export class EnrollSubscriberComponent implements OnInit {

  
  enrollForm: FormGroup;
  submitted = false;
  public subsData: SubscriberData;

  constructor( 
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private toastr : TSPToastrService,
    private dataStorageService: DataStorageService,
    private app:AppComponent
    ) {
      this.subsData = new SubscriberData();
    }

  

  ngOnInit() {

    this.app.online = true;
    this.enrollForm = this.formBuilder.group({
      firstName : [ '', Validators.required ],
      lastName : [ '', Validators.required ],
      address :  [ '', Validators.required ],
      adharNo :  [ '', [Validators.required , Validators.minLength(12)] ],
      email :  [ '', Validators.required ],
      mobileNo :  [ '', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.enrollForm.controls; }
  
  onSubmit(value: string): void {

    this.submitted = true;

      // stop here if form is invalid
      if (this.enrollForm.invalid) {
          return;
      }

    this.subsData.firstName =value['firstName'];
    this.subsData.lastName =value['lastName'];
    this.subsData.address =value['address'];
    this.subsData.adharNo =value['adharNo'];
    this.subsData.email =value['email'];
    this.subsData.mobileNo =value['mobileNo'];
    


    this.dataStorageService.enrollSubscriberData(this.subsData).
    subscribe(
      (response :Response) =>{
        console.log(response);
        this.toastr.sendSuccessMessage("Registred Successfully!");
      }
    );
	}


}
