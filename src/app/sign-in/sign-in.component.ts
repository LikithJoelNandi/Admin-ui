import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../_service/sign-in.service';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TSPToastrService } from '../_service/TSPToastrService';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  credentialCheck: string;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router:Router,
    private toastr : TSPToastrService,
    private app : AppComponent
    ) { }

  ngOnInit() {
    this.app.online = false;
      this.registerForm = this.formBuilder.group({
        userName: [ '', Validators.required],
        password: [ '', [Validators.required, Validators.minLength(5)] ],
      }); 
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(value: JSON) {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
        this.signinService.checkCredentials(value['userName'], value['password'])
      .subscribe(
        (response : string) =>{
          localStorage.setItem('token', JSON.stringify(response));
          this.credentialCheck  = response;
          if(this.credentialCheck === 'User Not Found!'){
            this.toastr.sendErrorMessage("User Not Found!")
            return;
          }
          if(this.credentialCheck != 'User Not Found!'){
            this.toastr.sendSuccessMessage('Successfully logged in!')
          this.router.navigate(['/sideBar']);
          }
        }
      );

      
    

      }
      
      /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value)) */
  } 
  
 
}
