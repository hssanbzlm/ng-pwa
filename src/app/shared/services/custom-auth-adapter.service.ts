import { Injectable } from '@angular/core';
import { CustomAuth } from './custom-auth';
import { AuthenticationAdapter } from './../interfaces/authentication-adapter';

@Injectable({
  providedIn: 'root',
})
export class CustomAuthAdapterService implements AuthenticationAdapter {
  readonly type: string = 'CUSTOM_AUTH';
  constructor(private auth: CustomAuth) {}

  login(userName, password) {
    this.auth.login(userName, password);
  }
  logout() {
    this.auth.logout();
  }
  isLoading() {
    this.auth.isLoading();
  }
  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
