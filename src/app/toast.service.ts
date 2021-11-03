import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { listaMensagens } from './listaMensagens';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  listaMensagem : Message[] = listaMensagens
  constructor() { }

  getMessages(): Message[] {
    return this.listaMensagem
  }

  getMessageById(id : string){
    return this.listaMensagem.find(x => x.id == id);
  }

  sendMessage(content, style) {
    const message = new Message(content, style)
    this.listaMensagem.push(message)
  }

  dismissMessage(id: string) {
    let message  = this.getMessageById(id);
    this.listaMensagem = this.listaMensagem.filter(function(e) { return e !== message });
  }

}
