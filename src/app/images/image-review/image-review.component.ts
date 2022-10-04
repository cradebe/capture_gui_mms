import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-image-review',
  templateUrl: './image-review.component.html',
  styleUrls: ['./image-review.component.scss']
})
export class ImageReviewComponent implements OnInit {
  @Input() selectedImages: Image[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
