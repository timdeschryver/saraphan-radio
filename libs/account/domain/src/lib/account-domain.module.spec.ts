import { async, TestBed } from '@angular/core/testing';
import { AccountDomainModule } from './account-domain.module';

describe('AccountDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountDomainModule).toBeDefined();
  });
});
