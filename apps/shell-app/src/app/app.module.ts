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
import { AccountFeatureRegistrationModule } from '@saraphan/account/feature-registration';

const appRoutes: Routes = [

  {
    path: '',
    component: ProvidersSearchComponent
  }
  ,{
    path: 'callback',
    component: CallbackComponent
  },
  {
    path:'account',
    loadChildren: () => import('@saraphan/account/feature-registration/account-feature-registration.module').then(m => m.AccountFeatureRegistrationModule)
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
    AuthModule.forRoot(environment),
    AccountFeatureRegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
