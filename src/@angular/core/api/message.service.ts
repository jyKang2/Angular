import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  private messages: string[] = [];

  public add(message: string) {
    this.messages.push(message);
  }

  public clear() {
    this.messages = [];
  }

  constructor() { }

}
