import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('paso por el interceptor');
    return next.handle(req).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {

    console.log('Sucedio un error');
    console.log('Registrado en el log file');

    return throwError('error personalizado');
  }
}


