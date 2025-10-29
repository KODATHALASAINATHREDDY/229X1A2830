import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
StudentsService
@Component({
selector: 'app-student',
templateUrl: './student.component.html',
styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
stulist:any[]=[];
constructor(private studentService:StudentsService)
{
}
ngOnInit(): void {
this.stulist=this.studentService.getAllStudents();
}
addStudent(stuname:string,activity:string)
{
this.studentService.addStudent(stuname,activity);
alert("Student added Successfully");

}
}