import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersFeatureSearchModule, ProvidersSearchComponent } from '@saraphan/providers/feature-search';
import { UiModule ,MaterialModule} from '@saraphan/ui';
import { RootStoreModule } from './root-store.module';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CallbackComponent } from './auth/components/callback/callback.component';

const appRoutes: Routes = [

  {
    path: '',
    component: ProvidersSearchComponent
  }
  ,{
    path: 'callback',
    component: CallbackComponent
  },
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
    AuthModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
