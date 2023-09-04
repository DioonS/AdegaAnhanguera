import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongNeckComponent } from './long-neck.component';

describe('LongNeckComponent', () => {
  let component: LongNeckComponent;
  let fixture: ComponentFixture<LongNeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongNeckComponent]
    });
    fixture = TestBed.createComponent(LongNeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
