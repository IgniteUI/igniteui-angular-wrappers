
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 Sparkline', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ Infragistics.IgSparklineComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-sparkline widgetId="sparkLine" [(options)]="opts"></ig-sparkline></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgSparklineComponent)
                    .toBe(true);
                done();
            });
        });

        it('should allow initializing data source as a top level option', (done) => {
            var template = '<div><ig-sparkline [widgetId]="\'sparkLine\'" [(dataSource)]="data"></ig-sparkline></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#sparkLine").igSparkline("option", "dataSource")[0].ExtendedPrice)
                    .toBe(168.0000);
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
    private data: any[];

    @ViewChild(Infragistics.IgSparklineComponent, {static: false}) public viewChild: Infragistics.IgSparklineComponent;

    constructor() {
        this.data = [{ "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 168.0000, "Freight": 32.3800 }];

        this.opts = {
            dataSource: [
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 168.0000, "Freight": 32.3800 },
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 98.0000, "Freight": 32.3800 },
                { "OrderDate": "\/Date(836452800000)\/", "ExtendedPrice": 174.0000, "Freight": 32.3800 }],
            height: "100px",
            width: "300px",
            valueMemberPath: 'ExtendedPrice',
            labelMemberPath: 'OrderDate'
        };
    }
}