import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(
    private userService: UserService
  ){}

  public deleteUser(url: string, id: number): void {
    this.userService.deleteUser(url, id);
  }

}
