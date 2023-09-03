import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatasComponent } from './latas.component';

describe('LatasComponent', () => {
  let component: LatasComponent;
  let fixture: ComponentFixture<LatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatasComponent]
    });
    fixture = TestBed.createComponent(LatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
