import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation-header/navigation-header.component';
import { ShellComponent } from './shell/shell.component';
import { MaterialModule } from './material.module';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
const components =  [ NavigationComponent, ShellComponent, NavigationSideComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: components,
  exports:components
})
export class UiModule {}
