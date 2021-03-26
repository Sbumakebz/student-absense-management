import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationHttpInterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
	  if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
		  request = request.clone({
			  setHeaders: {
				  Authorization: sessionStorage.getItem('basicauth')
			  }
          })
      }

      return next.handle(request);
  }
}
