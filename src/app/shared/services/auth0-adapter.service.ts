import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationAdapter } from './../interfaces/authentication-adapter';

@Injectable({
  providedIn: 'root',
})
export class Auth0AdapterService implements AuthenticationAdapter {
  readonly type: string = 'AUTH0';

  constructor(private Auth: AuthService) {}

  login() {
    this.Auth.loginWithRedirect();
  }
  logout() {
    this.Auth.logout();
  }
  isLoading() {
    return this.Auth.isLoading$;
  }
  isAuthenticated() {
    return this.Auth.isAuthenticated$;
  }
}
