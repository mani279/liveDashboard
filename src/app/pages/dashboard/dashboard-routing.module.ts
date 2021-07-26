import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardPageComponent, UserPageComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'user/:id',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
