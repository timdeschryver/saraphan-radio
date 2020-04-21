import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDomainModule } from '@saraphan/account/domain';
import { RegistrationComponent } from './registration.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [CommonModule, AccountDomainModule,AccountRoutingModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class AccountFeatureRegistrationModule {}


