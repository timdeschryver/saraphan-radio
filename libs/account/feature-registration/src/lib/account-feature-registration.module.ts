import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDomainModule } from '@saraphan/account/domain';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [CommonModule, AccountDomainModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class AccountFeatureRegistrationModule {}
