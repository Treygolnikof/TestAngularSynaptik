import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];

  public add(message: string): void {
    this.messages.unshift(message);
  }

  public clear() {
    this.messages = [];
  }

  constructor() { }
}
