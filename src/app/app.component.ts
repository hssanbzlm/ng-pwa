import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { shareReplay } from 'rxjs/operators';

import { Auth0AdapterService } from './shared/services/auth0-adapter.service';
import { CustomAuthAdapterService } from './shared/services/custom-auth-adapter.service';
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
    public authService: Auth0AdapterService,
    private updates: SwUpdate,
    private router: Router
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
    if (this.authService.type == 'CUSTOM_AUTH')
      this.router.navigateByUrl('/login');
    else this.authService.login();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  isLoading() {
    return this.authService.isLoading();
  }
}
