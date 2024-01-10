import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartecComponent } from './agregartec.component';

describe('AgregartecComponent', () => {
  let component: AgregartecComponent;
  let fixture: ComponentFixture<AgregartecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregartecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregartecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
