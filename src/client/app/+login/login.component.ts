// angular
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.scss' ],
  host: {
      '[class.cc-login-page]': 'true'
  },
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
}