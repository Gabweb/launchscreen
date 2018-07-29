import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUriComponent } from './components/add-uri/add-uri.component';
import { GridComponent } from './components/grid/grid.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TileComponent } from './components/tile/tile.component';
import { EditTileFormComponent } from './components/edit-tile-form/edit-tile-form.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faPlusCircle, faSearch } from '@fortawesome/pro-regular-svg-icons';

library.add(faEllipsisV);
library.add(faSearch);
library.add(faPlusCircle);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    AddUriComponent,
    GridComponent,
    SearchbarComponent,
    TileComponent,
    EditTileFormComponent,
    MainDashboardComponent
  ],
  exports: [
    AddUriComponent,
    GridComponent,
    SearchbarComponent,
    TileComponent,
    EditTileFormComponent
  ]
})
export class MainDashboardModule { }
