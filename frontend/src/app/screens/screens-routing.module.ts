import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScreensGuard } from './screens-guard';

const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: '', component: StartScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth/:provider', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent, canActivate: [ScreensGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
