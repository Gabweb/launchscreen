import { Component, OnInit } from '@angular/core';
import { faGripHorizontal } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  public faGripHorizontal = faGripHorizontal;
  constructor() { }

  ngOnInit() {
  }

}
