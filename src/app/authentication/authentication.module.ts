import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { AuthFormComponent } from './auth-form.component';

const routes: Routes = [
  { 
    path: 'login', children: [
      { path: '', component: AuthenticationComponent, pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule {}