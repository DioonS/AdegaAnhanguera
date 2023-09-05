import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoAlcoolicosComponent } from './nao-alcoolicos.component';

describe('NaoAlcoolicosComponent', () => {
  let component: NaoAlcoolicosComponent;
  let fixture: ComponentFixture<NaoAlcoolicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoAlcoolicosComponent]
    });
    fixture = TestBed.createComponent(NaoAlcoolicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
