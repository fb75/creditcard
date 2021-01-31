import { TestBed } from '@angular/core/testing';

import { PaymentIconService } from './payment-icon.service';

describe('PaymentIconService', () => {
  let service: PaymentIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
