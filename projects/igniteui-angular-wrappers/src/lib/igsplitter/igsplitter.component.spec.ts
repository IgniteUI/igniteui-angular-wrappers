// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular Splitter', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgSplitterComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-splitter widgetId="splitter" [(options)]="opts"></ig-splitter></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgSplitterComponent)
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

    @ViewChild(Infragistics.IgSplitterComponent, { static: true }) public viewChild: Infragistics.IgSplitterComponent;

    constructor() {
        this.opts = { height: '300px', panels: [{ size: 160, min: 100, max: 250 }] };
    }
}
