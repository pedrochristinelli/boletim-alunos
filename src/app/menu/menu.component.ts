import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  classCadastro: String = "active";
  classListar: String = "";

  listaAtiva: Boolean = false;
  cadastroAtivo: Boolean = true;
  
  ngOnInit(): void {
  }

  exibirCadastro(): void{
    this.listaAtiva = false;
    this.cadastroAtivo = true;
    this.classCadastro = "active";
    this.classListar = "";
  }

  exibirLista(): void{
    this.listaAtiva = true;
    this.cadastroAtivo = false;
    this.classCadastro = ""
    this.classListar = "active";
  }

  isSubmit(): void{
    this.exibirLista()
  }

}
