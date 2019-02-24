import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardComponent } from './main-dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { AddUriComponent } from './components/add-uri/add-uri.component';
import { GridComponent } from './components/grid/grid.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TileComponent } from './components/tile/tile.component';
import { EditTileFormComponent } from './components/edit-tile-form/edit-tile-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddUriComponent,
        GridComponent,
        SearchbarComponent,
        TileComponent,
        EditTileFormComponent,
        MainDashboardComponent,
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        FontAwesomeModule,
        SharedModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
