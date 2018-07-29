import { Injectable } from '@angular/core';
import { AuthProviders } from '@shared/services/auth';
import { environment } from 'environments/environment';


const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';

@Injectable()
export class Oauth2Service {

  constructor() { }

  public getOAuthURL(provider: AuthProviders): string {
    switch (provider) {
      case AuthProviders.GitHub:
        this.setRandomState(provider);
        return GITHUB_AUTH_URL
          + `?client_id=${environment.oauth.github.id}`
          + `&redirect_uri=${environment.oauth.github.redirect_url}`
          + `&scope=user:email`
          + `&state=${this.getState(provider)}`;

      default:
        throw new Error(`Couldn't find the AuthProvider "${provider}"`);
    }
  }

  public hasValidState(provider: AuthProviders, state: string): boolean {
    return sessionStorage.getItem(this.getStateStorageName(provider)) === state;
  }

  private setRandomState(provider: AuthProviders): void {
    sessionStorage.setItem(this.getStateStorageName(provider), this.getRanString());
  }

  private getState(provider: AuthProviders): string {
    const state = sessionStorage.getItem(this.getStateStorageName(provider));
    if (state === null) {
      throw new Error('State is null. Aborting OAuth.');
    }
    return state;
  }

  private getStateStorageName(provider: AuthProviders): string {
    return provider + 'State';
  }

  private getRanString(): string {
    return Math.random().toString(36).slice(2);
  }
}
