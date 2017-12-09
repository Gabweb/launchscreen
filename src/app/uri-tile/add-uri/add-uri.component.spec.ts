import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUriComponent } from './add-uri.component';

describe('AddUriComponent', () => {
  let component: AddUriComponent;
  let fixture: ComponentFixture<AddUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
