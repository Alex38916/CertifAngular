import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

const url = "http://localhost:8080/message/list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public pageTitle: string = "Messages";
  public messages: any[] = [];

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.messageService.getMessagesFromDB(url);
    this.messageService.getMessages.subscribe(data => this.messages = data);
  }

}
