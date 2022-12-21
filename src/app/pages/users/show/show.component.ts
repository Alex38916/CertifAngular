import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

const url = "http://localhost:8080/user/find";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public user?: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getuserById(url, this.id);
    this.userService.getUser.subscribe(data => this.user = data);
  }

}
