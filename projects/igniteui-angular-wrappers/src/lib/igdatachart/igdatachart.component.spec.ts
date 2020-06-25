import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgZoombarComponent, IgDataChartComponent } from '../../public-api';
import { Component, ViewChild } from '@angular/core';

describe('Infragistics Angular DataChart and Zoombar', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IgDataChartComponent, IgZoombarComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof IgDataChartComponent)
                .toBe(true);
            done();
        });
    });

    it('should recreate correctly', (done) => {
        const template = '<div><ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts"></ig-data-chart></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            fixture.componentInstance.opts = fixture.componentInstance.opts1;
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#datachart1').igDataChart('option', 'series')[0].type)
                .toBe('line');
            done();
        });
    });

    it('should allow setting new data source', (done) => {
        const template = '<div><ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts" [(dataSource)]="data"></ig-data-chart></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            fixture.componentInstance.data = [
                { CountryName: 'China', Pop1995: 6768, Pop2005: 7654, Pop2015: 7655, Pop2025: 8655 }
            ];
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#datachart1').igDataChart('option', 'dataSource')[0].Pop1995)
                .toBe(6768);
            done();
        });
    });

    it('Zoombar should initialize correctly', (done) => {
        const template = '<div><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart><ig-zoombar [(options)]="zoombarOpts" widgetId="zoombar"></ig-zoombar></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild2 instanceof IgZoombarComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow initializing data source as a top level option', (done) => {
        const template = `<div>
          <ig-data-chart  [widgetId]="\'datachart1\'" [(options)]="opts2" [(dataSource)]="data"></ig-data-chart></div>`;
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#datachart1').igDataChart('option', 'dataSource')[0].Pop1995)
                .toBe(1216);
            done();
        });
    });

    it('Zoombar should destroy correctly', (done) => {
        const template = '<div><div *ngIf="isChartAreaVisible"><ig-data-chart  widgetId="datachart1" [(options)]="opts"></ig-data-chart><ig-zoombar [(options)]="zoombarOpts" widgetId="zoombar"></ig-zoombar></div></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            fixture.componentInstance.isChartAreaVisible = false;
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#datachart1').data('igDataChart')).toBeUndefined();
            expect($(fixture.debugElement.nativeElement).find('#zoombar').data('igZoombar')).toBeUndefined();
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    public opts: any;
    public opts1: any;
    public opts2: any;
    private zoombarOpts: any;
    public data: Array<any>;
    public isChartAreaVisible = true;
    @ViewChild(IgDataChartComponent, {static: true}) public viewChild: IgDataChartComponent;
    @ViewChild(IgZoombarComponent, {static: true}) public viewChild2: IgZoombarComponent;

    constructor() {
        this.data = [{
            CountryName: 'China',
            Pop1995: 1216,
            Pop2005: 1297,
            Pop2015: 1361,
            Pop2025: 1394
        }];
        this.opts = {
            dataSource: this.data,
            axes: [{
                name: 'NameAxis',
                type: 'categoryX',
                title: 'Country',
                label: 'CountryName'
            },
            {
                name: 'PopulationAxis',
                type: 'numericY',
                minimumvalue: 0,
                title: 'Milions of People'
            }],
            series: [{
                name: '2015Population',
                type: 'column',
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: 'NameAxis',
                yAxis: 'PopulationAxis',
                valueMemberPath: 'Pop2015'
            }]
        };

        this.opts1 = {
            dataSource: this.data,
            axes: [{
                name: 'NameAxis',
                type: 'categoryX',
                title: 'Country',
                label: 'CountryName'
            },
            {
                name: 'PopulationAxis',
                type: 'numericY',
                minimumvalue: 0,
                title: 'Milions of People'
            }],
            series: [{
                name: '2015Population',
                type: 'line',
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: 'NameAxis',
                yAxis: 'PopulationAxis',
                valueMemberPath: 'Pop2015'
            }]
        };
        this.opts2 = {
            axes: [{
                name: 'NameAxis',
                type: 'categoryX',
                title: 'Country',
                label: 'CountryName'
            },
            {
                name: 'PopulationAxis',
                type: 'numericY',
                minimumvalue: 0,
                title: 'Milions of People'
            }],
            series: [{
                name: '2015Population',
                type: 'column',
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: 'NameAxis',
                yAxis: 'PopulationAxis',
                valueMemberPath: 'Pop2015'
            }]
        };
        this.zoombarOpts = {
            target: '#datachart1'
        };
    }
}
