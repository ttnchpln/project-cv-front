import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddHobbyComponent } from './edit-add-hobby.component';

describe('EditAddHobbyComponent', () => {
  let component: EditAddHobbyComponent;
  let fixture: ComponentFixture<EditAddHobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddHobbyComponent]
    });
    fixture = TestBed.createComponent(EditAddHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
