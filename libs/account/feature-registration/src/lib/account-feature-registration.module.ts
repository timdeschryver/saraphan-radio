import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDomainModule } from '@saraphan/account/domain';
import {UiModule } from '@saraphan/ui';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule, 
    AccountDomainModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    DragDropModule,
    AccountRoutingModule
  ]
})
export class AccountFeatureRegistrationModule {}
