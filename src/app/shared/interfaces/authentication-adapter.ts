export interface AuthenticationAdapter {
  login(userName?, password?);
  logout();
  isAuthenticated();
  isLoading();
  type: string;
}
