import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../service/channel.service';

const url = "http://localhost:8080/channel/find";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public channel?: any;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.channelService.getChannelById(url, this.id);
    this.channelService.getChannel.subscribe(data => this.channel = data);
  }

}
