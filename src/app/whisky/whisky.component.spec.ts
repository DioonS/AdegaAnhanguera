import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskyComponent } from './whisky.component';

describe('WhiskyComponent', () => {
  let component: WhiskyComponent;
  let fixture: ComponentFixture<WhiskyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiskyComponent]
    });
    fixture = TestBed.createComponent(WhiskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
