// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular SplitButton', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgSplitButtonComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-split-button widgetId="splButton" [(options)]="opts"></ig-split-button></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgSplitButtonComponent)
                .toBe(true);
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

    @ViewChild(Infragistics.IgSplitButtonComponent, { static: true }) public viewChild: Infragistics.IgSplitButtonComponent;

    constructor() {
        this.opts = {
            items: [{
                name: 'InsertUnorderedList',
                label: 'Bullets',
                icon: 'ui-igbutton-unorderedlist'
            }, {
                name: 'InsertOrderedList',
                label: 'Numbering',
                icon: 'ui-igbutton-orderedlist'
            }],
            defaultItemName: 'InsertUnorderedList'
        };
    }
}
