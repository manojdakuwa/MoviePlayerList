import {Injectable} from '@angular/core';
import { HttpInterceptor ,HttpRequest,HttpHandler,HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AppInterceptorService implements HttpInterceptor{
    constructor () {}
    handleError(error:HttpErrorResponse){
        console.log('error occured !')
        return throwError(error)
    }
    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
        const headers=new HttpHeaders({
          'Source':'Web'
        });
        const clone=req.clone({
            headers:headers
        })
       return next.handle(clone)
       .pipe
       (
           //catchError(this.handleError)
           retry(1),
           catchError((error: HttpErrorResponse) => {
             let errorMessage = '';
             if (error.error instanceof ErrorEvent) {
               // client-side error
               errorMessage = `Error: ${error.error.message}`;
             } else {
               // server-side error
               errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
             }
             return throwError(errorMessage);
           })
           
        )
    }


}