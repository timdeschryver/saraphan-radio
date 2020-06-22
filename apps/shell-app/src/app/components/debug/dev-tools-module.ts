import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  imports: []
})
export class DevToolsModule {
  constructor() {
    console.log('in dev tools module');
  }
}
