import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelosButtonsComponent } from './gelos-buttons.component';

describe('GelosButtonsComponent', () => {
  let component: GelosButtonsComponent;
  let fixture: ComponentFixture<GelosButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GelosButtonsComponent]
    });
    fixture = TestBed.createComponent(GelosButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
