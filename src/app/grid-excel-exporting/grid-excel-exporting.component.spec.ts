import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExcelExportingComponent } from './grid-excel-exporting.component';

describe('GridExcelExportingComponent', () => {
  let component: GridExcelExportingComponent;
  let fixture: ComponentFixture<GridExcelExportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExcelExportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExcelExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
