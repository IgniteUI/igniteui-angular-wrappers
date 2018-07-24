// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed  } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {

    describe('Infragistics Angular2 BulletGraph', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgBulletGraphComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            let template = '<div><ig-bullet-graph widgetId="bulletGraph" [(options)]="opts"></ig-bullet-graph></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            //TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgBulletGraphComponent)
                    .toBe(true);
                done();
            //});
        });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;
    
    @ViewChild(Infragistics.IgBulletGraphComponent) public viewChild: Infragistics.IgBulletGraphComponent;
    
    constructor() {
        this.opts = {
                height: "80px",
                width: "100%",
                minimumValue: 0,  
                maximumValue: 30,  
                value: 26,
                targetValue: 22,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 14
                    },
                    {
                        name: 'acceptable',
                        startValue: 14,
                        endValue: 25
                    },
                    {
                        name: 'good',
                        startValue: 25,
                        endValue: 30
                    }]
            }
    }
}