import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../service/channel.service';

const url = "http://localhost:8080/channel/post";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    createdAt: new FormControl(),
    updatedAt: new FormControl()
  });

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  public submitChannel(): void {
    this.channelService.createChannel(url, this.form.value);
    this.router.navigate(['/channel/list']);
  }


}
