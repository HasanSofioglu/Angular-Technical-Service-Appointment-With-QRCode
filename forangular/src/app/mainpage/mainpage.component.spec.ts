import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

import { MainpageComponent } from './mainpage.component';
import { HttpClientModule } from '@angular/common/http';
describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageComponent ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        FormComponent,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
