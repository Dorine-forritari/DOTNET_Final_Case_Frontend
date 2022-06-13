import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImagesCarouselComponent } from './project-images-carousel.component';

describe('ProjectImagesCarouselComponent', () => {
  let component: ProjectImagesCarouselComponent;
  let fixture: ComponentFixture<ProjectImagesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectImagesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImagesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
