import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerAddComponent } from './job-seeker-add.component';

describe('JobSeekerAddComponent', () => {
  let component: JobSeekerAddComponent;
  let fixture: ComponentFixture<JobSeekerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
