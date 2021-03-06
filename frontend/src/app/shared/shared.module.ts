import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointService } from '@shared/services/breakpoint/breakpoint.service';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { TileDataService } from '@shared/services/tileData/tileData.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';


const components = [
  FooterComponent,
  HeaderComponent,
  ModalComponent,
  LogoIconComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [components],
  exports: [components],
  providers: [
    TileDataService,
    BreakpointService,
  ],
})
export class SharedModule { }
