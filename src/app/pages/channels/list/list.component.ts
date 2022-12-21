import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../service/channel.service';

const url = "http://localhost:8080/channel/list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public pageTitle: string = "Canaux de discussion";
  public channels: any[] = [];

  constructor(
    private channelService: ChannelService
  ){}

  ngOnInit(): void {
    this.channelService.getChannelsFromDB(url);
    this.channelService.getChannels.subscribe(data => this.channels = data);
  }
}
