import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejasUnitarioComponent } from './cervejas-unitario.component';

describe('CervejasUnitarioComponent', () => {
  let component: CervejasUnitarioComponent;
  let fixture: ComponentFixture<CervejasUnitarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CervejasUnitarioComponent]
    });
    fixture = TestBed.createComponent(CervejasUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
