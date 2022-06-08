import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdministrationPage } from './project-administration.page';

describe('ProjectAdministrationPage', () => {
  let component: ProjectAdministrationPage;
  let fixture: ComponentFixture<ProjectAdministrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAdministrationPage ]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAdministrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
