import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalBackgroundComponent } from './diagonal-background.component';

describe('DiagonalBackgroundComponent', () => {
  let component: DiagonalBackgroundComponent;
  let fixture: ComponentFixture<DiagonalBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagonalBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
