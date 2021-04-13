import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomAuth {
  constructor(private router: Router) {}
  login(userName, password) {
    if (userName == 'hssan' && password == 123) {
      localStorage.setItem('logged', 'yes');
      this.router.navigateByUrl('/courses');
    }
  }

  logout() {
    localStorage.removeItem('logged');
    this.router.navigateByUrl('/home');
  }
  isAuthenticated(): Observable<boolean> {
    return new Observable((obs) => {
      localStorage.getItem('logged') ? obs.next(true) : obs.next(false);
    });
  }
  isLoading() {}
}
