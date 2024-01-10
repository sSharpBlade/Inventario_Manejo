import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertecComponent } from './vertec.component';

describe('VertecComponent', () => {
  let component: VertecComponent;
  let fixture: ComponentFixture<VertecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VertecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
