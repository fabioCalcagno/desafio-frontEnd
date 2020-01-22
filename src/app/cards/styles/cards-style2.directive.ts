import { Directive, ElementRef,Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardsStyle2]'
})
export class CardsStyle2Directive implements OnInit{
 

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }


              @Input() clicked:boolean;
              
              @HostListener('click')
              toggleMenuBar(){
                if(this.clicked){
                  this.el.nativeElement.querySelector('.links-navigation').style.display = "none";
                  this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "none";
                  this.clicked = false;
                }
                else {
                  this.renderer.setStyle(this.el.nativeElement, "paddingTop", "5%")     
                  this.el.nativeElement.querySelector('.links-navigation').style.display = "flex";
                  this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "flex";
                  
                  this.clicked = true
              } 
            }

          


  ngOnInit(): void {
      

    
  }

}
