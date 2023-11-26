import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddExperienceComponent } from './edit-add-experience.component';

describe('EditAddExperienceComponent', () => {
  let component: EditAddExperienceComponent;
  let fixture: ComponentFixture<EditAddExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddExperienceComponent]
    });
    fixture = TestBed.createComponent(EditAddExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
