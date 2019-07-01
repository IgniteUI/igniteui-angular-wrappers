import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgBulletGraphComponent } from '../../public-api';
import { Component, ViewChild } from '@angular/core';

describe('Infragistics Angular2 BulletGraph', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IgBulletGraphComponent, TestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should initialize correctly', () => {
        expect(component).toBeTruthy();
        expect(fixture.debugElement.componentInstance.bulletgraph instanceof IgBulletGraphComponent)
            .toBe(true);
    });
});

@Component({
    template: `<div><ig-bullet-graph widgetId="bulletGraph" [(options)]="opts"></ig-bullet-graph></div>`
})
class TestComponent {
    @ViewChild(IgBulletGraphComponent, { static: false }) bulletgraph: IgBulletGraphComponent;
    public opts = {};
}
