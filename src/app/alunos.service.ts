import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { listaAlunosCadastrados } from './listaAlunos';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  listaAlunos : Aluno[] = listaAlunosCadastrados

  constructor(private toast: ToastService) { }

  getAlunos() : Aluno[] {
    return this.listaAlunos;
  }

  getAlunoById(id : string){
    return this.listaAlunos.find(x => x.id == id);
  }
  
  removeAlunoById(id: string){
    try {
      let aluno  = this.getAlunoById(id);
      this.listaAlunos = this.listaAlunos.filter(function(e) { return e !== aluno });
      this.successMessage("Aluno Removido com sucesso!");
    } catch (e){
      this.failMessage("Erro ao remover aluno");
    }
  }

  addAluno(aluno : Aluno) : boolean{
    try {
      this.listaAlunos.push(aluno);
      this.successMessage("Aluno adicionado com sucesso!");
      return true;
    } catch (e){
      this.failMessage("Erro ao adicionar aluno");
      return false;
    }
  }

  updateAluno(aluno : Aluno){
    try {
      let index = this.listaAlunos.indexOf(this.getAlunoById(aluno.id));
      this.listaAlunos[index] = aluno;
      this.successMessage("Edição de aluno salva com sucesso!");
      return true;
    } catch (e){
      this.failMessage("Erro ao salvar edição de aluno");
      return false;
    }
  }

  infoMessage(message: string) {
    this.toast.sendMessage(message, 'info')
  }

  successMessage(message: string) {
    this.toast.sendMessage(message, 'success')
  }

  failMessage(message: string) {
    this.toast.sendMessage(message, 'danger')
  }
}
