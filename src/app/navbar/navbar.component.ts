import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../images/image';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() pageTitle: string = "";
  @Input() title: string = "";
  @Output() close: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeReview(){
    this.close.emit(false)
  }
}
