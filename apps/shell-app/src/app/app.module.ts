import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProvidersFeatureSearchModule} from '@saraphan/providers/feature-search'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
     HttpClientModule,
     ProvidersFeatureSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
