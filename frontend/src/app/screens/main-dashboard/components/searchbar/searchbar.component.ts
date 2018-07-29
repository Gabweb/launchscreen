import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbarComponent implements OnInit {
  public searchString = '';
  constructor() { }

  ngOnInit() {

  }
  keyUp(event: any) {
    if (event.keyCode === 13) {
      this.submitSearch();
    }
  }

  submitSearch() {
    window.location.href = 'https://start.duckduckgo.com/?q=' + encodeURIComponent(this.searchString);
  }

}
