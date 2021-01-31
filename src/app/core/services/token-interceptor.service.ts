import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable({ providedIn: 'root' })

export class TokenInterceptorService {
  constructor( private _auth: AuthService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    if (this._auth.isAutenticated()) {
      request = req.clone({
        setHeaders: { authorizarion: `Bearer ${this._auth.getToken()}`}
      })
    }
    return next.handle(request);
  }
}
