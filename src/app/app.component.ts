import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { shareReplay } from 'rxjs/operators';

import { AuthService } from './shared/services/auth.service';

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

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  constructor(private authService: AuthService, private updates: SwUpdate) {
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
  }
}
