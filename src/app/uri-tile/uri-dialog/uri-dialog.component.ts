import { Component, Inject } from '@angular/core';
import { Uri } from '../../uri';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-uri-dialog',
  templateUrl: './uri-dialog.component.html',
  styleUrls: ['./uri-dialog.component.css']
})
export class UriDialogComponent {
  public localUri:Uri;
  public newEle:boolean = true;

  constructor(public dialogRef: MatDialogRef<UriDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data == null) {
        this.localUri = new Uri();
      }
      else {
        this.localUri = data;
        this.newEle = false;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
