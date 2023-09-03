import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaButtonsComponent } from './cerveja-buttons.component';

describe('CervejaButtonsComponent', () => {
  let component: CervejaButtonsComponent;
  let fixture: ComponentFixture<CervejaButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CervejaButtonsComponent]
    });
    fixture = TestBed.createComponent(CervejaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
