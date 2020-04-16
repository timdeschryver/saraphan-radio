import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation-header/navigation-header.component';
import { ShellComponent } from './shell/shell.component';
import { MaterialModule } from './material.module';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

const components =  [ NavigationComponent, ShellComponent, NavigationSideComponent,DateTimePickerComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
  declarations: components,
  exports:components
})
export class UiModule {}
