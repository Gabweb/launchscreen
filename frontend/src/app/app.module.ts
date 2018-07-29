import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ScreensModule,
    RouterModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
