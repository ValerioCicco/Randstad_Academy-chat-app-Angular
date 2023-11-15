import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { LoadersInterceptor } from './interceptor/loaders.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadersInterceptor,
    multi: true,
  }],
  exports: [
    NavbarComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
