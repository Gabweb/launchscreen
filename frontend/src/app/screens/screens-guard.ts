import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ScreensGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        const page = route.queryParams['page'];
        // tslint:disable-next-line:no-console
        console.log(page);

        if (!page) {
            return true;

        }

        /*if (!page || page === 'popup') {
          return this.pinboard.needToken.pipe(map(needed => {
            if (!needed) {
              return true;
            }
            this.router.navigate(['/login']);
            return false;
          }));
        }*/

        this.router.navigate(['/' + page]);
        return false;
    }

}
