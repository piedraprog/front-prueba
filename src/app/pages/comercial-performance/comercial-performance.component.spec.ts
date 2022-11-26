import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialPerformanceComponent } from './comercial-performance.component';

describe('ComercialPerformanceComponent', () => {
  let component: ComercialPerformanceComponent;
  let fixture: ComponentFixture<ComercialPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercialPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
