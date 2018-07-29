import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TileData, TileDataChange } from '@shared/services/tileData';

@Component({
  selector: 'app-edit-tile-form',
  templateUrl: './edit-tile-form.component.html',
  styleUrls: ['./edit-tile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTileFormComponent {
  newEle: boolean;
  tileData: TileData = new TileData();
  _originalTileData: TileData;

  @Output('tileChanged') tileChanged = new EventEmitter<TileDataChange>();
  @Output('tileDeleted') tileDeleted = new EventEmitter<TileData>();

  @Output('closeDialog') closeDialog = new EventEmitter<null>();

  @Input('tileData')
  set originalTileData(value: TileData) {
    if (value === undefined || value === null) {
      this._originalTileData = new TileData();
      this.newEle = true;
    } else {
      this._originalTileData = value;
      this.newEle = false;
    }
    this.init();
  }

  constructor() {}

  private init() {
    this.tileData = this._originalTileData.clone();
  }

  onNoClick(): void {
    this.closeDialog.emit(null);
    this.init();
  }

  onOkClick(): void {
    this.tileChanged.emit({oldTile: this._originalTileData, newTile: this.tileData});
    this.init();
  }

  onDeleteClick(): void {
    this.tileDeleted.emit(this._originalTileData);
  }

}
