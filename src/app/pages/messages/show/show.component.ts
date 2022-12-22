import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../service/message.service';

const url = "http://localhost:8080/message/find";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public message?: any;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.messageService.getMessageById(url, this.id);
    this.messageService.getMessage.subscribe(data => this.message = data);
  }

}
