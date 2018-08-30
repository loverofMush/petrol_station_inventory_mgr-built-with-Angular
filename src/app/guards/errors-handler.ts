import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
        private injector: Injector,
    ) { }
    
    handleError(error: Error | HttpErrorResponse) {
        const notify = this.injector.get(SnotifyService);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
              // Handle offline error
              return notify.info('No Internet Connection');
            } else if (error.status === 401 || error.status === 403) {
                router.navigate(['/user-login']);
                // Handle Http Error (error.status === 403, 404...)
              return notify.info(`${error.status} - ${error.message}`); 
            }
         } else {
           // Handle Client Error (Angular Error, ReferenceError...)     
         }
        // Log the error anyway
        console.error('It happens: ', error);
    }
}
