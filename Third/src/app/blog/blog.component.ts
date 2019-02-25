import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    { 
      id:1,
      title:"Vue.js",
      author:"John",
      post:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut."
    },
    { 
      id:2,
      title:"React",
      author:"Tom",
      post:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut."
    },
  ]
  

}
