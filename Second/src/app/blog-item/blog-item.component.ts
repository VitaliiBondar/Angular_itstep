import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  post:[{
    title:string,
    post:string,
    author:string    
  }]
}
