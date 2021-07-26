import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DashboardPageComponent, UserPageComponent } from './containers';
import {
  
  NewsFeedComponent,
  UserDetailComponent
} from './components';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardPageComponent,
    UserPageComponent,
    NewsFeedComponent,
    UserDetailComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    MatDividerModule,
    MatListModule,
    Ng2SearchPipeModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class DashboardModule { }
