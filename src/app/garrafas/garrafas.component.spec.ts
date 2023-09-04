import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrafasComponent } from './garrafas.component';

describe('GarrafasComponent', () => {
  let component: GarrafasComponent;
  let fixture: ComponentFixture<GarrafasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarrafasComponent]
    });
    fixture = TestBed.createComponent(GarrafasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
