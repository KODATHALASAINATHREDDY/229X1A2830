import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class StudentsService {
stulist:any[]=[];
addStudent(stuname:string,activity:string)
{
this.stulist.push({name:stuname,acty:activity});
}
getAllStudents()
{
return this.stulist;
}
constructor(private http:HttpClient) { }
product():Observable<any>
{
return this.http.get("https://jsonplaceholder.typicode.com/users");
}
}