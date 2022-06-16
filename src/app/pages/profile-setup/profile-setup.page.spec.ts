import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSetupPage } from './profile-setup.page';

describe('ProfileSetupPage', () => {
  let component: ProfileSetupPage;
  let fixture: ComponentFixture<ProfileSetupPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSetupPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
