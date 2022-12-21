import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AddComponent } from './users/add/add.component';
import { EditComponent } from './users/edit/edit.component';
import { ShowComponent } from './users/show/show.component';
import { ListComponent } from './users/list/list.component';
import { DeleteComponent } from './users/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ShowComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
