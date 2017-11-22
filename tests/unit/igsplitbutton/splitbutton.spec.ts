// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../dist/npm/index';

export function main() {
    describe('Infragistics Angular2 SplitButton', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ Infragistics.IgSplitButtonComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-split-button widgetId="splButton" [(options)]="opts"></ig-split-button></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgSplitButtonComponent)
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

    @ViewChild(Infragistics.IgSplitButtonComponent) public viewChild: Infragistics.IgSplitButtonComponent;

    constructor() {
        this.opts = {
            items: [{
                name: "InsertUnorderedList",
                label: "Bullets",
                icon: "ui-igbutton-unorderedlist"
            }, {
                    name: "InsertOrderedList",
                    label: "Numbering",
                    icon: "ui-igbutton-orderedlist"
                }],
            defaultItemName: "InsertUnorderedList"
        };
    }
}