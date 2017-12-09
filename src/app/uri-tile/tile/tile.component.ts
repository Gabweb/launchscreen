import { Component, OnInit, Input } from '@angular/core';
import { Uri } from '../../uri';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UriDialogComponent} from '../uri-dialog/uri-dialog.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() uri: Uri;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UriDialogComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getBackgroundImg():string {
    if(this.uri.image) {
      return this.uri.image;
    }
    return 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  getBackgroundColor():string {
    if(this.uri.color) {
      return this.uri.color;
    }
    return 'f8f8f8';
  }

}
