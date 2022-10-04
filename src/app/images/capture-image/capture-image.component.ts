import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.scss']
})
export class CaptureImageComponent implements OnInit {
  @Input() images: Image[] = []
  
  selectedImageFile: any;
  imageUploadForm: FormGroup;
  mobile = false
  hasSelectedImage = false
  imageSrc: string = ''

  constructor(
    private fb: FormBuilder, 
    private route: Router, 
    private imageService: ImageService
  ) { 
    this.imageUploadForm = this.fb.group({
      name: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    if (window.screen.width <= 1180) {
      this.mobile = true;
    }
  }

  onFileSelected(event: any){
    this.selectedImageFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.hasSelectedImage = true
  }}

  uploadImageData(form: FormGroup){
    const file_data = new FormData();
    file_data.append('image', this.selectedImageFile, this.imageUploadForm.value.name);
    this.imageService.uploadImages(file_data).subscribe((data:Image) => {this.images.push(data) })
    this.imageUploadForm.reset()
    this.hasSelectedImage = false
  }
}
