import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersFeatureSearchModule, ProvidersSearchComponent } from '@saraphan/providers/feature-search';
import { UiModule ,MaterialModule} from '@saraphan/ui';
import { RootStoreModule } from './root-store.module';

const appRoutes: Routes = [
  {
    path: '',
    component: ProvidersSearchComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    HttpClientModule,
    ProvidersFeatureSearchModule,
    RootStoreModule,
    MaterialModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
