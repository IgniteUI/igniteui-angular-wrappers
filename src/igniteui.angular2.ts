import {NgModule, Component, Directive, Inject, ElementRef, EventEmitter, Output, Input, QueryList, Renderer, OnChanges, NgZone,
	SimpleChange, ChangeDetectionStrategy, IterableDiffers, DoCheck, Optional,ContentChild, ContentChildren, AfterContentInit} from '@angular/core';
import {NgModel, ControlValueAccessor} from '@angular/forms';
import './igniteui';

declare var jQuery: any;

var NODES = {
	"ig-text-editor": "div",
	"ig-numeric-editor": "input",
	"ig-percent-editor": "input",
	"ig-mask-editor": "input",
	"ig-date-picker": "input",
	"ig-date-editor": "input",
	"ig-currency-editor": "input",
	"ig-checkbox-editor": "input",
	"ig-html-editor": "div",
	"ig-combo": "input",
	"ig-grid": "table",
	"ig-tree-grid": "table",
	"ig-hierarchical-grid": "table",
	"ig-pivot-data-selector": "div",
	"ig-pivot-grid": "table",
	"ig-data-chart": "div",
	"ig-pie-chart": "div",
	"ig-doughnut-chart": "div",
	"ig-funnel-chart": "div",
	"ig-radial-gauge": "div",
	"ig-sparkline": "div",
	"ig-zoombar": "div",
	"ig-map": "div",
	"ig-bullet-graph": "div",
	"ig-linear-gauge": "div",
	"ig-q-r-code-barcode": "div",
	"ig-validator": "div",
	"ig-upload": "div",
	"ig-popover": "div",
	"ig-rating": "div",
	"ig-video-player": "div",
	"ig-radial-menu": "div",
	"ig-split-button": "div",
	"ig-notifier": "div",
	"ig-tree": "div",
	"ig-dialog": "div",
	"ig-splitter": "div",
	"ig-layout-manager": "div",
	"ig-tile-manager": "div",
	"ig-spreadsheet": "div",
	"ig-scheduler": "div"
};

@Directive({
	selector: 'column',
	inputs: ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass']
})
export class Column {
	public _settings: any = {};
	private _el: any;

	constructor(el: ElementRef) {
		this._el = el;
		let self = this;
		let i, settings = ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass'];
		for(i = 0; i < settings.length; i++) {
			Object.defineProperty(self, settings[i], {
				set: self.createColumnsSetter(settings[i]),
				get: self.createColumnsGetter(settings[i]),
				enumerable: true,
				configurable: true
			});
		}
	}

	createColumnsSetter(name) {
		return function (value) {
			let grid = jQuery(this._el.nativeElement.parentElement).find("table[role='grid']");
			this._settings[name] = value;

			if (jQuery.ui["igGrid"] &&
				jQuery.ui["igGrid"].prototype.options &&
				jQuery.ui["igGrid"].prototype.options.hasOwnProperty("columns") &&
				grid.data("igGrid")) {
				grid["igGrid"]("option", "columns", this._settings);
			}
		}
	}

	createColumnsGetter(name) {
		return function () {
			return this._settings[name];
		}
	}
}

export class Feature<Model> {
	public _el: any;
	public _settings: any = {};
	public initSettings: Model;
	public name: string;
	private _events:any;
	private featureName: string;

	constructor(el: ElementRef) {
		this._el = el;
		this.name  = this.normalizeName(el.nativeElement.nodeName.toLowerCase());
		this.featureName = "igGrid" + this.name;
		for (var propt in jQuery.ui["igGrid" + this.name].prototype.events) {
			this[propt] = new EventEmitter();
		}
	}

	ngOnInit() {
		let self = this;
		this.initSettings = jQuery.extend(true, {}, this);
		let evtName;
		this._events = new Map<string, string>();
		let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table");

		//event binding for features
		for (var propt in jQuery.ui[this.featureName].prototype.events) {
			evtName = this.featureName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(grid).on(evtName, function (evt, ui) {
				self[self._events[evt.type]].emit({ event: evt, ui: ui });
			});
		}
		for (var setting in jQuery.ui[this.featureName].prototype.options) {
			Object.defineProperty(self, setting, {
				set: self.createFeatureSetter(setting),
				get: self.createFeatureGetter(setting),
				enumerable: true,
				configurable: true
			});
		}
		var propNames = Object.getOwnPropertyNames(jQuery.ui[this.featureName].prototype);
		for(var i = 0; i < propNames.length; i++) {
			var name = propNames[i];
			if(name.indexOf("_") !== 0 && typeof jQuery.ui[this.featureName].prototype[name] === "function"){
				Object.defineProperty(self, name, {
					get: self.createMethodGetter(name)
				});
			}
		}
	}

	createFeatureSetter(name) {
		return function (value) {
			let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table[role='grid']");
			this._settings[name] = value;

			if (jQuery.ui[this.featureName] &&
				jQuery.ui[this.featureName].prototype.options &&
				jQuery.ui[this.featureName].prototype.options.hasOwnProperty(name) &&
				grid.data(this.featureName)) {
				grid[this.featureName]("option", name, value);
			}
		}
	}

	createFeatureGetter(name) {
		return function () {
			return this._settings[name];
		}
	}
	createMethodGetter(name) {
		return function () {
			let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table[role='grid']");
			var args = [];
			var feature = grid.data(this.featureName);
			return jQuery.proxy(feature[name], feature);
		}
	}

	normalizeName(str) {
		//convert hyphen to camelCase
		let name = str.replace(/-([a-z])/g, function (group) {
			return group[1].toUpperCase();
		})
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
}

@Directive({
	selector: 'sorting',
	inputs: ["disabled","create","type","caseSensitive","applySortedColumnCss","sortUrlKey","sortUrlKeyAscValue","sortUrlKeyDescValue","mode","customSortFunction","firstSortDirection","sortedColumnTooltip","modalDialogSortOnClick","modalDialogSortByButtonText","modalDialogResetButtonLabel","modalDialogCaptionButtonDesc","modalDialogCaptionButtonAsc","modalDialogCaptionButtonUnsort","modalDialogWidth","modalDialogHeight","modalDialogAnimationDuration","featureChooserText","unsortedColumnTooltip","columnSettings","modalDialogCaptionText","modalDialogButtonApplyText","modalDialogButtonCancelText","featureChooserSortAsc","featureChooserSortDesc","persist","sortingDialogContainment","dialogWidget","inherit"],
	outputs: ["columnSorting","columnSorted","modalDialogOpening","modalDialogOpened","modalDialogMoving","modalDialogClosing","modalDialogClosed","modalDialogContentsRendering","modalDialogContentsRendered","modalDialogSortingChanged","modalDialogButtonUnsortClick","modalDialogSortClick","modalDialogButtonApplyClick","modalDialogButtonResetClick"]
})
export class IgGridSortingFeature extends Feature<IgGridSorting> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Sorts the data in a grid column  and updates the UI.
	 *
	 * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared.
	 * @param direction     Specifies sorting direction (ascending or descending)
	 * @param header     
	 */
	public sortColumn(index: Object, direction: Object, header: Object): void { return; } ;

	/**
	 * Sorts the data in grid columns and updates the UI.\
	 */
	public sortMultiple(): void { return; } ;

	/**
	 * Removes current sorting(for all sorted columns) and updates the UI.
	 */
	public clearSorting(): void { return; } ;

	/**
	 * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
	 *
	 * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
	 * @param header     - if specified client events should be fired
	 */
	public unsortColumn(index: Object, header: Object): void { return; } ;

	/**
	 * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
	 */
	public destroy(): void { return; } ;

	/**
	 * Opens the multiple sorting dialog.
	 */
	public openMultipleSortingDialog(): void { return; } ;

	/**
	 * Closes the multiple sorting dialog.
	 */
	public closeMultipleSortingDialog(): void { return; } ;

	/**
	 * Renders content of multiple sorting dialog - sorted and unsorted columns.
	 *
	 * @param isToCallEvents 
	 */
	public renderMultipleSortingDialogContent(isToCallEvents: Object): void { return; } ;

	/**
	 * Remove clear button for multiple sorting dialog
	 */
	public removeDialogClearButton(): void { return; } ;
}

@Directive({
	selector: 'filtering',
	inputs: ["disabled","create","caseSensitive","filterSummaryAlwaysVisible","renderFC","filterSummaryTemplate","filterDropDownAnimations","filterDropDownAnimationDuration","filterDropDownWidth","filterDropDownHeight","filterExprUrlKey","filterDropDownItemIcons","columnSettings","type","filterDelay","mode","advancedModeEditorsVisible","advancedModeHeaderButtonLocation","filterDialogWidth","filterDialogHeight","filterDialogFilterDropDownDefaultWidth","filterDialogExprInputDefaultWidth","filterDialogColumnDropDownDefaultWidth","renderFilterButton","filterButtonLocation","nullTexts","labels","tooltipTemplate","filterDialogAddConditionTemplate","filterDialogAddConditionDropDownTemplate","filterDialogFilterTemplate","filterDialogFilterConditionTemplate","filterDialogAddButtonWidth","filterDialogOkCancelButtonWidth","filterDialogMaxFilterCount","filterDialogContainment","showEmptyConditions","showNullConditions","featureChooserText","featureChooserTextHide","featureChooserTextAdvancedFilter","dialogWidget","persist","inherit"],
	outputs: ["dataFiltering","dataFiltered","dropDownOpening","dropDownOpened","dropDownClosing","dropDownClosed","filterDialogOpening","filterDialogOpened","filterDialogMoving","filterDialogFilterAdding","filterDialogFilterAdded","filterDialogClosing","filterDialogClosed","filterDialogContentsRendering","filterDialogContentsRendered","filterDialogFiltering"]
})
export class IgGridFilteringFeature extends Feature<IgGridFiltering> {
		constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
	 */
	public destroy(): void { return; } ;

	/**
	 * Returns the count of data records that match filtering conditions
	 */
	public getFilteringMatchesCount(): number { return; } ;

	/**
	 * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
	 *
	 * @param event     Column key
	 */
	public toggleFilterRowByFeatureChooser(event: string): void { return; } ;

	/**
	 * Applies filtering programmatically and updates the UI by default.
	 *
	 * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
	 * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
	 * @param addedFromAdvanced     
	 */
	public filter(expressions: any[], updateUI?: boolean, addedFromAdvanced?: boolean): void { return; } ;

	/**
	 * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
	 *
	 * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
	 */
	public requiresFilteringExpression(filterCondition: string): boolean { return; } ;
}


@Directive({
	selector: 'paging',
	inputs: ["disabled","create","pageSize","recordCountKey","pageSizeUrlKey","pageIndexUrlKey","currentPageIndex","type","showPageSizeDropDown","pageSizeDropDownLabel","pageSizeDropDownTrailingLabel","pageSizeDropDownLocation","showPagerRecordsLabel","pagerRecordsLabelTemplate","nextPageLabelText","prevPageLabelText","firstPageLabelText","lastPageLabelText","showFirstLastPages","showPrevNextPages","currentPageDropDownLeadingLabel","currentPageDropDownTrailingLabel","currentPageDropDownTooltip","pageSizeDropDownTooltip","pagerRecordsLabelTooltip","prevPageTooltip","nextPageTooltip","firstPageTooltip","lastPageTooltip","pageTooltipFormat","pageSizeList","pageCountLimit","visiblePageCount","defaultDropDownWidth","delayOnPageChanged","persist","inherit"],
	outputs: ["pageIndexChanging","pageIndexChanged","pageSizeChanging","pageSizeChanged","pagerRendering","pagerRendered"]
})
export class IgGridPagingFeature extends Feature<IgGridPaging> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Gets/Sets the current page index, delegates data binding and paging to [$.ig.DataSource](ig.datasource).
	 *
	 * @param index     The page index to go to.
	 */
	public pageIndex(index?: number): number { return; } ;

	/**
	 * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
	 *
	 * @param size     The new page size.
	 */
	public pageSize(size?: number): number { return; } ;

	/**
	 * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
	 */
	public destroy(): void { return; } ;
}

@Directive({
	selector: 'updating',
	inputs: ["disabled","create","columnSettings","editMode","enableDeleteRow","enableAddRow","validation","doneLabel","doneTooltip","cancelLabel","cancelTooltip","addRowLabel","addRowTooltip","deleteRowLabel","deleteRowTooltip","showDoneCancelButtons","enableDataDirtyException","startEditTriggers","horizontalMoveOnEnter","excelNavigationMode","saveChangesSuccessHandler","saveChangesErrorHandler","swipeDistance","wrapAround","rowEditDialogOptions","dialogWidget","inherit"],
	outputs: ["editRowStarting","editRowStarted","editRowEnding","editRowEnded","editCellStarting","editCellStarted","editCellEnding","editCellEnded","rowAdding","rowAdded","rowDeleting","rowDeleted","dataDirty","generatePrimaryKeyValue","rowEditDialogBeforeOpen","rowEditDialogAfterOpen","rowEditDialogBeforeClose","rowEditDialogAfterClose","rowEditDialogContentsRendered"]
})
export class IgGridUpdatingFeature extends Feature<IgGridUpdating> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Sets a cell value for the specified cell. It also creates a transaction and updates the UI.
	 * 			If the specified cell is currently in edit mode, the function will set the desired value in the cell's editor instead.
	 *
	 * @param rowId    The primary key of the row the cell is a child of.
	 * @param colKey    The column key of the cell.
	 * @param value    The new value for the cell.
	 */
	public setCellValue(rowId: Object, colKey: string, value: Object): void { return; } ;

	/**
	 * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
	 * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
	 *
	 * @param rowId    The primary key of the row to update.
	 * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
	 */
	public updateRow(rowId: Object, values: Object): void { return; } ;

	/**
	 * Adds a new row to the grid. It also creates a transaction and updates the UI.
	 *
	 * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
	 */
	public addRow(values: Object): void { return; } ;

	/**
	 * Deletes a row from the grid. It also creates a transaction and updates the UI.
	 *
	 * @param rowId    The primary key of the row to delete.
	 */
	public deleteRow(rowId: Object): void { return; } ;

	/**
	 * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
	 *
	 * @param rowId    The row id.
	 * @param column    The column key or index.
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public startEdit(rowId: Object, column: Object, raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Starts editing for adding a new row.
	 *
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public startAddRowEdit(raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Ends the currently active edit mode.
	 *
	 * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public endEdit(update?: boolean, raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Finds and returns the key of the first column the editor for which has invalid value.
	 */
	public findInvalid(): string { return; } ;

	/**
	 * Checks if the grid is in edit mode.
	 */
	public isEditing(): boolean { return; } ;

	/**
	 * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
	 *
	 * @param key    The key of the column.
	 */
	public editorForKey(key: string): Object { return; } ;

	/**
	 * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
	 *
	 * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
	 * @param create    Requests to create the editor if it has not been created yet.
	 */
	public editorForCell(cell: string, create?: boolean): Object { return; } ;

	/**
	 * Destroys igGridUpdating.
	 */
	public destroy(): Object { return; } ;

	/**
	 * Shows the delete button for specific row.
	 *
	 * @param row    A jQuery object of the targeted row.
	 */
	public showDeleteButtonFor(row: Object): void { return; } ;

	/**
	 * Hides the delete button.
	 */
	public hideDeleteButton(): void { return; } ;
}

@Directive({
	selector: 'group-by',
	inputs: ["disabled","create","groupByAreaVisibility","initialExpand","emptyGroupByAreaContent","emptyGroupByAreaContentSelectColumns","expansionIndicatorVisibility","groupByLabelWidth","labelDragHelperOpacity","indentation","defaultSortingDirection","groupedColumns","resultResponseKey","groupedRowTextTemplate","type","groupByUrlKey","groupByUrlKeyAscValue","groupByUrlKeyDescValue","summarySettings","columnSettings","expandTooltip","collapseTooltip","removeButtonTooltip","modalDialogGroupByOnClick","modalDialogGroupByButtonText","modalDialogCaptionButtonDesc","modalDialogCaptionButtonAsc","modalDialogCaptionButtonUngroup","modalDialogCaptionText","modalDialogDropDownLabel","modalDialogRootLevelHierarchicalGrid","modalDialogDropDownButtonCaption","modalDialogClearAllButtonLabel","emptyGroupByAreaContentSelectColumnsCaption","modalDialogDropDownWidth","modalDialogDropDownAreaWidth","modalDialogAnimationDuration","modalDialogWidth","modalDialogHeight","modalDialogButtonApplyText","modalDialogButtonCancelText","useGridColumnFormatter","persist","groupByDialogContainment","dialogWidget","inherit"],
	outputs: ["groupedColumnsChanging","groupedColumnsChanged","modalDialogMoving","modalDialogClosing","modalDialogClosed","modalDialogOpening","modalDialogOpened","modalDialogContentsRendering","modalDialogContentsRendered","modalDialogButtonApplyClick","modalDialogButtonResetClick","modalDialogGroupingColumn","modalDialogGroupColumn","modalDialogUngroupingColumn","modalDialogUngroupColumn","modalDialogSortGroupedColumn"]
})
export class IgGridGroupByFeature extends Feature<IgGridGroupBy> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Open groupby modal dialog
	 */
	public openGroupByDialog(): void { return; } ;

	/**
	 * Close groupby modal dialog
	 */
	public closeGroupByDialog(): void { return; } ;

	/**
	 * Render groupby modal dialog and its content
	 */
	public renderGroupByModalDialog(): void { return; } ;

	/**
	 * Open layouts dropdown
	 */
	public openDropDown(): void { return; } ;

	/**
	 * Close layouts dropdown
	 */
	public closeDropDown(): void { return; } ;

	/**
	 * Check whether column with specified key and layout is grouped
	 *
	 * @param key    key of the column
	 * @param layout    layout name
	 */
	public checkColumnIsGrouped(key: string, layout: string): void { return; } ;

	/**
	 * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
	 *
	 * @param data    data (sorted by colKey) that is used to get the records from.
	 * @param colKey    key of the column for which grouping will be applied.
	 * @param idval    value of the column by which grouping will be applied.
	 */
	public getGroupedData(data: any[], colKey: string, idval?: string): any[] { return; } ;

	/**
	 * Adds a column to the group by columns list, executes the group by operation and updates the view.
	 */
	public groupByColumns(): Object { return; } ;

	/**
	 * Groups by a column
	 *
	 * @param key    Column Key - group by the column with the specified key
	 * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
	 * @param sortingDirection    if not set it is taken from option defaultSortingDirection
	 */
	public groupByColumn(key: string, layout?: string, sortingDirection?: Object): void { return; } ;

	/**
	 * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
	 *
	 * @param key    Column Key - ungroup by the column with the specified key
	 * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
	 */
	public ungroupByColumn(key: string, layout?: string): void { return; } ;

	/**
	 * Expand group row with specified id
	 *
	 * @param rowId    data-id attribute of the group row in the DOM
	 */
	public expand(rowId: string): void { return; } ;

	/**
	 * Expand group row with specified id
	 *
	 * @param rowId    data-id attribute of the group row in the DOM
	 */
	public collapse(rowId: string): void { return; } ;

	/**
	 * Clears the group by columns list and updates the view.
	 */
	public ungroupAll(): void { return; } ;

	/**
	 * Destroys the group by feature object.
	 */
	public destroy(): void { return; } ;
}

@Directive({
	selector: 'column-moving',
	inputs: ["disabled","create","columnSettings","mode","moveType","addMovingDropdown","movingDialogWidth","movingDialogHeight","movingDialogAnimationDuration","movingAcceptanceTolerance","movingScrollTolerance","scrollSpeedMultiplier","scrollDelta","hideHeaderContentsDuringDrag","dragHelperOpacity","movingDialogCaptionButtonDesc","movingDialogCaptionButtonAsc","movingDialogCaptionText","movingDialogDisplayText","movingDialogDropTooltipText","movingDialogDropTooltipMarkup","dropDownMoveLeftText","dropDownMoveRightText","dropDownMoveFirstText","dropDownMoveLastText","movingToolTipMove","featureChooserSubmenuText","columnMovingDialogContainment","dialogWidget","inherit"],
	outputs: ["columnDragStart","columnDragEnd","columnDragCanceled","columnMoving","columnMoved","movingDialogOpening","movingDialogOpened","movingDialogDragged","movingDialogClosing","movingDialogClosed","movingDialogContentsRendering","movingDialogContentsRendered","movingDialogMoveUpButtonPressed","movingDialogMoveDownButtonPressed","movingDialogDragColumnMoving","movingDialogDragColumnMoved"]
})
export class IgGridColumnMovingFeature extends Feature<IgGridColumnMoving> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Restoring overwritten functions
	 */
	public destroy(): void { return; } ;

	/**
	 * Moves a visible column at a specified place, in front or behind a target column or at a target index
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
	 * @param target    An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
	 * @param after    Specifies whether the column moved should be moved after or before the target column.
	 * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
	 * @param callback    Specifies a custom function to be called when the column is moved.
	 */
	public moveColumn(column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void { return; } ;
}

@Directive({
	selector: 'hiding',
	inputs: ["disabled","create","columnSettings","hiddenColumnIndicatorHeaderWidth","columnChooserContainment","columnChooserWidth","columnChooserHeight","dropDownAnimationDuration","columnChooserCaptionText","columnChooserDisplayText","hiddenColumnIndicatorTooltipText","columnHideText","columnChooserShowText","columnChooserHideText","columnChooserHideOnClick","columnChooserResetButtonLabel","columnChooserAnimationDuration","columnChooserButtonApplyText","columnChooserButtonCancelText","dialogWidget","inherit"],
	outputs: ["columnHiding","columnHidingRefused","columnShowingRefused","multiColumnHiding","columnHidden","columnShowing","columnShown","columnChooserOpening","columnChooserOpened","columnChooserMoving","columnChooserClosing","columnChooserClosed","columnChooserContentsRendering","columnChooserContentsRendered","columnChooserButtonApplyClick","columnChooserButtonResetClick"]
})
export class IgGridHidingFeature extends Feature<IgGridHiding> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the hiding widget
	 */
	public destroy(): void { return; } ;

	/**
	 * Shows the Column Chooser dialog. If it is visible the method does nothing.
	 */
	public showColumnChooser(): void { return; } ;

	/**
	 * Hides the Column Chooser dialog. If it is not visible the method does nothing.
	 */
	public hideColumnChooser(): void { return; } ;

	/**
	 * Shows a hidden column. If the column is not hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
	 * @param callback    Specifies a custom function to be called when the column(s) is shown(optional)
	 */
	public showColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void { return; } ;

	/**
	 * Hides a visible column. If the column is hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
	 * @param callback    Specifies a custom function to be called when the column is hidden(optional)
	 */
	public hideColumn(column: Object, isMultiColumnHeader?: boolean, callback?: Function): void { return; } ;

	/**
	 * Hides visible columns specified by the array. If the column is hidden the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param callback    Specifies a custom function to be called when all columns are hidden(optional)
	 */
	public hideMultiColumns(columns: any[], callback?: Function): void { return; } ;

	/**
	 * Show visible columns specified by the array. If the column is shown the method does nothing.
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
	 * @param callback    Specifies a custom function to be called when all columns are shown(optional)
	 */
	public showMultiColumns(columns: any[], callback?: Function): void { return; } ;

	/**
	 * Gets whether the reset button in the column chooser dialog is to be rendered or not.
	 */
	public isToRenderButtonReset(): void { return; } ;

	/**
	 * Reset hidden/shown column to initial state of dialog(when it is opened)
	 */
	public resetHidingColumnChooser(): void { return; } ;

	/**
	 * Renders the Reset button in the Column Chooser dialog.
	 */
	public renderColumnChooserResetButton(): void { return; } ;

	/**
	 * Remove Reset button in column chooser modal dialog
	 */
	public removeColumnChooserResetButton(): void { return; } ;
}

@Directive({
	selector: 'cell-merging',
	inputs: ["disabled","create","initialState","inherit"],
	outputs: ["cellsMerging","cellsMerged"]
})
export class IgGridCellMergingFeature extends Feature<IgGridCellMerging> {	
	constructor(el: ElementRef) {
		super(el);
	}
	public destroy(): void { return; } ;
}

@Directive({
	selector: 'responsive',
	inputs: ["disabled","create","columnSettings","reactOnContainerWidthChanges","forceResponsiveGridWidth","responsiveSensitivity","responsiveModes","enableVerticalRendering","windowWidthToRenderVertically","propertiesColumnWidth","valuesColumnWidth","allowedColumnWidthPerType","singleColumnTemplate","inherit"],
	outputs: ["responsiveColumnHiding","responsiveColumnHidden","responsiveColumnShowing","responsiveColumnShown","responsiveModeChanged"]
})
export class IgGridResponsiveFeature extends Feature<IgGridResponsive> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the responsive widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Returns the currently active responsive mode.
	 */
	public getCurrentResponsiveMode(): void { return; } ;
}

@Directive({
	selector: 'resizing',
	inputs: ["disabled","create","allowDoubleClickToResize","deferredResizing","columnSettings","handleThreshold","inherit"],
	outputs: ["columnResizing","columnResizingRefused","columnResized"]
})
export class IgGridResizingFeature extends Feature<IgGridResizing> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the resizing widget
	 */
	public destroy(): void { return; } ;

	/**
	 * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
	 *
	 * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
	 * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
	 */
	public resize(column: Object, width?: Object): void { return; } ;
}

@Directive({
	selector: 'selection',
	inputs: ["disabled","create","multipleSelection","mouseDragSelect","mode","activation","wrapAround","skipChildren","multipleCellSelectOnClick","touchDragSelect","persist","allowMultipleRangeSelection"],
	outputs: ["rowSelectionChanging","rowSelectionChanged","cellSelectionChanging","cellSelectionChanged","activeCellChanging","activeCellChanged","activeRowChanging","activeRowChanged"]
})
export class IgGridSelectionFeature extends Feature<IgGridSelection> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the selection widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
	 */
	public clearSelection(): void { return; } ;

	/**
	 * Selects a cell by row/col
	 *
	 * @param row     Row index
	 * @param col     Column index
	 * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
	 */
	public selectCell(row: number, col: number, isFixed?: boolean): void { return; } ;

	/**
	 * Selects a cell by row id/column key
	 *
	 * @param id     Row Id
	 * @param colKey     Column key
	 */
	public selectCellById(id: Object, colKey: string): void { return; } ;

	/**
	 * Deselects a cell by row/col
	 *
	 * @param row     Row index
	 * @param col     Column index
	 * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
	 */
	public deselectCell(row: number, col: number, isFixed?: boolean): void { return; } ;

	/**
	 * Deselects a cell by row id/column key
	 *
	 * @param id     Row Id
	 * @param colKey     Column key
	 */
	public deselectCellById(id: Object, colKey: string): void { return; } ;

	/**
	 * Selects a row by index
	 *
	 * @param index     Row index
	 */
	public selectRow(index: number): void { return; } ;

	/**
	 * Selects a row by row id
	 *
	 * @param id     Row Id
	 */
	public selectRowById(id: Object): void { return; } ;

	/**
	 * Deselects a row by index
	 *
	 * @param index     Row index
	 */
	public deselectRow(index: number): void { return; } ;

	/**
	 * Deselects a row by row id
	 *
	 * @param id     Row Id
	 */
	public deselectRowById(id: Object): void { return; } ;

	/**
	 * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
	 * 			
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedCells(): any[] { return; } ;

	/**
	 * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
	 * 			
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedRows(): any[] { return; } ;

	/**
	 * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 * 			
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedCell(): Object { return; } ;

	/**
	 * Returns the currently selected row that has the format { element: , index: }, if any.
	 * 			
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedRow(): Object { return; } ;

	/**
	 * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 */
	public activeCell(): Object { return; } ;

	/**
	 * Returns the currently active (focused) row that has the format { element: , index: }, if any.
	 */
	public activeRow(): Object { return; } ;
}

@Directive({
	selector: 'row-selectors',
	inputs: ["disabled","create","enableRowNumbering","enableCheckBoxes","rowNumberingSeed","rowSelectorColumnWidth","requireSelection","showCheckBoxesOnFocus","inherit","enableSelectAllForPaging","selectAllForPagingTemplate","deselectAllForPagingTemplate"],
	outputs: ["rowSelectorClicked","checkBoxStateChanging","checkBoxStateChanged"]
})
export class IgGridRowSelectorsFeature extends Feature<IgGridRowSelectors> {	
	constructor(el: ElementRef) {
		super(el);
	}
	public destroy(): void { return; } ;
}

@Directive({
	selector: 'summaries',
	inputs: ["disabled","create","type","dialogButtonOKText","dialogButtonCancelText","calculateRenderMode","featureChooserText","featureChooserTextHide","compactRenderingMode","defaultDecimalDisplay","showSummariesButton","summariesResponseKey","summaryExprUrlKey","callee","dropDownHeight","dropDownWidth","showDropDownButton","summaryExecution","dropDownDialogAnimationDuration","emptyCellText","summariesHeaderButtonTooltip","resultTemplate","isGridFormatter","renderSummaryCellFunc","columnSettings","inherit"],
	outputs: ["dropDownOpening","dropDownOpened","dropDownClosing","dropDownClosed","summariesCalculating","summariesCalculated","summariesMethodSelectionChanged","summariesToggling","summariesToggled","dropDownOKClicked","dropDownCancelClicked"]
})
export class IgGridSummariesFeature extends Feature<IgGridSummaries> {	
	constructor(el: ElementRef) {
		super(el);
	}
	public destroy(): void { return; } ;

	/**
	 * Returns whether summaries rows are hidden
	 */
	public isSummariesRowsHidden(): void { return; } ;

	/**
	 * Calculate summaries
	 */
	public calculateSummaries(): void { return; } ;

	/**
	 * Remove all summaries dropdown buttons.
	 */
	public clearAllFooterIcons(): void { return; } ;

	/**
	 * Toggle drop down
	 *
	 * @param columnKey    toggle drop down for the column with the specified key
	 * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
	 */
	public toggleDropDown(columnKey: string, event: Object): void { return; } ;

	/**
	 * Show/Hide dialog
	 *
	 * @param $dialog     jQuery object representation of dropdown div element
	 */
	public showHideDialog($dialog: Object): void { return; } ;

	/**
	 * Toggle summaries rows
	 *
	 * @param isToShow    Specifies whether to show or not summaries
	 * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
	 */
	public toggleSummariesRows(isToShow: boolean, isInternalCall: boolean): void { return; } ;

	/**
	 * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
	 *
	 * @param $checkbox     Specifies the jQuery object of the checkbox.
	 */
	public toggleCheckstate($checkbox: Object): void { return; } ;

	/**
	 * Select/Unselect specified checkbox
	 *
	 * @param $checkbox     Specifies the jQuery object for checkbox
	 * @param isToSelect     Specify whether to select or not checkbox
	 */
	public selectCheckBox($checkbox: Object, isToSelect: boolean): void { return; } ;

	/**
	 * Summary calculate the whole data for the specified column key, columnMethods and dataType (used when datasource is remote and dataType is date)
	 *
	 * @param ck    ColumnKey
	 * @param columnMethods    Array of column methods objects
	 * @param data    Object which represents result
  represents dataType for the current column
	 * @param dataType 
	 */
	public calculateSummaryColumn(ck: string, columnMethods: any[], data: Object, dataType: Object): void { return; } ;

	/**
	 * Return a JQUERY object which holds all summaries for all columns
	 */
	public summaryCollection(): void { return; } ;

	/**
	 * Return a JQUERY object which holds all summaries for column with the specified column key
	 *
	 * @param columnKey 
	 */
	public summariesFor(columnKey: Object): void { return; } ;
}

@Directive({
	selector: 'column-fixing',
	inputs: ["disabled","create","headerFixButtonText","headerUnfixButtonText","showFixButtons","syncRowHeights","scrollDelta","fixingDirection","columnSettings","featureChooserTextFixedColumn","featureChooserTextUnfixedColumn","minimalVisibleAreaWidth","fixNondataColumns","populateDataRowsAttributes"],
	outputs: ["columnFixing","columnFixed","columnUnfixing","columnUnfixed","columnFixingRefused","columnUnfixingRefused"]
})
export class IgGridColumnFixingFeature extends Feature<IgGridColumnFixing> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Unfixes a column by specified column identifier - column key or column index.
	 *
	 * @param colIdentifier    An identifier of the column to be unfixed - column index or column key.
	 * @param target    Key of the column where the unfixed column should move to.
	 * @param after    Specifies where the unfixed column should be rendered after or before the target column. This parameter is disregarded if there is no target column specified.
	 */
	public unfixColumn(colIdentifier: Object, target?: string, after?: boolean): Object { return; } ;

	/**
	 * Checks whether the heights of fixed and unfixed tables are equal - if not sync them. Similar check is made for heights of table rows.
	 */
	public checkAndSyncHeights(): void { return; } ;

	/**
	 * If the 'check' argument is set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. Similar check is made for heights of table rows. If the clearRowsHeights argument is set to true, clears rows heights before syncing them.
	 *
	 * @param check    If set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. If this argument is set to false sync is performed regardless of the current heights.
	 * @param clearRowsHeights    Clears row heigths for all visible rows.
	 */
	public syncHeights(check?: boolean, clearRowsHeights?: boolean): void { return; } ;

	/**
	 * Returns whether the column with the specified key is a column group header, when the [multi-column headers](http://www.igniteui.com/help/iggrid-multicolumnheaders-landingpage) feature is used.
	 *
	 * @param colKey    The key of the column to perform the check for.
	 */
	public isGroupHeader(colKey: string): boolean { return; } ;

	/**
	 * Checks whether column fixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the unfixed area.
	 *
	 * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
	 */
	public checkFixingAllowed(columns: any[]): boolean { return; } ;

	/**
	 * Checks whether unfixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the fixed area.
	 *
	 * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
	 */
	public checkUnfixingAllowed(columns: any[]): boolean { return; } ;

	/**
	 * Fixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
	 */
	public fixNonDataColumns(): void { return; } ;

	/**
	 * This function is deprecated - use function fixNonDataColumns.
	 */
	public fixDataSkippedColumns(): void { return; } ;

	/**
	 * Unfixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
	 */
	public unfixNonDataColumns(): void { return; } ;

	/**
	 * This function is deprecated - use function unfixNonDataColumns.
	 */
	public unfixDataSkippedColumns(): void { return; } ;

	/**
	 * Unfixes all fixed columns.
	 */
	public unfixAllColumns(): void { return; } ;

	/**
	 * Syncs rows heights between two collections of rows.
	 *
	 * @param $trs    An array of rows of the first(fixed/unfixed) container.
	 * @param $anotherRows    An array of rows of the second(fixed/unfixed) container.
	 */
	public syncRowsHeights($trs: any[], $anotherRows: any[]): void { return; } ;

	/**
	 * Calculates widths of the fixed columns.
	 *
	 * @param fCols    Array of grid columns. If not set then the total width of the fixed columns are returned.
	 * @param excludeNonDataColumns    If set to true do not calculate the width of non-data fixed columns (like the row selector row numbering column).
	 * @param includeHidden    If set to true calculates width of the hidden fixed columns (their initial width before hiding).
	 */
	public getWidthOfFixedColumns(fCols?: any[], excludeNonDataColumns?: boolean, includeHidden?: boolean): number { return; } ;

	/**
	 * Destroys the column fixing widget
	 */
	public destroy(): void { return; } ;
}

@Directive({
	selector: 'tooltips',
	inputs: ["disabled","create","visibility","style","showDelay","hideDelay","columnSettings","fadeTimespan","cursorLeftOffset","cursorTopOffset","inherit"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden"]
})
export class IgGridTooltipsFeature extends Feature<IgGridTooltips> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the tooltip widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Returns the ID of the parent div element bounding the ruler and the tooltip container
	 */
	public id(): string { return; } ;
}

@Directive({
	selector: 'append-rows-on-demand',
	inputs: ["type","chunkSize","recordCountKey","chunkSizeUrlKey","chunkIndexUrlKey","defaultChunkIndex","currentChunkIndex","loadTrigger","loadMoreDataButtonText"],
	outputs: ["rowsRequesting","rowsRequested"]
})
export class IgGridAppendRowsOnDemandFeature extends Feature<IgGridAppendRowsOnDemand> {	
	constructor(el: ElementRef) {
		super(el);
	}

    /**
      * Destroys the append rows on demand widget
     */
    public destroy(): void { return; } ;

    /**
      * Loads the next chunk of data.
     */
    public nextChunk(): void { return; } ;
}

@Directive({
	selector: 'multi-column-headers',
	inputs: ["inherit"],
	outputs: ["groupCollapsing","groupCollapsed","groupExpanding","groupExpanded"]
})
export class IgGridMultiColumnHeadersFeature extends Feature<IgGridMultiColumnHeaders> {	
	constructor(el: ElementRef) {
		super(el);
	}

    /**
      * Destroys the widget
     */
    public destroy(): void { return; } ;

    /**
      * Collapses an expanded group. If the group is collapsed, the method does nothing.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public collapseGroup(groupKey: string, callback?: Function): void { return; } ;
    /**
	  * Expands a collapsed group. If the group is expanded, the method does nothing.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public expandGroup(groupKey: string, callback?: Function): void { return; } ;
    /**
      * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
     */
	public getMultiColumnHeaders(): Array<Column> { return; } ;
    /**
      * Toggles a collapsible group.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public toggleGroup(groupKey: string, callback?: Function): void { return; } ;
}

@Directive({
	selector: 'features'
})
export class Features implements AfterContentInit {
	public allFeatures:Array<any> = new Array<any>()
	@ContentChild(IgGridSortingFeature) sorting: IgGridSortingFeature;
	@ContentChild(IgGridFilteringFeature) filtering: IgGridFilteringFeature;
	@ContentChild(IgGridPagingFeature) paging: IgGridPagingFeature;
	@ContentChild(IgGridUpdatingFeature) updating: IgGridUpdatingFeature;
	@ContentChild(IgGridGroupByFeature) groupBy: IgGridGroupByFeature;
	@ContentChild(IgGridColumnMovingFeature) moving: IgGridColumnMovingFeature;
	@ContentChild(IgGridHidingFeature) hiding: IgGridHidingFeature;
	@ContentChild(IgGridCellMergingFeature) cellMerging: IgGridCellMergingFeature;
	@ContentChild(IgGridResponsiveFeature) responsive: IgGridResponsiveFeature;
	@ContentChild(IgGridResizingFeature) resizing: IgGridResizingFeature;
	@ContentChild(IgGridSelectionFeature) selection: IgGridSelectionFeature;
	@ContentChild(IgGridRowSelectorsFeature) rowSelectors: IgGridRowSelectorsFeature;
	@ContentChild(IgGridSummariesFeature) summaries: IgGridSummariesFeature;
	@ContentChild(IgGridColumnFixingFeature) columnFixing: IgGridColumnFixingFeature;
	@ContentChild(IgGridTooltipsFeature) tooltips: IgGridTooltipsFeature;
	@ContentChild(IgGridAppendRowsOnDemandFeature) appendRowsOnDemand: IgGridAppendRowsOnDemandFeature;
	@ContentChild(IgGridMultiColumnHeadersFeature) multiColumnHeaders: IgGridMultiColumnHeadersFeature;

  	ngAfterContentInit() {
		  		this.filtering ? this.allFeatures.push(this.filtering): null;
			   	this.sorting ? this.allFeatures.push(this.sorting): null;
				this.paging ? this.allFeatures.push(this.paging): null;
				this.updating ? this.allFeatures.push(this.updating): null;
				this.groupBy ? this.allFeatures.push(this.groupBy): null;
				this.moving ? this.allFeatures.push(this.moving): null;
				this.hiding ? this.allFeatures.push(this.hiding): null;
				this.responsive ? this.allFeatures.push(this.responsive): null;
				this.cellMerging ? this.allFeatures.push(this.cellMerging): null;
				this.resizing ? this.allFeatures.push(this.resizing): null;
				this.selection ? this.allFeatures.push(this.selection): null;
				this.rowSelectors ? this.allFeatures.push(this.rowSelectors): null;
				this.summaries ? this.allFeatures.push(this.summaries): null;
				this.columnFixing ? this.allFeatures.push(this.columnFixing): null;
				this.tooltips ? this.allFeatures.push(this.tooltips): null;
				this.appendRowsOnDemand ? this.allFeatures.push(this.appendRowsOnDemand): null;
				this.multiColumnHeaders ? this.allFeatures.push(this.multiColumnHeaders): null;
  }
}

export class IgControlBase<Model> implements DoCheck {
	private _differs: any;
	protected _opts: any = {};
	protected _el: any;
	protected _widgetName: string;
	protected _differ: any;
	protected _config: any;
	protected _events: Map<string, string>;
	protected _allowChangeDetection = true;
	private _evtEmmiters : any = {};

	set options(v: Model) {
		if (this._config !== undefined && this._config !== null) {
			//if the options are alrealy set recreate the component
			jQuery(this._el)[this._widgetName]("destroy");
			this._config = jQuery.extend(false, this._config, v);
			jQuery(this._el)[this._widgetName](this._config);
		} else {
			this._config = jQuery.extend(true, v, this._opts);
			if (this._opts.dataSource) {
				// _config.dataSource should reference the data if the data is set as a top-level opts
				// to allow two-way data binding
				this._config.dataSource = this._opts.dataSource;
			}
			this._differ = this._differs.find([]).create(null);
		}
		this._opts = jQuery.extend(true, {}, this._config);
		if (this._opts.dataSource) {
			delete this._opts.dataSource;
		}
	};
	public widgetId: string;
	public changeDetectionInterval: number;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		this._differs = differs;
		this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase());//ig-grid -> igGrid
		this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));

		for (var opt in jQuery.ui[this._widgetName].prototype.options) {
			Object.defineProperty(this, opt, {
				set: this.createSetter(opt),
				enumerable: true,
				configurable: true
			});
		}

		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			this[propt] = new EventEmitter();
			//cahcing the event emmitters for cases when the event name is the same as a method name.
			this._evtEmmiters[propt] = this[propt];
		}
	}

	createSetter(name) {
		return function (value) {
			this._opts[name] = value;
			if (this._config) {
				this._config[name] = value;
			}
			if (jQuery.ui[this._widgetName] &&
				jQuery.ui[this._widgetName].prototype.options &&
				jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(name) &&
				jQuery(this._el).data(this._widgetName)) {
				jQuery(this._el)[this._widgetName]("option", name, value);
				if(name === "dataSource" && this instanceof IgGridBase) {
					this._dataSource = jQuery.extend(true, [], value);
				}
			}
		}
	}

	ngOnInit() {
		var evtName;
		this._events = new Map<string, string>();

		//events binding
		let that = this;

		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(this._el).on(evtName, function (evt, ui) {
				var emmiter = that._evtEmmiters[that._events[evt.type]];
				emmiter.emit({ event: evt, ui: ui });
			});
		}
		var propNames = Object.getOwnPropertyNames(jQuery.ui[this._widgetName].prototype);
		for(var i = 0; i < propNames.length; i++) {
			var name = propNames[i];
			if(name.indexOf("_") !== 0 && typeof jQuery.ui[this._widgetName].prototype[name] === "function"){
				Object.defineProperty(that, name, {
					get: that.createMethodGetter(name)
				});
			}
		}

		

		if (this.changeDetectionInterval === undefined || this.changeDetectionInterval === null) {
			this.changeDetectionInterval = 500;
		}

		setInterval(function () {
			that._allowChangeDetection = true;
		}, this.changeDetectionInterval);

		jQuery(this._el).attr("id", this.widgetId);
		if (this._config === null || this._config === undefined) {
			//if there is no config specified in the component template use the defined top-level options for a configuration
			//by invoking the setter of options property
			this.options = this._opts;
		}
		jQuery(this._el)[this._widgetName](this._config);
	}
	createMethodGetter(name) {
		return function () {
			var widget = jQuery(this._el).data(this._widgetName);
			return jQuery.proxy(widget[name], widget);
		}
	}

	ngDoCheck() {
		if (this._allowChangeDetection) {
			this._allowChangeDetection = false;
			this.optionChange();
		}
	}

	optionChange(options?) {
		if (this._differ != null) {
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, option;
			var opts = options || jQuery.extend(true, {}, this._config);
			if (opts.dataSource) {
				delete opts.dataSource;
			}

			if (!this.equalsDiff(opts, this._opts, diff)) {
				this._opts = jQuery.extend(true, {}, opts);
				for (i = 0; i < diff.length; i++) {
					option = diff[i].key;
					if (jQuery.ui[this._widgetName] &&
						jQuery.ui[this._widgetName].prototype.options &&
						jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(option) &&
						jQuery(this._el).data(this._widgetName)) {
						jQuery(this._el)[this._widgetName]("option", option, diff[i].newVal);
					}
				}
			}
		}
	}

	// Interrogation functions
	isDate(value) {
		return Object.prototype.toString.call(value) === "[object Date]";
	}

	isRegExp(value) {
		return Object.prototype.toString.call(value) === "[object RegExp]";
	}

	isScope(obj) {
		return obj && obj.jQueryevalAsync && obj.jQuerywatch;
	}

	isWindow(obj) {
		return obj && obj.document && obj.location && obj.alert && obj.setInterval;
	}

	isFunction(value) { return typeof value === "function"; }

	isArray(value) {
		return Object.prototype.toString.call(value) === "[object Array]";
	}

	equalsDiff(o1, o2, diff?) {
		if (o1 === o2) { return true; }
		if (o1 === null || o2 === null) { return false; }
		if (o1 !== o1 && o2 !== o2) { return true; }// NaN === NaN
		var t1 = typeof o1, t2 = typeof o2, length, key, keySet, dirty, skipDiff = false, changedVals = [];
		if (t1 === t2) {
			if (t1 === "object") {
				if (this.isArray(o1)) {
					if (!this.isArray(o2)) { return false; }
					if ((length = o1.length) === o2.length) {
						if (!this.isArray(diff)) {
							skipDiff = true;
						}
						for (key = 0; key < length; key++) {
							// we are comparing objects here
							if (!this.equalsDiff(o1[key], o2[key], changedVals)) {
								dirty = true;
								if (!skipDiff) {
									diff.push({ index: key, txlog: changedVals });
								}
							}
						}
						if (dirty) {
							return false;
						}
						return true;
					}
				} else if (this.isDate(o1)) {
					return this.isDate(o2) && o1.getTime() === o2.getTime();
				} else if (this.isRegExp(o1) && this.isRegExp(o2)) {
					return o1.toString() === o2.toString();
				} else {
					if (this.isScope(o1) || this.isScope(o2) || this.isWindow(o1) || this.isWindow(o2) || this.isArray(o2)) { return false; }
					keySet = {};
					if (!this.isArray(diff)) {
						skipDiff = true;
					}
					for (key in o1) {
						if (key.charAt(0) === "jQuery" || this.isFunction(o1[key])) { continue; }
						if (!this.equalsDiff(o1[key], o2[key])) {
							dirty = true;
							if (!skipDiff) {
								diff.push({ key: key, oldVal: o2[key], newVal: o1[key] });
							}
						}
						keySet[key] = true;
					}
					for (key in o2) {
						if (!keySet.hasOwnProperty(key) &&
							key.charAt(0) !== "jQuery" &&
							o2[key] !== undefined &&
							!this.isFunction(o2[key])) { return false; }
					}
					if (dirty) {
						return false;
					}
					return true;
				}
			}
		}
		return false;
	}

	convertToCamelCase(str) {
		//convert hyphen to camelCase
		return str.replace(/-([a-z])/g, function (group) {
			return group[1].toUpperCase();
		});
	}
}

export class IgGridBase<Model> extends IgControlBase<Model> implements AfterContentInit {
	protected _dataSource: any;
	protected _changes: any;
	@ContentChildren(Column) _columns: QueryList<Column>;
	@ContentChild(Features) featuresList: Features;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
      this._dataSource = this._opts.dataSource ? 
	    jQuery.extend(true, [], this._opts.dataSource) :
        jQuery.extend(true, [], this._config.dataSource);
	}

	ngAfterContentInit() {
		if (this._columns && this._columns.length) {
			if (this._config) {
				this._config["columns"] = this._columns.map((c) => c._settings);
			} else {
				this._opts["columns"] = this._columns.map((c) => c._settings);
			}
		}
		if (this.featuresList){
			if (this._config) {
				this._config["features"] = this.featuresList.allFeatures.map((c) => { return c.initSettings;} );	
			} else{
				this._opts["features"] = this.featuresList.allFeatures.map((c) => { return c.initSettings;});
			}
		}
		super.ngOnInit();
	}

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']");

		if (tr.length > 0) {
			tr.remove();
			jQuery(this._el).data(this._widgetName).dataSource.deleteRow(id, true);
			jQuery(this._el).data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
		}
	}

	addRow(rowData, index) {
		var grid, existingDomRow = jQuery(this._el).find("tr[data-id='" + rowData[this._config.primaryKey] + "']"),
			pkKey = this._config.primaryKey,
			widgetName = this._widgetName, existingRow, t;

		if (this._widgetName === "igHierarchicalGrid") {
			widgetName = "igGrid";
		}

		grid = jQuery(this._el).data(widgetName);

		if (existingDomRow.length === 0) {
			grid.renderNewRow(rowData, rowData[pkKey]);
		}

		existingRow = grid.dataSource.findRecordByKey(rowData[pkKey]);
		if (!existingRow) {
			// add the row without affecting the original DS (scope source) 
			// TODO: trigger rowAdded event?
			grid.dataSource._addRow(rowData, index);
			//add transaction
			t = grid.dataSource._createNewRowTransaction(rowData[pkKey], rowData);
			grid.dataSource._addTransaction(t);
			grid.dataSource._removeTransactionByTransactionId(t.tid);
		}
	}

	ngDoCheck() {
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [],
				element = jQuery(this._el),
				grid = element.data(this._widgetName),
				td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;

			if (typeof this._config.dataSource === "string") {
				return;
			}
			//check for changes in collection
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
						record = this._config.dataSource[diff[i].index];
						td = grid._getCellsByColKey(element.find("tr[data-id='" + record[pkKey] + "']"), diff[i].txlog[j].key);

						column = grid.columnByKey(diff[i].txlog[j].key);
						if (column) {
							if (column.template) {
								newFormattedVal = grid._renderTemplatedCell(record, column);
							} else {
								newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
							}
							//if current cell is still in edit mode, exit it.
							if (jQuery(td).find("input.ui-igedit-input").length > 0){
								element.data("igGridUpdating").endEdit();
							}
							jQuery(td).html(newFormattedVal);
							grid.dataSource.updateRow(record[pkKey], record);
							grid.dataSource._commitTransactionsByRowId(record[pkKey]);
						}
					}
				}
			}
		}
	}
	allRows() { };

	optionChange(options?) {
		var opts = options || jQuery.extend(true, {}, this._config);
		// Columns are modified internally by the grid. Excluding them from the change detection
		if (opts.columns) {
			delete opts.columns;
		}
		super.optionChange(opts);
	}
}

@Component({
	"selector": "ig-grid",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","autoAdjustHeight","avgRowHeight","avgColumnWidth","defaultColumnWidth","autoGenerateColumns","virtualization","virtualizationMode","requiresDataBinding","rowVirtualization","columnVirtualization","virtualizationMouseWheelStep","adjustVirtualHeights","templatingEngine","columns","dataSource","dataSourceUrl","dataSourceType","responseDataKey","responseTotalRecCountKey","requestType","responseContentType","showHeader","showFooter","fixedHeaders","fixedFooters","caption","features","tabIndex","localSchemaTransform","primaryKey","serializeTransactionLog","autoCommit","aggregateTransactions","autoFormat","renderCheckboxes","updateUrl","restSettings","alternateRowStyles","autofitLastColumn","enableHoverStyles","enableUTCDates","mergeUnboundColumns","jsonpRequest","enableResizeContainerCheck","featureChooserIconDisplay","scrollSettings"],
	outputs: ["cellClick","cellRightClick","dataBinding","dataBound","rendering","rendered","dataRendering","dataRendered","headerRendering","headerRendered","footerRendering","footerRendered","headerCellRendered","rowsRendering","rowsRendered","schemaGenerated","columnsCollectionModified","requestError","created","destroyed"]
})
export class IgGridComponent extends IgGridBase<IgGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns the element holding the data records
	 */
	public widget(): void { return; } ;

	/**
 	 * Returns whether grid has non-data fixed columns(e.g. row selectors column)
	 */
	public hasFixedDataSkippedColumns(): boolean { return; } ;

	/**
 	 * Returns true if grid has at least one fixed columns(even if a non-data column - like row-selectors column)
	 */
	public hasFixedColumns(): boolean { return; } ;

	/**
 	 * Returns the current fixing direction. NOTE - use only if ColumnFixing feature is enabled
	 * @return left|right     
	 */
	public fixingDirection(): string { return; } ;

	/**
 	 * Returns whether the column with identifier colKey is fixed
	 *
	 * @param colKey     An identifier of the column which should be checked. It can be a key or visible index.
	 */
	public isFixedColumn(colKey: Object): boolean { return; } ;

	/**
 	 * Called to detect whether grid container is resized. When autoAdjustHeight is true and height of the grid is changed then the height of grid is re-set.
	 */
	public resizeContainer(): void { return; } ;

	/**
 	 * Returns whether the header identified by colKey is multicolumn header(has children)
	 *
	 * @param colKey     value of the column key
	 */
	public isGroupHeader(colKey: string): Object { return; } ;

	/**
 	 * Returns an object that contains information on the passed Dom element
	 * 		
	 * 				rowId - the id of the record associated with the element - if primaryKey is not set this will be null.
	 * 				rowIndex - the index (in the DOM) of the row associated with the element.
	 * 				recordIndex - index of the data record associated with this element in the current dataView.
	 * 				columnObject  - the column object associated with this element ( if the element is tr this will be null)
	 *
	 * @param elem    The Dom element or jQuery object which can be a TD or TR element from the grid.
	 */
	public getElementInfo(elem: Element): Object { return; } ;

	/**
 	 * Returns the ID of the TABLE element where data records are rendered
	 */
	public id(): string { return; } ;

	/**
 	 * Returns the DIV that is the topmost container of the grid widget
	 */
	public container(): Element { return; } ;

	/**
 	 * Returns the table that contains the header cells
	 */
	public headersTable(): Element { return; } ;

	/**
 	 * Returns the table that contains the footer cells
	 */
	public footersTable(): Element { return; } ;

	/**
 	 * Returns the DIV that is used as a scroll container for the grid contents
	 */
	public scrollContainer(): Element { return; } ;

	/**
 	 * Returns the DIV that is the topmost container of the fixed grid - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedContainer(): Element { return; } ;

	/**
 	 * Returns the DIV that is the topmost container of the fixed body grid - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedBodyContainer(): Element { return; } ;

	/**
 	 * Returns container(jQuery representation) containing fixed footer - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedFooterContainer(): Object { return; } ;

	/**
 	 * Returns container(jQuery representation) containing fixed header - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedHeaderContainer(): Object { return; } ;

	/**
 	 * Returns the table that contains the FIXED header cells - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedHeadersTable(): Element { return; } ;

	/**
 	 * Returns the table that contains the footer cells - contains fixed columns(in ColumnFixing scenario)
	 */
	public fixedFootersTable(): Element { return; } ;

	/**
 	 * Returns the cell TD element at the specified location
	 *
	 * @param x     The column index.
	 * @param y     The row index.
	 * @param isFixed     Optional parameter - if true get cell TD at the specified location from the fixed table
	 */
	public cellAt(x: number, y: number, isFixed: boolean): Element { return; } ;

	/**
 	 * Returns the cell TD element by row id and column key
	 *
	 * @param rowId     The id of the row.
	 * @param columnKey     The column key.
	 */
	public cellById(rowId: Object, columnKey: string): Element { return; } ;

	/**
 	 * Returns the fixed table - contains fixed columns(in ColumnFixing scenario). If there aren't fixed columns returns the grid table
	 */
	public fixedTable(): Object { return; } ;

	/**
 	 * Gets all immediate children of the current grid
	 */
	public immediateChildrenWidgets(): any[] { return; } ;

	/**
 	 * Gets all children of the current grid, recursively
	 */
	public childrenWidgets(): any[] { return; } ;

	/**
 	 * Gets all children's elements of the current grid, recursively
	 */
	public children(): any[] { return; } ;

	/**
 	 * Gets all immediate children's elements of the current grid
	 */
	public immediateChildren(): any[] { return; } ;

	/**
 	 * Returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons
	 *
	 * @param i     The row index.
	 */
	public rowAt(i: number): Element { return; } ;

	/**
 	 * Returns the row TR element by row id
	 *
	 * @param rowId     The id of the row.
	 * @param isFixed     Specify search in the fixed container.
	 */
	public rowById(rowId: Object, isFixed?: boolean): Element { return; } ;

	/**
 	 * Returns the fixed row (TR element) at the specified index. jQuery selectors aren't used for performance reasons(in ColumnFixing scenario - only when there is at least one fixed column)
	 *
	 * @param i     The row index.
	 */
	public fixedRowAt(i: number): Element { return; } ;

	/**
 	 * Returns a list of all fixed TR elements holding data in the grid(in ColumnFixing scenario - only when there is at least one fixed column)
	 */
	public fixedRows(): any[] { return; } ;

	/**
 	 * Returns a list of all TR elements holding data in the grid(when there is at least one fixed column returns rows only in the UNFIXED table)
	 */
	public rows(): any[] { return; } ;

	/**
 	 * Returns all data fixed rows recursively, not only the immediate ones(in ColumnFixing scenario - only when there is at least one fixed column)
	 */
	public allFixedRows(): any[] { return; } ;

	/**
 	 * Returns all data rows recursively, not only the immediate ones(when there is at least one fixed column returns rows only in the UNFIXED table)
	 */
	public allRows(): any[] { return; } ;

	/**
 	 * Returns a column object by the specified column key
	 *
	 * @param key     The column key.
	 */
	public columnByKey(key: string): Object { return; } ;

	/**
 	 * Returns a column object by the specified header text. If there are multiple matches, returns the first one.
	 *
	 * @param text     The column header text.
	 */
	public columnByText(text: string): Object { return; } ;

	/**
 	 * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedCells(): any[] { return; } ;

	/**
 	 * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedRows(): any[] { return; } ;

	/**
 	 * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedCell(): Object { return; } ;

	/**
 	 * Returns the currently selected row that has the format { element: , index: }, if any.
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedRow(): Object { return; } ;

	/**
 	 * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 */
	public activeCell(): Object { return; } ;

	/**
 	 * Returns the currently active (focused) row that has the format { element: , index: }, if any.
	 */
	public activeRow(): Object { return; } ;

	/**
 	 * Retrieves a cell value using the row index and the column key. If a primaryKey is defined, rowId is assumed to be the row Key (not index).
	 * 				If primary key is not defined, then rowId is converted to a number and is used as a row index.
	 *
	 * @param rowId     Row index or row key (primary key).
	 * @param colKey     The column key.
	 */
	public getCellValue(rowId: Object, colKey: string): Object { return; } ;

	/**
 	 * Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)- does not apply when using a Multi-Row Layout grid.
	 * 				This is the actual text (or HTML string) for the contents of the cell.
	 *
	 * @param rowId     Row index or row data key (primary key)
	 * @param colKey     Column key.
	 */
	public getCellText(rowId: Object, colKey: string): string { return; } ;

	/**
 	 * Sets a new template for a column after initialization and renders the grid if not explicitly disabled. This method will replace any existing explicitly set row template and will build one anew from the column ones.
	 *
	 * @param col     An identifier of the column to set template for (index or key)
	 * @param tmpl     The column template to set
	 * @param render     Should the grid rerender after template is set
	 */
	public setColumnTemplate(col: Object, tmpl: string, render?: boolean): void { return; } ;

	/**
 	 * Commits all pending transactions to the client data source. Note that there won't be anything to commit on the UI, since it is updated instantly. In order to rollback the actual UI, a call to dataBind() is required.
	 *
	 * @param rowId     If specified, will commit only that transaction corresponding to the specified record key.
	 */
	public commit(rowId?: Object): void { return; } ;

	/**
 	 * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
	 *
	 * @param rowId     If specified, will only rollback the transactions with that row id.
	 * @param updateUI     Whether to update the UI or not.
	 */
	public rollback(rowId?: Object, updateUI?: boolean): any[] { return; } ;

	/**
 	 * Returns a record by a specified key (requires that primaryKey is set in the settings).
	 * 				That is a wrapper for this.dataSource.findRecordByKey(key).
	 *
	 * @param key     Primary key of the record
	 */
	public findRecordByKey(key: Object): Object { return; } ;

	/**
 	 * Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
	 * 				That is a wrapper for this.dataSource.getDetachedRecord(t).
	 *
	 * @param t     A transaction object.
	 */
	public getDetachedRecord(t: Object): Object { return; } ;

	/**
 	 * Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
	 * 				That is a wrapper for this.dataSource.pendingTransactions().
	 */
	public pendingTransactions(): any[] { return; } ;

	/**
 	 * Returns a list of all transaction objects that are either pending, or have been committed in the data source.
	 * 				That is a wrapper for this.dataSource.allTransactions().
	 */
	public allTransactions(): any[] { return; } ;

	/**
 	 * Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
	 * 				That is a wrapper for this.dataSource.transactionsAsString().
	 */
	public transactionsAsString(): string { return; } ;

	/**
 	 * Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log (a serialized JSON string) as part of the POST request.
	 *
	 * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
	 * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
	 */
	public saveChanges(success: Function, error: Function): void { return; } ;

	/**
 	 * Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
	 *
	 * @param rec     Identifier/key of row. If missing, then number of rows in grid is used.
	 */
	public renderNewRow(rec?: string): void { return; } ;

	/**
 	 * If the data source points to a local JSON array of data, and it is necessary to reset it at runtime, it must be done through this API member instead of the options (options.dataSource)
	 *
	 * @param dataSource     New data source object.
	 */
	public dataSourceObject(dataSource: Object): void { return; } ;

	/**
 	 * Returns the total number of records in the underlying backend. If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
	 * 				In order for this to work, the response JSON/XML must include a property that specifies the total number of records, which name is specified by options.responseTotalRecCountKey.
	 * 				This functionality is completely delegated to the data source control.
	 */
	public totalRecordsCount(): number { return; } ;

	/**
 	 * Causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well
	 *
	 * @param internal    
	 */
	dataBind(internal: Object): void { return; };

	/**
 	 * Moves a visible column at a specified place, in front or behind a target column or at a target index
	 * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column    An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
	 * @param target    An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
	 * @param after    Specifies whether the column moved should be moved after or before the target column. This parameter is disregarded if there is no target column specified but a target index is used.
	 * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
	 * @param callback    Specifies a custom function to be called when the column is moved.
	 */
	public moveColumn(column: Object, target: Object, after?: boolean, inDom?: boolean, callback?: Function): void { return; } ;

	/**
 	 * Shows a hidden column. If the column is not hidden the method does nothing.
	 * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column     An identifier for the column. If a number is provided it will be used as a column index. If a string is provided it will be used as a column key.
	 * @param callback     Specifies a custom function to be called when the column is shown(optional)
	 */
	public showColumn(column: Object, callback: Function): void { return; } ;

	/**
 	 * Hides a visible column. If the column is hidden the method does nothing.
	 * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
	 *
	 * @param column     An identifier for the column. If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
	 * @param callback     Specifies a custom function to be called when the column is hidden(optional)
	 */
	public hideColumn(column: Object, callback: Function): void { return; } ;

	/**
 	 * Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
	 *
	 * @param key     column key
	 */
	public getUnboundValues(key: string): Object { return; } ;

	/**
 	 * Sets unbound values for the unbound column with the specified key. If removeOldValues is true then values(if any) for the unbound columns are re-set with the new values
	 *
	 * @param key     key of the unbound column
	 * @param values     array of values to be set on unbound values
	 * @param removeOldValues     if true removes current unbound values(if any) for the specified column and apply the new ones specified in parameter values. Otherwise merge current values with the specified in parameter values
	 */
	public setUnboundValues(key: string, values: any[], removeOldValues: Object): void { return; } ;

	/**
 	 * Sets unbound value for the unbound cell by the specified column key and row primary key.
	 *
	 * @param col     key of the unbound column
	 * @param rowId     primary key value of the row
	 * @param val     value to be set on unbound cell
	 * @param notToRender     if false will re-render the row
	 */
	public setUnboundValueByPK(col: string, rowId: string, val: Object, notToRender: Object): void { return; } ;

	/**
 	 * Returns an unbound column with the specified key. If not found returns null
	 *
	 * @param key    a column key
	 */
	public getUnboundColumnByKey(key: string): Object { return; } ;

	/**
 	 * Returns whether there is vertical scrollbar. Because of perfrormance issues in older Internet Explorer especially 8,9 - there is no need to check if height is not set - there is no scrollbar OR if row virtualization is enabled - it is supposed there is vertical scrollbar
	 */
	public hasVerticalScrollbar(): Object { return; } ;

	/**
 	 * Auto resize columns that have property width set to "*" so content to be auto-fitted(not shrinked/cutted). Auto-resizing is applied ONLY for visible columns
	 */
	public autoSizeColumns(): void { return; } ;

	/**
 	 * Calculates the width of the column so its content to be auto-fitted to the width of the data in it(the content should NOT be shrinked/cutted)
	 *
	 * @param columnIndex    Visible column index
	 */
	public calculateAutoFitColumnWidth(columnIndex: number): number { return; } ;

	/**
 	 * Get visible index by specified column key. If column is not found or is hidden then returns -1.
	 * 				Note: Method does not count column groups (Multi-Column Headers).
	 *
	 * @param columnKey     columnKey
	 * @param includeDataSkip     Optional parameter - if set to true include non data columns(like expander column, row selectors column, etc.) in calculations
	 */
	public getVisibleIndexByKey(columnKey: string, includeDataSkip: boolean): number { return; } ;

	/**
 	 * When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
	 *
	 * @param cols an array of column objects
	 */
	public renderMultiColumnHeader(cols: any[]): void { return; } ;

	/**
 	 * Scroll to the specified row or specified position(in pixels)
	 *
	 * @param scrollerPosition     An identifier of the vertical scroll position. When it is string then it is interpreted as pixels otherwise it is the row number
	 */
	public virtualScrollTo(scrollerPosition: Object): void { return; } ;

	/**
 	 * Returns column object and visible index for the table cell(TD) which is passed as argument
	 *
	 * @param $td     cell(TD) - either DOM TD element or jQuery object
	 */
	public getColumnByTD($td: Object): Object { return; } ;

	/**
 	 * Destroy is part of the jQuery UI widget API and does the following:
	 * 				1. Remove custom CSS classes that were added.
	 * 				2. Unwrap any wrapping elements such as scrolling divs and other containers.
	 * 				3. Unbind all events that were bound.
	 *
	 * @param notToCallDestroy 
	 */
	public destroy(notToCallDestroy: Object): void { return; } ;
}

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
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
					this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]))
				}
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

@Component({
	selector: "ig-combo",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dropDownWidth","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","responseDataType","responseContentType","requestType","valueKey","textKey","itemTemplate","headerTemplate","footerTemplate","inputName","animationShowDuration","animationHideDuration","dropDownAttachedToBody","filteringType","filterExprUrlKey","filteringCondition","filteringLogic","noMatchFoundText","loadOnDemandSettings","visibleItemsCount","placeHolder","mode","virtualization","multiSelection","grouping","validatorOptions","highlightMatchesMode","caseSensitive","autoSelectFirstMatch","autoComplete","allowCustomValue","closeDropDownOnBlur","delayInputChangeProcessing","tabIndex","dropDownOnFocus","closeDropDownOnSelect","selectItemBySpaceKey","initialSelectedItems","preventSubmitOnEnter","format","suppressKeyboard","enableClearButton","dropDownButtonTitle","clearButtonTitle","dropDownOrientation"],
	outputs: ["rendered","dataBinding","dataBound","filtering","filtered","itemsRendering","itemsRendered","dropDownOpening","dropDownOpened","dropDownClosing","dropDownClosed","selectionChanging","selectionChanged"]
})
export class IgComboComponent extends IgControlBase<IgCombo> implements ControlValueAccessor {
	protected _model: any;
	private _dataSource: any;
	private _changes: any;

	constructor( @Optional() public model: NgModel, el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
		if (model) {
			model.valueAccessor = this;
			this._model = model;
		}
	}

	ngOnInit() {
		let that = this;
		super.ngOnInit();
		jQuery(this._el).on(this._widgetName.toLowerCase() + "selectionchanged", function (evt, ui) {
			var items = ui.items;
			if (items.length > 0 && that._model) {
				that._model.viewToModelUpdate(items.map(function(item) {
					return item.data[that._config.valueKey];
				}));
			}
		});
		this._dataSource = jQuery.extend(true, [], this._config.dataSource);
		//manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
		if (this._model) {
			this.writeValue(this._model.value);
		}
	}
	writeValue(value) {
		if (!!jQuery(this._el).data(this._widgetName)) {
			jQuery(this._el)[this._widgetName]("value", value);
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: () => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	ngDoCheck() {
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource && this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					this._changes.forEachAddedItem(r => element.data("igCombo").dataBind());
					this._changes.forEachRemovedItem(r => element.data("igCombo").dataBind());
					if (this.model && this.model.value) {
						this.writeValue(this.model.value);
					}
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						record = this._config.dataSource[diff[i].index];
						item = element.data("igCombo").itemsFromIndex(diff[i].index);
						element.data("igCombo")._updateItem(item.element, record);
						if (element.data("igCombo").isSelected(item.element)) {
							//should update the input
							element.data("igCombo")._updateInputValues(false);
						}
					}
				}
			}
		}
	}

	/**
 	 * Performs databinding on the combo box. The [databinding](ui.igcombo#events:dataBinding) and [dataBound](ui.igcombo#events:dataBound) events are always raised.
	 */
	public dataBind(): Object { return; } ;

	/**
 	 * Forces an update of the igCombo value according to the current text in the igCombo input.
	 *             
	 * 				The refresh is primarily intended to be used with [allowCustomValue](ui.igcombo#options:allowCustomValue) set to true.
	 * 				The refresh will take the current text and, if no selection is applied, will set it as igCombo value provided that [allowCustomValue](ui.igcombo#options:allowCustomValue) true.
	 */
	public refreshValue(): Object { return; } ;

	/**
 	 * Gets the associated data of an item by value matching it's [valueKey](ui.igcombo#options:valueKey) property.
	 *
	 * @param value Value matching the valueKey property of item to be tested if it is selected
	 */
	public dataForValue(value: Object): Object { return; } ;

	/**
 	 * Gets the associated data of li element in the combo.
	 *
	 * @param $element jQuery element of item in the drop down list
	 */
	public dataForElement($element: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by element/s.
	 *
	 * @param $element jQuery object with drop down list item element or elements
	 */
	public itemsFromElement($element: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by value/s.
	 *
	 * @param value Value of item in the drop down list or array with values.
	 */
	public itemsFromValue(value: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by index/es.
	 *
	 * @param index Index or array of indexes of items in the drop down list
	 */
	public itemsFromIndex(index: number): Object { return; } ;

	/**
 	 * Gets array with data and objects representing li elements in combo box.
	 */
	public items(): any[] { return; } ;

	/**
 	 * Gets array with objects representing the filtered li elements in combo box.
	 */
	public filteredItems(): any[] { return; } ;

	/**
 	 * Gets array with objects representing selected li elements in combo box.
	 */
	public selectedItems(): any[] { return; } ;

	/**
 	 * Triggers filtering.
	 *
	 * @param texts Filter by string, or array of strings.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
	 */
	public filter(texts?: Object, event?: Object): Object { return; } ;

	/**
 	 * Clears filtering.
	 *
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
	 */
	public clearFiltering(event?: Object): Object { return; } ;

	/**
 	 * Opens the drop-down.
	 *
	 * @param callback Specifies callback function to be executed when open animation is completed.
	 * @param focusCombo Set to false to not focus combo"s text input after the drop down is opened. By default the combo's input is focused.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownOpening](ui.igcombo#events:dropDownOpening) and [dropDownOpened](ui.igcombo#events:dropDownOpened) events.
	 */
	public openDropDown(callback?: Function, focusCombo?: boolean, event?: Object): Object { return; } ;

	/**
 	 * Closes the drop down.
	 *
	 * @param callback Specifies callback function to be executed when close animation is completed.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownClosing](ui.igcombo#events:dropDownClosing) and [dropDownClosed](ui.igcombo#events:dropDownClosed) events.
	 */
	public closeDropDown(callback?: Function, event?: Object): Object { return; } ;

	/**
 	 * Clears the input text, resets highlighting, filtering and selection.
	 *
	 * @param options     Object with set of options controlling the behavior of this api method.
     focusCombo (boolean): Set to true to focus combo after clearing the input.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public clearInput(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Verifies whether a specified value is selected.
	 *
	 * @param value Value matching the [valueKey](ui.igcombo#options:valueKey) property of item to be tested if it is selected
	 */
	public isValueSelected(value: Object): boolean { return; } ;

	/**
 	 * Verifies whether the li representing the data source's record at the specified index is selected.
	 *
	 * @param index Index of data source record
	 */
	public isIndexSelected(index: Object): boolean { return; } ;

	/**
 	 * Selects list item/items from the drop-down list by specified value or array of values. When called witout params will return the value of the selected item or if [multiSelection](ui.igcombo#options:multiSelection) is enabled array of selected values.
	 *
	 * @param value Value or array of values matching the valueKey property of item/items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public value(value?: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Selects a list item from the drop-down list.
	 *
	 * @param $items jQuery object with item or items to be selected.
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public select($items: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Gets/Sets selected item/s from the drop-down list by specified index.
	 *
	 * @param index Index or array of indexes of items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public index(index?: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Selects all items from the drop-down list.
	 *
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public selectAll(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list by value.
	 *
	 * @param value Value or array of values matching the [valueKey](ui.igcombo#options:valueKey) property of item/items to be deselected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectByValue(value: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list.
	 *
	 * @param $items jQuery object with item or items to be deselected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselect($items: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list by index.
	 *
	 * @param index Index or array of indexes of items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectByIndex(index: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects all selected items from the drop down list.
	 *
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectAll(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Gets/Sets index of active item in list.
	 *
	 * @param index New active index for list. In order to clear active item, use -1.
	 * @return number|object Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
	 */
	public activeIndex(index?: number): number|Object { return; } ;

	/**
 	 * Gets/Sets text in text input field.
	 *
	 * @param text New text value for combo's input field.
	 * @return string|object If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
	 */
	public text(text?: string): string|Object { return; } ;

	/**
 	 * Gets/Sets scrollTop attribute of html element, which scrolls drop-down list of items.
	 *
	 * @param value New value for scroll top in list. Note: if list is closed and new value is provided, then openDropDown() is called automatically.
	 * @return number|object If parameter is undefined, then scrollTop is returned. Otherwise, it returns reference to this igCombo.
	 */
	public listScrollTop(value?: number): number|Object { return; } ;

	/**
 	 * Gets jQuery objects representing all rendered list items in the combo drop down list.
	 */
	public listItems(): Object { return; } ;

	/**
 	 * Gets jQuery object of the outer element of the combo.
	 */
	public comboWrapper(): Object { return; } ;

	/**
 	 * Gets jQuery object of the drop down associated with this combo widget
	 */
	public dropDown(): Object { return; } ;

	/**
 	 * Gets jQuery object of the container that holds the list with items.
	 */
	public list(): Object { return; } ;

	/**
 	 * Gets jQuery object of the text input associated with this combo widget.
	 */
	public textInput(): Object { return; } ;

	/**
 	 * Gets jQuery object of the value input associated with this combo widget.
	 */
	public valueInput(): Object { return; } ;

	/**
 	 * Gets reference to [igValidator](ui.igvalidator) used by igCombo.
	 *
	 * @param destroy Request to destroy validator.
	 */
	public validator(destroy?: boolean): Object { return; } ;

	/**
 	 * Trigger validation.
	 */
	public validate(): boolean { return; } ;

	/**
 	 * Returns boolean representing whether the combo drop down list is opened.
	 */
	public dropDownOpened(): boolean { return; } ;

	/**
 	 * Repositions drop down under combo input. Has effect only when the drop down is attached to body.
	 */
	public positionDropDown(): Object { return; } ;

	/**
 	 * Destroys the igCombo widget.
	 */
	public destroy(): Object { return; } ;
}

export class IgEditorBase<Model> extends IgControlBase<Model> implements ControlValueAccessor {
	protected _model: any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) {
		super(el, renderer, differs);
		if (model) {
			model.valueAccessor = this;
			this._model = model;
		}
	}

	ngOnInit() {
		let that = this;
		super.ngOnInit();
		if (this._model) {
			jQuery(this._el).on(this._widgetName.toLowerCase() + "valuechanged", function (evt, ui) {
				that.onChange(ui.newValue);
			});
			if (this._widgetName === "igTextEditor") {
				jQuery(this._el).on(this._widgetName.toLowerCase() + "textchanged", function (evt, ui) {
					that.onChange(ui.text);
				});
			}
			jQuery(this._el).on(this._widgetName.toLowerCase() + "blur", function (evt, ui) {
				that.onTouched();
			});
			//manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
			this.writeValue(this._model.value);
		}
	}

	writeValue(value: any) {
		if (!!jQuery(this._el).data(this._widgetName) && value !== null) {
			jQuery(this._el)[this._widgetName]("value", value);
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
}

//Editors
@Component({
	selector: "ig-checkbox-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","checked","size","iconClass"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged"]
})
export class IgCheckboxEditorComponent extends IgEditorBase<IgCheckboxEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; } ;

	/**
 	 * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
	 * 				1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
	 * 				This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
	 * 				2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
	 * 				To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
	 *
	 * @param newValue 
	 */
	public value(newValue: Object): string { return; } ;

	/**
 	 * Toggles the state of the checkbox.
	 */
	public toggle(): void { return; } ;
}

@Component({
	selector: "ig-currency-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","negativeSign","negativePattern","decimalSeparator","groupSeparator","groups","maxDecimals","minDecimals","dataMode","minValue","maxValue","spinDelta","scientificFormat","positivePattern","currencySymbol"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgCurrencyEditorComponent extends IgEditorBase<IgCurrencyEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
	 *
	 * @param symbol     New currency symbol.
	 */
	public currencySymbol(symbol?: Object): string { return; } ;
}

@Component({
	selector: "ig-date-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar","minValue","maxValue","dateDisplayFormat","dateInputFormat","spinDelta","limitSpinToCurrentField","enableUTCDates","centuryThreshold","yearShift"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgDateEditorComponent extends IgEditorBase<IgDateEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } 

	/**
 	 * Gets/Sets editor value.
	 * 			
	 * 				Note! This option doesn't use the displayInputFormat to extract the date
	 *
	 * @param newValue     New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
	 */
	public value(newValue?: Object): Object { return; } ;

	/**
 	 * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
	 * 			In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
	 */
	public getSelectedDate(): Object { return; } ;

	/**
 	 * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
	 * 			In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
	 *
	 * @param date     
	 */
	public selectDate(date: Object): void { return; } ;

	/**
 	 * Increases the date or time period, depending on the current cursor position.
	 *
	 * @param delta     The increase delta.
	 */
	public spinUp(delta?: number): void { return; } ;

	/**
 	 * Decreases the date or time period, depending on the current cursor position.
	 *
	 * @param delta     The decrease delta.
	 */
	public spinDown(delta?: number): void { return; } ;

	/**
 	 * Returns a reference to the spin up UI element of the editor.
	 */
	public spinUpButton(): string { return; } ;

	/**
 	 * Returns a reference to the spin down UI element of the editor.
	 */
	public spinDownButton(): string { return; } ;

	/**
 	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; } ;
	public dropDownButton(): void { return; } ;
	public dropDownContainer(): void { return; } ;
	public dropDownVisible(): void { return; } ;
	public findListItemIndex(): void { return; } ;
	public getSelectedListItem(): void { return; } ;
	public selectedListIndex(): void { return; } ;
}

@Component({
	selector: "ig-date-picker",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar","minValue","maxValue","dateDisplayFormat","dateInputFormat","spinDelta","limitSpinToCurrentField","enableUTCDates","centuryThreshold","yearShift","datepickerOptions"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged","itemSelected"]
})
export class IgDatePickerComponent extends IgEditorBase<IgDatePicker> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Returns a reference to the jQuery calendar used as a picker selector
	 */
	public getCalendar(): string { return; } ;
	public dropDownContainer(): void { return; } ;
	public findListItemIndex(): void { return; } ;
	public getSelectedListItem(): void { return; } ;
	public selectedListIndex(): void { return; } ;

	/**
 	 * Shows the drop down list.
	 */
	public showDropDown(): void { return; } ;

	/**
 	 * Hides the drop down list.
	 */
	public hideDropDown(): void { return; } ;

	/**
 	 * Returns a reference to the calendar button UI element of the editor.
	 */
	public dropDownButton(): string { return; } ;

	/**
 	 * Returns the visibility state of the calendar.
	 */
	public dropDownVisible(): boolean { return; } ;

	/**
 	 * Destroys the widget
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-mask-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgMaskEditorComponent extends IgEditorBase<IgMaskEditor> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets/Sets mask editor value.
	 *
	 * @param newValue     New mask editor value.
	 */
	public value(newValue?: string): string { return; } ;
	public dropDownContainer(): void { return; } ;
	public showDropDown(): void { return; } ;
	public hideDropDown(): void { return; } ;
	public dropDownButton(): void { return; } ;
	public spinUpButton(): void { return; } ;
	public spinDownButton(): void { return; } ;
	public dropDownVisible(): void { return; } ;
	public findListItemIndex(): void { return; } ;
	public selectedListIndex(): void { return; } ;
	public getSelectedListItem(): void { return; } ;
	public spinUp(): void { return; } ;
	public spinDown(): void { return; } ;

	/**
 	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean { return; } ;
}

@Component({
	selector: "ig-numeric-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","negativeSign","negativePattern","decimalSeparator","groupSeparator","groups","maxDecimals","minDecimals","dataMode","minValue","maxValue","spinDelta","scientificFormat"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgNumericEditorComponent extends IgEditorBase<IgNumericEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets/Sets editor value.
	 *
	 * @param newValue     New editor value.
	 */
	public value(newValue?: number): number { return; } ;

	/**
 	 * Finds index of list item by text that matches with the search parameters.
	 *
	 * @param number     The text to search for.
	 */
	public findListItemIndex(number: number): number { return; } ;
	public getSelectedText(): void { return; } ;
	public getSelectionStart(): void { return; } ;
	public getSelectionEnd(): void { return; } ;

	/**
 	 * Increments value in editor according to the parameter.
	 *
	 * @param delta     Increments value.
	 */
	public spinUp(delta?: number): void { return; } ;

	/**
 	 * Decrements value in editor according to the parameter.
	 *
	 * @param delta     Decrement value.
	 */
	public spinDown(delta?: number): void { return; } ;

	/**
 	 * Moves the hovered index to the item that appears above the current one in the list.
	 */
	public selectListIndexUp(): void { return; } ;

	/**
 	 * Moves the hovered index to the item that appears above the current one in the list.
	 */
	public selectListIndexDown(): void { return; } ;

	/**
 	 * Gets current regional.
	 */
	public getRegionalOption(): string { return; } ;
}

@Component({
	selector: "ig-percent-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","negativeSign","negativePattern","decimalSeparator","groupSeparator","groups","maxDecimals","minDecimals","dataMode","minValue","maxValue","spinDelta","scientificFormat","positivePattern","percentSymbol","displayFactor"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgPercentEditorComponent extends IgEditorBase<IgPercentEditor> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Paste text at location of the caret or over the current selection. Best used during editing, as the method will instead set the text as value (modified by the [displayFactor](ui.igpercenteditor#options:displayFactor)) if the editor is not focused.
	 * 				Note: the method raises the [textChanged](ui.igpercenteditor#events:textChanged) event.
	 *
	 * @param string     The string to be inserted.
	 */
	public insert(string: string): void { return; } ;

	/**
 	 * Gets/Sets a string that is used as the percent symbol shown with the number in the input. The value provided as a param is propagated to the [percentSymbol](ui.igpercenteditor#options:percentSymbol) option and thus has the same priority as the option.
	 *
	 * @param symbol     New percent symbol.
	 */
	public percentSymbol(symbol?: Object): string { return; } ;
}

@Component({
	selector: "ig-text-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgTextEditorComponent extends IgEditorBase<IgTextEditor> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Gets the visible text in the editor.
	 */
	public displayValue(): string { return; } ;

	/**
 	 * Gets reference to jquery object which is used as container of drop-down list.
	 */
	public dropDownContainer(): string { return; } ;

	/**
 	 * Shows the drop down list.
	 */
	public showDropDown(): void { return; } ;

	/**
 	 * Hides the drop down list.
	 */
	public hideDropDown(): void { return; } ;

	/**
 	 * Returns a reference to the drop-down button UI element of the editor.
	 */
	public dropDownButton(): string { return; } ;

	/**
 	 * Returns if the drop-down list is visible.
	 */
	public dropDownVisible(): boolean { return; } ;

	/**
 	 * Returns a reference to the clear button UI element of the editor.
	 */
	public clearButton(): string { return; } ;

	/**
 	 * Finds index of list item by text that matches with the search parameters.
	 *
	 * @param text     The text to search for in the drop down list.
	 * @param matchType     The rule that is applied for searching the text.
	 */
	public findListItemIndex(text: string, matchType?: Object): number { return; } ;

	/**
 	 * Gets the index of the selected list item. Sets selected item by index.
	 *
	 * @param index     The index of the item that needs to be selected.
	 */
	public selectedListIndex(index?: number): number { return; } ;

	/**
 	 * Gets the selected list item.
	 */
	public getSelectedListItem(): string { return; } ;

	/**
 	 * Gets the selected text in the editor.
	 */
	public getSelectedText(): string { return; } ;

	/**
 	 * Gets the start index of the selected text in the editor.
	 */
	public getSelectionStart(): number { return; } ;

	/**
 	 * Gets the end index of the selected text in the editor.
	 */
	public getSelectionEnd(): number { return; } ;

	/**
 	 * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
	 * 				Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
	 *
	 * @param string     The string to be inserted.
	 */
	public insert(string: string): void { return; } ;

	/**
 	 * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
	 *
	 * @param start     Start of the selection.
	 * @param end     End of the selection.
	 */
	public select(start: number, end: number): void { return; } ;

	/**
 	 * Hovers the previous item in the drop-down list if the list is opened.
	 */
	public spinUp(): void { return; } ;

	/**
 	 * Hovers the next item in the drop-down list if the list is opened.
	 */
	public spinDown(): void { return; } ;

	/**
 	 * Returns a reference to the spin up UI element of the editor.
	 */
	public spinUpButton(): string { return; } ;

	/**
 	 * Returns a reference to the spin down UI element of the editor.
	 */
	public spinDownButton(): string { return; } ;
}

@Component({
	selector: "ig-tree",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","checkboxMode","singleBranchExpand","hotTracking","parentNodeImageUrl","parentNodeImageClass","parentNodeImageTooltip","leafNodeImageUrl","leafNodeImageClass","leafNodeImageTooltip","animationDuration","pathSeparator","dataSource","dataSourceUrl","dataSourceType","responseDataKey","responseDataType","requestType","responseContentType","initialExpandDepth","loadOnDemand","bindings","defaultNodeTarget","dragAndDrop","updateUrl","dragAndDropSettings"],
	outputs: ["dataBinding","dataBound","rendering","rendered","selectionChanging","selectionChanged","nodeCheckstateChanging","nodeCheckstateChanged","nodePopulating","nodePopulated","nodeCollapsing","nodeCollapsed","nodeExpanding","nodeExpanded","nodeClick","nodeDoubleClick","dragStart","drag","dragStop","nodeDropping","nodeDropped"]
})
export class IgTreeComponent extends IgControlBase<IgTree> {
	private _dataSource: any;
	private _changes: any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
		super.ngOnInit();
		this._dataSource = jQuery.extend(true, [], this._config.dataSource);
	}

	ngDoCheck() {
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					this._changes.forEachAddedItem(r => element.igTree("dataBind"));
					this._changes.forEachRemovedItem(r => element.igTree("dataBind"));
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				element.igTree("dataBind");
			}
		}
	}

	/**
 	 * Performs databinding on the igTree.
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Toggles the checkstate of a node if checkboxMode is not set to off, otherwise does nothing.
	 *
	 * @param node     Specifies the node element the checkbox of which would be toggled.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public toggleCheckstate(node: Object, event?: Object): void { return; } ;

	/**
 	 * Toggles the collapse/expand state for the specified node.
	 *
	 * @param node     Specifies the node element the checkbox of which would be toggled.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public toggle(node: Object, event?: Object): void { return; } ;

	/**
 	 * Expands the tree down to the specified node and selects the node if specified.
	 *
	 * @param node     Specifies the node element down to which the tree would be expanded.
	 * @param toSelect     Specifies the whether to select the node after expanding to it.
	 */
	public expandToNode(node: Object, toSelect?: boolean): void { return; } ;

	/**
 	 * Expands the specified node.
	 *
	 * @param node     Specifies the node element to expand.
	 */
	public expand(node: Object): void { return; } ;

	/**
 	 * Collapses the specified node.
	 *
	 * @param node     Specifies the node element to collapse.
	 */
	public collapse(node: Object): void { return; } ;

	/**
 	 * Retrieves the parent node element of the specified node element.
	 *
	 * @param node     Specifies the jQuery selected node element to collapse.
	 */
	public parentNode(node: Object): Object { return; } ;

	/**
 	 * Retrieves the jQuery element of the node with the specified path.
	 *
	 * @param nodePath     Specifies the path to the required node.
	 */
	public nodeByPath(nodePath: string): Object { return; } ;

	/**
 	 * Retrieves the jQuery element of the node with the specified value.
	 *
	 * @param value     Specifies the value of the required node.
	 */
	public nodesByValue(value: string): Object { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes checked.
	 */
	public checkedNodes(): any[] { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes unchecked.
	 */
	public uncheckedNodes(): any[] { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes partially checked.
	 */
	public partiallyCheckedNodes(): any[] { return; } ;

	/**
 	 * Selects a node.
	 *
	 * @param node     Specifies the node element to be selected.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public select(node: Object, event?: Object): void { return; } ;

	/**
 	 * Deselects the specified node.
	 *
	 * @param node     Specifies the node element to be deselected.
	 */
	public deselect(node: Object): void { return; } ;

	/**
 	 * Deselects all the selected nodes.
	 */
	public clearSelection(): void { return; } ;

	/**
 	 * Retrieves the node object for the selected node.
	 */
	public selectedNode(): Object { return; } ;

	/**
 	 * Retrieves all node objects with the specified text (case sensitive).
	 *
	 * @param text     The text to search for.
	 * @param parent     The node element to start the search from. If not specified then search would start from the root of the tree.
	 */
	public findNodesByText(text: string, parent?: Object): any[] { return; } ;

	/**
 	 * Retrieves all node objects for the immediate children of the specified parent with the specified text (case sensitive).
	 *
	 * @param text     The text to search for.
	 * @param parent     The node element the children of which would be searched.
	 */
	public findImmediateNodesByText(text: string, parent?: Object): any[] { return; } ;

	/**
 	 * Retrieves the n-th jQuery node element child of the specified parent.
	 *
	 * @param index     Specifies the index the node at which to be retrieved.
	 * @param parent     The parent node element to start the search from.
	 */
	public nodeByIndex(index: number, parent?: Object): Object { return; } ;

	/**
 	 * Retrieves a node object for the specified node element.
	 *
	 * @param element     Specifies the node element.
	 */
	public nodeFromElement(element: Object): Object { return; } ;

	/**
 	 * Retrieves a node object collection of the immediate children of the provided node element.
	 *
	 * @param parent     Specifies the node element.
	 */
	public children(parent: Object): any[] { return; } ;

	/**
 	 * Retrieves a node object collection of the immediate children of the node with the provided path.
	 *
	 * @param path     Specifies the path of the node the children of which are to be retrieved.
	 */
	public childrenByPath(path: string): any[] { return; } ;

	/**
 	 * Returns true if the provided node element is selected and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isSelected(node: Object): boolean { return; } ;

	/**
 	 * Returns true if the provided node element is expanded and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isExpanded(node: Object): boolean { return; } ;

	/**
 	 * Returns true if the provided node element has its checkbox checkstate checked and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isChecked(node: Object): boolean { return; } ;

	/**
 	 * Returns the specified node checkstate.
	 *
	 * @param node     Specifies the node element.
	 */
	public checkState(node: Object): string { return; } ;

	/**
 	 * Adds a new array of nodes to the tree. New nodes are appended to the root or to a specified parent node, at a specified index.
	 *
	 * @param node     Specifies the data used to create the new nodeс.
	 * @param parent     Specifies the element of the parent node the nodes are to be appended to.
	 * @param nodeIndex     Specifies the index at which the nodes to be inserted.
	 */
	public addNode(node: Object, parent?: Object, nodeIndex?: number): void { return; } ;

	/**
 	 * Removes the node with with the specified path and all of its children.
	 *
	 * @param path     Specifies the path of the node to be removed.
	 */
	public removeAt(path: string): void { return; } ;

	/**
 	 * Removing all the nodes with the specified value.
	 *
	 * @param value     Specifies the value of the nodes to be removed.
	 */
	public removeNodesByValue(value: string): void { return; } ;

	/**
 	 * Performs a UI update on the provided node element with the provided data.
	 *
	 * @param element     Specifies the node to be updated.
	 * @param data     Specifies the new data item the node would update according to.
	 */
	public applyChangesToNode(element: Object, data: Object): void { return; } ;

	/**
 	 * Returns the transaction log stack.
	 */
	public transactionLog(): any[] { return; } ;

	/**
 	 * Returns the data for the node with specified path.
	 *
	 * @param path     Specifies the node path for which the data is returned.
	 */
	public nodeDataFor(path: string): Object { return; } ;

	/**
 	 * Destructor for the igTree widget.
	 */
	public destroy(): void { return; } ;
}

export class IgContentControlBase<Model> extends IgControlBase<Model> {
	private childNodes: Array<any>;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
		this.childNodes = el.nativeElement.childNodes;
	}

	ngOnInit() {
		jQuery(this._el).append(this.childNodes);
		super.ngOnInit();
	}
}

@Component({
	selector: "ig-dialog",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","mainElement","state","pinned","closeOnEscape","showCloseButton","showMaximizeButton","showMinimizeButton","showPinButton","pinOnMinimized","imageClass","headerText","showHeader","showFooter","footerText","dialogClass","container","height","width","minHeight","minWidth","maxHeight","maxWidth","draggable","position","resizable","tabIndex","openAnimation","closeAnimation","zIndex","modal","trackFocus","closeButtonTitle","minimizeButtonTitle","maximizeButtonTitle","pinButtonTitle","unpinButtonTitle","restoreButtonTitle","temporaryUrl","enableHeaderFocus","enableDblclick"],
	outputs: ["stateChanging","stateChanged","animationEnded","focus","blur"]
})
export class IgDialogComponent extends IgContentControlBase<IgDialog> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Destroys the igDialog and moves the target element to its original parent.
	 */
	public destroy(): Object { return; } ;

	/**
 	 * Gets/Sets the state of the editor.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 *
	 * @param state     New state.
	 */
	public state(state?: string): string { return; } ;

	/**
 	 * Gets reference to the dynamically created DIV element which represents the dialog.
	 */
	public mainElement(): Element { return; } ;

	/**
 	 * Closes the dialog if it is opened.
	 * 				Notes:
	 * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 * 				2. That method does not change minimized or maximized state of the dialog.
	 * 				It means that method "open" will open the dialog and keep previous minimized or maximized state.
	 *
	 * @param e     Browser event: internal use only.
	 */
	public close(e?: Object): Object { return; } ;

	/**
 	 * Opens the dialog if it is closed. Notes:
	 * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
	 */
	public open(): Object { return; } ;

	/**
 	 * Minimizes the dialog if it is not minimized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public minimize(): Object { return; } ;

	/**
 	 * Maximizes the dialog if it is not maximized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public maximize(): Object { return; } ;

	/**
 	 * Sets the normal state for the dialog if it was maximized or minimized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public restore(): Object { return; } ;

	/**
 	 * Pins the dialog if it is not pinned.
	 * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
	 * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
	 * 				Notes:
	 * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
	 * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public pin(): Object { return; } ;

	/**
 	 * Unpins the dialog if it is pinned.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public unpin(): Object { return; } ;

	/**
 	 * Gets a reference to the top modal dialog.
	 */
	public getTopModal(): Object { return; } ;

	/**
 	 * Checks if the dialog is modal and if it is currently active.
	 */
	public isTopModal(): boolean { return; } ;

	/**
 	 * Moves a not modal dialog to the top.
	 *
	 * @param e     Original event of browser.
	 */
	public moveToTop(e?: Object): Object { return; } ;

	/**
 	 * Retrieves the igDialog content container or sets its content to be the new content provided.
	 *
	 * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
	 */
	public content(newContent?: string): Object { return; } ;
}

@Component({
	selector: "ig-splitter",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","orientation","panels","dragDelta","resizeOtherSplitters"],
	outputs: ["collapsed","expanded","resizeStarted","resizing","resizeEnded","layoutRefreshing","layoutRefreshed"]
})
export class IgSplitterComponent extends IgContentControlBase<IgSplitter> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Returns the element that represents this widget.
	 */
	public widget(): Object { return; } ;


	/**
 	 * Expand the specified panel by index.
	 *
	 * @param index Specifies the index of the panel to expand.
	 */
	public expandAt(index: Object): void { return; } ;


	/**
 	 * Collapse the specified panel.
	 *
	 * @param index Specifies the index of the panel to collapse.
	 */
	public collapseAt(index: Object): void { return; } ;


	/**
 	 * Retrieves the jQuery element of the first panel.
	 */
	public firstPanel(): Object { return; } ;


	/**
 	 * Retrieves the jQuery element of the second panel.
	 */
	public secondPanel(): Object { return; } ;


	/**
 	 * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
	 */
	public refreshLayout(): void { return; } ;


	/**
 	 * You can set new size of the first panel after the splitter is rendered.
	 *
	 * @param size Specifies the new size of the first panel.
	 */
	public setFirstPanelSize(size: Object): void { return; } ;


	/**
 	 * You can set new size of the second panel after the splitter is rendered.
	 *
	 * @param size Specifies the new size of the second panel.
	 */
	public setSecondPanelSize(size: Object): void { return; } ;

	/**
 	 * Destroys the igSplitter widget
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-layout-manager",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","borderLayout","gridLayout","height","itemCount","items","layoutMode","width"],
	outputs: ["internalResized","internalResizing","itemRendered","itemRendering","rendered"]
})
export class IgLayoutManagerComponent extends IgContentControlBase<IgLayoutManager> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Triggers recalculation of the layout dimensions. Layouts may not need to be reflowed manually, if their sizes are in percentages (i.e. they are responsive by default)
	 *                     this can be particularly useful with a grid layout, when the container has percentage sizes, but items are calculated in pixels and positioned absolutely in the container.
	 *
	 * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
	 * @param animationDuration The animation duration to be used for this reflow only. Supported only for Grid Layout mode.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public reflow(forceReflow?: boolean, animationDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Destroy is part of the jQuery UI widget API and does the following:
	 *                     1. Remove custom CSS classes that were added.
	 *                     2. Remove any elements that were added at widget's initialization and after that, which didn't below to the original markup
	 *                     3. Unbind all events that were bound.
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-tile-manager",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","columnWidth","columnHeight","cols","rows","marginLeft","marginTop","rearrangeItems","items","dataSource","minimizedState","maximizedState","maximizedTileIndex","rightPanelCols","rightPanelTilesWidth","rightPanelTilesHeight","showRightPanelScroll","splitterOptions","preventMaximizingSelector","animationDuration","dataSourceUrl","responseDataKey","responseDataType","dataSourceType","requestType","responseContentType"],
	outputs: ["dataBinding","dataBound","rendering","rendered","tileRendering","tileRendered","tileMaximizing","tileMaximized","tileMinimizing","tileMinimized"]
})
export class IgTileManagerComponent extends IgContentControlBase<IgTileManager> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Maximizes a given tile.
	 *
	 * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
	 * @param animDuration Specifies the animation duration for this maximizing.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public maximize($tileToMaximize: Object, animDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Minimizes the maximized tile. Has no effect if no maximized tile is present.
	 *
	 * @param animDuration Specifies the animation duration for this minimize.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public minimize(animDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Returns the maximized tile or null if such is not present.
	 * @return object|null Returns the maximized tile or null if such is not present.
	 */
	public maximizedTile(): Object { return; } ;

	/**
 	 * Returns an array with the tiles in minimized state or null if such are not present.
	 * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
	 */
	public minimizedTiles(): Object { return; } ;

	/**
 	 * Returns the splitter associated with this tile manager or
	 *                 null if the tile manager was instantiated with maximizedTileIndex.
	 * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
	 */
	public splitter(): Object { return; } ;

	/**
 	 * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
	 */
	public layoutManager(): Object { return; } ;

	/**
 	 * Reflow the tile manager. Rearranging the tiles to fit in the container
	 *
	 * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
	 * @param animationDuration The animation duration to be used for this reflow only.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public reflow(forceReflow?: Object, animationDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Returns the element that represents this widget.
	 */
	public widget(): Object { return; } ;

	/**
 	 * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
	 */
	public destroy(): Object { return; } ;
}

@Component({
	selector: "ig-html-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","showFormattingToolbar","showTextToolbar","showInsertObjectToolbar","showCopyPasteToolbar","width","height","toolbarSettings","customToolbars","inputName","value"],
	outputs: ["rendered","rendering","actionExecuting","actionExecuted","toolbarCollapsing","toolbarCollapsed","toolbarExpanding","toolbarExpanded","cut","copy","paste","undo","redo","workspaceResized"]
})
export class IgHtmlEditorComponent extends IgControlBase<IgHtmlEditor> implements ControlValueAccessor {
	protected _model: any;
	protected _zone: any;
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel, private zone: NgZone) {
		super(el, renderer, differs);
		if (model) {
			model.valueAccessor = this;
			this._zone = zone;
			this._model = model;
		}
	}
	ngOnInit() {
		super.ngOnInit();
		let that = this;
		if (this._model) {
			var iframe = jQuery(this._el).find("iframe")[0].contentWindow.document;
			jQuery(iframe).find("body[contenteditable=true]").on("keyup", function (evt, ui) {
				that._model.viewToModelUpdate(jQuery(evt.target).html());
				that._zone.run(() => {
					that._model.viewToModelUpdate(jQuery(evt.target).html());
				});
			});
		}

	}
	writeValue(value: any) {
		if (!!jQuery(this._el).data(this._widgetName) && value !== null && value !== jQuery(this._el)[this._widgetName]("getContent", "html")) {
			jQuery(this._el)[this._widgetName]("setContent", value, "html");
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}

	/**
 	 * Returns the element on which the widget was instantiated
	 */
	public widget(): void { return; } ;

	/**
 	 * Resizes the height of the workspace
	 */
	public resizeWorkspace(): void { return; } ;

	/**
 	 * Gets the content of the html editor.
	 *
	 * @param format Returns the content as html or plain text. Values can be "text" or "html".
	 */
	public getContent(format: string): string { return; } ;

	/**
 	 * Sets the content of the html editor.
	 *
	 * @param content The content which will be set.
	 * @param format The content type: "text" or "html".
	 */
	public setContent(content: string, format: string): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Executes htmleditor commands.
	 *
	 * @param actionName The command name.
	 * @param args Additional parameter for the command.
	 */
	public executeAction(actionName: string, args?: Object): void { return; } ;

	/**
 	 * Returns true/false if the editor contents were modified or not.
	 */
	public isDirty(): Object { return; } ;

	/**
 	 * Returns the window object associated with the Html Editor's content editable area
	 */
	public contentWindow(): Object { return; } ;

	/**
 	 * Returns the document object associated with the Html Editor's content editable area
	 */
	public contentDocument(): Object { return; } ;

	/**
 	 * Returns the content editable associated with this Html Editor
	 */
	public contentEditable(): Object { return; } ;

	/**
 	 * Returns Selection object that represent the current selection in the content editable
	 */
	public selection(): Object { return; } ;

	/**
 	 * Returns Range object that represent the current range in the content editable
	 */
	public range(): Object { return; } ;

	/**
 	 * Inserts the provided content at the position of the caret.
	 *
	 * @param element Accepts html string, DOM element or a jQuery object.
	 */
	public insertAtCaret(element: Object): void { return; } ;
}


@Component({
	selector: "ig-validator",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","onchange","onblur","onsubmit","required","number","date","email","lengthRange","valueRange","creditCard","pattern","messageTarget","errorMessage","successMessage","threshold","equalTo","custom","fields","notificationOptions","requiredIndication","optionalIndication"],
	outputs: ["validating","validated","success","error","errorShowing","errorHiding","errorShown","errorHidden","successShowing","successHiding","successShown","successHidden","formValidating","formValidated","formError","formSuccess"]
})
export class IgValidatorComponent extends IgControlBase<IgValidator> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var evtName;
		this._el = jQuery(document).find("#" + this.widgetId);
		jQuery(this._el)[this._widgetName](this._config);
		this._events = new Map<string, string>();
		//events binding
		let that = this;
		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(this._el).on(evtName, function (evt, ui) {
				that[that._events[evt.type]].emit({ event: evt, ui: ui });
			});
		}
	}

	/**
 	 * Trigger validation and show errors for invalid fields.
	 *
	 * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
	 */
	public validate(field?: Object): boolean { return; } ;

	/**
 	 * Trigger validation but do not display error messages.
	 *
	 * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
	 */
	public isValid(field?: Object): boolean { return; } ;

	/**
 	 * Hide any possible message(s) (either messageTarget or igNotifier).
	 * 			Note: When the validator has a fields colleciton, not passing a field will hide messages on all fields.
	 *
	 * @param field    Optional field object, its selector or zero-based index to hide message for.
	 */
	public hide(field?: Object): void { return; } ;

	/**
 	 * Gets all current error messages for invalid field(s). Note that this method does not valdiate and states and messages are only updated on validation, so
	 * 			this can be used on formValidated event or after validate/isValid method calls.
	 *
	 * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
	 */
	public getErrorMessages(field?: Object): any[] { return; } ;

	/**
 	 * Check for currently displayed message(s). Takes an optional field.
	 * 			Note: When the validator has a fields colleciton, not passing a field will return a cumulative true even if just one field has a visible message.
	 *
	 * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
	 */
	public isMessageDisplayed(field?: Object): boolean { return; } ;

	/**
 	 * Gets the notifier for the igValidator or for a single filed.
	 *
	 * @param field    Optional field object, its selector or zero-based index to get notifier for.
	 */
	public notifier(field?: Object): Object { return; } ;

	/**
 	 * Adds an new input to the fields collection and initializes it with the validator. Note: Additional fields are only accepted if the validator has been created with the collection.
	 *
	 * @param field    An object with the field selector and options.
	 */
	public addField(field: Object): void { return; } ;

	/**
 	 * Removes an input from the fields collection.
	 *
	 * @param field    The field object to remove, its zero-based index or selector.
	 */
	public removeField(field: Object): void { return; } ;

	/**
 	 * Updates a field in the validator collection. Used to reinitialize field in case a control has been created after the validator or to pass in new options.
	 *
	 * @param field    The field object to update, its zero-based index or selector.
	 * @param fieldOptions    New options to apply to the field.
	 */
	public updateField(field: Object, fieldOptions?: Object): void { return; } ;

	/**
 	 * Destroys the validator widget.
	 */
	public destroy(): void { return; } ;
}

//Pivot Grids
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

@Component({
	selector: "ig-pivot-grid",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceOptions","deferUpdate","isParentInFrontForColumns","isParentInFrontForRows","compactColumnHeaders","compactRowHeaders","rowHeadersLayout","compactColumnHeaderIndentation","compactRowHeaderIndentation","rowHeaderLinkGroupIndentation","treeRowHeaderIndentation","defaultRowHeaderWidth","allowSorting","firstSortDirection","allowHeaderRowsSorting","allowHeaderColumnsSorting","levelSortDirections","defaultLevelSortBehavior","firstLevelSortDirection","gridOptions","dragAndDropSettings","dropDownParent","disableRowsDropArea","disableColumnsDropArea","disableMeasuresDropArea","disableFiltersDropArea","hideRowsDropArea","hideColumnsDropArea","hideMeasuresDropArea","hideFiltersDropArea","customMoveValidation"],
	outputs: ["dataSourceInitialized","dataSourceUpdated","pivotGridHeadersRendered","pivotGridRendered","tupleMemberExpanding","tupleMemberExpanded","tupleMemberCollapsing","tupleMemberCollapsed","sorting","sorted","headersSorting","headersSorted","dragStart","drag","dragStop","metadataDropping","metadataDropped","metadataRemoving","metadataRemoved","filterDropDownOpening","filterDropDownOpened","filterMembersLoaded","filterDropDownOk","filterDropDownClosing","filterDropDownClosed"]
})
export class IgPivotGridComponent extends IgControlBase<IgPivotGrid> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

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

//Charts
@Component({
	selector: "ig-data-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","isPagePanningAllowed","syncChannel","synchronizeVertically","synchronizeHorizontally","crosshairPoint","windowRect","horizontalZoomable","verticalZoomable","windowResponse","windowRectMinWidth","overviewPlusDetailPaneVisibility","crosshairVisibility","plotAreaBackground","defaultInteraction","dragModifier","panModifier","previewRect","windowPositionHorizontal","windowPositionVertical","windowScaleHorizontal","windowScaleVertical","circleMarkerTemplate","triangleMarkerTemplate","pyramidMarkerTemplate","squareMarkerTemplate","diamondMarkerTemplate","pentagonMarkerTemplate","hexagonMarkerTemplate","tetragramMarkerTemplate","pentagramMarkerTemplate","hexagramMarkerTemplate","topMargin","leftMargin","rightMargin","bottomMargin","autoMarginWidth","autoMarginHeight","isSquare","gridMode","brushes","markerBrushes","outlines","markerOutlines","width","height","size","dataSource","dataSourceUrl","dataSourceType","responseDataKey","isSurfaceInteractionDisabled","animateSeriesWhenAxisRangeChanges","title","subtitle","titleTextStyle","titleTopMargin","titleLeftMargin","titleRightMargin","titleBottomMargin","subtitleTextStyle","subtitleTopMargin","subtitleLeftMargin","subtitleRightMargin","subtitleBottomMargin","titleTextColor","subtitleTextColor","titleHorizontalAlignment","subtitleHorizontalAlignment","highlightingTransitionDuration","useTiledZooming","preferHigherResolutionTiles","pixelScalingRatio","zoomTileCacheSize","contentHitTestMode","legend","axes","series","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","seriesCursorMouseMove","seriesMouseLeftButtonDown","seriesMouseLeftButtonUp","seriesMouseMove","seriesMouseEnter","seriesMouseLeave","windowRectChanged","gridAreaRectChanged","refreshCompleted","axisRangeChanged","typicalBasedOn","progressiveLoadStatusChanged","assigningCategoryStyle","assigningCategoryMarkerStyle"]
})
export class IgDataChartComponent extends IgControlBase<IgDataChart> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public option(): void { return; } ;

	/**
 	 * Returns the element holding the chart.
	 */
	public widget(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the chart.
	 */
	public id(): string { return; } ;

	/**
 	 * Exports the chart to a PNG image.
	 *
	 * @param width     The width of the image.
	 * @param height     The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Notify the chart that styles it draws colors from may have been updated.
	 */
	public styleUpdated(): Object { return; } ;

	/**
 	 * Resets the zoom level of the chart to default.
	 */
	public resetZoom(): Object { return; } ;

	/**
 	 * Adds a new item to the data source and notifies the chart.
	 *
	 * @param item     The item that we want to add to the data source.
	 * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
	 */
	public addItem(item: Object, targetName: string): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that we want to insert in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 * @param targetName     The name of the series or axis bound to the data source.
	 */
	public insertItem(item: Object, index: number, targetName: string): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the chart.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
	 */
	public removeItem(index: number, targetName: string): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the chart.
	 *
	 * @param index     The index of the item in the data source that we want to change.
	 * @param item     The new item object that will be set in the data source.
	 * @param targetName     The name of the series or axis bound to the data source.
	 */
	public setItem(index: number, item: Object, targetName: string): void { return; } ;

	/**
 	 * Notifies the chart that an item has been set in an associated data source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source that has been changed.
	 * @param newItem     the new item that has been set in the collection.
	 * @param oldItem     the old item that has been overwritten in the collection.
	 */
	public notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the chart that the items have been cleared from an associated data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 */
	public notifyClearItems(dataSource: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source where the new item has been inserted.
	 * @param newItem     the new item that has been set in the collection.
	 */
	public notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that an item has been removed from the specified index in its data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source from where the old item has been removed.
	 * @param oldItem     the old item that has been removed from the collection.
	 */
	public notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that it should scroll the requested data item into view.
	 *
	 * @param targetName     The name of the axis or series notify.
	 * @param item     The data item to bring into view, if possible.
	 */
	public scrollIntoView(targetName: string, item: Object): Object { return; } ;

	/**
 	 * Notifies the target axis that it should scale the requested value into chart space from axis space.
	 * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
	 *
	 * @param targetName     The name of the axis to notify.
	 * @param unscaledValue     The value in axis space to translate into chart space.
	 */
	public scaleValue(targetName: string, unscaledValue: number): number { return; } ;

	/**
 	 * Notifies the target axis that it should unscale the requested value into axis space from chart space.
	 * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
	 *
	 * @param targetName     The name of the axis to notify.
	 * @param scaledValue     The value in chart space to translate into axis space.
	 */
	public unscaleValue(targetName: string, scaledValue: number): number { return; } ;

	/**
 	 * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
	 *
	 * @param targetName     The name of the axis to notify.
	 */
	public resetCachedEnhancedInterval(targetName: string): Object { return; } ;

	/**
 	 * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
	 *
	 * @param targetName     The name of the series to notify.
	 */
	public notifyVisualPropertiesChanged(targetName: string): Object { return; } ;

	/**
 	 * Forces any pending deferred work to render on the chart before continuing
	 */
	public flush(): void { return; } ;

	/**
 	 * Exports visual data from the chart to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Gets the actual minimum value of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the minimum value.
	 */
	public getActualMinimumValue(targetName: string): void { return; } ;

	/**
 	 * Gets the actual maximum value of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the maximum value.
	 */
	public getActualMaximumValue(targetName: string): void { return; } ;

	/**
 	 * Gets the actual interval of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the interval.
	 */
	public getActualInterval(targetName: string): void { return; } ;

	/**
 	 * Creates a print preview page with the chart, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
	 *
	 * @param targetName     The name of the series to render.
	 * @param animate     Whether the change should be animated, if possible.
	 */
	public renderSeries(targetName: string, animate: boolean): void { return; } ;

	/**
 	 * Gets the item item index associated with the specified world position.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItemIndex(targetName: string, worldPoint: Object): number { return; } ;

	/**
 	 * Gets the item that is the best match for the specified world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItem(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getItemSpan(targetName: string): number { return; } ;

	/**
 	 * If possible, will return the best available main value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getSeriesValueBoundingBox(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getSeriesValueFineGrainedBoundingBoxes(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available main value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available main value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available main value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getSeriesValueBoundingBoxFromSeriesPixel(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available high value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available high value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available high value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available high value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available low value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available low value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available low value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available low value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * Gets the item item index associated with the specified series pixel coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItemIndexFromSeriesPixel(targetName: string, seriesPoint: Object): number { return; } ;

	/**
 	 * Gets the item that is the best match for the specified world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getItemFromSeriesPixel(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * Gets the category offset for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getSeriesOffsetValue(targetName: string): number { return; } ;

	/**
 	 * Gets the category width for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getSeriesCategoryWidth(targetName: string): number { return; } ;

	/**
 	 * Replays the transition in animation for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public replayTransitionIn(targetName: string): Object { return; } ;

	/**
 	 * Simulates a hover interaction over a given point in the viewport of a series.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
	 */
	public simulateHover(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * Moves the cursor point of the target annotation layer to the desired world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
	 */
	public moveCursorPoint(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * Manually starts a tiled zoom if one isn't already running.
	 */
	public startTiledZoomingIfNecessary(): void { return; } ;

	/**
 	 * Manually ends a tiled zoom if one is running.
	 */
	public endTiledZoomingIfRunning(): void { return; } ;

	/**
 	 * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
	 */
	public clearTileZoomCache(): void { return; } ;
 }

@Component({
	selector: "ig-pie-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceUrl","dataSourceType","responseDataKey","valueMemberPath","labelMemberPath","dataValue","dataLabel","labelsPosition","labelOuterColor","labelInnerColor","selectionMode","selectedItem","selectedItems","leaderLineVisibility","leaderLineType","leaderLineMargin","othersCategoryThreshold","formatLabel","othersCategoryStyle","othersCategoryType","othersCategoryText","explodedRadius","radiusFactor","allowSliceSelection","allowSliceExplosion","explodedSlices","selectedSlices","showTooltip","tooltipTemplate","legend","labelExtent","startAngle","sweepDirection","selectedStyle","brushes","outlines","legendItemTemplate","legendItemBadgeTemplate","textStyle","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","sliceClick","labelClick","selectedItemChanging","selectedItemChanged","selectedItemsChanging","selectedItemsChanged"]
})
export class IgPieChartComponent extends IgControlBase<IgPieChart> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } 
	public option(): void { return; } ;

	/**
 	 * Adds a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that will be added to the data source.
	 */
	public addItem(item: Object): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that will be inserted in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 */
	public insertItem(item: Object, index: number): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the chart.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 */
	public removeItem(index: number): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the chart.
	 *
	 * @param index     The index in the data source that we want to change.
	 * @param item     the new item that we want to set in the data source.
	 */
	public setItem(index: number, item: Object): void { return; } ;

	/**
 	 * Exports the chart to a PNG image.
	 *
	 * @param width     The width of the image.
	 * @param height     The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the chart.
	 */
	public id(): string { return; } ;

	/**
 	 * Returns the element holding the chart.
	 */
	public widget(): void { return; } ;

	/**
 	 * Creates a print preview page with the chart, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Exports visual data from the pie chart to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;
}

@Component({
	selector: "ig-doughnut-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","series","allowSliceSelection","isSurfaceInteractionDisabled","allowSliceExplosion","innerExtent","selectedStyle"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip","tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","sliceClick","holeDimensionsChanged"]
})
export class IgDoughnutChartComponent extends IgControlBase<IgDoughnutChart> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Adds a new series to the doughnut chart.
	 *
	 * @param seriesObj     The series object to be added.
	 */
	public addSeries(seriesObj: Object): void { return; } ;

	/**
 	 * Removes the specified series from the doughnut chart.
	 *
	 * @param seriesObj     The series object identifying the series to be removed.
	 */
	public removeSeries(seriesObj: Object): void { return; } ;

	/**
 	 * Updates the series with the specified name with the specified new property values.
	 *
	 * @param value     The series object identifying the series to be updated.
	 */
	public updateSeries(value: Object): void { return; } ;

	/**
 	 * Returns the center of the doughnut chart.
	 */
	public getCenterCoordinates(): Object { return; } ;

	/**
 	 * Returns the radius of the chart's hole.
	 */
	public getHoleRadius(): number { return; } ;

	/**
 	 * Returns information about how the doughnut chart is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-funnel-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","bezierPoints","legend","valueMemberPath","brushes","outlines","bottomEdgeWidth","innerLabelMemberPath","outerLabelMemberPath","innerLabelVisibility","outerLabelVisibility","outerLabelAlignment","funnelSliceDisplay","formatInnerLabel","formatOuterLabel","transitionDuration","isInverted","useBezierCurve","allowSliceSelection","useUnselectedStyle","selectedSliceStyle","unselectedSliceStyle","legendItemBadgeTemplate","useOuterLabelsForLegend","textStyle","outerLabelTextStyle","outlineThickness","pixelScalingRatio","outerLabelTextColor","textColor"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip","sliceClicked"]
})
export class IgFunnelChartComponent extends IgControlBase<IgFunnelChart> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Gets array of selected slice items.
	 *
	 * @param selection     Array or selected slice items.
	 * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
	 */
	public selectedSliceItems(selection?: any[]): any[] { return; } ;

	/**
 	 * Gets sets array of indexes of selected slices.
	 *
	 * @param selection     Array or selected slice indexes.
	 * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
	 */
	public selectedSliceIndexes(selection?: any[]): any[] { return; } ;

	/**
 	 * Checks if slice is selected.
	 *
	 * @param slice     Index of slice or reference to slice-data-item.
	 */
	public isSelected(slice: Object): boolean { return; } ;

	/**
 	 * Toggles selected state of slice.
	 *
	 * @param slice     Index of slice or reference to slice-data-item.
	 */
	public toggleSelection(slice: Object): Object { return; } ;
	public exportVisualData(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-radial-gauge",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeBrushes","rangeOutlines","minimumValue","maximumValue","interval","centerX","centerY","value","scaleStartAngle","scaleEndAngle","scaleSweepDirection","transitionDuration","transitionEasingFunction","needleBrush","needleOutline","needleStartExtent","needleEndExtent","needleShape","needleStartWidthRatio","needleEndWidthRatio","needleBaseFeatureWidthRatio","needleBaseFeatureExtent","needlePointFeatureWidthRatio","needlePointFeatureExtent","needlePivotWidthRatio","needlePivotInnerWidthRatio","needlePivotShape","scaleStartExtent","needlePivotBrush","needlePivotOutline","needleStrokeThickness","needlePivotStrokeThickness","scaleEndExtent","labelExtent","labelInterval","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","minorTickCount","scaleBrush","backingBrush","backingOutline","backingStrokeThickness","backingOuterExtent","backingOversweep","scaleOversweep","scaleOversweepShape","backingCornerRadius","backingInnerExtent","backingShape","radiusMultiplier","duplicateLabelOmissionStrategy","isNeedleDraggingEnabled","isNeedleDraggingConstrained","font","transitionProgress","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgRadialGaugeComponent extends IgControlBase<IgRadialGauge> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): string { return; } ;

	/**
 	 * Adds a new range to the radial gauge.
	 *
	 * @param value 
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a specified range.
	 *
	 * @param value 
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the range.
	 *
	 * @param value 
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Clears the ranges in the radial gauge.
	 */
	public clearRanges(): void { return; } ;

	/**
 	 * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
	 *
	 * @param value 
	 */
	public scaleValue(value: Object): void { return; } ;

	/**
 	 * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
	 *
	 * @param value 
	 */
	public unscaleValue(value: Object): void { return; } ;

	/**
 	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	 *
	 * @param x 
	 * @param y 
	 */
	public getValueForPoint(x: Object, y: Object): number { return; } ;

	/**
 	 * Gets the point on the gauge for a given scale value and extent.
	 *
	 * @param value 
	 * @param extent 
	 */
	public getPointForValue(value: Object, extent: Object): void { return; } ;

	/**
 	 * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
	 *
	 * @param x 
	 * @param y 
	 */
	public needleContainsPoint(x: Object, y: Object): void { return; } ;

	/**
 	 * Exports the visual data for the radial gauge.
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Flushes the gauge.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns true if the style was updated for the radial gauge.
	 */
	public styleUpdated(): void { return; } ;
}

@Component({
	selector: "ig-zoombar",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","target","clone","width","height","zoomAction","zoomWindowMoveDistance","defaultZoomWindow","zoomWindowMinWidth","hoverStyleAnimationDuration","windowPanDuration","tabIndex"],
	outputs: ["zoomChanging","zoomChanged","providerCreated","windowDragStarting","windowDragStarted","windowDragging","windowDragEnding","windowDragEnded","windowResizing","windowResized"]
})
export class IgZoombarComponent extends IgControlBase<IgZoombar> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Destroys the Zoombar widget
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the main zoombar element
	 */
	public widget(): void { return; } ;

	/**
 	 * Returns the ID of the element the zoombar is initialized on
	 */
	public id(): string { return; } ;

	/**
 	 * Returns the DIV that is the topmost container of the zoombar widget
	 */
	public container(): Element { return; } ;

	/**
 	 * Returns the element the clone widget is initialized on
	 */
	public clone(): Element { return; } ;

	/**
 	 * Gets or sets the current zoom window
	 *
	 * @param left     The left parameter of the new zoom window in percentages
	 * @param width     The width parameter of the new zoom window in percentages
	 */
	public zoom(left?: number, width?: number): Object { return; } ;
}

@Component({
	selector: "ig-map",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceUrl","dataSourceType","responseDataKey","autoMarginWidth","autoMarginHeight","crosshairVisibility","crosshairPoint","plotAreaBackground","defaultInteraction","dragModifier","panModifier","previewRect","windowRect","zoomable","windowScale","windowResponse","windowRectMinWidth","windowPositionHorizontal","windowPositionVertical","circleMarkerTemplate","triangleMarkerTemplate","pyramidMarkerTemplate","squareMarkerTemplate","diamondMarkerTemplate","pentagonMarkerTemplate","hexagonMarkerTemplate","tetragramMarkerTemplate","pentagramMarkerTemplate","hexagramMarkerTemplate","overviewPlusDetailPaneBackgroundImageUri","useTiledZooming","preferHigherResolutionTiles","zoomTileCacheSize","backgroundContent","series","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","seriesCursorMouseMove","seriesMouseLeftButtonDown","seriesMouseLeftButtonUp","seriesMouseMove","seriesMouseEnter","seriesMouseLeave","windowRectChanged","gridAreaRectChanged","refreshCompleted","triangulationStatusChanged"]
})
export class IgMapComponent extends IgControlBase<IgMap> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public option(): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the map.
	 */
	public id(): string { return; } ;

	/**
 	 * Exports the map to a PNG image.
	 *
	 * @param width The width of the image.
	 * @param height The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Notify the map that styles it draws colors from may have been updated.
	 */
	public styleUpdated(): Object { return; } ;

	/**
 	 * Resets the zoom level of the map to default.
	 */
	public resetZoom(): Object { return; } ;

	/**
 	 * Adds a new item to the data source and notifies the map.
	 *
	 * @param item     The item that we want to add to the data source.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public addItem(item: Object, targetName: string): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the map.
	 *
	 * @param item     the new item that we want to insert in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public insertItem(item: Object, index: number, targetName: string): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the map.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public removeItem(index: number, targetName: string): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the map.
	 *
	 * @param index     The index of the item in the data source that we want to change.
	 * @param item     The new item object that will be set in the data source.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public setItem(index: number, item: Object, targetName: string): void { return; } ;

	/**
 	 * Notifies the the map that an item has been set in an associated data source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source that has been changed.
	 * @param newItem the new item that has been set in the collection.
	 * @param oldItem the old item that has been overwritten in the collection.
	 */
	public notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the the map that the items have been cleared from an associated data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 */
	public notifyClearItems(dataSource: Object): Object { return; } ;

	/**
 	 * Notifies the the target series that an item has been inserted at the specified index in its data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source where the new item has been inserted.
	 * @param newItem the new item that has been set in the collection.
	 */
	public notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object { return; } ;

	/**
 	 * Notifies the the target series that an item has been removed from the specified index in its data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source from where the old item has been removed.
	 * @param oldItem the old item that has been removed from the collection.
	 */
	public notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the target series or axis that it should scroll the requested data item into view.
	 *
	 * @param targetName The name of the series or axis notify.
	 * @param item The data item to bring into view, if possible.
	 */
	public scrollIntoView(targetName: string, item: Object): Object { return; } ;

	/**
 	 * Either xAxis or yAxis (longitude or latitude) that it should scale the requested value into map space from axis space.
	 * 				For example you can use this method if you want to find where longitude 50 stands scaled to map's width.
	 *
	 * @param targetName Either xAxis or yAxis to notify.
	 * @param unscaledValue The value in axis space to translate into map space.
	 */
	public scaleValue(targetName: string, unscaledValue: number): number { return; } ;

	/**
 	 * Either xAxis or yAxis (longitude or latitude) that it should unscale the requested value into axis space from map space.
	 * 				For example you can use this method if you want to find what is the longitude unscaled from 0 width of the map.
	 *
	 * @param targetName Either xAxis or yAxis to notify.
	 * @param scaledValue The value in map space to translate into axis space.
	 */
	public unscaleValue(targetName: string, scaledValue: number): number { return; } ;

	/**
 	 * Manually starts a tiled zoom if one isn't already running.
	 */
	public startTiledZoomingIfNecessary(): void { return; } ;

	/**
 	 * Manually ends a tiled zoom if one is running.
	 */
	public endTiledZoomingIfRunning(): void { return; } ;

	/**
 	 * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom..
	 */
	public clearTileZoomCache(): void { return; } ;

	/**
 	 * Forces any pending deferred work to render on the map before continuing
	 */
	public flush(): void { return; } ;

	/**
 	 * Exports visual data from the map to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Gets the actual minimum value of the target xAxis or yAxis
	 *
	 * @param targetName 
	 */
	public getActualMinimumValue(targetName: Object): void { return; } ;

	/**
 	 * Gets the actual maximum value of the target xAxis or yAxis
	 *
	 * @param targetName 
	 */
	public getActualMaximumValue(targetName: Object): void { return; } ;

	/**
 	 * Notifies the map that the container was resized
	 */
	public notifyContainerResized(): void { return; } ;

	/**
 	 * Zoom in to the geographic region specified, when possible (may need to wait fior map to be initialized).
	 *
	 * @param rect The geographic area rectangle.
	 */
	public zoomToGeographic(rect: Object): Object { return; } ;

	/**
 	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	 *
	 * @param rect The geographic area rectangle.
	 */
	public getGeographicFromZoom(rect: Object): Object { return; } ;

	/**
 	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	 *
	 * @param rect The geographic area rectangle.
	 */
	public getZoomFromGeographic(rect: Object): Object { return; } ;

	/**
 	 * Creates a print preview page with the map, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
	 *
	 * @param targetName     The name of the series to render.
	 * @param animate     Whether the change should be animated, if possible.
	 */
	public renderSeries(targetName: string, animate: boolean): void { return; } ;
}

@Component({
	selector: "ig-sparkline",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","brush","negativeBrush","markerBrush","negativeMarkerBrush","firstMarkerBrush","lastMarkerBrush","highMarkerBrush","lowMarkerBrush","trendLineBrush","horizontalAxisBrush","verticalAxisBrush","normalRangeFill","horizontalAxisVisibility","verticalAxisVisibility","markerVisibility","negativeMarkerVisibility","firstMarkerVisibility","lastMarkerVisibility","lowMarkerVisibility","highMarkerVisibility","normalRangeVisibility","displayNormalRangeInFront","markerSize","firstMarkerSize","lastMarkerSize","highMarkerSize","lowMarkerSize","negativeMarkerSize","lineThickness","valueMemberPath","labelMemberPath","trendLineType","trendLinePeriod","trendLineThickness","normalRangeMinimum","normalRangeMaximum","displayType","unknownValuePlotting","verticalAxisLabel","horizontalAxisLabel","formatLabel","pixelScalingRatio"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip"]
})
export class IgSparklineComponent extends IgControlBase<IgSparkline> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-bullet-graph",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeToolTipTemplate","valueToolTipTemplate","targetValueToolTipTemplate","orientation","rangeBrushes","rangeOutlines","minimumValue","maximumValue","targetValue","targetValueName","value","valueName","rangeInnerExtent","rangeOuterExtent","valueInnerExtent","valueOuterExtent","interval","ticksPostInitial","ticksPreTerminal","labelInterval","labelExtent","labelsPostInitial","labelsPreTerminal","minorTickCount","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","valueBrush","valueOutline","valueStrokeThickness","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","isScaleInverted","backingBrush","backingOutline","backingStrokeThickness","backingInnerExtent","backingOuterExtent","scaleStartExtent","scaleEndExtent","targetValueBrush","targetValueBreadth","targetValueInnerExtent","targetValueOuterExtent","targetValueOutline","targetValueStrokeThickness","transitionDuration","showToolTipTimeout","showToolTip","font","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel"]
})
export class IgBulletGraphComponent extends IgControlBase<IgBulletGraph> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } 

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): void { return; } ;

	/**
 	 * Adds a new range to the bullet graph.
	 *
	 * @param value     The range object to be added.
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a range from the bullet graph.
	 *
	 * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the specified range of the bullet graph.
	 *
	 * @param value     The range object to be updated.
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Returns information about how the bullet graph is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
	 */
	public styleUpdated(): void { return; } ;
}

@Component({
	selector: "ig-linear-gauge",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeToolTipTemplate","needleToolTipTemplate","orientation","rangeBrushes","rangeOutlines","minimumValue","maximumValue","value","needleShape","needleName","rangeInnerExtent","scaleInnerExtent","rangeOuterExtent","scaleOuterExtent","needleInnerExtent","needleOuterExtent","needleInnerBaseWidth","needleOuterBaseWidth","needleInnerPointWidth","needleOuterPointWidth","needleInnerPointExtent","needleOuterPointExtent","interval","ticksPostInitial","ticksPreTerminal","labelInterval","labelExtent","labelsPostInitial","labelsPreTerminal","minorTickCount","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","needleBreadth","needleBrush","needleOutline","needleStrokeThickness","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","isScaleInverted","backingBrush","backingOutline","backingStrokeThickness","backingInnerExtent","backingOuterExtent","scaleStartExtent","scaleEndExtent","scaleBrush","scaleOutline","scaleStrokeThickness","isNeedleDraggingEnabled","transitionDuration","showToolTipTimeout","showToolTip","font","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgLinearGaugeComponent extends IgControlBase<IgLinearGauge> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): string { return; } ;

	/**
 	 * Adds a new range to the linear gauge.
	 *
	 * @param value     The range object to be added.
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a range from the linear gauge.
	 *
	 * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the specified range of the linear gauge.
	 *
	 * @param value     The range object to be updated.
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	 *
	 * @param x 
	 * @param y 
	 */
	public getValueForPoint(x: Object, y: Object): number { return; } ;

	/**
 	 * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
	 *
	 * @param x The x coordinate of the point.
	 * @param y The y coordinate of the point.
	 */
	public needleContainsPoint(x: number, y: number): void { return; } ;

	/**
 	 * Returns information about how the linear gauge is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
	 */
	public styleUpdated(): void { return; } ;
}

@Component({
	selector: "ig-q-r-code-barcode",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","backingBrush","backingOutline","backingStrokeThickness","barBrush","fontBrush","font","data","errorMessageText","stretch","barsFillMode","widthToHeightRatio","xDimension","errorCorrectionLevel","sizeVersion","encodingMode","eciNumber","eciHeaderDisplayMode","fnc1Mode","applicationIndicator"],
	outputs: ["errorMessageDisplaying","dataChanged"]
})
export class IgQRCodeBarcodeComponent extends IgControlBase<IgQRCodeBarcode> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns information about how the barcode is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
	 */
	public styleUpdated(): void { return; } ;
}

//Others
@Component({
	selector: "ig-upload",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","autostartupload","labelUploadButton","labelAddButton","labelClearAllButton","labelSummaryTemplate","labelSummaryProgressBarTemplate","labelShowDetails","labelHideDetails","labelSummaryProgressButtonCancel","labelSummaryProgressButtonContinue","labelSummaryProgressButtonDone","labelProgressBarFileNameContinue","errorMessageMaxFileSizeExceeded","errorMessageGetFileStatus","errorMessageCancelUpload","errorMessageNoSuchFile","errorMessageOther","errorMessageValidatingFileExtension","errorMessageAJAXRequestFileSize","errorMessageTryToRemoveNonExistingFile","errorMessageTryToStartNonExistingFile","errorMessageMaxUploadedFiles","errorMessageMaxSimultaneousFiles","errorMessageDropMultipleFilesWhenSingleModel","uploadUrl","progressUrl","allowedExtensions","showFileExtensionIcon","css","fileExtensionIcons","mode","multipleFiles","maxUploadedFiles","maxSimultaneousFilesUploads","fileSizeMetric","controlId","fileSizeDecimalDisplay","maxFileSize"],
	outputs: ["fileSelecting","fileSelected","fileUploading","fileUploaded","fileUploadAborted","cancelAllClicked","onError","fileExtensionsValidating","onXHRLoad","onFormDataSubmit"]
})
export class IgUploadComponent extends IgControlBase<IgUpload> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Return jquery object of fileupload container - html DOM element
	 */
	public container(): void { return; } ;

	/**
 	 * Returns the current widget element
	 */
	public widget(): void { return; } ;

	/**
 	 * Hide finished files
	 */
	public clearAll(): void { return; } ;

	/**
 	 * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 *
	 * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
	 */
	public addDataField(formData: Object, field: Object): void { return; } ;

	/**
 	 * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 *
	 * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
	 */
	public addDataFields(formData: Object, fields: any[]): void { return; } ;

	/**
 	 * Start uploading file as submitting form with the specified formNumber.
	 *
	 * @param formNumber    id of the upload form
	 */
	public startUpload(formNumber: number): void { return; } ;

	/**
 	 * Cancel upload for the specified file id
	 * 			 formNumber - id of the file to be canceled
	 *
	 * @param formNumber    id of the form which should be cancelled
	 */
	public cancelUpload(formNumber: number): void { return; } ;

	/**
 	 * Destroy the widget
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the information about uploading files - all files uploaded/uploading/pending
	 */
	public getFileInfoData(): Object { return; } ;

	/**
 	 * Cancel all uploading and pending files
	 */
	public cancelAll(): void { return; } ;

	/**
 	 * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
	 *
	 * @param fileIndex    unique identifier of the file
	 */
	public getFileInfo(fileIndex: number): Object { return; } ;
}

@Component({
	selector: "ig-popover",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","closeOnBlur","direction","position","width","height","minWidth","maxWidth","maxHeight","animationDuration","contentTemplate","selectors","headerTemplate","showOn","containment","appendTo"],
	outputs: ["showing","shown","hiding","hidden"]
})
export class IgPopoverComponent extends IgControlBase<IgPopover> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var elem = jQuery(document).find("#" + this.widgetId);
		if (elem.length === 1) {
			this._el = elem;
			this._events = new Map<string, string>();
			//events binding
			let that = this;
			var evtName;
			for (var propt in jQuery.ui[this._widgetName].prototype.events) {
				evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
				this._events[evtName] = propt;
				jQuery(this._el).on(evtName, function (evt, ui) {
					that[that._events[evt.type]].emit({ event: evt, ui: ui });
				});
			}

			jQuery(this._el)[this._widgetName](this._config);
		} else {
			super.ngOnInit();
		}

	}

	/**
 	 * Destroys the popover widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the ID of the element the popover is attached to
	 */
	public id(): string { return; } ;

	/**
 	 * Returns the container for the popover contents
	 */
	public container(): Object { return; } ;

	/**
 	 * Shows the popover for the specified target
	 *
	 * @param trg     The element to show popover for.
	 * @param content     The string to set for the popover to show.
	 */
	public show(trg?: Element, content?: string): void { return; } ;

	/**
 	 * Hides the popover for the specified target
	 */
	public hide(): void { return; } ;

	/**
 	 * Gets the currently set content for the popover container
	 */
	public getContent(): string { return; } ;

	/**
 	 * Sets the content for the popover container
	 *
	 * @param newCnt     The popover content to set.
	 */
	public setContent(newCnt: string): void { return; } ;

	/**
 	 * Gets the popover current target
	 */
	public target(): Object { return; } ;

	/**
 	 * Gets the current coordinates of the popover
	 */
	public getCoordinates(): Object { return; } ;

	/**
 	 * Sets the popover to specific coordinates.
	 *
	 * @param pos     The popover coordinates in pixels.
	 */
	public setCoordinates(pos: Object): void { return; } ;
}

@Component({
	selector: "ig-notifier",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","closeOnBlur","direction","position","width","height","minWidth","maxWidth","maxHeight","animationDuration","contentTemplate","selectors","headerTemplate","showOn","containment","appendTo","state","notifyLevel","mode","allowCSSOnTarget","messages","showIcon","animationSlideDistance"],
	outputs: ["showing","shown","hiding","hidden"]
})
//TODO: change the model from any to IgNotifier when added to igniteui typescript definitions
export class IgNotifierComponent extends IgControlBase<IgNotifier> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var elem = jQuery(document).find("#" + this.widgetId);
		if (elem.length === 1) {
			this._el = elem;
			this._events = new Map<string, string>();
			//events binding
			let that = this;
			var evtName;
			for (var propt in jQuery.ui[this._widgetName].prototype.events) {
				evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
				this._events[evtName] = propt;
				jQuery(this._el).on(evtName, function (evt, ui) {
					that[that._events[evt.type]].emit({ event: evt, ui: ui });
				});
			}

			jQuery(this._el)[this._widgetName](this._config);
		} else {
			super.ngOnInit();
		}
	}

	/**
 	 * Triggers a notification with a certain state and optional message. The [notifyLevel](ui.ignotifier#options:notifyLevel) option determines if the notification will be displayed.
	 *
	 * @param state    The state to show notification for.
	 * @param message    Optional message to show, overrides defaults.
	 */
	public notify(state: Object, message?: string): void { return; } ;

	/**
 	 * Returns true if the notification is currently visible
	 */
	public isVisible(): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;
}

@Component({
	selector: "ig-rating",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","vertical","value","valueHover","voteCount","voteWidth","voteHeight","swapDirection","valueAsPercent","focusable","precision","precisionZeroVote","roundedDecimalPlaces","theme","validatorOptions","cssVotes"],
	outputs: ["hoverChange","valueChange"]
})
export class IgRatingComponent extends IgControlBase<IgRating> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Gets reference to [igValidator](ui.igvalidator) used by igRating.
	 *
	 * @param destroy     Request to destroy validator.
	 */
	public validator(destroy?: boolean): Object { return; } ;

	/**
 	 * Triggers validation.
	 */
	public validate(): boolean { return; } ;

	/**
 	 * Gets/Sets (selected) value.
	 *
	 * @param val     New value which is rendered with selected css.
	 * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
	 */
	public value(val: number): number|Object { return; } ;

	/**
 	 * Gets/Sets hover value.
	 *
	 * @param val     New value which will be rendered with hover css when rating gets mouse.
	 * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
	 */
	public valueHover(val?: number): number|Object { return; } ;

	/**
 	 * Checks if igRating has focus.
	 */
	public hasFocus(): boolean { return; } ;

	/**
 	 * Sets focus to igRating. That has effect only when options.focusable is enabled.
	 */
	public focus(): Object { return; } ;

	/**
 	 * Destroys igRating widget.
	 */
	public destroy(): Object { return; } ;
}

@Component({
	selector: "ig-video-player",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","sources","width","height","posterUrl","preload","autoplay","autohide","volumeAutohideDelay","centerButtonHideDelay","loop","browserControls","fullscreen","volume","muted","title","showSeekTime","progressLabelFormat","bookmarks","relatedVideos","banners","commercials"],
	outputs: ["ended","playing","paused","buffering","progress","waiting","bookmarkHit","bookmarkClick","enterFullScreen","exitFullScreen","relatedVideoClick","bannerVisible","bannerHidden","bannerClick","browserNotSupported"]
})
export class IgVideoPlayerComponent extends IgControlBase<IgVideoPlayer> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns the element on which the widget was instantiated
	 */
	public widget(): void { return; } ;

	/**
 	 * Hide the add message if shown.
	 */
	public hideAdMessage(): void { return; } ;

	/**
 	 * Play a linked commercial for this video.
	 *
	 * @param commercial     Specify the linked commercial to play.
	 */
	public playCommercial(commercial: Object): void { return; } ;

	/**
 	 * Shows the ad banner, if there is such.
	 *
	 * @param index    Specify the index of the banner from the banners array.
	 */
	public showBanner(index: number): void { return; } ;

	/**
 	 * Hide the ad banner, if there is such.
	 *
	 * @param index    Specify the index of the banner from the banners array.
	 */
	public hideBanner(index: number): void { return; } ;

	/**
 	 * Resets the commercials, to be shown again.
	 */
	public resetCommercialsShow(): void { return; } ;

	/**
 	 * Toggle control play state. If video is playing it will pause, if video is paused it will play.
	 */
	public togglePlay(): void { return; } ;

	/**
 	 * Start playing current loaded video if any.
	 */
	public play(): void { return; } ;

	/**
 	 * Pause the currently playing video if any.
	 */
	public pause(): void { return; } ;

	/**
 	 * Gets/Sets the current time of the playing video.
	 *
	 * @param val     Specify the playback position in seconds to navigate to.
	 */
	public currentTime(val: number): number { return; } ;

	/**
 	 * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
	 *
	 * @param scaleFactor    Specify scale factor between 0 and 1.
	 */
	public screenshot(scaleFactor?: number): Object { return; } ;

	/**
 	 * Get whether the current browser supports video tag.
	 */
	public supportsVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports H.264 codec.
	 */
	public supportsH264BaselineVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports Theora codec.
	 */
	public supportsOggTheoraVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports WEBM codec.
	 */
	public supportsWebmVideo(): boolean { return; } ;

	/**
 	 * Returns whether the currently played video is paused.
	 */
	public paused(): boolean { return; } ;

	/**
 	 * Get whether the current played video has ended.
	 */
	public ended(): boolean { return; } ;

	/**
 	 * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
	 */
	public duration(): number { return; } ;

	/**
 	 * Get whether the player is seeking to find the new playback position specified.
	 */
	public seeking(): boolean { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;
 }

@Component({
	selector: "ig-radial-menu",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","items","currentOpenMenuItemName","centerButtonContentWidth","centerButtonContentHeight","centerButtonClosedFill","centerButtonClosedStroke","centerButtonFill","centerButtonHotTrackFill","centerButtonHotTrackStroke","centerButtonStroke","centerButtonStrokeThickness","font","isOpen","menuBackground","menuItemOpenCloseAnimationDuration","menuItemOpenCloseAnimationEasingFunction","menuOpenCloseAnimationDuration","menuOpenCloseAnimationEasingFunction","minWedgeCount","outerRingFill","outerRingThickness","outerRingStroke","outerRingStrokeThickness","rotationInDegrees","rotationAsPercentageOfWedge","wedgePaddingInDegrees","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgRadialMenuComponent extends IgControlBase<IgRadialMenu> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public itemOption(itemKey: Object, key: Object, value: Object): void { return; } ;
	public exportVisualData(): void { return; } ;
	public flush(): void { return; } ;
	public destroy(): void { return; } ;
	public styleUpdated(): void { return; } ;
}

@Component({
	selector: "ig-split-button",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","items","defaultItemName","swapDefaultEnabled"],
	outputs: ["click","expanded","expanding","collapsed","collapsing"]
})
export class IgSplitButtonComponent extends IgControlBase<IgSplitButton> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Switch to given igToolbar button.
	 *
	 * @param button . The button jQuery element.
	 */
	public switchToButton(button: Object): void { return; } ;


	/**
 	 * Toggle widget state between collapsed and expanded.
	 *
	 * @param e The igSplitButton to be expanded/collapsed.
	 */
	public toggle(e: Object): Object { return; } ;


	/**
 	 * Collapse the widget.
	 *
	 * @param e Indicates the browser event which triggered this action (not API).
	 */
	public collapse(e?: Object): Object { return; } ;


	/**
 	 * Expands the widget.
	 *
	 * @param e Indicates the browser event which triggered this action (not API).
	 */
	public expand(e?: Object): Object { return; } ;

	/**
 	 * Destroy the widget.
	 */
	public destroy(): void { return; } ;
	public widget(): void { return; } ;
}

@Component({
	selector: "ig-scheduler",
	template: "<ng-content></ng-content>",
	inputs:["widgetId","options","changeDetectionInterval","disabled","create","views","viewMode","selectedDate","enableTodayButton","width","height","agendaViewSettings","monthViewSettings","appointmentDialogSuppress"],
	outputs:["agendaRangeChanging","agendaRangeChanged","daySelected","monthChanging","monthChanged","rendering","rendered","viewChanging","viewChanged","appointmentDialogOpening","appointmentDialogOpened","appointmentDialogClosing","appointmentDialogClosed","appointmentCreating","appointmentCreated","appointmentDeleting","appointmentDeleted","appointmentEditing","appointmentEdited"]
})
export class IgSchedulerComponent extends IgControlBase<IgScheduler> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
	 * Gets reference to appointment by id
	 *
	 * @param id 
	 */
	public getAppointmentById(id: Object): Object { return; };

	/**
	  * Creates a new appointment and renders it to the scheduler
	 *
	 * @param appointment 
	 */
	public createAppointment(appointment: Object): Object { return; };

	/**
	  * Deletes appointment from the appointment collection
	 *
	 * @param appointment	appointment
	 */
	public deleteAppointment(appointment: Object): Object { return; };

	/**
	  * Deletes appointment from the appointment collection
	 *
	 * @param appointment	appointment
	 * @param updateAppoinment	updateAppoinment
	 */
	public editAppointment(appointment: Object, updateAppoinment: Object): Object { return; };

	/**
	  * Destroys the widget
	 */
	public destroy(): void { return; };

	/**
	  * Gets reference to the today UI button.
	 */
	public todayButton(): string { return; };

	/**
	  * Gets reference to the previous UI button.
	 */
	public previousButton(): string { return; };

	/**
	  * Gets reference to the date range UI button.
	 */
	public dateRangeButton(): string { return; };

	/**
	  * Gets reference to the next UI button.
	 */
	public nextButton(): string { return; };

	/**
	  * Gets reference to the jQuery calendar UI control.
	 */
	public getCalendar(): string { return; };
}

@Component({
	selector: "ig-spreadsheet",
	template: "<ng-content></ng-content>",
	inputs:["widgetId","options","changeDetectionInterval","disabled","create","width","height","activeCell","isScrollLocked","activeWorksheet","allowAddWorksheet","allowDeleteWorksheet","areGridlinesVisible","areHeadersVisible","enterKeyNavigationDirection","isEnterKeyNavigationEnabled","isFormulaBarVisible","isInEndMode","isUndoEnabled","nameBoxWidth","selectionMode","selectedWorksheets","validationInputMessagePosition","workbook","zoomLevel"],
	outputs:["actionExecuted","actionExecuting","activeCellChanged","activePaneChanged","activeWorksheetChanged","editRangePasswordNeeded","hyperlinkExecuting","selectionChanged","userPromptDisplaying","workbookDirtied"]
})
export class IgSpreadsheetComponent extends IgControlBase<IgSpreadsheet> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	/**
	 * Returns an object that represents the pane with the focus.
	 */
	public getActivePane(): Object { return; } ;

	/**
	 * Returns an object that represents the current selection of the active pane.
	 */
	public getActiveSelection(): Object { return; } ;

	/**
	 * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire active selection.
	 *				Any changes made to this object will affect all the objects in the selection. So for example, the 
	 *				Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other 
	 *				cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects 
	 *				affected by the selection will have their Font.Name updated to that value.
	 */
	public getActiveSelectionCellRangeFormat(): Object { return; } ;

	/**
	 * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
	 */
	public getIsRenamingWorksheet(): boolean { return; } ;

	/**
	 * Returns an array of the panes for the activeWorksheet.
	 *			 
	 *				 returnType="ig.spreadsheet.SpreadsheetPane[]"
	 */
	public getPanes(): void { return; } ;

	/**
	 * Executes the action associated with the specified id.
	 *
	 * @param action An [enumeration](ig.spreadsheet.SpreadsheetAction) or string that identifies the action to execute.
	 */
	public executeAction(action: Object): boolean { return; } ;

	/**
	 * Forces any pending deferred work to render on the spreadsheet before continuing
	 */
	public flush(): void { return; } ;

	/**
	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Notify the spreadsheet that style information used for rendering the spreadsheet may have been updated.
	 */
	public styleUpdated(): void { return; } ;
}

@NgModule({
	declarations: [Column, IgGridMultiColumnHeadersFeature, IgGridSortingFeature,IgGridFilteringFeature,IgGridPagingFeature,IgGridUpdatingFeature,IgGridGroupByFeature,IgGridColumnMovingFeature,IgGridHidingFeature,IgGridCellMergingFeature,IgGridResponsiveFeature,IgGridResizingFeature,IgGridSelectionFeature,IgGridRowSelectorsFeature,IgGridSummariesFeature,IgGridColumnFixingFeature,IgGridTooltipsFeature,IgGridAppendRowsOnDemandFeature,Features,IgGridComponent,IgTreeGridComponent,IgHierarchicalGridComponent,IgComboComponent,IgCheckboxEditorComponent,IgCurrencyEditorComponent,IgDateEditorComponent,IgDatePickerComponent,IgMaskEditorComponent,IgNumericEditorComponent,IgPercentEditorComponent,IgTextEditorComponent,IgTreeComponent,IgDialogComponent,IgSplitterComponent,IgLayoutManagerComponent,IgTileManagerComponent,IgHtmlEditorComponent,IgValidatorComponent,IgPivotDataSelectorComponent,IgPivotGridComponent,IgDataChartComponent,IgPieChartComponent,IgDoughnutChartComponent,IgFunnelChartComponent,IgRadialGaugeComponent,IgZoombarComponent,IgMapComponent,IgSparklineComponent,IgBulletGraphComponent,IgLinearGaugeComponent,IgQRCodeBarcodeComponent,IgUploadComponent,IgPopoverComponent,IgNotifierComponent,IgRatingComponent,IgVideoPlayerComponent,IgRadialMenuComponent,IgSplitButtonComponent, IgSpreadsheetComponent, IgSchedulerComponent],
	exports: [Column, IgGridMultiColumnHeadersFeature, IgGridSortingFeature,IgGridFilteringFeature,IgGridPagingFeature,IgGridUpdatingFeature,IgGridGroupByFeature,IgGridColumnMovingFeature,IgGridHidingFeature,IgGridCellMergingFeature,IgGridResponsiveFeature,IgGridResizingFeature,IgGridSelectionFeature,IgGridRowSelectorsFeature,IgGridSummariesFeature,IgGridColumnFixingFeature,IgGridTooltipsFeature,IgGridAppendRowsOnDemandFeature,Features,IgGridComponent,IgTreeGridComponent,IgHierarchicalGridComponent,IgComboComponent,IgCheckboxEditorComponent,IgCurrencyEditorComponent,IgDateEditorComponent,IgDatePickerComponent,IgMaskEditorComponent,IgNumericEditorComponent,IgPercentEditorComponent,IgTextEditorComponent,IgTreeComponent,IgDialogComponent,IgSplitterComponent,IgLayoutManagerComponent,IgTileManagerComponent,IgHtmlEditorComponent,IgValidatorComponent,IgPivotDataSelectorComponent,IgPivotGridComponent,IgDataChartComponent,IgPieChartComponent,IgDoughnutChartComponent,IgFunnelChartComponent,IgRadialGaugeComponent,IgZoombarComponent,IgMapComponent,IgSparklineComponent,IgBulletGraphComponent,IgLinearGaugeComponent,IgQRCodeBarcodeComponent,IgUploadComponent,IgPopoverComponent,IgNotifierComponent,IgRatingComponent,IgVideoPlayerComponent,IgRadialMenuComponent,IgSplitButtonComponent, IgSpreadsheetComponent, IgSchedulerComponent]
})
export class IgniteUIModule {}