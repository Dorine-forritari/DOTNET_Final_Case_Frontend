import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-images-carousel',
  templateUrl: './project-images-carousel.component.html',
  styleUrls: ['./project-images-carousel.component.scss'],
})
export class ProjectImagesCarouselComponent implements OnInit {
  @Input() photo: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
