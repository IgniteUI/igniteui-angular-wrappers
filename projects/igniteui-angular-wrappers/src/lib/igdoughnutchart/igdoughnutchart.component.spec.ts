// tslint:disable-next-line:max-line-length
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/Angular/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular DoughnutChart', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgDoughnutChartComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-doughnut-chart  widgetId="chart1" [(options)]="opts" ></ig-doughnut-chart></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDoughnutChartComponent).toBe(true);
            done();
        });
    });

    it('should allow initializing data source as a top level option', (done) => {
        const template = '<div><ig-doughnut-chart  [widgetId]="\'chart1\'" [(dataSource)]="data"></ig-doughnut-chart></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#chart1').igDoughnutChart('option', 'dataSource')[0].Pop1990)
                .toBe(1141);
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
    private data: any;

    @ViewChild(Infragistics.IgDoughnutChartComponent, { static: true }) public viewChild: Infragistics.IgDoughnutChartComponent;

    constructor() {
        this.data = [
            { CountryName: 'China', Pop1990: 1141, Pop2008: 1333, Pop2025: 1458 },
            { CountryName: 'India', Pop1990: 849, Pop2008: 1140, Pop2025: 1398 },
            { CountryName: 'United States', Pop1990: 250, Pop2008: 304, Pop2025: 352 },
            { CountryName: 'Indonesia', Pop1990: 178, Pop2008: 228, Pop2025: 273 },
            { CountryName: 'Brazil', Pop1990: 150, Pop2008: 192, Pop2025: 223 }
        ];
        this.opts = {
            width: '500px',
            height: '500px',
            series:
                [{
                    name: 'Pop1990',
                    labelMemberPath: 'CountryName',
                    valueMemberPath: 'Pop1990',
                    dataSource: this.data
                }]
        };
    }
}
