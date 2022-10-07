import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../image';


@Component({
  selector: 'app-compare-images',
  templateUrl: './compare-images.component.html',
  styleUrls: ['./compare-images.component.scss']
})
export class CompareImagesComponent implements OnInit {
  compareTitle = 'Image Controller';
  @Input() images: Image[] = []
  @Output() reviewClicked: EventEmitter<Image[]> = new EventEmitter()
  @Output() reviewImageRemoved: EventEmitter<Image[]> = new EventEmitter()

  @Input() selectedImages: Image[] = []

  constructor() { }

  ngOnInit(): void {
  }

  selectCompare(image: Image){
    if (this.selectedImages.length < 3 && !this.selectedImages.includes(image)){
      this.selectedImages.push(image)
    }
  }
  
  removeSelected(image: Image){
    this.selectedImages = this.selectedImages.filter( element => {return element != image})
    this.reviewImageRemoved.emit(this.selectedImages)
  }

  toggleReview(){
    this.reviewClicked.emit(this.selectedImages)
  }
}
