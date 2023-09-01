import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoAcoolicosComponent } from './nao-acoolicos.component';

describe('NaoAcoolicosComponent', () => {
  let component: NaoAcoolicosComponent;
  let fixture: ComponentFixture<NaoAcoolicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoAcoolicosComponent]
    });
    fixture = TestBed.createComponent(NaoAcoolicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
