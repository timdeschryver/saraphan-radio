import { async, TestBed } from '@angular/core/testing';
import { AccountFeatureRegistrationModule } from './account-feature-registration.module';

describe('AccountFeatureRegistrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountFeatureRegistrationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountFeatureRegistrationModule).toBeDefined();
  });
});
