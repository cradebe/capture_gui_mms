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
  mobile = false;
  hasSelectedImage = false;
  imageSrc: string = '';
  message: string = '';
  timeLimit = 5000;
  show = false;
  showError = false;

  constructor(
    private fb: FormBuilder, 
    private route: Router, 
    private imageService: ImageService
  ) { 
    this.imageUploadForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)])
    }, { updateOn: 'submit' })
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
    if (form.valid){
      const file_data = new FormData();
      file_data.append('image', this.selectedImageFile, this.imageUploadForm.value.name);
      this.imageService.uploadImages(file_data).subscribe({
        next:(data:any) => { 
          this.images.push(data)
          this.message = 'Upload Successful'
          this.show =  true
          this.showError =  false
          setTimeout(() => this.show = false, this.timeLimit)
        }, 
        error: (err) => {
          this.message = 'Upload Error'
          this.showError =  true
          this.show =  true
          setTimeout(() => this.show = true, this.timeLimit)
        },
        complete: () => {
          this.hasSelectedImage = false
          this.imageUploadForm.reset()
          this.imageUploadForm.controls['name'].setErrors(null)
        }
    })
    }
  }
}
