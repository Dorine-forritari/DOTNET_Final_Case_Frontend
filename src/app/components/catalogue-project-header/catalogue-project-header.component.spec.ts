import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProjectHeaderComponent } from './catalogue-project-header.component';

describe('CatalogueProjectHeaderComponent', () => {
  let component: CatalogueProjectHeaderComponent;
  let fixture: ComponentFixture<CatalogueProjectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueProjectHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
