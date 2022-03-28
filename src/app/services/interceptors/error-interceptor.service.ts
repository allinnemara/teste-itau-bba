import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(
    private snackBar: MatSnackBar
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';

          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          }else {
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }

          this.snackBar.open(`Ops! Algo deu errado... Atualize a página e tente novamente mais tarde.`, '', {
            duration: 5000,
            panelClass: 'bgError',
            horizontalPosition: 'right'
          });

          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )

  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptorService,
  multi: true
}
