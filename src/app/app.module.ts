import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { UriTileComponent } from './uri-tile/uri-tile.component';
import { UrisService } from './uris.service'


@NgModule({
  declarations: [
    AppComponent,
    UriTileComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    AngularFontAwesomeModule
  ],
  providers: [UrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
