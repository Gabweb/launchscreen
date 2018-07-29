import { Observable ,  from as fromPromise } from 'rxjs';
import { Injectable } from '@angular/core';
import * as request from 'superagent';
import { AuthProviders } from '@shared/services/auth';
import { environment } from 'environments/environment';

@Injectable()
export class BackendService {

  constructor() {
  }

  public auth(provider: AuthProviders, code: string, state: string): Observable<request.Response> {
    let url = environment.backendUrl;
    if (provider === AuthProviders.GitHub) {
      url += 'auth/github';
    } else {
      throw new Error('Unkown AuthProvider');
    }

    const response = request
      .post(url)
      .query({ code, state });
    return fromPromise(response);
  }

}
