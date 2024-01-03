import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabUserComponent } from './lab-user.component';

describe('LabUserComponent', () => {
  let component: LabUserComponent;
  let fixture: ComponentFixture<LabUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
