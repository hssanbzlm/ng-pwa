import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { shareReplay } from 'rxjs/operators';

import { AuthenticationService } from '../app/shared/services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-pwa: Angular courses';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  constructor(
    public authService: AuthenticationService,
    private updates: SwUpdate
  ) {
    if (updates.isEnabled) {
      updates.available.subscribe(() => {
        if (confirm('New changes are available, do you want to reload ??')) {
          window.location.reload();
        }
      });
    }
  }

  logout() {
    this.authService.logout();
    console.log('LOGOUT');
  }
  login() {
    this.authService.login();
    console.log('LOGIN');
  }
}
