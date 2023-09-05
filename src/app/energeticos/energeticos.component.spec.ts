import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergeticosComponent } from './energeticos.component';

describe('EnergeticosComponent', () => {
  let component: EnergeticosComponent;
  let fixture: ComponentFixture<EnergeticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergeticosComponent]
    });
    fixture = TestBed.createComponent(EnergeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
