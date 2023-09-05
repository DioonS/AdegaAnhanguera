import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiladosButtonsComponent } from './destilados-buttons.component';

describe('DestiladosButtonsComponent', () => {
  let component: DestiladosButtonsComponent;
  let fixture: ComponentFixture<DestiladosButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestiladosButtonsComponent]
    });
    fixture = TestBed.createComponent(DestiladosButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
