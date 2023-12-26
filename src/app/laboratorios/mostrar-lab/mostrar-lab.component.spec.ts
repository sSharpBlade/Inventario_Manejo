import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLabComponent } from './mostrar-lab.component';

describe('MostrarLabComponent', () => {
  let component: MostrarLabComponent;
  let fixture: ComponentFixture<MostrarLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
