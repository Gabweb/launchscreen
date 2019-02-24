import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: '', component: StartScreenComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
