import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appServiceDirective]',
  exportAs: 'acessoADiretiva'
})
export class ServiceDirective {

  @Input() cor = "gray";

  @HostBinding('style.fontSize') myAction: string="";

   teste(){
    console.log("mouse chegou", this.cor);
  }

  @HostListener('mouseover') teste1(){
    this.myAction = "30px";
    //console.log("mouse chegou", this.cor);
  }

 @HostListener('mouseleave') teste2(){
  this.myAction="";
    //console.log("mouse saiu");
  }
  constructor() { }

}
