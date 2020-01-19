import { Directive, ElementRef,Renderer, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardsStyle2]'
})
export class CardsStyle2Directive implements OnInit{
 

  constructor(private el: ElementRef,
              private renderer: Renderer) { }


              @Input() styleColor:string;
              
              

  ngOnInit(): void {
      
    
    this.renderer.setElementClass(this.el.nativeElement, 'margin-bottom-style', true); 
    
  }

  

}
