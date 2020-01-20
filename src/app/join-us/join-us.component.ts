import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  descricao1:string;
  ngOnInit() {
    this.descricao1=`A nova área do cliente`
  }

}
