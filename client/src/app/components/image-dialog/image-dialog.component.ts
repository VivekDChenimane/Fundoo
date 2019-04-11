import { Component, OnInit,Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../../service/data/data.service';
import { NoteService } from '../../service/note/note.service';
@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageEvent: any;
  constructor( public dialogRef: MatDialogRef<ImageDialogComponent>,@Inject(MAT_DIALOG_DATA) public data,public dataService:DataService,public noteService:NoteService) { }

  ngOnInit() {
  }
  fileChangeEvent(event: any): void {
    console.log(event);
    
    this.imageChangedEvent = event;
}
imageCropped($event) {
  this.croppedImageEvent = $event.file;

    // this.croppedImage = event.base64;
}
imageLoaded() {
  // show cropper
}
loadImageFailed() {
  // show message
}
onNoClick(): void {
this.dialogRef.close();
}
// private token = localStorage.getItem('token');
setimage(){
const uploadData=new FormData();
uploadData.append('file',this.croppedImageEvent)
console.log(uploadData,"imageurl")
this.noteService.uploadImage(uploadData).subscribe(data=>{
localStorage.setItem('imageUrl',data['status'].imageUrl)
this.dataService.changeImage(true)
this.dialogRef.close("imageChange")
console.log(data)
})


}
}
