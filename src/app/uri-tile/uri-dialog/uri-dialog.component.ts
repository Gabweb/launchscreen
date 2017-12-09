import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-uri-dialog',
  templateUrl: './uri-dialog.component.html',
  styleUrls: ['./uri-dialog.component.css']
})
export class UriDialogComponent {

  constructor(public dialogRef: MatDialogRef<UriDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
