import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{
  @Input() nome: string = 'Arthur'
  constructor(){
    console.log(`Construtor ${this.nome}`)
  }
  ngOnChanges(): void {
    console.log(`OnChange ${this.nome}`)
  }
  ngOnInit(): void {
    //this.nome = `Olá ${this.nome}`
   console.log(`OnInit ${this.nome}`)
   
  }
}
