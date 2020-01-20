import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { 
   
  }

   imagens=['../../assets/imagens/banner/img1.png', 
           '../../assets/imagens/banner/img2.png',
           '../../assets/imagens/banner/img3.png'];

   imagem:any;    
   i:any=0; 
   clicked:boolean = false;




changeImage(direction){
  this.clicked = true;
  console.log(this.i)
 
  if(direction=='left' && this.i > 0){
    this.i--;
    this.imagem = this.imagens[this.i]
  }
  if(direction!='left' && this.i < this.imagens.length -1){
    this.i++;
    this.imagem = this.imagens[this.i]
  } 
      else {
        this.i +=0
        this.imagem = this.imagens[this.i];
      }
    }

 

  ngOnInit() {
    console.log(this.imagens.length)
    this.imagem = this.imagens[0];
  
   


   
  }
  

}
