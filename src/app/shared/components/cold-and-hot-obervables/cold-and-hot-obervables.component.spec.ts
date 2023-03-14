import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdAndHotObervablesComponent } from './cold-and-hot-obervables.component';

describe('ColdAndHotObervablesComponent', () => {
  let component: ColdAndHotObervablesComponent;
  let fixture: ComponentFixture<ColdAndHotObervablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdAndHotObervablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdAndHotObervablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
