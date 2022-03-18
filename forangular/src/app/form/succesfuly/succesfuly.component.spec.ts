import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulyComponent } from './succesfuly.component';

describe('SuccesfulyComponent', () => {
  let component: SuccesfulyComponent;
  let fixture: ComponentFixture<SuccesfulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
