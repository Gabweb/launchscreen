import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { ComponentsModule } from '../components.module';
import { TileComponent } from '../tile/tile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonsModule } from '../../commons/commons.module';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [CommonsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
