import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviders, Oauth2Service } from '@shared/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: Oauth2Service, private router: Router) { }

  ngOnInit() {
  }

  onLoginClick(provider: AuthProviders) {
    const authUrl = this.oauthService.getOAuthURL(provider);
    window.location.href  = authUrl;
  }

  onLocalClick() {
    this.router.navigateByUrl('/dashboard');
  }

}
