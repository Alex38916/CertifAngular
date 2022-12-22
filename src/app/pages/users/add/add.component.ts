import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

const url = "http://localhost:8080/user/post";
//const url = "http://localhost:3000/users";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public form = new FormGroup({
    lastname: new FormControl(),
    firstname: new FormControl(),
    pseudo: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  public submitUser(): void {
    // console.log(this.form.value);
    this.userService.createUser(url, this.form.value);
    this.router.navigate(['/user/list']);
  }

}
