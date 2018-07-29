import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  @ViewChild('modal')
  private modal: any;

  constructor() {
  }

  ngOnInit() {

  }

  public openModal() {
    UIkit.modal(this.modal.nativeElement).show();
  }

  public closeModal() {
    UIkit.modal(this.modal.nativeElement).hide();
  }

}
