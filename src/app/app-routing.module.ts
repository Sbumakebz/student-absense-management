import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SecurityService } from './service/security.service';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [{ path: '', component: StudentComponent,canActivate:[SecurityService] },
						{ path: 'addstudent', component: AddStudentComponent,canActivate:[SecurityService] }, 
						{ path: 'login', component: LoginComponent },
						{ path: 'logout', component: LogoutComponent,canActivate:[SecurityService] },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
