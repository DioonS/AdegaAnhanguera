import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhosButtonsComponent } from './vinhos-buttons.component';

describe('VinhosButtonsComponent', () => {
  let component: VinhosButtonsComponent;
  let fixture: ComponentFixture<VinhosButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinhosButtonsComponent]
    });
    fixture = TestBed.createComponent(VinhosButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
