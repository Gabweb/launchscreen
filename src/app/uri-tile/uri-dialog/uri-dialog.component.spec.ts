import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriDialogComponent } from './uri-dialog.component';

describe('UriDialogComponent', () => {
  let component: UriDialogComponent;
  let fixture: ComponentFixture<UriDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
