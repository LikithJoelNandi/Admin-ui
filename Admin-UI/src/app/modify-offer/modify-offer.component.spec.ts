import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyOfferComponent } from './modify-offer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { DataStorageService } from '../shared/data-storage.service';
import { TSPToastrService } from '../_service/TSPToastrService';
import { TOAST_CONFIG } from 'ngx-toastr';

describe('ModifyOfferComponent', () => {
  let component: ModifyOfferComponent;
  let fixture: ComponentFixture<ModifyOfferComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

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
      imports: [ReactiveFormsModule, RouterModule, RouterTestingModule, HttpClientModule],
      declarations:[ModifyOfferComponent],
      providers : [
        { provide:TSPToastrService, useValue:mockTspToastService},
        {provide:DataStorageService, useValue:mockDataStorageService}
      ],
      
    })
    .compileComponents(); 
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
