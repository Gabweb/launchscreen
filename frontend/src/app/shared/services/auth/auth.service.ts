import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private jwt: string | undefined;

  constructor() { }

  public setJWT(jwt: string): void {
    localStorage.setItem('jwt', jwt);
    this.jwt = jwt;
  }

  public getJWT(): string {
    if (this.jwt === undefined) {
      const stored_jwt = localStorage.getItem('jwt');
      if (stored_jwt === null) {
        throw new Error('Could not get JWT since it is not set');
      }
      this.jwt = stored_jwt;
    }
    return this.jwt;
  }
}
