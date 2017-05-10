// angular
import { Routes } from '@angular/router';

// components
import { LoginComponent } from './login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      meta: {
        title: 'PUBLIC.LOGIN.PAGE_TITLE',
        override: true,
        description: 'PUBLIC.LOGIN.META_DESCRIPTION'
      }
    }
  }
];
