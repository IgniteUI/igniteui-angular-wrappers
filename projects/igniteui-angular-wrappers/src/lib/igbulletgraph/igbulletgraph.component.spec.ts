import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IgBulletGraphComponent } from '../../public-api';
import { Component, ViewChild } from '@angular/core';

describe('Infragistics Angular BulletGraph', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(waitForAsync(() => {
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
    template: `<div><ig-bullet-graph widgetId="bulletGraph" [(options)]="opts"></ig-bullet-graph></div>`,
    standalone: false
})
class TestComponent {
    @ViewChild(IgBulletGraphComponent) bulletgraph: IgBulletGraphComponent;
    public opts = {
        width: '100%',
        height: '80px',
        ranges: [
            {
                brush: '#803E01',
                name: 'Bad',
                startValue: 0,
                endValue: 3000
            },
            {
                brush: '#BA5A05',
                name: 'Acceptable',
                startValue: 3000,
                endValue: 4000
            },
            {
                brush: '#FF7A04',
                name: 'Good',
                startValue: 4000,
                endValue: 10000
            }
        ],
        minimumValue: 0,
        maximumValue: 10000,
        value: 5000,
        valueInnerExtent: 0.5,
        valueOuterExtent: 0.65,
        targetValue: 6000,
        targetValueBreadth: 12,
        showToolTip: true
    };
}
