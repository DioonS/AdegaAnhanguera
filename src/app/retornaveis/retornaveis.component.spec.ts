import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornaveisComponent } from './retornaveis.component';

describe('RetornaveisComponent', () => {
  let component: RetornaveisComponent;
  let fixture: ComponentFixture<RetornaveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetornaveisComponent]
    });
    fixture = TestBed.createComponent(RetornaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
