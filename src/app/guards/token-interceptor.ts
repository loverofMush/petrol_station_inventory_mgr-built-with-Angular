import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
 

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(
        private inj: Injector
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // add authorization header with jwt token if available
        const auth = this.inj.get(TokenService)
        const authToken = auth.get();
        const started = Date.now();
        let ok: string;
    
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
    
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`  
            }
        });
        console.log(request)
        return next.handle(request)
        .pipe(
            tap(
              // Succeeds when there is a response; ignore other events
              event => ok = event instanceof HttpResponse ? 'succeeded' : '',
              // Operation failed; error is an HttpErrorResponse
              error => ok = 'failed'
            ),
            // Log when response observable either completes or errors
            finalize(() => {
              const elapsed = Date.now() - started;
              const msg = `${request.method} "${request.urlWithParams}"
                 ${ok} in ${elapsed} ms.`;
              console.log(msg);
            })
        )
    }
}