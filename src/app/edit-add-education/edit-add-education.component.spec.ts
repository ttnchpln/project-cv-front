import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddEducationComponent } from './edit-add-education.component';

describe('EditAddEducationComponent', () => {
  let component: EditAddEducationComponent;
  let fixture: ComponentFixture<EditAddEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddEducationComponent]
    });
    fixture = TestBed.createComponent(EditAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
