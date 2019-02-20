import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'React';
  active = 1;
  arr=[1,2,3,4,5,7,8,9];
  onClick(item:number){
    console.log(item);
    this.active=item;
  }
}
