import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmUpObservableComponent } from './warm-up-observable.component';

describe('WarmUpObservableComponent', () => {
  let component: WarmUpObservableComponent;
  let fixture: ComponentFixture<WarmUpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmUpObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmUpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
