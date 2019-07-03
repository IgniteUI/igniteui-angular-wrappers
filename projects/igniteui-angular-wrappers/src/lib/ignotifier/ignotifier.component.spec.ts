// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular Notifier', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgNotifierComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        var template = '<div><ig-notifier widgetId="notifier" [(options)]="opts"></ig-notifier></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template: template
            }
        });
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNotifierComponent)
                .toBe(true);
            done();
        });
    });

    it('should initialize correctly when having a target element', (done) => {
        var template = '<div><ig-notifier widgetId="successEditor" [(options)]="opts"></ig-notifier> <input id="successEditor"/></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template: template
            }
        });
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNotifierComponent)
                .toBe(true);
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgNotifierComponent, { static: true }) public viewChild: Infragistics.IgNotifierComponent;

    constructor() {
        this.opts = {
            contentTemplate: "<div>Test Content</div>"
        };
    }
}