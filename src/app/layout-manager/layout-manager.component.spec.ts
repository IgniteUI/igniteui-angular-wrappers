import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutManagerComponent } from './layout-manager.component';

describe('LayoutManagerComponent', () => {
  let component: LayoutManagerComponent;
  let fixture: ComponentFixture<LayoutManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
