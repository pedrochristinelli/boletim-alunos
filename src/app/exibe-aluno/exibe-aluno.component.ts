import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-exibe-aluno',
  templateUrl: './exibe-aluno.component.html',
  styleUrls: ['./exibe-aluno.component.css']
})
export class ExibeAlunoComponent implements OnInit {

  id: string;
  acao: string;
  aluno : Aluno;

  constructor(private service : AlunosService, private route: ActivatedRoute, private router: Router ) {
    this.id = route.snapshot.params.id;
    this.acao = route.snapshot.params.acao;
    this.aluno = this.service.getAlunoById(this.id);

    if(typeof this.aluno === "undefined"){
      this.router.navigate(['/listar'])
    }
  }

  ngOnInit(): void {
    this.aluno = this.service.getAlunoById(this.id);
  }

  isView(){
    return this.acao == 'view'
  }

  isAlunoFotoNullOrEmpty() : Boolean{
    return !(typeof this.aluno.fotoUrl === "undefined" || this.aluno.fotoUrl == null || (!this.aluno.fotoUrl || /^\s*$/.test(this.aluno.fotoUrl)))
  }
}
