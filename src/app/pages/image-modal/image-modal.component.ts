import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @Input() imageDetails: any;
  showModal() {
    const modal = document.getElementsByClassName('modal')[0] as HTMLElement;
    modal.style.display = 'block';
  }

  constructor(private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public content: any,
    ) { }
  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
}
}