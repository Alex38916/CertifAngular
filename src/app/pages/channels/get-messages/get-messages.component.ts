import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../service/channel.service';

const url = "http://localhost:8080/channel/listMessages";

@Component({
  selector: 'app-get-messages',
  templateUrl: './get-messages.component.html',
  styleUrls: ['./get-messages.component.css']
})
export class GetMessagesComponent implements OnInit{

  public idChannel?: number;
  public channel?: any;
  public messages?: any;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute
  ){}

  
  ngOnInit(): void {
    //On récupère l'id du Channel
    this.idChannel = Number(this.route.snapshot.paramMap.get('id'));



    this.channelService.getMessageByChannel(url, this.idChannel);

    this.channelService.getMessages().subscribe((data:any) => this.messages = data);
  }


}
