import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareImagesComponent } from './compare-images.component';

describe('CompareImagesComponent', () => {
  let component: CompareImagesComponent;
  let fixture: ComponentFixture<CompareImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
