import { Component, Renderer, ElementRef, IterableDiffers } from "@angular/core";
import { IgGridBase } from "../iggrid/iggridbase";

@Component({
	selector: "ig-tree-grid",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","autoAdjustHeight","avgRowHeight","avgColumnWidth","defaultColumnWidth","autoGenerateColumns","virtualization","virtualizationMode","requiresDataBinding","rowVirtualization","columnVirtualization","virtualizationMouseWheelStep","adjustVirtualHeights","templatingEngine","columns","dataSource","dataSourceUrl","dataSourceType","responseDataKey","responseTotalRecCountKey","requestType","responseContentType","showHeader","showFooter","fixedHeaders","fixedFooters","caption","features","tabIndex","localSchemaTransform","primaryKey","serializeTransactionLog","autoCommit","aggregateTransactions","autoFormat","renderCheckboxes","updateUrl","restSettings","alternateRowStyles","autofitLastColumn","enableHoverStyles","enableUTCDates","mergeUnboundColumns","jsonpRequest","enableResizeContainerCheck","featureChooserIconDisplay","scrollSettings","indentation","initialIndentationLevel","showExpansionIndicator","expandTooltipText","collapseTooltipText","foreignKey","initialExpandDepth","foreignKeyRootValue","renderExpansionIndicatorColumn","renderFirstDataCellFunction","childDataKey","renderExpansionCellFunction","enableRemoteLoadOnDemand","dataSourceSettings"],
	outputs: ["cellClick","cellRightClick","dataBinding","dataBound","rendering","rendered","dataRendering","dataRendered","headerRendering","headerRendered","footerRendering","footerRendered","headerCellRendered","rowsRendering","rowsRendered","schemaGenerated","columnsCollectionModified","requestError","created","destroyed","rowExpanding","rowExpanded","rowCollapsing","rowCollapsed"]
})
export class IgTreeGridComponent extends IgGridBase<IgTreeGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']"),
			dataLevel = tr.attr("aria-level");
		if (tr.length > 0) {

			element.data(this._widgetName).dataSource.deleteRow(id, true);
			element.data(this._widgetName).dataSource._removeTransactionsByRecordId(id);

			var trs = tr.nextUntil("tr[data-level=" + dataLevel + "]");
			if (trs.length === 0) {
				trs = tr.nextAll("tr[data-level]");
			}

			tr.remove();
			trs.remove();
		}
	}
	ngDoCheck() {
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [],
				element = jQuery(this._el),
				grid = element.data(this._widgetName),
				colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;

			//check for changes in collection
			if (!(this._config.dataSource instanceof Array)) {
				return;
			}
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
					this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]))
				}
			}
			//check for changes in values
			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						colIndex = element.data(this._widgetName)._getCellIndexByColumnKey(diff[i].txlog[j].key);
						record = this._config.dataSource[diff[i].index];
						td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);

						column = element.data(this._widgetName).columnByKey(diff[i].txlog[j].key);
						if (column) {
							if (column.template) {
								newFormattedVal = grid._renderTemplatedCell(record, column);
							} else {
								newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
							}
							jQuery(td).html(newFormattedVal);
							grid.dataSource.updateRow(record[pkKey], record);
							grid.dataSource._commitTransactionsByRowId(record[pkKey]);
						} else if (diff[i].txlog[j].key === this._config.childDataKey) {
							//we have an hierarchical data source and one of the nested collections has changed.
							grid.dataBind();
						}
					}
				}
			}
		}
	}

	/**
 	 * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
	 *
	 * @param rowId     If specified, will only rollback the transactions with that row id.
	 * @param updateUI     Whether to update the UI or not.
	 */
	public rollback(rowId?: Object, updateUI?: boolean): any[] { return; } ;

	/**
 	 * Causes the treegrid to data bind to the data source (local or remote) , and re-render all of the data
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Toggle row by specified row or row identifier
	 *
	 * @param row     jQuery table row object or a row id.
	 * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
	 */
	public toggleRow(row: Object, callback?: Function): void { return; } ;

	/**
 	 * Expands a parent row by specified row or row identifier
	 *
	 * @param row     jQuery table row object or a row id.
	 * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
	 */
	public expandRow(row: Object, callback?: Function): void { return; } ;

	/**
 	 * Collapses a parent row by specified row or row identifier
	 *
	 * @param row     jQuery table row object, raw DOM row object or a row id.
	 * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
	 */
	public collapseRow(row: Object, callback?: Function): void { return; } ;

	/**
 	 * Adds a new row (TR) to the grid as a child of a specific row, by taking a data row object. Assumes the record will have the primary key.
	 *
	 * @param rec     The data row JavaScript object.
	 * @param parentId     Identifier/key of the targeted parent row. If missing, then the new row is rendered to the bottom of the grid.
	 */
	public renderNewChild(rec: Object, parentId?: string): void { return; } ;

	/**
 	 * Destroys igTreeGrid
	 */
	public destroy(): Object { return; } ;
}