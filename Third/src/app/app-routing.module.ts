import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { BlogComponent } from "./blog/blog.component";
import { DocsComponent } from "./docs/docs.component";
import { FeaturesComponent } from "./features/features.component";
import { ResourcesComponent } from "./resources/resources.component"; 
import { BlogPostComponent } from "./blog-post/blog-post.component"; 

const routes: Routes = [
  {
    path: " ", component : AppComponent, 
  },
  {
    path: "blog", 
    component : BlogComponent    
  },
  {
    path: "blog/:id", component : BlogPostComponent
  },
  {
    path: "docs", component : DocsComponent
  },
  {
    path: "features", component : FeaturesComponent
  },
  {
    path: "resources", component : ResourcesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
