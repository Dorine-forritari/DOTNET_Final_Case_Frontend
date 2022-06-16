import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOtherUserProfileComponent } from './see-other-user-profile.component';

describe('SeeOtherUserProfileComponent', () => {
  let component: SeeOtherUserProfileComponent;
  let fixture: ComponentFixture<SeeOtherUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeOtherUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOtherUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
