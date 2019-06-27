import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Input } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-pivot-data-selector",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceOptions","deferUpdate","dragAndDropSettings","dropDownParent","disableRowsDropArea","disableColumnsDropArea","disableMeasuresDropArea","disableFiltersDropArea","customMoveValidation"],
    outputs: ["dataSelectorRendered","dataSourceInitialized","dataSourceUpdated","deferUpdateChanged","dragStart","drag","dragStop","metadataDropping","metadataDropped","metadataRemoving","metadataRemoved","filterDropDownOpening","filterDropDownOpened","filterMembersLoaded","filterDropDownOk","filterDropDownClosing","filterDropDownClosed"]
})
export class IgPivotDataSelectorComponent extends IgControlBase<IgPivotDataSelector> { 
    constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }	public option(): void { return; } ;

    @Input()
    public set dataSource(value: any) {
        this._dataSource = value;
        const widget = jQuery(this._el).data(this._widgetName);
        if (widget) {
            jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
        }
    };

    private _dataSource: any;

    ngOnInit() {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        super.ngOnInit();
    }

    /**
     * Updates the data source.
     */
    public update(): void { return; } ;

    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     *                 1. Remove custom CSS classes that were added.
     *                 2. Unwrap any wrapping elements such as scrolling divs and other containers.
     *                 3. Unbind all events that were bound.
     */
    public destroy(): void { return; } ;
}