import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

const url = "http://localhost:8080/message/post";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public form = new FormGroup({
    content: new FormControl(),
    // createdAt: new FormControl(new Date),
    // updatedAt: new FormControl(),
    // user_id: new FormControl(),
    // channel_id: new FormControl()
  });

  constructor(
    private messageService: MessageService,
    private router: Router
  ){}

  public submitMessage(): void {
    let userId = 4;
    let channelId = 3;
    this.messageService.createMessage(url, this.form.value, userId, channelId);
    setTimeout(()=>{
      this.router.navigate(['/message/list']);
    },1000);
    
  }

}
