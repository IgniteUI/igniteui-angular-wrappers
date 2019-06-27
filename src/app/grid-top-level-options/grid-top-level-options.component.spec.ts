import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTopLevelOptionsComponent } from './grid-top-level-options.component';

describe('GridTopLevelOptionsComponent', () => {
  let component: GridTopLevelOptionsComponent;
  let fixture: ComponentFixture<GridTopLevelOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTopLevelOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTopLevelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
