import { Component, OnInit } from '@angular/core';
import { HttpClientService, StudentAbsense } from '../service/http-client.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
	
	studentAbsense: StudentAbsense = new StudentAbsense("", "", "", false, "");
	
	constructor(private httpClientService: HttpClientService) { }

	ngOnInit(): void { }
	
	createStudentAbsense(): void {
		alert(this.studentAbsense.dateTime);
		this.httpClientService.createStudentAbsense(this.studentAbsense).subscribe( data => {
          alert("Student created successfully.");
        });

  };
}
