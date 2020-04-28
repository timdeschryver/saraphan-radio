import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ProvidersFeatureSearchModule,
  ProvidersSearchComponent
} from '@saraphan/providers/feature-search';
import { UiModule, MaterialModule } from '@saraphan/ui';
import { RootStoreModule } from './root-store.module';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CallbackComponent } from './auth/components/callback/callback.component';
import { AuthGuard } from './auth/guard/auth/auth.guard';
import { InterceptorService } from './auth/services/interceptor.service';

const appRoutes: Routes = [
  {
    path: '',
    component: ProvidersSearchComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@saraphan/account/feature-registration').then(
        m => m.AccountFeatureRegistrationModule
      ),
    canActivate: [AuthGuard]
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
    AuthModule.forRoot(environment)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
