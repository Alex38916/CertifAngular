import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Propriétés Observables
  private _users = new BehaviorSubject<any>([]);
  private _user = new BehaviorSubject<any>({});
  

  constructor(
    private httpClient: HttpClient
  ) { }

  //CRUD
  //GET  List
    public getUsersFromDB(url: string): void {
      this.httpClient.get(url).subscribe(response => this._users.next(response));
    }

  //GET By Id
  public getBookById(url: string, id: number){
    url = `${url}/${id}`;
    this.httpClient.get(url).subscribe(response => this._user.next(response));
  }

  //POST
  //A MODIFIER
  public createBook(url: string, user: any){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    const options = {
      headers
    };

    this.httpClient.post(url, user, options)
      .subscribe(response => console.log(response));
  }

  //PUT


  //DELETE




  //Getter et Setter
  public get getUser(){
    return this._user
  }

  // public set user(user: UserInterface){
  //   this._user = user;
  // }

  public get getUsers(){
    return this._users;
  }

  // public set setUsers(users: UserInterface){
  //   this._users = users;
  // }


}
