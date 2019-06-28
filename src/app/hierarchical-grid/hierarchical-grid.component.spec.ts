import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalGridComponent } from './hierarchical-grid.component';

describe('HierarchicalGridComponent', () => {
  let component: HierarchicalGridComponent;
  let fixture: ComponentFixture<HierarchicalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchicalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
