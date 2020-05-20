import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/core/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ProvidersFeatureSearchModule,
} from '@saraphan/providers/feature-search';
import { UiModule, MaterialModule , ShellComponent} from '@saraphan/ui';
import { RootStoreModule } from './root-store.module';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CallbackComponent } from './auth/components/callback/callback.component';
import { AuthGuard } from './auth/guard/auth/auth.guard';
import { InterceptorService } from './auth/services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import localeRu from '@angular/common/locales/ru';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(localeRu, 'ru');

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent
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
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
  //  BrowserModule,

  CommonModule,
  BrowserAnimationsModule,
  MaterialModule,
  UiModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    HttpClientModule,
    ProvidersFeatureSearchModule,
    RootStoreModule,
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
