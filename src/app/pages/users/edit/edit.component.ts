import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

const url = "http://localhost:8080/user/put";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      firstname: [],
      lastname: [],
      pseudo: [],
      email: [],
      password: []
    })
  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getuserById(url, this.id);
    this.userService.getUser.subscribe(data => {

       this.form.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        pseudo: data.pseudo,
        email: data.email,
        password: data.password
       });

    });
  }

  public updateUser(): void {
    this.userService.editUser(url, this.id, this.form.value);
    // this.router.navigate(['/user/find', this.id]);
    this.router.navigate(['/user/list']);
  }

}
