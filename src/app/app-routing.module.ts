import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LandingPageComponent }   from './landing-page/landing-page.component';
import { UriTileComponent }     from './uri-tile/uri-tile.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: UriTileComponent },
  { path: 'home',        component: LandingPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
