// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../dist/npm/index';

export function main() {
    describe('Infragistics Angular2 LayoutManager', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgLayoutManagerComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-layout-manager widgetId="layoutManager1" [(options)]="opts"></ig-layout-manager></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgLayoutManagerComponent)
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
    private cdi = 10;

    @ViewChild(Infragistics.IgLayoutManagerComponent) public viewChild: Infragistics.IgLayoutManagerComponent;

    constructor() {
        this.opts = {
        };
    }
}