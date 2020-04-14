import { async, TestBed } from '@angular/core/testing';
import { ProvidersDomainModule } from './providers-domain.module';

describe('ProvidersDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProvidersDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProvidersDomainModule).toBeDefined();
  });
});
