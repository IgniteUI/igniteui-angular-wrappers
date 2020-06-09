// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular RadialMenu', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ Infragistics.IgRadialMenuComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-radial-menu [widgetId]="\'rmenu\'" [(options)]="opts"></ig-radial-menu></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgRadialMenuComponent)
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

    @ViewChild(Infragistics.IgRadialMenuComponent, {static: true}) public viewChild: Infragistics.IgRadialMenuComponent;

    constructor() {
        this.opts = {
            width: '300px',
            height: '300px',
            items:
            [
                {
                    name: 'button1',
                    header: 'Bold'
                },

                {
                    name: 'button2',
                    header: 'Italic'
                },

                {
                    type: 'coloritem',
                    header: 'Color',
                    items:
                    [
                        {
                            type: 'colorwell',
                            color: '#FFFF00'
                        },
                        {
                            type: 'colorwell',
                            color: '#C00000'
                        },
                        {
                            type: 'colorwell',
                            color: '#008000'
                        },
                        {
                            type: 'colorwell',
                            color: '#002060'
                        },
                        {
                            type: 'colorwell',
                            color: '#000000'
                        }
                    ]
                },
                {
                    type: 'numericgauge',
                    wedgeSpan: '5',
                    ticks: '8,9,10,11,12,13,14,16,18,20,22,24,26,28,36,48',
                    value: '16'
                }
            ]
        };
    }
}
