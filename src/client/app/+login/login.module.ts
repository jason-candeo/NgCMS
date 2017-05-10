// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//material
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

// routes & components
import { routes } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MdButtonModule,
    MdCardModule,
    MdInputModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule {
}
