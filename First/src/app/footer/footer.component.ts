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
      this.rocketStatus = Math.random() > 0.5 ? "success" : "fail";
    },1500);
  }
  go(){
    this.msg="rocket start";
    // this.btnStatus=!this.btnStatus;    
    this.btnPressed =!this.btnPressed;
    this.rocketStatus=Math.random() > 0.5 ? "success" : "fail";
  }
  getColor(){
    return this.rocketStatus === "success" ? "green" : "red";
  }
  getClass(){
    return this.rocketStatus === "success" ? "success" : "fail";
  }
  getTime(){
    this.dTime = new Date().getHours();
    // console.log(this.dTime);
    // console.log(typeof this.dTime);
    return this.dTime < 13 ? "green" : "red";
  }

  persons=['jack','john','bill'];
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
  rocketStatus = "";
  btnPressed = true;
  dTime;

}
