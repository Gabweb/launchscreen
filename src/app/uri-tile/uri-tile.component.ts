import { Component, OnInit } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { UrisService } from '../uris.service'
import { Uri } from '../uri'

@Component({
  selector: 'app-uri-tile',
  templateUrl: './uri-tile.component.html',
  styleUrls: ['./uri-tile.component.css']
})
export class UriTileComponent implements OnInit {
  public uris:Uri[] = [];
  public rowCount = 4;

  constructor(private urisService: UrisService) {

  }

  ngOnInit() {
    this.uris = this.urisService.getUris();
    this.getRowCount();
  }

  getRowCount():void {
    this.rowCount = Math.min(4, this.uris.length);
  }

}
