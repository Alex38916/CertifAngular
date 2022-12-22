import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent as ChannelAdd } from './channels/add/add.component';
import { DeleteComponent as ChannelDelete} from './channels/delete/delete.component';
import { EditComponent as ChannelEdit } from './channels/edit/edit.component';
import { ListComponent as ChannelList } from './channels/list/list.component';
import { ShowComponent as ChannelShow } from './channels/show/show.component';
import { GetMessagesComponent } from './channels/get-messages/get-messages.component';

import { AddComponent as MessageAdd} from './messages/add/add.component';
import { DeleteComponent as MessageDelete } from './messages/delete/delete.component';
import { EditComponent as MessageEdit} from './messages/edit/edit.component';
import { ListComponent as MessageList} from './messages/list/list.component';
import { ShowComponent as MessageShow } from './messages/show/show.component';

import { AddComponent as UserAdd } from './users/add/add.component';
import { DeleteComponent as UserDelete } from './users/delete/delete.component';
import { EditComponent as UserEdit} from './users/edit/edit.component';
import { ListComponent as UserList} from './users/list/list.component';
import { ShowComponent as UserShow } from './users/show/show.component';

const routes: Routes = [
  //Users
  {
    path: 'user',
    children: [
      {
        //Get List
        path: 'list',
        component: UserList
      },
      {
        //Get By Id 
        path: 'find/:id',
        component: UserShow
      },
      {
        //Post / create
        path: 'post',
        component : UserAdd
      },
      {
        //Put / Update
        path: 'put/:id',
        component: UserEdit
      },
      {
        //Delete
        path: 'delete/:id',
        component: UserDelete
      }
    ]
  },
  //Messages
  {
    path: 'message',
    children: [
      {
        //Get List
        path: 'list',
        component: MessageList
      },
      {
        //Get By Id 
        path: 'find/:id',
        component: MessageShow
      },
      {
        //Post / create
        path: 'post',
        component : MessageAdd
      },
      {
        //Put / Update
        path: 'put/:id',
        component: MessageEdit
      },
      {
        //Delete
        path: 'delete/:id',
        component: MessageDelete
      }
    ]
  },
  //Channels
  {
    path: 'channel',
    children: [
      {
        //Get List
        path: 'list',
        component: ChannelList
      },
      {
        //Get By Id 
        path: 'find/:id',
        component: ChannelShow
      },
      {
        //Post / create
        path: 'post',
        component : ChannelAdd
      },
      {
        //Put / Update
        path: 'put/:id',
        component: ChannelEdit
      },
      {
        //Delete
        path: 'delete/:id',
        component: ChannelDelete
      },
      {
        //Get Messages
        path: 'listMessages/:id',
        component: GetMessagesComponent
      }
    ]
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
