import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TileData, TileDataService, TileDataChange } from '@shared/services/tileData';
import { ModalComponent } from '@shared/components/modal';
import { BreakpointService, DeviceClass } from '@shared/services/breakpoint';

declare var UIkit: any;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  public itemsPerRow = 4;
  public currTile: TileData | undefined = undefined;
  public tiles: TileData[] = [];

  @ViewChild(ModalComponent) private modal: ModalComponent;
  @ViewChild('sortableGrid') private sortableGrid: any;

  constructor(private readonly breakpointService: BreakpointService,
              private readonly tileDataService: TileDataService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    this.breakpointService.$breakpointReached.subscribe(() => {
      this.calculateItemsPerRow();
    });
    this.tileDataService.tilesChanged.subscribe(tiles => {
      this.tiles = tiles;
      changeDetectorRef.detectChanges();
    });
  }

  ngOnInit() {
    this.tiles = this.tileDataService.getAllTiles();
    this.calculateItemsPerRow();

    UIkit.util.on(document.body, 'moved', (e: any, sortable: any, el: any) => {
      this.tileMoved(sortable.origin.index, el);
    });
  }

  private tileMoved(originIndex: number, el: any) {
    const liEle = this.sortableGrid.nativeElement.children as HTMLCollection;
    let newIndex = -1;
    for (let i = 0; i < liEle.length; i++) {
      if (liEle.item(i) === el) {
        newIndex = i;
        break;
      }
    }
    const movedTile = this.tiles[originIndex];
    this.tileDataService.moveTile(movedTile, newIndex);
  }

  calculateItemsPerRow(): void {
    this.itemsPerRow = Math.min(this.getMaxItemsPerRow(), this.tiles.length);
  }

  private getMaxItemsPerRow(): number {
    const deviceClass = this.breakpointService.getCurrentDeviceClass();
    switch (deviceClass) {
      case DeviceClass.Smartphone:
        return 1;
      case DeviceClass.Tablet:
        return 2;
      case DeviceClass.Laptop:
        return 3;
      default:
        return 4;
    }
  }

  openDialog(tile?: TileData) {
    this.currTile = tile;
    this.modal.openModal();
  }

  closeDialog() {
    this.modal.closeModal();
  }

  tileChanged(tileDataChange: TileDataChange) {
    this.tileDataService.updateTile(tileDataChange);
    this.closeDialog();
  }

  tileDeleted(tileData: TileData) {
    this.tileDataService.deleteTile(tileData);
    this.closeDialog();
  }

}
