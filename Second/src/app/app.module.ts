import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { DhoverDirective } from '../directive/dhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogItemComponent,
    DhoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
