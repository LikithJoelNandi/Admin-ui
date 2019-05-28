import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TSPToastrService } from '../_service/TSPToastrService';
import { AppComponent } from '../app.component';
import { DataStorageService } from '../shared/data-storage.service';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  let mockTspToastService : Partial<TSPToastrService>;
    mockTspToastService = {
      sendSuccessMessage(msg : string){
        return "Sucess";
      }
    }

    let mockDataStorageService : Partial<DataStorageService>;
    mockDataStorageService = {
     
    }

    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ SignInComponent],
      providers : [AppComponent,
        { provide:TSPToastrService, useValue:mockTspToastService},
        {provide:DataStorageService, useValue:mockDataStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
