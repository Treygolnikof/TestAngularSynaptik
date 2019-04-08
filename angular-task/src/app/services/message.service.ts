import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];
  public messageStatus: boolean;

  public add(message: string, messageStatus: boolean): void {
    this.messages.unshift(message);
    this.messageStatus = messageStatus;
  }

  public clear() {
    this.messages = [];
  }

  constructor() { }
}
