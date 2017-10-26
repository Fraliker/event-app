import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventFormComponent } from './event/event-form.component';
import { EventListComponent } from './event/event-list.component';
import { AddEventComponent } from './add-event.component';
import { EditEventComponent } from './event/edit-event.component';

const routes: Routes = [
  { 
    path: 'dashboard', children: [
      { path: '', component: DashboardComponent }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    EventFormComponent,
    EventListComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}