import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiladosComponent } from './destilados.component';

describe('DestiladosComponent', () => {
  let component: DestiladosComponent;
  let fixture: ComponentFixture<DestiladosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestiladosComponent]
    });
    fixture = TestBed.createComponent(DestiladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
