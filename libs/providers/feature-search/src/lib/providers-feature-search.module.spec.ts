import { async, TestBed } from '@angular/core/testing';
import { ProvidersFeatureSearchModule } from './providers-feature-search.module';

describe('ProvidersFeatureSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProvidersFeatureSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProvidersFeatureSearchModule).toBeDefined();
  });
});
