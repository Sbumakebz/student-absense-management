import { Component, OnInit } from '@angular/core';
import { HttpClientService , StudentAbsense } from '../service/http-client.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	
	studentsabsenses:any[];
	searchstudentabsense: StudentAbsense = new StudentAbsense("", "", "", false, "");

	constructor(private httpClientService:HttpClientService) { }

	ngOnInit(): void {
		this.httpClientService.getStudentsAbsenses().subscribe(
		response => this.handleSuccessfulResponse(response),);
	}
	
	handleSuccessfulResponse(response)
	{
		this.studentsabsenses = response;
	}
	
	deleteStudentAbsense(student: StudentAbsense): void {
		this.httpClientService.deleteStudentAbsense(student).subscribe( data => {
			this.studentsabsenses = this.studentsabsenses.filter(s => s !== student.fullName);});
	}
	
	get totalRows(): number {
		return this.studentsabsenses.length;
	}
	
	get presentRecords(): number {
		return this.studentsabsenses.filter(s => s.isPresent).length;
	}
	
	get absentRecords(): number {
		return this.studentsabsenses.filter(i => !i.isPresent).length;
	}
	
	getStudentsAbsensesByName(): void {
		this.httpClientService.getStudentsAbsensesByName(this.searchstudentabsense.fullName).subscribe( data => {
			this.studentsabsenses = this.studentsabsenses.filter(s => s.fullName !== this.searchstudentabsense.fullName);});
	}
	
	getStudentsAbsensesByClass(): void {
		this.httpClientService.getStudentsAbsensesByClass(this.searchstudentabsense.className).subscribe( data => {
			this.studentsabsenses = this.studentsabsenses.filter(s => s.className !== this.searchstudentabsense.className);});
	}
	
	getStudentsAbsensesByGrade(): void {
		this.httpClientService.getStudentsAbsensesByGrade(this.searchstudentabsense.gradeName).subscribe( data => {
			this.studentsabsenses = this.studentsabsenses.filter(s => s.gradeName !== this.searchstudentabsense.gradeName);});
	}
}
