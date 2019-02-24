import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreenComponent } from './start-screen.component';
import { DiagonalBackgroundComponent } from './components/diagonal-background/diagonal-background.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('StartScreenComponent', () => {
  let component: StartScreenComponent;
  let fixture: ComponentFixture<StartScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartScreenComponent,
        DiagonalBackgroundComponent,
      ],
      imports: [
        FontAwesomeModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
