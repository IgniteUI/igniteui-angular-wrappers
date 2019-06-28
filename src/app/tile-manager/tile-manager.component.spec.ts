import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileManagerComponent } from './tile-manager.component';

describe('TileManagerComponent', () => {
  let component: TileManagerComponent;
  let fixture: ComponentFixture<TileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
