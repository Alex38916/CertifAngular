import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

    //Propriétés Observables
    private _channels = new BehaviorSubject<any>([]);
    private _channel = new BehaviorSubject<any>({});

    private _messages = new BehaviorSubject<any>([]);
    
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    //CRUD
    //GET  List
      public getChannelsFromDB(url: string): void {
        this.httpClient.get(url).subscribe(response => this._channels.next(response));
      }
  
    //GET By Id
    public getChannelById(url: string, id: number){
      url = `${url}/${id}`;
      this.httpClient.get(url).subscribe(response => this.getChannel.next(response));
    }
  
    //POST
    public createChannel(url: string, channel: any){
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json',
      });
  
      const options = {
        headers
      };
  
      this.httpClient.post(url, channel, options)
        .subscribe(response => console.log(response));
    }
  
    //PUT
    public editChannel(url: string, id: number | undefined, channel: any): void {
  
      url = `${url}/${id}`;
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
  
      const options = {
        headers
      }
  
      this.httpClient.put(url, channel, options)
        .subscribe(response => console.log(response));
    }
  
  
    //DELETE
    public deleteChannel(url: string, id: number|undefined): void {
      url = `${url}/${id}`;
      
      this.httpClient.delete(url)
        .subscribe(response => console.log(response));
    }
  
    //Get Messages By Channel
    public getMessageByChannel(url: string, id: number|undefined) {
      url = `${url}/${id}`;

      
      this.httpClient.get(url).subscribe(response => {
        this._messages.next(response)
      })
    }

    public getMessages(){
      return this._messages;
    }
  
  
    //Getter et Setter
    public get getChannel(){
      return this._channel;
    }
  
    public get getChannels(){
      return this._channels;
    }
  
}
