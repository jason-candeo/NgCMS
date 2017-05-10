// angular
import { Routes } from '@angular/router';

// libs
import { MetaGuard } from '@ngx-meta/core';

// module
import { ChangeLanguageComponent } from './change-language.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './+login/login.module#LoginModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path: 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
