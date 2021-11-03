import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { listaAlunosCadastrados } from '../listaAlunos';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  listaAlunos: Aluno[];

  constructor(private service : AlunosService ) { }

  ngOnInit(): void {
    this.listaAlunos = this.service.getAlunos();
  }

  removeAluno(aluno: any){
    this.service.removeAlunoById(aluno);
    this.listaAlunos = this.service.getAlunos();
  }

  alunoSelecionado: Aluno;
  exibir(aluno: Aluno): void{
    this.alunoSelecionado = aluno;
  }
}
