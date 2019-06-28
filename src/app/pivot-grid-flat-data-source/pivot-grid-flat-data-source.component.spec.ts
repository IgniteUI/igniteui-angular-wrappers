import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotGridFlatDataSourceComponent } from './pivot-grid-flat-data-source.component';

describe('PivotGridFlatDataSourceComponent', () => {
  let component: PivotGridFlatDataSourceComponent;
  let fixture: ComponentFixture<PivotGridFlatDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotGridFlatDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotGridFlatDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
