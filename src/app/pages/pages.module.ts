import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AddComponent as UserAdd } from './users/add/add.component';
import { EditComponent as UserEdit } from './users/edit/edit.component';
import { ShowComponent as UserShow } from './users/show/show.component';
import { ListComponent as UserList} from './users/list/list.component';
import { DeleteComponent as UserDelete } from './users/delete/delete.component';

import { AddComponent as ChannelAdd } from './channels/add/add.component';
import { EditComponent as ChannelEdit } from './channels/edit/edit.component';
import { ShowComponent as ChannelShow } from './channels/show/show.component';
import { ListComponent as ChannelList } from './channels/list/list.component';
import { DeleteComponent as ChannelDelete } from './channels/delete/delete.component';

import { AddComponent as MessageAdd} from './messages/add/add.component';
import { EditComponent as MessageEdit } from './messages/edit/edit.component';
import { ShowComponent as MessageShow } from './messages/show/show.component';
import { ListComponent as MessageList } from './messages/list/list.component';
import { DeleteComponent as MessageDelete} from './messages/delete/delete.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserAdd,
    UserEdit,
    UserShow,
    UserList,
    UserDelete,
    ChannelAdd,
    ChannelEdit,
    ChannelShow, 
    ChannelList, 
    ChannelDelete,
    MessageAdd,
    MessageEdit,
    MessageShow,
    MessageList,
    MessageDelete
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
