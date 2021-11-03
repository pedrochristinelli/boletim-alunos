import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ExibeAlunoComponent } from './exibe-aluno/exibe-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';

const routes: Routes = [
  { path: 'listar', component: ListaAlunoComponent},
  { path: 'cadastro', component: CadastroAlunoComponent},
  { path: 'listar/aluno/:id/:acao', component: ExibeAlunoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
