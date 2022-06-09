import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecardEditComponent } from './profilecard-edit.component';

describe('ProfilecardEditComponent', () => {
  let component: ProfilecardEditComponent;
  let fixture: ComponentFixture<ProfilecardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
