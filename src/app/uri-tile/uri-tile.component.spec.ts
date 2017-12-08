import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriTileComponent } from './uri-tile.component';

describe('UriTileComponent', () => {
  let component: UriTileComponent;
  let fixture: ComponentFixture<UriTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
