import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLabComponent } from './delete-lab.component';

describe('DeleteLabComponent', () => {
  let component: DeleteLabComponent;
  let fixture: ComponentFixture<DeleteLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
