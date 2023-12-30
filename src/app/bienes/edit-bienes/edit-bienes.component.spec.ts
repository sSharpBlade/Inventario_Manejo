import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBienesComponent } from './edit-bienes.component';

describe('EditBienesComponent', () => {
  let component: EditBienesComponent;
  let fixture: ComponentFixture<EditBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBienesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
