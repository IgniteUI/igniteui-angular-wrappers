import { Component, ElementRef, KeyValueDiffers, IterableDiffers, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgGridBase } from './iggridbase';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ig-grid',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'autoAdjustHeight', 'avgRowHeight', 'avgColumnWidth', 'defaultColumnWidth', 'autoGenerateColumns', 'virtualization', 'virtualizationMode', 'requiresDataBinding', 'rowVirtualization', 'columnVirtualization', 'virtualizationMouseWheelStep', 'adjustVirtualHeights', 'templatingEngine', 'columns', 'dataSource', 'dataSourceUrl', 'dataSourceType', 'responseDataKey', 'responseTotalRecCountKey', 'requestType', 'responseContentType', 'showHeader', 'showFooter', 'fixedHeaders', 'fixedFooters', 'caption', 'features', 'tabIndex', 'localSchemaTransform', 'primaryKey', 'serializeTransactionLog', 'autoCommit', 'aggregateTransactions', 'autoFormat', 'renderCheckboxes', 'updateUrl', 'restSettings', 'alternateRowStyles', 'autofitLastColumn', 'enableHoverStyles', 'enableUTCDates', 'mergeUnboundColumns', 'jsonpRequest', 'enableResizeContainerCheck', 'featureChooserIconDisplay', 'scrollSettings'],
    outputs: ['cellClick', 'cellRightClick', 'dataBinding', 'dataBound', 'rendering', 'rendered', 'dataRendering', 'dataRendered', 'headerRendering', 'headerRendered', 'footerRendering', 'footerRendered', 'headerCellRendered', 'rowsRendering', 'rowsRendered', 'schemaGenerated', 'columnsCollectionModified', 'requestError', 'created', 'destroyed'],
    standalone: false
})
export class IgGridComponent extends IgGridBase<IgGrid> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiff: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiff, cdr);
    }

    /**
     * Returns the element holding the data records
     */
    /* istanbul ignore next */
    public widget(): void { return; }

    /**
     * Returns whether grid has non-data fixed columns(e.g. row selectors column)
     */
    /* istanbul ignore next */
    public hasFixedDataSkippedColumns(): boolean { return; }

    /**
     * Returns true if grid has at least one fixed columns(even if a non-data column - like row-selectors column)
     */
    /* istanbul ignore next */
    public hasFixedColumns(): boolean { return; }

    /**
     * Returns the current fixing direction. NOTE - use only if ColumnFixing feature is enabled
     * @return left|right
     */
    /* istanbul ignore next */
    public fixingDirection(): string { return; }

    /**
     * Returns whether the column with identifier colKey is fixed
     *
     * @param colKey     An identifier of the column which should be checked. It can be a key or visible index.
     */
    /* istanbul ignore next */
    public isFixedColumn(colKey: object): boolean { return; }

    /**
     * Called to detect whether grid container is resized.
     * When autoAdjustHeight is true and height of the grid is changed then the height of grid is re-set.
     */
    /* istanbul ignore next */
    public resizeContainer(): void { return; }

    /**
     * Returns whether the header identified by colKey is multicolumn header(has children)
     *
     * @param colKey     value of the column key
     */
    /* istanbul ignore next */
    public isGroupHeader(colKey: string): object { return; }

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
    /* istanbul ignore next */
    public getElementInfo(elem: Element): object { return; }

    /**
     * Returns the ID of the TABLE element where data records are rendered
     */
    /* istanbul ignore next */
    public id(): string { return; }

    /**
     * Returns the DIV that is the topmost container of the grid widget
     */
    /* istanbul ignore next */
    public container(): Element { return; }

    /**
     * Returns the table that contains the header cells
     */
    /* istanbul ignore next */
    public headersTable(): Element { return; }

    /**
     * Returns the table that contains the footer cells
     */
    /* istanbul ignore next */
    public footersTable(): Element { return; }

    /**
     * Returns the DIV that is used as a scroll container for the grid contents
     */
    /* istanbul ignore next */
    public scrollContainer(): Element { return; }

    /**
     * Returns the DIV that is the topmost container of the fixed grid - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedContainer(): Element { return; }

    /**
     * Returns the DIV that is the topmost container of the fixed body grid - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedBodyContainer(): Element { return; }

    /**
     * Returns container(jQuery representation) containing fixed footer - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedFooterContainer(): object { return; }

    /**
     * Returns container(jQuery representation) containing fixed header - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedHeaderContainer(): object { return; }

    /**
     * Returns the table that contains the FIXED header cells - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedHeadersTable(): Element { return; }

    /**
     * Returns the table that contains the footer cells - contains fixed columns(in ColumnFixing scenario)
     */
    /* istanbul ignore next */
    public fixedFootersTable(): Element { return; }

    /**
     * Returns the cell TD element at the specified location
     *
     * @param x     The column index.
     * @param y     The row index.
     * @param isFixed     Optional parameter - if true get cell TD at the specified location from the fixed table
     */
    /* istanbul ignore next */
    public cellAt(x: number, y: number, isFixed: boolean): Element { return; }

    /**
     * Returns the cell TD element by row id and column key
     *
     * @param rowId     The id of the row.
     * @param columnKey     The column key.
     */
    /* istanbul ignore next */
    public cellById(rowId: object, columnKey: string): Element { return; }

    /**
     * Returns the fixed table - contains fixed columns(in ColumnFixing scenario). If there aren't fixed columns returns the grid table
     */
    /* istanbul ignore next */
    public fixedTable(): object { return; }

    /**
     * Gets all immediate children of the current grid
     */
    /* istanbul ignore next */
    public immediateChildrenWidgets(): any[] { return; }

    /**
     * Gets all children of the current grid, recursively
     */
    /* istanbul ignore next */
    public childrenWidgets(): any[] { return; }

    /**
     * Gets all children's elements of the current grid, recursively
     */
    /* istanbul ignore next */
    public children(): any[] { return; }

    /**
     * Gets all immediate children's elements of the current grid
     */
    /* istanbul ignore next */
    public immediateChildren(): any[] { return; }

    /**
     * Returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons
     *
     * @param i     The row index.
     */
    /* istanbul ignore next */
    public rowAt(i: number): Element { return; }

    /**
     * Returns the row TR element by row id
     *
     * @param rowId     The id of the row.
     * @param isFixed     Specify search in the fixed container.
     */
    /* istanbul ignore next */
    public rowById(rowId: object, isFixed?: boolean): Element { return; }

    /**
     * Returns the fixed row (TR element) at the specified index.
     * jQuery selectors aren't used for performance reasons(in ColumnFixing scenario - only when there is at least one fixed column)
     *
     * @param i     The row index.
     */
    /* istanbul ignore next */
    public fixedRowAt(i: number): Element { return; }

    /**
     * Returns a list of all fixed TR elements holding data in the grid,
     * in ColumnFixing scenario - only when there is at least one fixed column
     */
    /* istanbul ignore next */
    public fixedRows(): any[] { return; }

    /**
     * Returns a list of all TR elements holding data in the grid,
     * when there is at least one fixed column returns rows only in the UNFIXED table
     */
    /* istanbul ignore next */
    public rows(): any[] { return; }

    /**
     * Returns all data fixed rows recursively, not only the immediate ones,
     * in ColumnFixing scenario - only when there is at least one fixed column
     */
    /* istanbul ignore next */
    public allFixedRows(): any[] { return; }

    /**
     * Returns all data rows recursively, not only the immediate ones,
     * when there is at least one fixed column returns rows only in the UNFIXED table
     */
    /* istanbul ignore next */
    public allRows(): any[] { return; }

    /**
     * Returns a column object by the specified column key
     *
     * @param key     The column key.
     */
    /* istanbul ignore next */
    public columnByKey(key: string): object { return; }

    /**
     * Returns a column object by the specified header text. If there are multiple matches, returns the first one.
     *
     * @param text     The column header text.
     */
    /* istanbul ignore next */
    public columnByText(text: string): object { return; }

    /**
     * Returns an array of selected cells in arbitrary order where every objects has the format
     * { element: , row: , index: , rowIndex: , columnKey: } .
     * 				If multiple selection is disabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedCells(): any[] { return; }

    /**
     * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: }.
     * 				If multiple selection is disabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedRows(): any[] { return; }

    /**
     * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     * 				If multiple selection is enabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedCell(): object { return; }

    /**
     * Returns the currently selected row that has the format { element: , index: }, if any.
     * 				If multiple selection is enabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedRow(): object { return; }

    /**
     * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     */
    /* istanbul ignore next */
    public activeCell(): object { return; }

    /**
     * Returns the currently active (focused) row that has the format { element: , index: }, if any.
     */
    /* istanbul ignore next */
    public activeRow(): object { return; }

    /**
     * Retrieves a cell value using the row index and the column key.
     * If a primaryKey is defined, rowId is assumed to be the row Key (not index).
     * If primary key is not defined, then rowId is converted to a number and is used as a row index.
     *
     * @param rowId     Row index or row key (primary key).
     * @param colKey     The column key.
     */
    /* istanbul ignore next */
    public getCellValue(rowId: any, colKey: string): any { return; }

    /**
     * Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)
     * - does not apply when using a Multi-Row Layout grid.
     * This is the actual text (or HTML string) for the contents of the cell.
     *
     * @param rowId     Row index or row data key (primary key)
     * @param colKey     Column key.
     */
    /* istanbul ignore next */
    public getCellText(rowId: object, colKey: string): string { return; }

    /**
     * Sets a new template for a column after initialization and renders the grid if not explicitly disabled.
     * This method will replace any existing explicitly set row template and will build one anew from the column ones.
     *
     * @param col     An identifier of the column to set template for (index or key)
     * @param tmpl     The column template to set
     * @param render     Should the grid rerender after template is set
     */
    /* istanbul ignore next */
    public setColumnTemplate(col: object, tmpl: string, render?: boolean): void { return; }

    /**
     * Commits all pending transactions to the client data source.
     * Note that there won't be anything to commit on the UI, since it is updated instantly.
     * In order to rollback the actual UI, a call to dataBind() is required.
     *
     * @param rowId     If specified, will commit only that transaction corresponding to the specified record key.
     */
    /* istanbul ignore next */
    public commit(rowId?: object): void { return; }

    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI.
     * In case the UI must be updated, set the second parameter "updateUI" to true,
     * which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rowId     If specified, will only rollback the transactions with that row id.
     * @param updateUI     Whether to update the UI or not.
     */
    /* istanbul ignore next */
    public rollback(rowId?: object, updateUI?: boolean): any[] { return; }

    /**
     * Returns a record by a specified key (requires that primaryKey is set in the settings).
     * 				That is a wrapper for this.dataSource.findRecordByKey(key).
     *
     * @param key     Primary key of the record
     */
    /* istanbul ignore next */
    public findRecordByKey(key: object): object { return; }

    /**
     * Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
     * 				That is a wrapper for this.dataSource.getDetachedRecord(t).
     *
     * @param t     A transaction object.
     */
    /* istanbul ignore next */
    public getDetachedRecord(t: object): object { return; }

    /**
     * Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
     * 				That is a wrapper for this.dataSource.pendingTransactions().
     */
    /* istanbul ignore next */
    public pendingTransactions(): any[] { return; }

    /**
     * Returns a list of all transaction objects that are either pending, or have been committed in the data source.
     * 				That is a wrapper for this.dataSource.allTransactions().
     */
    /* istanbul ignore next */
    public allTransactions(): any[] { return; }

    /**
     * Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
     * 				That is a wrapper for this.dataSource.transactionsAsString().
     */
    /* istanbul ignore next */
    public transactionsAsString(): string { return; }

    /**
     * Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log
     * (a serialized JSON string) as part of the POST request.
     *
     * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
     * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
     */
    /* istanbul ignore next */
    public saveChanges(success: () => void, error: () => void): void { return; }

    /**
     * Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
     *
     * @param rec     Identifier/key of row. If missing, then number of rows in grid is used.
     */
    /* istanbul ignore next */
    public renderNewRow(rec?: string): void { return; }

    /**
     * If the data source points to a local JSON array of data, and it is necessary to reset it at runtime,
     * it must be done through this API member instead of the options (options.dataSource)
     *
     * @param dataSource     New data source object.
     */
    /* istanbul ignore next */
    public dataSourceObject(dataSource: object): void { return; }

    /**
     * Returns the total number of records in the underlying backend.
     * If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
     * In order for this to work, the response JSON/XML must include a property that specifies the total number of records,
     * which name is specified by options.responseTotalRecCountKey.
     * This functionality is completely delegated to the data source control.
     */
    /* istanbul ignore next */
    public totalRecordsCount(): number { return; }

    /**
     * Causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well
     *
     * @param internal internal call flag
     */
    /* istanbul ignore next */
    dataBind(internal: object): void { return; }

    /**
     * Moves a visible column at a specified place, in front or behind a target column or at a target index
     * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel.
     * This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column An identifier of the column to be moved.
     * It can be a key, a Multi-Column Header identificator, or an index in a number format.
     * The latter is not supported when the grid contains multi-column headers.
     * @param target An identifier of a column where the moved column should move to or an index at which the moved
     * column should be moved to. In the case of a column identifier the column will be moved after it by default.
     * @param after    Specifies whether the column moved should be moved after or before the target column.
     * This parameter is disregarded if there is no target column specified but a target index is used.
     * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
     * @param callback    Specifies a custom function to be called when the column is moved.
     */
    /* istanbul ignore next */
    public moveColumn(column: object, target: object, after?: boolean, inDom?: boolean, callback?: () => void): void { return; }

    /**
     * Shows a hidden column. If the column is not hidden the method does nothing.
     * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel.
     * This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column     An identifier for the column. If a number is provided it will be used as a column index.
     * If a string is provided it will be used as a column key.
     * @param callback     Specifies a custom function to be called when the column is shown(optional)
     */
    /* istanbul ignore next */
    public showColumn(column: object, callback: () => void): void { return; }

    /**
     * Hides a visible column. If the column is hidden the method does nothing.
     * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel.
     * This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column An identifier for the column.
     * If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
     * @param callback Specifies a custom function to be called when the column is hidden(optional)
     */
    /* istanbul ignore next */
    public hideColumn(column: object, callback: () => void): void { return; }

    /**
     * Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
     *
     * @param key     column key
     */
    /* istanbul ignore next */
    public getUnboundValues(key: string): object { return; }

    /**
     * Sets unbound values for the unbound column with the specified key.
     * If removeOldValues is true then values(if any) for the unbound columns are re-set with the new values
     *
     * @param key key of the unbound column
     * @param values array of values to be set on unbound values
     * @param removeOldValues if true removes current unbound values(if any) for the specified column and apply the new ones specified
     * in parameter values. Otherwise merge current values with the specified in parameter values
     */
    /* istanbul ignore next */
    public setUnboundValues(key: string, values: any[], removeOldValues: object): void { return; }

    /**
     * Sets unbound value for the unbound cell by the specified column key and row primary key.
     *
     * @param col     key of the unbound column
     * @param rowId     primary key value of the row
     * @param val     value to be set on unbound cell
     * @param notToRender     if false will re-render the row
     */
    /* istanbul ignore next */
    public setUnboundValueByPK(col: string, rowId: string, val: object, notToRender: object): void { return; }

    /**
     * Returns an unbound column with the specified key. If not found returns null
     *
     * @param key    a column key
     */
    /* istanbul ignore next */
    public getUnboundColumnByKey(key: string): object { return; }

    /**
     * Returns whether there is vertical scrollbar. Because of perfrormance issues in older Internet Explorer especially 8,9 -
     * there is no need to check if height is not set - there is no scrollbar OR if row virtualization is enabled -
     * it is supposed there is vertical scrollbar
     */
    /* istanbul ignore next */
    public hasVerticalScrollbar(): object { return; }

    /**
     * Auto resize columns that have property width set to "*" so content to be auto-fitted(not shrinked/cutted).
     * Auto-resizing is applied ONLY for visible columns
     */
    /* istanbul ignore next */
    public autoSizeColumns(): void { return; }

    /**
     * Calculates the width of the column so its content to be auto-fitted to the width of the data in it
     * (the content should NOT be shrinked/cutted)
     *
     * @param columnIndex    Visible column index
     */
    /* istanbul ignore next */
    public calculateAutoFitColumnWidth(columnIndex: number): number { return; }

    /**
     * Get visible index by specified column key. If column is not found or is hidden then returns -1.
     * 				Note: Method does not count column groups (Multi-Column Headers).
     *
     * @param columnKey     columnKey
     * @param includeDataSkip     Optional parameter - if set to true include non data columns
     * (like expander column, row selectors column, etc.) in calculations
     */
    /* istanbul ignore next */
    public getVisibleIndexByKey(columnKey: string, includeDataSkip: boolean): number { return; }

    /**
     * When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
     *
     * @param cols an array of column objects
     */
    /* istanbul ignore next */
    public renderMultiColumnHeader(cols: any[]): void { return; }

    /**
     * Scroll to the specified row or specified position(in pixels)
     *
     * @param scrollerPosition An identifier of the vertical scroll position.
     * When it is string then it is interpreted as pixels otherwise it is the row number
     */
    /* istanbul ignore next */
    public virtualScrollTo(scrollerPosition: object): void { return; }

    /**
     * Returns column object and visible index for the table cell(TD) which is passed as argument
     *
     * @param $td     cell(TD) - either DOM TD element or jQuery object
     */
    /* istanbul ignore next */
    public getColumnByTD($td: object): object { return; }

    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     * 				1. Remove custom CSS classes that were added.
     * 				2. Unwrap any wrapping elements such as scrolling divs and other containers.
     * 				3. Unbind all events that were bound.
     *
     * @param notToCallDestroy flag whether to propagate the destroy call
     */
    /* istanbul ignore next */
    public destroy(notToCallDestroy: object): void { return; }
}
