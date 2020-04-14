import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersFeatureSearchModule } from '@saraphan/providers/feature-search';
import { RootStoreModule } from './root-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule,
    ProvidersFeatureSearchModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
