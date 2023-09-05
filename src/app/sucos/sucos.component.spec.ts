import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucosComponent } from './sucos.component';

describe('SucosComponent', () => {
  let component: SucosComponent;
  let fixture: ComponentFixture<SucosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucosComponent]
    });
    fixture = TestBed.createComponent(SucosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
