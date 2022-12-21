import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../service/channel.service';

const url = "http://localhost:8080/channel/put";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      name: [],
      description: [],
      createdAt: [],
      updatedAt: []
    })
  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.channelService.getChannelById(url, this.id);
    this.channelService.getChannel.subscribe(data => {

       this.form.patchValue({
        name: data.name,
        description: data.description,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
       });

    });
  }

  public updateChannel(): void {
    this.channelService.editChannel(url, this.id, this.form.value);
    // this.router.navigate(['/user/find', this.id]);
    this.router.navigate(['/channel/list']);
  }

}
