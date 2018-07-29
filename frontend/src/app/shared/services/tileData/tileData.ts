export class TileData {
  public uri: string;
  public name: string;
  public image: string;
  public color: string;

  constructor(name: string = '', uri: string = '', image: string = '', color: string = '') {
    this.uri = uri;
    this.name = name;
    this.image = image;
    this.color = color;
  }

  public clone(): TileData {
    return new TileData(this.name, this.uri, this.image, this.color);
  }

  public isEqual(second: TileData): boolean {
    return  this.uri === second.uri &&
            this.name === second.name &&
            this.image === second.image &&
            this.color === second.color;
  }
}

export interface TileDataChange {
  oldTile: TileData;
  newTile: TileData;
}
