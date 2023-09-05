import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeloDeCocoComponent } from './gelo-de-coco.component';

describe('GeloDeCocoComponent', () => {
  let component: GeloDeCocoComponent;
  let fixture: ComponentFixture<GeloDeCocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeloDeCocoComponent]
    });
    fixture = TestBed.createComponent(GeloDeCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
