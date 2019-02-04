import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeadComponent } from './head/head.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    ListComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
