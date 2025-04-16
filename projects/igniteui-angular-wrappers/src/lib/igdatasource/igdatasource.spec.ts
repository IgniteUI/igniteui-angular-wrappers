// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Infragistics Angular DataSource', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
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
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestComponent {
    private source: Infragistics.DataSource;
    data: Array<any> = [
        { Name: 'John Smith', Age: 45 },
        { Name: 'Mary Johnson', Age: 32 },
        { Name: 'Bob Ferguson', Age: 27 }
    ];
    constructor() {
        const opts = {
            type: 'json',
            dataSource: this.data
        };
        // this.source = new IgDataSource(this.opts);
        this.source = new Infragistics.DataSource(opts);
    }
}
