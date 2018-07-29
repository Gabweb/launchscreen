import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { EditTileFormComponent } from './edit-tile-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('EditTileFormComponent', () => {
  let component: EditTileFormComponent;
  let fixture: ComponentFixture<EditTileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTileFormComponent ],
      imports: [FormsModule, FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
