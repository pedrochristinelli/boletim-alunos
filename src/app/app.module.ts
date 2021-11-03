import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { ExibeAlunoComponent } from './exibe-aluno/exibe-aluno.component';
import { MenuComponent } from './menu/menu.component';
import { ToastMessagesComponent } from './toast-messages/toast-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    ListaAlunoComponent,
    ExibeAlunoComponent,
    MenuComponent,
    ToastMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
