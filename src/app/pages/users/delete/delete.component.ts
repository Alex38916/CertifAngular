import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

const url = "http://localhost:8080/user/delete";

@Component({
  selector: 'user-delete',
  templateUrl: './delete.component.html',
  //template: `<button (click)="deleteUser()">Supprimer</button>`,
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public id?: number;
  public user?: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getuserById(url, this.id);
    this.userService.getUser.subscribe(data => this.user = data);
  }


  // deleteUser() {
  //   if(confirm('Etes-vous sûr de vouloire supprimer cet utilisateur?')){
      
  //       this.userService.deleteUser(url, this.id);
  //       this.router.navigate(['user/list']);
  //   }
  //   else{
  //   this.router.navigate(['user/find', this.id]);
  //   }
  // }

  proceedToDelete()
  {
    this.userService.deleteUser(url, this.id);
    this.router.navigate(['/user/list']);
  }

}
