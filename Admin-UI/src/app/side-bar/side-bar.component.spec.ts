import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpClientModule } from '@angular/common/http';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async(() => {

    let mockDataStorageService : Partial<DataStorageService>;
    mockDataStorageService = {
     
    }

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations : [SideBarComponent],
      providers: [
        {provide:DataStorageService, useValue:mockDataStorageService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
