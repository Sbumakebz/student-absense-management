import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthorisationHttpInterceptorService } from './service/authorisation-http-interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthorisationHttpInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
