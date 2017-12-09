import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UriDialogComponent} from '../uri-dialog/uri-dialog.component';

@Component({
  selector: 'app-add-uri',
  templateUrl: './add-uri.component.html',
  styleUrls: ['./add-uri.component.css']
})
export class AddUriComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UriDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
