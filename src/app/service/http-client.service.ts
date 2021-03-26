import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class StudentAbsense {
  constructor(
    public fullName:string,
	public className:string,
	public gradeName:string,
	public isPresent:boolean,
	public dateTime:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  
  public deleteStudentAbsense(absense) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/delete" + "/", absense);
  }
  
  public createStudentAbsense(absense) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/add"  + "/", absense);
  }
  
  public getStudentsAbsensesByName(fullName) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/search/fullname"  + "/", fullName);
  }
  
  public getStudentsAbsensesByClass(className) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/search/classname"  + "/", className);
  }
  
  public getStudentsAbsensesByGrade(gradeName) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/search/gradename"  + "/", gradeName);
  }
  
  public getStudentAbsensesByDate(absense) {
	  return this.httpClient.post<StudentAbsense>("http://localhost:8080/studentsabsenses/search/datetime"  + "/", absense.dateTime);
  }
  
  getStudentsAbsenses() {
	  return this.httpClient.get<StudentAbsense[]>("http://localhost:8080/studentsabsenses");//rest service call
  }
  
  /**getHeaders() {
	  let username = 'sibusiso'
	  let password = 'password'

	  let basicString = 'Basic ' + window.btoa(username + ':' + password)
	  return basicString;
  }*/
}
