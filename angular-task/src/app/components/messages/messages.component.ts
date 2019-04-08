import { Component, OnInit, DoCheck } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, DoCheck {

  public messageStatus: boolean;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.messageStatus = this.messageService.messageStatus;
  }

}

