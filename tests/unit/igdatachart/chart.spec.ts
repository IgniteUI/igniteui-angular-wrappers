// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 DataChart and Zoombar', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgDataChartComponent, Infragistics.IgZoombarComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDataChartComponent)
                    .toBe(true);
                done();
            });
        });

        it('should recreate correctly', (done) => {
            var template = '<div><ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts"></ig-data-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.opts = fixture.componentInstance.opts1;
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#datachart1").igDataChart("option", "series")[0].type)
                    .toBe("line");
                done();
            });
        });

        it('should allow setting new data source', (done) => {
            var template = '<div><ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts" [(dataSource)]="data"></ig-data-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.data = [
                    { "CountryName": "China", "Pop1995": 6768, "Pop2005": 7654, "Pop2015": 7655, "Pop2025": 8655 }
                ];
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#datachart1").igDataChart("option", "dataSource")[0].Pop1995)
                    .toBe(6768);
                done();
            });
        });

        it('Zoombar should initialize correctly', (done) => {
            var template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart><ig-zoombar [(options)]="zoombarOpts" widgetId="zoombar"></ig-zoombar></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild2 instanceof Infragistics.IgZoombarComponent)
                    .toBe(true);
                done();
            });
        });

        it('should allow initializing data source as a top level option', (done) => {
            var template = '<div><ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts2" [(dataSource)]="data"></ig-data-chart></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#datachart1").igDataChart("option", "dataSource")[0].Pop1995)
                    .toBe(1216);
                done();
            });
        });

        it('Zoombar should destroy correctly', (done) => {
            var template = '<div><div *ngIf="isChartAreaVisible"><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart><ig-zoombar [(options)]="zoombarOpts" widgetId="zoombar"></ig-zoombar></div></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                fixture.componentInstance.isChartAreaVisible = false;
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#datachart1").data("igDataChart")).toBeUndefined();
                expect($(fixture.debugElement.nativeElement).find("#zoombar").data("igZoombar")).toBeUndefined();
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
    public opts: any;
    public opts1: any;
    public opts2: any;
    private zoombarOpts: any;
    public data: Array<any>;
    public isChartAreaVisible: boolean = true;
    @ViewChild(Infragistics.IgDataChartComponent) public viewChild: Infragistics.IgDataChartComponent;
    @ViewChild(Infragistics.IgZoombarComponent) public viewChild2: Infragistics.IgZoombarComponent;

    constructor() {
        this.data = [{
            "CountryName": "China",
            "Pop1995": 1216,
            "Pop2005": 1297,
            "Pop2015": 1361,
            "Pop2025": 1394
        }];
        this.opts = {
            dataSource: this.data,
            axes: [{
                name: "NameAxis",
                type: "categoryX",
                title: "Country",
                label: "CountryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumvalue: 0,
                title: "Milions of People"
            }],
            series: [{
                name: "2015Population",
                type: "column",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2015"
            }]
        };

        this.opts1 = {
            dataSource: this.data,
            axes: [{
                name: "NameAxis",
                type: "categoryX",
                title: "Country",
                label: "CountryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumvalue: 0,
                title: "Milions of People"
            }],
            series: [{
                name: "2015Population",
                type: "line",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2015"
            }]
        };
        this.opts2 = {
            axes: [{
                name: "NameAxis",
                type: "categoryX",
                title: "Country",
                label: "CountryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumvalue: 0,
                title: "Milions of People"
            }],
            series: [{
                name: "2015Population",
                type: "column",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2015"
            }]
        };
        this.zoombarOpts = {
            target: "#datachart1"
        };
    }
}