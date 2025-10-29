import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'fetchnew';
userList:any[] = [];
constructor(private fetchService: FetchdataService) {}
ngOnInit(): void {
this.fetchService.getUser().subscribe(user => this.userList = user);
}
}
