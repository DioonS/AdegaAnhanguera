import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhosRoseComponent } from './vinhos-rose.component';

describe('VinhosRoseComponent', () => {
  let component: VinhosRoseComponent;
  let fixture: ComponentFixture<VinhosRoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinhosRoseComponent]
    });
    fixture = TestBed.createComponent(VinhosRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
