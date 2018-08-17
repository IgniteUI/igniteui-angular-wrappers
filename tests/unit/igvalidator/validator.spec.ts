// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 Validator', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ Infragistics.IgValidatorComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-validator widgetId="validator" [(options)]="opts"></ig-validator><input id="validator"/></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgValidatorComponent)
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

    @ViewChild(Infragistics.IgValidatorComponent) public viewChild: Infragistics.IgValidatorComponent;

    constructor() {
        this.opts = { required: true };
    }
}