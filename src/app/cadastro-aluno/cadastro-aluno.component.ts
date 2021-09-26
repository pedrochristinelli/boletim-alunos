import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aluno } from '../aluno.model';
import { listaAlunosCadastrados } from '../listaAlunos';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  @Input() cadastroAluno : Aluno = {nome:"", idade:0, fotoUrl:""};
  @Input() show : Boolean;
  @Output() notify = new EventEmitter<string>();

  listaAlunos : Aluno[] = listaAlunosCadastrados;
  nomeError: Boolean = false
  idadeError: Boolean = false

  constructor() { }

  salvaAluno(): void{
    if(typeof this.cadastroAluno.nome === "undefined" || this.cadastroAluno.nome == null || (!this.cadastroAluno.nome || /^\s*$/.test(this.cadastroAluno.nome))){
      this.nomeError = true;
      if(typeof this.cadastroAluno.nome === "undefined" || this.cadastroAluno.idade < 18){
        this.idadeError = true;
      } else {
        this.idadeError = false;
      }
    } else if(typeof this.cadastroAluno.nome === "undefined" || this.cadastroAluno.idade < 18){
      this.nomeError = false;
      this.idadeError = true;
    } else{
      this.idadeError = false;
      this.nomeError = false;

      let novoAluno = {nome: this.cadastroAluno.nome, idade:this.cadastroAluno.idade, fotoUrl:this.cadastroAluno.fotoUrl}
      this.cadastroAluno = {nome:"", idade:0, fotoUrl:""};
      this.notify.emit("Mudar de Pagina");
      this.listaAlunos.push(novoAluno);
    }
  }

  ngOnInit(): void {
  }
}
 