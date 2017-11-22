// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../dist/npm/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 RadialGauge', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ Infragistics.IgRadialGaugeComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-radial-gauge  [widgetId]="\'gauge\'" [(options)]="opts"></ig-radial-gauge></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgRadialGaugeComponent)
                    .toBe(true);
                done();
            });
        });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;
    @ViewChild(Infragistics.IgRadialGaugeComponent) public viewChild: Infragistics.IgRadialGaugeComponent;

    constructor() {


        this.opts = {
            height: "500px",
            width: "500px",
            minimumValue: "0",
            maximumValue: "10",
            value: "10",

            //Scale Settings
            scaleStartAngle: "180",
            scaleEndAngle: "0",
            scaleBrush: "transparent",

            //Backing Settings
            backingShape: "fitted",
            backingOutline: "rgba(22, 169, 231, 1)",
            backingBrush: "rgba(224, 224, 224, 1)",

            transitionDuration: "3000",

            //Needle Settings
            needleShape: "needle",
            needlePivotShape: "circleOverlay",
            needleEndExtent: "0.55",
            needlePointFeatureExtent: "0.3",
            needlePivotWidthRatio: "0.2",

            //TickMark Settings
            tickBrush: "rgba(160, 160, 160, 1)",
            minorTickBrush: "gray",

            //Label Settings
            labelExtent: "0.7"
        };
    }
}