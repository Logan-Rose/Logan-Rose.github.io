import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveResumeComponent } from './live-resume.component';

describe('LiveResumeComponent', () => {
  let component: LiveResumeComponent;
  let fixture: ComponentFixture<LiveResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// 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
