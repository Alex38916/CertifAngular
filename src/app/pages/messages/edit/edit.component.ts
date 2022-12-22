import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

const url = "http://localhost:8080/message/post";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ){
    this.form = this.fb.group({
      content: [],
      createdAt: [],
      updatedAt: []
    })
  }

  ngOnInit(): void {
   
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.messageService.getMessageById(url, this.id);
    this.messageService.getMessage.subscribe(data => {
      this.form.patchValue({
        content: data.content,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      });
    });
  }

  public submitMessage(): void {
    this.messageService.editMessage(url, this.id, this.form.value);
    this.router.navigate(['/message/list']);
  }

}
