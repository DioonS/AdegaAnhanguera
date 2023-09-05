import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhosTintoComponent } from './vinhos-tinto.component';

describe('VinhosTintoComponent', () => {
  let component: VinhosTintoComponent;
  let fixture: ComponentFixture<VinhosTintoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinhosTintoComponent]
    });
    fixture = TestBed.createComponent(VinhosTintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
