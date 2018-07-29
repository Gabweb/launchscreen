import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TileData, TileDataService } from '@shared/services/tileData';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDashboardComponent implements OnInit {
  public tiles: TileData[];

  constructor(private readonly tileDataService: TileDataService) { }

  ngOnInit() {
    this.tiles = this.tileDataService.getAllTiles();
  }
}
