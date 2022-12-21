import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //Default Route
    {
      path: '',
      redirectTo: 'accueil',
      pathMatch: 'full' //quand on fait une redirection il faut forcément mettre un pathmatch
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
