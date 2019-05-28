import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleOfferComponent } from './create-single-offer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateSingleOfferComponent', () => {
  let component: CreateSingleOfferComponent;
  let fixture: ComponentFixture<CreateSingleOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CreateSingleOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSingleOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
