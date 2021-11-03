import { Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import { Aluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  @Input() inputAluno: Aluno;

  constructor(private service : AlunosService, private router: Router) { 
  }

  cadastroAluno : Aluno;
  nomeError: Boolean = false
  idadeError: Boolean = false

  salvaAluno(){
    if(typeof this.cadastroAluno.nome === "undefined" || this.cadastroAluno.nome == null || (/^\s*$/.test(this.cadastroAluno.nome))){
      this.nomeError = true;
      this.service.failMessage("Nome do aluno não deve estar vazio.")
      if(typeof this.cadastroAluno.nome === "undefined" || this.cadastroAluno.idade < 18){
        this.idadeError = true;
        this.service.failMessage("Aluno deve ser maior que 18 anos.")
      } else {
        this.idadeError = false;
      }
    } else if(this.cadastroAluno.idade < 18){
      this.nomeError = false;
      this.idadeError = true;
      this.service.failMessage("Aluno deve ser maior que 18 anos.")
    } else{
      this.idadeError = false;
      this.nomeError = false;

      if(this.cadastroAluno.id){
        this.service.updateAluno(this.cadastroAluno);
      } else {
        let novoAluno = {id:uuid.v4(), nome: this.cadastroAluno.nome, idade:this.cadastroAluno.idade, fotoUrl:this.cadastroAluno.fotoUrl};
        this.cadastroAluno = {id:"", nome:"", idade:0, fotoUrl:""};
        this.service.addAluno(novoAluno);
        this.router.navigate(['/listar'])
      }
    }
  }

  ngOnInit(): void {
    if(typeof this.inputAluno === "undefined"){
      this.cadastroAluno = {id:"", nome:"", idade:0, fotoUrl:""}
    } else{
      this.cadastroAluno = {id:this.inputAluno.id, nome:this.inputAluno.nome, idade:this.inputAluno.idade, fotoUrl:this.inputAluno.fotoUrl}
    }
  }
}
 