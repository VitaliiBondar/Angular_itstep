import { Component, OnInit } from '@angular/core';
import { RequestServise } from './request.servise';
import { DbServise } from './db.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent implements OnInit{
  title = 'Third';
  constructor(private request : RequestServise, public dbservise : DbServise){
  }
  arr=[{
    name:'John',
    surname:'Johnson'
  }];
  ngOnInit(){
    //   this.request.getDate().subscribe((response:any)=>{
    //   console.log(response);
    //   this.arr=response;
    //   console.log(this.arr);
    // })
  }
  onSaveDb(){
    this.request.saveDate(this.arr).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    )
    let Arra=[];
    // console.log(this.request.getData());
    this.request.getData().subscribe(
      (response)=>console.log(JSON.stringify(response),'dsdsds',Object.keys( response )[0]),
    //   Arra.push(response);
    // console.log(Arra[0]);},
      (error)=>console.log(error)
    )
  }
}
