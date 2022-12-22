import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    createdAt: new FormControl(),
    updatedAt: new FormControl()
  });

  constructor(
    private messageService: MessageService,
    private router: Router
  ){}

  public submitMessage(): void {
    this.messageService.createMessage(url, this.form.value);
    this.router.navigate(['/message/list']);
  }

}
