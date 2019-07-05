// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as IG from '../../public-api';

describe('Infragistics Angular DataSource', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        var template = '';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template: template
            }
        });
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            expect(fixture.debugElement.componentInstance.source instanceof Infragistics.DataSource)
                .toBe(true);
            fixture.debugElement.componentInstance.source.dataBind();
            expect(fixture.debugElement.componentInstance.source.dataView().length)
                .toBe(3);
            done();
        });
    });
});

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    private source: Infragistics.DataSource;
    data: Array<any> = [
        { "Name": "John Smith", "Age": 45 },
        { "Name": "Mary Johnson", "Age": 32 },
        { "Name": "Bob Ferguson", "Age": 27 }
    ];
    constructor() {
        let opts = {
            type: "json",
            dataSource: this.data
        };
        //this.source = new IgDataSource(this.opts);
        this.source = new Infragistics.DataSource(opts);
    }
}