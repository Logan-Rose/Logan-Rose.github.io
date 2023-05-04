import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapDemoComponent } from './heatmap-demo.component';

describe('HeatmapDemoComponent', () => {
  let component: HeatmapDemoComponent;
  let fixture: ComponentFixture<HeatmapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
