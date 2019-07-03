// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

export function main() {
    describe('Infragistics Angular2 Upload', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ Infragistics.IgUploadComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-upload widgetId="upload"></ig-upload></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgUploadComponent)
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

    @ViewChild(Infragistics.IgUploadComponent, {static: true}) public viewChild: Infragistics.IgUploadComponent;

    constructor() {
    }
}