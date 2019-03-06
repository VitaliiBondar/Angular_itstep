import { Component, OnInit } from '@angular/core';
import { RequestServise } from './request.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent implements OnInit{
  title = 'Third';
  constructor(public request : RequestServise){
  }
  arr={};
  ngOnInit(){
      this.request.getDate().subscribe((response:any)=>{
      console.log(response);
      this.arr=response;
      console.log(this.arr);
    })
  }
}
