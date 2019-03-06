import { Component, OnInit, Input } from '@angular/core';
import  PostServise  from '../post.servise';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [PostServise]
})
export class BlogComponent implements OnInit {

  constructor(private servise:PostServise) { }

  ngOnInit() {
    this.items=this.servise.items;
  }
  items=[];
  id="";
  title = "";
  post = "";
  author = "";
  createObj(){
    let obj;
    obj = { id:this.id,title: this.title, post: this.post, author: this.author };
    this.servise.addPost(obj); 
  }
}
