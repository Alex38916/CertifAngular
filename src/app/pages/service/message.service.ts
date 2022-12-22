import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //Propriétés Observables
  private _messages = new BehaviorSubject<any>([]);
  private _message = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient
  ) {}

  //CRUD
  //GET  List
  public getMessagesFromDB(url: string): void {
    this.httpClient.get(url).subscribe(response => this._messages.next(response));
  }

  //GET By Id
  public getMessageById(url: string, id: number){
    url = `${url}/${id}`;
    this.httpClient.get(url).subscribe(response => this.getMessage.next(response));
  }

  //POST
  public createMessage(url: string, message: any){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    const options = {
      headers
    };

    this.httpClient.post(url, message, options)
      .subscribe(response => console.log(response));
  }

  // PUT
  public editMessage(url: string, id: number|undefined, message: any): void {

    url = `${url}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    const options = {
      headers
    };

    this.httpClient.put(url, message, options)
      .subscribe(response => console.log(response));
  }

  // DELETE
  public deleteMessage(url: string, id: number|undefined): void {

    url = `${url}/${id}`;

    this.httpClient.delete(url)
      .subscribe(response => console.log(response));
  }


  //Getters
  public get getMessage() {
    return this._message;
  }

  public get getMessages() {
    return this._messages;
  }

}
