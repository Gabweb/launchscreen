import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/components/modal';
import { TileDataService, TileDataChange } from '@shared/services/tileData';

@Component({
  selector: 'app-add-uri',
  templateUrl: './add-uri.component.html',
  styleUrls: ['./add-uri.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUriComponent {
  @ViewChild(ModalComponent)
  private modal: ModalComponent;

  constructor(private tileDataService: TileDataService) { }

  openDialog(): void {
    this.modal.openModal();
  }

  closeDialog() {
    this.modal.closeModal();
  }

  tileChanged(tileDataChange: TileDataChange) {
    this.tileDataService.addTile(tileDataChange.newTile);
    this.closeDialog();
  }

}
