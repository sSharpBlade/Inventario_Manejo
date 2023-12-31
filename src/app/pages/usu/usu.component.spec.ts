import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuComponent } from './usu.component';

describe('UsuComponent', () => {
  let component: UsuComponent;
  let fixture: ComponentFixture<UsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
