import { Component, Renderer, IterableDiffers, ElementRef } from "@angular/core";
import { IgGridBase } from "../iggrid/iggridbase";

declare var jQuery:any;

@Component({
	selector: "ig-hierarchical-grid",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","initialDataBindDepth","initialExpandDepth","odata","rest","maxDataBindDepth","defaultChildrenDataProperty","autoGenerateLayouts","expandCollapseAnimations","expandColWidth","pathSeparator","animationDuration","expandTooltip","collapseTooltip","columnLayouts","width","height","autoAdjustHeight","avgRowHeight","avgColumnWidth","defaultColumnWidth","autoGenerateColumns","virtualization","virtualizationMode","requiresDataBinding","rowVirtualization","columnVirtualization","virtualizationMouseWheelStep","adjustVirtualHeights","templatingEngine","columns","dataSource","dataSourceUrl","dataSourceType","responseDataKey","responseTotalRecCountKey","requestType","responseContentType","showHeader","showFooter","fixedHeaders","fixedFooters","caption","features","tabIndex","localSchemaTransform","primaryKey","serializeTransactionLog","autoCommit","aggregateTransactions","autoFormat","renderCheckboxes","updateUrl","restSettings","alternateRowStyles","autofitLastColumn","enableHoverStyles","enableUTCDates","mergeUnboundColumns","jsonpRequest","enableResizeContainerCheck","featureChooserIconDisplay","scrollSettings"],
	outputs: ["rowExpanding","rowExpanded","rowCollapsing","rowCollapsed","childrenPopulating","childrenPopulated","childGridRendered","childGridCreating","childGridCreated","cellClick","cellRightClick","dataBinding","dataBound","rendering","rendered","dataRendering","dataRendered","headerRendering","headerRendered","footerRendering","footerRendered","headerCellRendered","rowsRendering","rowsRendered","schemaGenerated","columnsCollectionModified","requestError","created","destroyed"]
})
export class IgHierarchicalGridComponent extends IgGridBase<IgHierarchicalGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']"),
			childContainer = tr.next("tr[data-container]");

		if (tr.length > 0) {
			tr.remove();
			childContainer.remove();
			element.data("igGrid").dataSource.deleteRow(id, true);
			element.data("igGrid").dataSource._removeTransactionsByRecordId(id);
		}
	}

	ngDoCheck() {
		this.optionChange();
		if (this._differ != null && this._allowChangeDetection) {
			this._allowChangeDetection = false;
			var diff = [],
				element = jQuery(this._el),
				colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column,
				mainGrid = element.data("igGrid"),
				data = this._config.dataSource;

			//check for changes in collection
			if (!(this._config.dataSource instanceof Array)) {
				return;
			}
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._changes && mainGrid) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
				this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]));
			}
			//check for changes in data source values
			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						var childGrid = element.data(this._widgetName).allChildrenWidgets().filter(function (indx) {
							var parentRow = jQuery(this.element).closest('tr[data-container]').prev();
							var parentGridPK = parentRow.closest(".ui-iggrid-table").data("igGrid").options.primaryKey;
							return (this.options.childrenDataProperty === diff[i].txlog[j].key ||
								parentRow.next("[data-container]").find("table[role='grid']").attr("id").contains("_" + diff[i].txlog[j].key + "_"))
								&& parentRow.attr("data-id") == data[diff[i].index][parentGridPK];
						});
						if (childGrid.length > 0) {
							jQuery(childGrid).each(function () {
								this.dataBind();
							});
						} else {
							colIndex = mainGrid._getCellIndexByColumnKey(diff[i].txlog[j].key);
							record = this._config.dataSource[diff[i].index];
							td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);

							column = mainGrid.columnByKey(diff[i].txlog[j].key);
							if (column) {
								if (column.template) {
									newFormattedVal = mainGrid._renderTemplatedCell(record, column);
								} else {
									newFormattedVal = mainGrid._renderCell(diff[i].txlog[j].newVal, column, record);
								}
								jQuery(td).html(newFormattedVal);
								mainGrid.dataSource.updateRow(record[pkKey], record);
								mainGrid.dataSource._commitTransactionsByRowId(record[pkKey]);
							}
						}
					}
				}
			}
		}
	}

	/**
 	 * Data binds the hierarchical grid. No child grids will be created or rendered by default, unless there is initialExpandDepth >= 0 set.
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Returns the element of the root grid (igGrid)
	 */
	public root(): Object { return; } ;

	/**
 	 * Returns the widget object of the root grid (igGrid)
	 */
	public rootWidget(): Object { return; } ;

	/**
 	 * Returns a flat list of all child grid elements (recursive)
	 */
	public allChildren(): Object { return; } ;

	/**
 	 * Expands or collapses (toggles) a parent row
	 * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
	 * @param callback     Specifies a custom function to be called when parent row is toggled(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was toggled
	 */
	public toggle(element: Element, callback?: Function): void { return; } ;

	/**
 	 * Expands (toggles) a parent row
	 * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
	 * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments first is hierarchical grid object, second is the row element that was expanded
	 */
	public expand(id: Element, callback?: Function): void { return; } ;

	/**
 	 * Collapses a parent row
	 * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
	 * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was collapsed
	 */
	public collapse(id: Element, callback?: Function): void { return; } ;

	/**
 	 * Checks if a parent row is currently collapsed
	 *
	 * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
	 */
	public collapsed(element: Element): boolean { return; } ;

	/**
 	 * Checks if a parent row is populated with data
	 *
	 * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
	 */
	public populated(element: Element): boolean { return; } ;

	/**
 	 * Commits pending transactions to the client data source for main and all child grids.
	 */
	public commit(): void { return; } ;

	/**
 	 * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
	 *
	 * @param rebind     Whether to perform a rebind.
	 */
	public rollback(rebind?: boolean): void { return; } ;

	/**
 	 * Posts to the settings.updateUrl using $.ajax, by serializing the changes as url params
	 *
	 * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
	 * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
	 */
	public saveChanges(success: Function, error: Function): void { return; } ;

	/**
 	 * Destroys the hierarchical grid by recursively destroying all child grids
	 */
	public destroy(): void { return; } ;
}