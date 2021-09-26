import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-exibe-aluno',
  templateUrl: './exibe-aluno.component.html',
  styleUrls: ['./exibe-aluno.component.css']
})
export class ExibeAlunoComponent implements OnInit {

  constructor() { }

  show : Boolean = false;
  @Input() aluno : Aluno;

  ngOnInit(): void {
  }

  isAlunoFotoNullOrEmpty() : Boolean{
    return !(typeof this.aluno.fotoUrl === "undefined" || this.aluno.fotoUrl == null || (!this.aluno.fotoUrl || /^\s*$/.test(this.aluno.fotoUrl)))
  }

  viewAluno() : void{
    this.show = !this.show;
    console.log(this.aluno)
  }

}
