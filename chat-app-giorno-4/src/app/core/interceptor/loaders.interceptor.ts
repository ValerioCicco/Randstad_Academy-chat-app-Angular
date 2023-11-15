import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoadersInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();

    return next.handle(request).pipe(
      finalize(
        () => setTimeout(()=> this.loaderService.hide(), 2000)
        ),
    ); //finalize viene chiamato in caso di response success o error
  }
}
