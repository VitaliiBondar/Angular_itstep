import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
    setTimeout(()=>{
      this.btnStatus=!this.btnStatus;
      this.msg="ready";
    },1500);
  }
  go(){
    this.msg="rocket start";
    this.btnStatus=!this.btnStatus;
  }

  restart(event:Event){
    this.rocketName = (<HTMLInputElement>event.target).value;
  }
  takeData(){
    this.msg2=this.rocketName;
  }
 
  ngOnInit() {
  }
  name:string='footer';
  siteName='test.com';
  online:number=48;
  getSiteName():string{
    return this.siteName;
  }
  btnStatus = false;
  className = "btn btn-primary";
  rocketName="";
  msg = "not ready";
  msg2="";

}
