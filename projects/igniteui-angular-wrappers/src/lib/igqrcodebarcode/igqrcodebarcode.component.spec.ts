// tslint:disable-next-line:max-line-length
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular QRBarCode', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Infragistics.IgQRCodeBarcodeComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-q-r-code-barcode [widgetId]="\'bCode\'" [(options)]="opts"></ig-q-r-code-barcode></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgQRCodeBarcodeComponent)
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

    @ViewChild(Infragistics.IgQRCodeBarcodeComponent, { static: true }) public viewChild: Infragistics.IgQRCodeBarcodeComponent;

    constructor() {
        this.opts = {
            height: '300px',
            width: '100%',
            data: 'http://www.infragistics.com/products/jquery/samples'
        };
    }
}
