import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TileData } from '@shared/services/tileData';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() tile: TileData = new TileData();
  @Output() $editTile = new EventEmitter<TileData>();

  constructor() { }

  ngOnInit() {

  }

  openDialog(): void {
    this.$editTile.emit(this.tile);
  }

  getBackgroundImg(): string {
    if (this.tile.image) {
      return this.tile.image;
    }
    return 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  getBackgroundColor(): string {
    if (this.tile.color) {
      return this.tile.color;
    }
    return 'f8f8f8';
  }

}
