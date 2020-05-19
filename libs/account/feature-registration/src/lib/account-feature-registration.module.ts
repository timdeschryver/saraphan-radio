import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDomainModule } from '@saraphan/account/domain';
import { RegistrationComponent } from './components/core/registration.component';
import { AccountRoutingModule } from './account-routing.module';
import {UiModule,  MaterialModule } from '@saraphan/ui';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    MaterialModule,
    AccountDomainModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    DragDropModule

  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class AccountFeatureRegistrationModule {}
