import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';  
@NgModule({
  imports: [ 
    StoreDevtoolsModule.instrument({  
      maxAge: 25, // Retains last 25 states
      logOnly: true, })  ,
     
  ], 
})
export class DevToolsModule {
  constructor(){console.log("in dev tools module");
  }
}
