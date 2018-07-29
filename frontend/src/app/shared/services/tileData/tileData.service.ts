import { Injectable } from '@angular/core';
import { TileData, TileDataChange } from './tileData';
import { Subject } from 'rxjs';

export const demoData: TileData[] = [
  new TileData('ComputerBase', 'https://www.computerbase.de/', 'https://www.computerbase.de/img/logo.svg', '2c5b9c'),
  new TileData('Heise', 'https://www.heise.de/',
    'https://www.heise.de/imgs/18/1/7/9/4/8/9/1/Heise-Keks_gross-dea1c07e481ff866.jpeg', 'fff'),
  new TileData('YouTube', 'https://www.youtube.com/', 'https://www.riot-os.org/images/youtube-logo-light.png', 'FF0000'),
];

@Injectable()
export class TileDataService {
  private tiles: TileData[] = [];

  public tilesChanged = new Subject<TileData[]>();

  constructor() {
    this.tiles = demoData;
  }

  public setTiles(tiles: TileData[]) {
    this.tiles = tiles;
  }

  public getAllTiles(): TileData[] {
    return this.clone();
  }

  public addTile(tile: TileData, index?: number): void {
    this.doAddTile(tile, index);
    this.tilesChanged.next(this.tiles);
  }

  private doAddTile(tile: TileData, index?: number) {
    if (index === undefined) {
      this.tiles.push(tile);
    } else {
      this.tiles.splice(index, 0, tile);
    }
  }

  public deleteTile(tile: TileData): void {
    this.doDeleteTile(tile);
    this.tilesChanged.next(this.tiles);
  }

  private doDeleteTile(tile: TileData): void {
    const index = this.getIndex(tile);
    this.tiles.splice(index, 1);
  }

  public updateTile(changedTile: TileDataChange): void {
    this.doUpdateTile(changedTile);
    this.tilesChanged.next(this.tiles);
  }

  private doUpdateTile(changedTile: TileDataChange): void {
    const index = this.getIndex(changedTile.oldTile);
    this.tiles[index] = changedTile.newTile;
  }

  public moveTile(tile: TileData, newIndex: number): void {
    this.doMoveTile(tile, newIndex);
    this.tilesChanged.next(this.tiles);
  }

  private doMoveTile(tile: TileData, newIndex: number): void {
    const oldIndex = this.getIndex(tile);
    const movedTile = this.tiles[oldIndex];
    this.doDeleteTile(movedTile);
    this.doAddTile(movedTile, newIndex);
  }

  private getIndex(tile: TileData): number {
    const index = this.tiles.indexOf(tile);
    if (index === -1) {
      throw new Error('Tile not found');
    }
    return index;
  }

  private clone(): TileData[] {
    const tilesClone: TileData[] = [];
    this.tiles.forEach(tile => {
      tilesClone.push(tile);
    });
    return tilesClone;
  }

}
