import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Teacher{
  constructor(public status:string,) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  
  logOut() {
	  sessionStorage.removeItem('username')
  }
  
  authenticate(username, password) {
	  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
	  return this.httpClient.get<Teacher>('http://localhost:8080/students/validateLogin', {headers}).pipe(
											  map(
												  teacherData => {
													  sessionStorage.setItem('username',username);
													  let authorisationTokens = 'Basic ' + btoa(username + ':' + password);
													  sessionStorage.setItem('basicauth', authorisationTokens);
													  return teacherData;
												  }
												 )
											  );
  }
  
  isUserLoggedIn() {
	  let teacher = sessionStorage.getItem('username')
	  console.log(!(teacher === null))
	  return !(teacher === null)
  }
}
