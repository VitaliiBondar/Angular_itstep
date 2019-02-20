import { Component, OnInit, Input, DoCheck, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor() { 
    console.log('constructor working');
  }
  ngDoCheck(){
    console.log("ngDoCheck working");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }
  ngAfterContentInit(){
    console.log('AfterContentInit working');
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked working');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit working');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked working');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy working');
  }

  ngOnInit() {
    console.log('ngInit working');
  }
  @Input()

  post:[{
    title:string,
    post:string,
    author:string    
  }]
}
