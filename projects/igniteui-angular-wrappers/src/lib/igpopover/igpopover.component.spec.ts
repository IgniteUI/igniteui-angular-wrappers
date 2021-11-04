// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular Popover', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgPopoverComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-popover [widgetId]="\'popover\'" [(options)]="opts"></ig-popover></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPopoverComponent)
                .toBe(true);
            done();
        });
    });

    it('should initialize correctly when having a target element', (done) => {
        const template = '<div><ig-popover [widgetId]="\'popover\'" [(options)]="opts"></ig-popover><input id="popover"/></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPopoverComponent)
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

    @ViewChild(Infragistics.IgPopoverComponent, { static: true }) public viewChild: Infragistics.IgPopoverComponent;

    constructor() {
        this.opts = {
            contentTemplate: '<div>Test Content</div>'
        };
    }
}
