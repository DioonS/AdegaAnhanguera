import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelosComponent } from './gelos.component';

describe('GelosComponent', () => {
  let component: GelosComponent;
  let fixture: ComponentFixture<GelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GelosComponent]
    });
    fixture = TestBed.createComponent(GelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
