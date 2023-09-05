import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoAlcoolicosButtonsComponent } from './nao-alcoolicos-buttons.component';

describe('NaoAlcoolicosButtonsComponent', () => {
  let component: NaoAlcoolicosButtonsComponent;
  let fixture: ComponentFixture<NaoAlcoolicosButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoAlcoolicosButtonsComponent]
    });
    fixture = TestBed.createComponent(NaoAlcoolicosButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
