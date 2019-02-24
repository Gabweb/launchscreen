import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUriComponent } from './add-uri.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

describe('AddUriComponent', () => {
  let component: AddUriComponent;
  let fixture: ComponentFixture<AddUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUriComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ SharedModule ]
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
