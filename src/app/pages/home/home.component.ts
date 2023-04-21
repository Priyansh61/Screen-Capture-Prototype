
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import { ImageModalComponent } from '../image-modal/image-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSource: any;
  img:any = null ;
  imageDetails: any = null;
  constructor(private captureService: NgxCaptureService, private http: HttpClient,
    private sanitizer: DomSanitizer) { }

    @ViewChild(ImageModalComponent) imageModal!: ImageModalComponent;

  ngOnInit() {
  }
  imgBase64: any = ''
  @ViewChild('screen', { static: true }) screen: any;

  capture() {
    this.captureService.getImage(this.screen.nativeElement, true)
      .pipe(tap((img: any)=> {
          console.log("maa chudgai")
          console.log(img);
          this.img = img;
        })
      ).subscribe();

  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }

  ip = "http://localhost/fileupload/"
  save() {
    const file = this.DataURIToBlob(this.imgBase64)
    const formData = new FormData();
    formData.append('file', file, 'image.png')
    let url = "upload2.php"
    this.http.post(this.ip + url, formData).subscribe(data => {


    })
  }

  saveImage(img: string) {
    console.log(img);
  }

  showImage() {
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.img);
  }

  editImage() {
    this.imageDetails = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(this.img),
      alt: 'Example Image',
      width: 500,
      height: 300
    };
  console.log(this.imageDetails);
  
  }

}