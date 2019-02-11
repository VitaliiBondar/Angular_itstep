import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postArray: [{
    id:number,
    title: string,
    post: string,
    author: string,
  }] = [{ id:1,title: "TestPost", post: "logfdgfd", author: "anonimous" }];

  title = "";
  post = "";
  author = "";
  addPost() {
    let obj;
    if (this.title !== "" && this.post !== "" && this.author !== "") {
      obj = { id:new Date().getTime(),title: this.title, post: this.post, author: this.author };
      this.postArray.push(obj); 
      this.clear();
    }
  }
  clear() {
    this.title = "";
    this.post = "";
    this.author = "";
  }

}
