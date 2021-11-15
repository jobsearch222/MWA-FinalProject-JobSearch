import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddJobDetailsPageComponent } from './employer-add-job-details-page.component';

describe('EmployerAddJobDetailsPageComponent', () => {
  let component: EmployerAddJobDetailsPageComponent;
  let fixture: ComponentFixture<EmployerAddJobDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerAddJobDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddJobDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
