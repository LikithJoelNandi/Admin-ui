import { TestBed , async} from '@angular/core/testing';

import { AlertService } from './alert.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlertService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlertService
      ],
    }).compileComponents();
  }));

 /*  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  }); */
});
