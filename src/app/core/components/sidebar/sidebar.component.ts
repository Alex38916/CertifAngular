import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/pages/service/channel.service';

const url = "http://localhost:8080/channel/list";

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public channels: any[] = [];

  constructor(
    private channelService: ChannelService
  ){}

  ngOnInit(): void {
    this.channelService.getChannelsFromDB(url);
    this.channelService.getChannels.subscribe(data => this.channels = data);
  }

}
