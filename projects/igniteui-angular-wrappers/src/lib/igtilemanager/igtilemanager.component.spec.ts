// tslint:disable-next-line:max-line-length
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../public-api';

describe('Infragistics Angular TileManager', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ Infragistics.IgTileManagerComponent, TestComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-tile-manager widgetId="dashboard" [(options)]="opts" [changeDetectionInterval]="cdi" ></ig-tile-manager></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTileManagerComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow initializing data source as a top level option', (done) => {
        const template = '<div><ig-tile-manager [widgetId]="\'tm1\'" [(options)]="opts" [(dataSource)]="data"></ig-tile-manager></div>';
        TestBed.overrideComponent(TestComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            expect($(fixture.debugElement.nativeElement).find('#tm1').igTileManager('option', 'dataSource').data()[0].name)
                .toBe('foo');
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
    private cdi = 10;
    data: any[];

    @ViewChild(Infragistics.IgTileManagerComponent, {static: true}) public viewChild: Infragistics.IgTileManagerComponent;

    constructor() {
        this.data = [{name: 'foo'}];

        this.opts = {
            // dataSource: candidates.getData(),
            marginLeft: 10,
            marginTop: 10,
            rightPanelTilesWidth: 200,
            rightPanelTilesHeight: 156,
            maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p><div style="clear: both"><span class="color">Skills:</span></div><ul class="skills"></ul><div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
            minimizedState: '<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />'
        };
    }
}
