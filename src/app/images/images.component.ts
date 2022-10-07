import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Image } from './image';
import { ImageService } from './image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() images: Image[] = []
  @Input() selectedImages: Image[] = []
  
  reviewing = false
  pageTitle = 'Dashboard';

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImageData()
  }

  getImageData(){
    return this.imageService.getImages().subscribe((data: Image[]) => {
      this.images = data
    })
  }

  imageRemoved(selectedImages: Image[]){
    this.selectedImages = selectedImages
    if (this.selectedImages.length === 0){
      this.reviewing = false
    }
  }

  closeReview(closeReview: boolean){
    this.reviewing = closeReview
  }

  toggleReview(selectedImages: Image[]){
    this.reviewing = !this.reviewing
    this.selectedImages = selectedImages
  }
}
