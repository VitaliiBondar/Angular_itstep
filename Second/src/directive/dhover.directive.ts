import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDhover]'
})

export class DhoverDirective implements OnInit{

  // constructor(private Element:ElementRef) { 
  //   console.log(Element);
  //   this.Element.nativeElement.style.backgroundColor='blue';
  // }
  constructor(private Element:ElementRef, private MyRenderer: Renderer2){
  }

ngOnInit(){
  this.MyRenderer.setStyle(this.Element.nativeElement, "background-color",this.dfb);
  this.MyRenderer.addClass(this.Element.nativeElement, "valera");
}
@HostListener("mouseenter") mouseEnter(){
  this.MyRenderer.setStyle(this.Element.nativeElement, "background-color",this.hoverColor);
  this.MyRenderer.addClass(this.Element.nativeElement, "valera2");
}
@HostListener("mouseleave") mouseLeave(){
  this.MyRenderer.setStyle(this.Element.nativeElement, "background-color","blue");
  this.MyRenderer.removeClass(this.Element.nativeElement, "valera");
}
@Input()hoverColor:string='pink';
@Input()dfb:string='gold';
}
