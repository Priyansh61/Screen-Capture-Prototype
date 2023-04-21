import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    console.log(this.imageDetails.src)
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const image = document.getElementById('image') as HTMLImageElement;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
    };
    canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  closeModal() {
    const modal = document.getElementsByClassName('modal')[0] as HTMLElement;
    modal.style.display = 'none';
  }

  onMouseDown(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    context.beginPath();
    context.rect(x, y, 50, 50);
    context.lineWidth = 2;
    context.strokeStyle = 'red';
    context.stroke();
  }

  exportImage() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'annotated-image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



}
