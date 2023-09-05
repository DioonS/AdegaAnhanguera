import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhosBrancoComponent } from './vinhos-branco.component';

describe('VinhosBrancoComponent', () => {
  let component: VinhosBrancoComponent;
  let fixture: ComponentFixture<VinhosBrancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinhosBrancoComponent]
    });
    fixture = TestBed.createComponent(VinhosBrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
