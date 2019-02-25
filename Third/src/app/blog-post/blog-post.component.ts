import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(window);
  }
  @Input()
  post:[{
    id:number,
    title:string,    
    author:string,
    post:string,    
  }]

  // getId():number{
  //   console.log(this.post);
  //   return this.post.id;
  // }
 
}
