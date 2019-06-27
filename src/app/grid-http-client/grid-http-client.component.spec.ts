import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHttpClientComponent } from './grid-http-client.component';

describe('GridHttpClientComponent', () => {
  let component: GridHttpClientComponent;
  let fixture: ComponentFixture<GridHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
