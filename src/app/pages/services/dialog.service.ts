import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor( private dialog : MatDialog) { }

  public openImageModal(content : any) {
    const dialogConfig = new MatDialogConfig() ;
    dialogConfig.data = content;

    // position in center
    dialogConfig.position = {
      'top':'0%',
    }
    dialogConfig.width = '50%';
    dialogConfig.height = '50%';
    dialogConfig.maxWidth = '1000px';
    dialogConfig.maxHeight = '600px';
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.backdropClass = 'custom-backdrop';
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.restoreFocus = true;

    this.dialog.open(ImageModalComponent,dialogConfig);


  }
}
