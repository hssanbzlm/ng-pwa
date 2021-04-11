import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout();
  }
  isAuthenticated() {
    return this.auth.isAuthenticated$;
  }

  isLoading() {
    return this.auth.isLoading$;
  }
}
