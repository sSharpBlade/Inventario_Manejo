import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBienesComponent } from './add-bienes.component';

describe('AddBienesComponent', () => {
  let component: AddBienesComponent;
  let fixture: ComponentFixture<AddBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBienesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
