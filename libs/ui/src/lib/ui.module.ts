import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation-header/navigation-header.component';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MaterialModule } from './material.module';
import { BetaComponent } from './beta/beta.component';

@NgModule({
  imports: [CommonModule, NgxMaterialTimepickerModule, MaterialModule],
  declarations: [
    NavigationComponent,
    NavigationSideComponent,
    DateTimePickerComponent,
    BetaComponent
  ],
  exports: [
    NavigationComponent,
    NavigationSideComponent,
    DateTimePickerComponent,
    MaterialModule
  ]
})
export class UiModule {}
