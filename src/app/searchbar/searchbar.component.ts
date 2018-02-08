import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public placeholder = '';
  public searchString = '';
  constructor() { }

  ngOnInit() {

  }

  onFocus() {
    this.placeholder = '';
  }

  onFocusOut() {
    this.placeholder = ''
  }

  keyUp(event: any) {
    if(event.keyCode == 13) {
      this.submitSearch();
    }
  }

  submitSearch() {
    window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(this.searchString);
  }

}
