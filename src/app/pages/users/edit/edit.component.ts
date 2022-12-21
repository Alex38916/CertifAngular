import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

const url = "http://localhost:8080/user/post";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public user: any;

  public form = new FormGroup({
    lastname: new FormControl(),
    firstname: new FormControl(),
    pseudo: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.user = this.userService.getuserById(url, this.id);

    this.userService.getUser.subscribe(data => {
      this.user = data;
      this.form.controls.lastname = this.user.lastname;
      this.form.controls.firstname = this.user.firstname;
      this.form.controls.pseudo = this.user.pseudo;
      this.form.controls.email = this.user.email;
      this.form.controls.password = this.user.password;
    });
  }

  public updateUser(): void {
    this.userService.editUser(url, this.id, this.form.value);
  }

}
