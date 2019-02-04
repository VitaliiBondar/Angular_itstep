import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello React!!!';
  name = 'Bill';
  name2 = 'Bill';
  showModel(name){
    console.log('okk');
    this.name2= this.name;
  }  
}
