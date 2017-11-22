import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-pivot-data-selector",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceOptions","deferUpdate","dragAndDropSettings","dropDownParent","disableRowsDropArea","disableColumnsDropArea","disableMeasuresDropArea","disableFiltersDropArea","customMoveValidation"],
	outputs: ["dataSelectorRendered","dataSourceInitialized","dataSourceUpdated","deferUpdateChanged","dragStart","drag","dragStop","metadataDropping","metadataDropped","metadataRemoving","metadataRemoved","filterDropDownOpening","filterDropDownOpened","filterMembersLoaded","filterDropDownOk","filterDropDownClosing","filterDropDownClosed"]
})
export class IgPivotDataSelectorComponent extends IgControlBase<IgPivotDataSelector> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } 

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