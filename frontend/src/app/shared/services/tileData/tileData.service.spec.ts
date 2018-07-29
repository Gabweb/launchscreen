import { TestBed, inject } from '@angular/core/testing';

import { TileDataService, demoData } from './tileData.service';
import { TileData } from './tileData';

describe('TileDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TileDataService]
    });
  });

  const expectToBeEqual = (tilesA: TileData[], tilesB: TileData[]) => {
    expect(tilesA.length).toBe(tilesB.length);
    for (let i = 0; i < tilesA.length; i++) {
      expect(tilesA[i].isEqual(tilesB[i])).toBeTruthy();
    }
  };

  it('should be created', inject([TileDataService], (service: TileDataService) => {
    expect(service).toBeTruthy();
  }));

  it('#constructor should set demo data', inject([TileDataService], (service: TileDataService) => {
    expectToBeEqual(service.getAllTiles(), demoData);
  }));

  it('#deleteTile should remove tile', inject([TileDataService], (service: TileDataService) => {
    const expectedResult = [demoData[0], ...demoData.slice(2)];
    service.deleteTile(demoData[1]);
    const result = service.getAllTiles();
    expectToBeEqual(result, expectedResult);
  }));

  it('#updateTile should update tile', inject([TileDataService], (service: TileDataService) => {
    const newTile = new TileData('Uri', 'TestItem');
    const expectedResult = [demoData[0], newTile, ...demoData.slice(2)];

    service.updateTile({oldTile: demoData[1], newTile});
    const result = service.getAllTiles();

    expectToBeEqual(result, expectedResult);
  }));

});
