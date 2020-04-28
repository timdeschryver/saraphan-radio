import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { IEnvironment } from '../auth.module';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService,  @Inject('env') private environment: IEnvironment) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const differentAudienceOptions = {
      audience:  this.environment.api,
     // scope: 'read:account',
      redirect_uri: this.environment.callback
    };
    return this.auth.getTokenSilently$(differentAudienceOptions).pipe(
      mergeMap(token => {
        console.log("token",token);
        const tokenReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(tokenReq);
      }),
      catchError(err => throwError(err))
    );
  }
}
