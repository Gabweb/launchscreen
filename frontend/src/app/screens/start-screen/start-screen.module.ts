import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './start-screen.component';
import { DiagonalBackgroundComponent } from './components/diagonal-background/diagonal-background.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGripHorizontal } from '@fortawesome/pro-solid-svg-icons';

library.add(faGripHorizontal);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    StartScreenComponent,
    DiagonalBackgroundComponent
  ],
  exports: [
    StartScreenComponent
  ]
})
export class StartScreenModule { }
