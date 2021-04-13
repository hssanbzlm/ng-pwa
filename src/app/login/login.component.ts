import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../shared/interfaces/auth.interface';
import { CustomAuthAdapterService } from '../shared/services/custom-auth-adapter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = {
    email: '',
    password: '',
  };

  constructor(private auth: CustomAuthAdapterService) {}

  ngOnInit(): void {}

  login(userInfo: UserInfo) {
    this.auth.login(userInfo.email, userInfo.password);
  }
}
