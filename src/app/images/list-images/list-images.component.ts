import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Image } from '../image';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {
  @Input() images: Image[] = []

  constructor(private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange){
    this.ngOnInit()
  }

  sanitiseImagePath(imagePath: string): SafeUrl {
    return this.sanitiser.bypassSecurityTrustUrl(imagePath);
  }
}
