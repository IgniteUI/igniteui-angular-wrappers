import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotGridXmlaDataSourceComponent } from './pivot-grid-xmla-data-source.component';

describe('PivotGridXmlaDataSourceComponent', () => {
  let component: PivotGridXmlaDataSourceComponent;
  let fixture: ComponentFixture<PivotGridXmlaDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotGridXmlaDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotGridXmlaDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
