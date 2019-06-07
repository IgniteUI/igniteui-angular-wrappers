// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 Dialog', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgDialogComponent, TestComponent]
            });
        });
        
        it('should initialize correctly', (done) => {
        var template = '<div><ig-dialog widgetId="dialog" [(options)]="opts"><div>Test Content</div></ig-dialog></div>';
        TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDialogComponent)
                    .toBe(true);
                expect($(fixture.debugElement.nativeElement).find("#dialog").igDialog("content")[0].innerHTML)
                .toBe("<div>Test Content</div>");
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
    
    @ViewChild(Infragistics.IgDialogComponent, {static: true}) public viewChild: Infragistics.IgDialogComponent;
    
    constructor() {
        this.opts = {
            headerText : "Header Text",
            height: "500px"
        };
    }
}