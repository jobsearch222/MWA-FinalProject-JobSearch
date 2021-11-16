import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddEmpDetailsPageComponent } from './employer-add-emp-details-page.component';

describe('EmployerAddEmpDetailsPageComponent', () => {
  let component: EmployerAddEmpDetailsPageComponent;
  let fixture: ComponentFixture<EmployerAddEmpDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerAddEmpDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddEmpDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
