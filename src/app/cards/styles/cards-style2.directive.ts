import { Directive, ElementRef,Renderer2, OnInit, Input, HostListener, OnChanges, DoCheck } from '@angular/core';


@Directive({
  selector: '[appCardsStyle2]'
})
export class CardsStyle2Directive{
  

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }


              @Input() largura:any;

              private clicked:boolean;
              
              @HostListener('click')
              toggleMenuBar(){
                    this.largura = window.innerWidth
                    console.log(this.largura)
                    
               if(this.largura <= 1000){

                    if(this.clicked){
                      this.el.nativeElement.querySelector('.links-navigation').style.display = "none";
                      this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "none";
                      this.el.nativeElement.querySelector('#menu-responsivo').style.transform = "rotate(0deg)"
                      this.clicked = false;
                    }
                    else {
                      this.renderer.setStyle(this.el.nativeElement, "paddingTop", "5%")
                      this.el.nativeElement.querySelector('.links-navigation').style.display = "flex";
                      this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "flex";
                      this.el.nativeElement.querySelector('#menu-responsivo').style.transform = "rotate(180deg)"
                      
                      this.clicked = true
                  } 
            
               }
               else{
                this.el.nativeElement.querySelector('.links-navigation').style.display = "flex";
                this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "flex";
               } 

               
             
            }

       /*      @HostListener('window:resize', ['$event'])
            onResize(event) {
             let a =  event.target.innerWidth;
             console.log(a)
             if(a > 1000){
              this.el.nativeElement.querySelector('.links-navigation').style.display = "flex";
              this.el.nativeElement.querySelector('.enter-or-buy-nav').style.display = "flex";
             }
            }
 */
        


  ngOnInit(): void {
   
    
  }

}
