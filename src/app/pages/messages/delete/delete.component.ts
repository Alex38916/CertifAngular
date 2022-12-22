import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

const url = "http://localhost:8080/message/delete";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  public id?: number;
  public message?: any;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.messageService.getMessageById(url, this.id);
    this.messageService.getMessage.subscribe(data => this.message = data);
  }

  proceedToDelete() {
    this.messageService.deleteMessage(url, this.id);
    this.router.navigate(['/message/list']);
  }

}
