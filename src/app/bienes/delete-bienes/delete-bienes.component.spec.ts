import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBienesComponent } from './delete-bienes.component';

describe('DeleteBienesComponent', () => {
  let component: DeleteBienesComponent;
  let fixture: ComponentFixture<DeleteBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteBienesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
