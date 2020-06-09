// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular Linear Gauge', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgLinearGaugeComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-linear-gauge widgetId="lGauge" [(options)]="opts"></ig-linear-gauge></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgLinearGaugeComponent)
                .toBe(true);
            done();
        });
    });
});


@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgLinearGaugeComponent, { static: true }) public viewChild: Infragistics.IgLinearGaugeComponent;

    constructor() {
        this.opts = {
            height: '80px',
            width: '100%',
            value: 27,
            maximumValue: 30,
            ranges: [{ startValue: 0, endValue: 22, name: 'target' }]
        };
    }
}
