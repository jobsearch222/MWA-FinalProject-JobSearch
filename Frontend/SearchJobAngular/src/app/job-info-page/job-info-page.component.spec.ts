import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInfoPageComponent } from './job-info-page.component';

describe('JobInfoPageComponent', () => {
  let component: JobInfoPageComponent;
  let fixture: ComponentFixture<JobInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
