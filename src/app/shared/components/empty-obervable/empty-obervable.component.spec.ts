import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyObervableComponent } from './empty-obervable.component';

describe('EmptyObervableComponent', () => {
  let component: EmptyObervableComponent;
  let fixture: ComponentFixture<EmptyObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyObervableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
