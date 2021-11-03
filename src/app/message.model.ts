import * as uuid from 'uuid';

export class Message {
    id: string;
    content: string;
    style: string;
  
    constructor(content, style?) {
      this.id = uuid.v4()
      this.content = content
      this.style = style || 'info'
    }
  
  }