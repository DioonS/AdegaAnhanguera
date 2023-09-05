import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeloComponent } from './gelo.component';

describe('GeloComponent', () => {
  let component: GeloComponent;
  let fixture: ComponentFixture<GeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeloComponent]
    });
    fixture = TestBed.createComponent(GeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
