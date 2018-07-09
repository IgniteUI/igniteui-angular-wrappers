import { Component, Renderer, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-pivot-grid",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceOptions","deferUpdate","isParentInFrontForColumns","isParentInFrontForRows","compactColumnHeaders","compactRowHeaders","rowHeadersLayout","compactColumnHeaderIndentation","compactRowHeaderIndentation","rowHeaderLinkGroupIndentation","treeRowHeaderIndentation","defaultRowHeaderWidth","allowSorting","firstSortDirection","allowHeaderRowsSorting","allowHeaderColumnsSorting","levelSortDirections","defaultLevelSortBehavior","firstLevelSortDirection","gridOptions","dragAndDropSettings","dropDownParent","disableRowsDropArea","disableColumnsDropArea","disableMeasuresDropArea","disableFiltersDropArea","hideRowsDropArea","hideColumnsDropArea","hideMeasuresDropArea","hideFiltersDropArea","customMoveValidation"],
	outputs: ["dataSourceInitialized","dataSourceUpdated","pivotGridHeadersRendered","pivotGridRendered","tupleMemberExpanding","tupleMemberExpanded","tupleMemberCollapsing","tupleMemberCollapsed","sorting","sorted","headersSorting","headersSorted","dragStart","drag","dragStop","metadataDropping","metadataDropped","metadataRemoving","metadataRemoved","filterDropDownOpening","filterDropDownOpened","filterMembersLoaded","filterDropDownOk","filterDropDownClosing","filterDropDownClosed"]
})
export class IgPivotGridComponent extends IgControlBase<IgPivotGrid> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }	public option(): void { return; } ;

    ngOnInit() {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        super.ngOnInit();
    }

	/**
 	 * Returns the igGrid instance used to render the OLAP data.
	 */
	public grid(): Object { return; } ;

	/**
 	 * Triggers an update on the data source and the igPivotGrid.
	 */
	public updateGrid(): void { return; } ;

	/**
 	 * Expands a member from the data source and returns true if the expand succeeds. If the data source has a pending update, the method will return false. Note that igPivotGrid to will display the expanded result after the data source is updated.
	 *
	 * @param tupleLocation The name of the parent axis - 'columnAxis' or 'rowAxis'.
	 * @param tupleIndex The index of the containing tuple. This index should correspond to the position of the tuple in the original unsorted result of the data source.
	 * @param memberIndex The index of the member in the tuple. This index should correspond to the position of the member in the original unsorted result of the data source.
	 * @param shouldUpdate A flag indicating whether the data source should be updated after the expand.
	 */
	public expandTupleMember(tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean { return; } ;

	/**
 	 * Collapses a member from the data source and returns true if the collapse succeeds. If the data source has a pending update, the method will return false. Note that igPivotGrid to will display the expanded result after the data source is updated.
	 *
	 * @param tupleLocation The name of the parent axis - 'columnAxis' or 'rowAxis'.
	 * @param tupleIndex The index of the containing tuple. This index should correspond to the position of the tuple in the original unsorted result of the data source.
	 * @param memberIndex The index of the member in the tuple. This index should correspond to the position of the member in the original unsorted result of the data source.
	 * @param shouldUpdate A flag indicating whether the data source should be updated after the expand.
	 */
	public collapseTupleMember(tupleLocation: string, tupleIndex: number, memberIndex: number, shouldUpdate?: boolean): boolean { return; } ;

	/**
 	 * Returns an array with the applied sort directions on the igPivotGrid's columns. The returned array contains objects with the following properties:
	 *             memberNames: The names of the members in the tuple.
	 *             tupleIndex: The index of the tuple on the column axis in the original unsorted result.
	 *             sortDirection: The direction of the sort - ascending or descending.
	 */
	public appliedColumnSortDirections(): any[] { return; } ;

	/**
 	 * Returns an array with the applied level sort direction items, which were used for the sorting of the header cells. The returned array contains objects with the following properties:
	 *             levelUniqueName: Specifies the unique name of the level, which was sorted.
	 *             sortDirection: The direction of the header sort - ascending or descending.
	 */
	public appliedLevelSortDirections(): any[] { return; } ;

	/**
 	 * Destroy is part of the jQuery UI widget API and does the following:
	 *             1. Remove custom CSS classes that were added.
	 *             2. Unwrap any wrapping elements such as scrolling divs and other containers.
	 *             3. Unbind all events that were bound.
	 */
	public destroy(): void { return; } ;
 }

