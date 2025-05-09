// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/Angular/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular Dialog', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgDialogComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
        const template = '<div><ig-dialog widgetId="dialog" [(options)]="opts"><div>Test Content</div></ig-dialog></div>';
        TestBed.overrideComponent(TestComponent, {
                set: {
                    template
                }
            });
        TestBed.compileComponents().then(() => {
                const fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDialogComponent)
                    .toBe(true);
                expect($(fixture.debugElement.nativeElement).find('#dialog').igDialog('content')[0].innerHTML)
                .toBe('<div>Test Content</div>');
                done();
            });
        });

    });

@Component({
    selector: 'test-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgDialogComponent, {static: true}) public viewChild: Infragistics.IgDialogComponent;

    constructor() {
        this.opts = {
            headerText : 'Header Text',
            height: '500px'
        };
    }
}
