import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { listaAlunosCadastrados } from '../listaAlunos';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  listaAlunos: Aluno[];
  @Input() show : Boolean;

  constructor() {  }

  ngOnInit(): void {
    this.listaAlunos = listaAlunosCadastrados;
    console.log(this.listaAlunos);
  }

  alunoSelecionado: Aluno;
  exibir(aluno: Aluno): void{
    this.alunoSelecionado = aluno;
    console.log(aluno.nome)
  }
}
