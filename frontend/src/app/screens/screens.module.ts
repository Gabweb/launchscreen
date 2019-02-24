import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensRoutingModule } from './screens-routing.module';
import { StartScreenModule } from './start-screen/start-screen.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    ScreensRoutingModule,
    StartScreenModule,
    PageNotFoundModule,
    MainDashboardModule,
  ],
})
export class ScreensModule { }
