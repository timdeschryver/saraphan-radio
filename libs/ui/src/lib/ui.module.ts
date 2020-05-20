import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation-header/navigation-header.component';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MaterialModule } from './material.module';

const components =  [ NavigationComponent,  NavigationSideComponent,DateTimePickerComponent];

@NgModule({
  imports: [
    CommonModule,
    NgxMaterialTimepickerModule,
    MaterialModule
  ],
  declarations: components,
  exports:components
})
export class UiModule {}
