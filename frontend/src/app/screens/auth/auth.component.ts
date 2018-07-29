import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oauth2Service, AuthService, getAuthProvider, AuthProviders } from '@shared/services/auth';
import { BackendService } from '@shared/services/backend';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: Oauth2Service,
    private authService: AuthService,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    const provider = getAuthProvider(this.route.snapshot.paramMap.get('provider'));
    if (provider === null) {
      this.router.navigateByUrl('/404');
      return;
    }

    if (this.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.performOauth(provider);
    }
  }

  private isLoggedIn() {
    try {
      this.authService.getJWT();
    } catch (e) {
      return false;
    }
    return true;
  }

  private performOauth(provider: AuthProviders) {
    const params = this.route.snapshot.queryParams;
    const validState = this.oauthService.hasValidState(provider, params.state);
    if (validState === false) {
      this.error = true;
      return;
    }

    this.backendService.auth(AuthProviders.GitHub, params.code, params.state)
      .subscribe(res => {
        this.authService.setJWT(res.text);
        this.router.navigateByUrl('/dashboard');
      },
        err => {
          // tslint:disable-next-line:no-console
          console.error('Oops:', err.message);
          this.error = true;
        }
      );
  }

}
