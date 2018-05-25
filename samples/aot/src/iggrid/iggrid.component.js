"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var iggridbase_1 = require("./iggridbase");
var IgGridComponent = /** @class */ (function (_super) {
    __extends(IgGridComponent, _super);
    function IgGridComponent(el, renderer, differs, kvalDiff, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiff, cdr) || this;
    }
    /**
     * Returns the element holding the data records
     */
    /**
         * Returns the element holding the data records
         */
    IgGridComponent.prototype.widget = /**
         * Returns the element holding the data records
         */
    function () { return; };
    ;
    /**
     * Returns whether grid has non-data fixed columns(e.g. row selectors column)
     */
    /**
         * Returns whether grid has non-data fixed columns(e.g. row selectors column)
         */
    IgGridComponent.prototype.hasFixedDataSkippedColumns = /**
         * Returns whether grid has non-data fixed columns(e.g. row selectors column)
         */
    function () { return; };
    ;
    /**
     * Returns true if grid has at least one fixed columns(even if a non-data column - like row-selectors column)
     */
    /**
         * Returns true if grid has at least one fixed columns(even if a non-data column - like row-selectors column)
         */
    IgGridComponent.prototype.hasFixedColumns = /**
         * Returns true if grid has at least one fixed columns(even if a non-data column - like row-selectors column)
         */
    function () { return; };
    ;
    /**
     * Returns the current fixing direction. NOTE - use only if ColumnFixing feature is enabled
     * @return left|right
     */
    /**
         * Returns the current fixing direction. NOTE - use only if ColumnFixing feature is enabled
         * @return left|right
         */
    IgGridComponent.prototype.fixingDirection = /**
         * Returns the current fixing direction. NOTE - use only if ColumnFixing feature is enabled
         * @return left|right
         */
    function () { return; };
    ;
    /**
     * Returns whether the column with identifier colKey is fixed
     *
     * @param colKey     An identifier of the column which should be checked. It can be a key or visible index.
     */
    /**
         * Returns whether the column with identifier colKey is fixed
         *
         * @param colKey     An identifier of the column which should be checked. It can be a key or visible index.
         */
    IgGridComponent.prototype.isFixedColumn = /**
         * Returns whether the column with identifier colKey is fixed
         *
         * @param colKey     An identifier of the column which should be checked. It can be a key or visible index.
         */
    function (colKey) { return; };
    ;
    /**
     * Called to detect whether grid container is resized. When autoAdjustHeight is true and height of the grid is changed then the height of grid is re-set.
     */
    /**
         * Called to detect whether grid container is resized. When autoAdjustHeight is true and height of the grid is changed then the height of grid is re-set.
         */
    IgGridComponent.prototype.resizeContainer = /**
         * Called to detect whether grid container is resized. When autoAdjustHeight is true and height of the grid is changed then the height of grid is re-set.
         */
    function () { return; };
    ;
    /**
     * Returns whether the header identified by colKey is multicolumn header(has children)
     *
     * @param colKey     value of the column key
     */
    /**
         * Returns whether the header identified by colKey is multicolumn header(has children)
         *
         * @param colKey     value of the column key
         */
    IgGridComponent.prototype.isGroupHeader = /**
         * Returns whether the header identified by colKey is multicolumn header(has children)
         *
         * @param colKey     value of the column key
         */
    function (colKey) { return; };
    ;
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
    IgGridComponent.prototype.getElementInfo = /**
         * Returns an object that contains information on the passed Dom element
         *
         * 				rowId - the id of the record associated with the element - if primaryKey is not set this will be null.
         * 				rowIndex - the index (in the DOM) of the row associated with the element.
         * 				recordIndex - index of the data record associated with this element in the current dataView.
         * 				columnObject  - the column object associated with this element ( if the element is tr this will be null)
         *
         * @param elem    The Dom element or jQuery object which can be a TD or TR element from the grid.
         */
    function (elem) { return; };
    ;
    /**
     * Returns the ID of the TABLE element where data records are rendered
     */
    /**
         * Returns the ID of the TABLE element where data records are rendered
         */
    IgGridComponent.prototype.id = /**
         * Returns the ID of the TABLE element where data records are rendered
         */
    function () { return; };
    ;
    /**
     * Returns the DIV that is the topmost container of the grid widget
     */
    /**
         * Returns the DIV that is the topmost container of the grid widget
         */
    IgGridComponent.prototype.container = /**
         * Returns the DIV that is the topmost container of the grid widget
         */
    function () { return; };
    ;
    /**
     * Returns the table that contains the header cells
     */
    /**
         * Returns the table that contains the header cells
         */
    IgGridComponent.prototype.headersTable = /**
         * Returns the table that contains the header cells
         */
    function () { return; };
    ;
    /**
     * Returns the table that contains the footer cells
     */
    /**
         * Returns the table that contains the footer cells
         */
    IgGridComponent.prototype.footersTable = /**
         * Returns the table that contains the footer cells
         */
    function () { return; };
    ;
    /**
     * Returns the DIV that is used as a scroll container for the grid contents
     */
    /**
         * Returns the DIV that is used as a scroll container for the grid contents
         */
    IgGridComponent.prototype.scrollContainer = /**
         * Returns the DIV that is used as a scroll container for the grid contents
         */
    function () { return; };
    ;
    /**
     * Returns the DIV that is the topmost container of the fixed grid - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns the DIV that is the topmost container of the fixed grid - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedContainer = /**
         * Returns the DIV that is the topmost container of the fixed grid - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns the DIV that is the topmost container of the fixed body grid - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns the DIV that is the topmost container of the fixed body grid - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedBodyContainer = /**
         * Returns the DIV that is the topmost container of the fixed body grid - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns container(jQuery representation) containing fixed footer - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns container(jQuery representation) containing fixed footer - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedFooterContainer = /**
         * Returns container(jQuery representation) containing fixed footer - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns container(jQuery representation) containing fixed header - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns container(jQuery representation) containing fixed header - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedHeaderContainer = /**
         * Returns container(jQuery representation) containing fixed header - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns the table that contains the FIXED header cells - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns the table that contains the FIXED header cells - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedHeadersTable = /**
         * Returns the table that contains the FIXED header cells - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns the table that contains the footer cells - contains fixed columns(in ColumnFixing scenario)
     */
    /**
         * Returns the table that contains the footer cells - contains fixed columns(in ColumnFixing scenario)
         */
    IgGridComponent.prototype.fixedFootersTable = /**
         * Returns the table that contains the footer cells - contains fixed columns(in ColumnFixing scenario)
         */
    function () { return; };
    ;
    /**
     * Returns the cell TD element at the specified location
     *
     * @param x     The column index.
     * @param y     The row index.
     * @param isFixed     Optional parameter - if true get cell TD at the specified location from the fixed table
     */
    /**
         * Returns the cell TD element at the specified location
         *
         * @param x     The column index.
         * @param y     The row index.
         * @param isFixed     Optional parameter - if true get cell TD at the specified location from the fixed table
         */
    IgGridComponent.prototype.cellAt = /**
         * Returns the cell TD element at the specified location
         *
         * @param x     The column index.
         * @param y     The row index.
         * @param isFixed     Optional parameter - if true get cell TD at the specified location from the fixed table
         */
    function (x, y, isFixed) { return; };
    ;
    /**
     * Returns the cell TD element by row id and column key
     *
     * @param rowId     The id of the row.
     * @param columnKey     The column key.
     */
    /**
         * Returns the cell TD element by row id and column key
         *
         * @param rowId     The id of the row.
         * @param columnKey     The column key.
         */
    IgGridComponent.prototype.cellById = /**
         * Returns the cell TD element by row id and column key
         *
         * @param rowId     The id of the row.
         * @param columnKey     The column key.
         */
    function (rowId, columnKey) { return; };
    ;
    /**
     * Returns the fixed table - contains fixed columns(in ColumnFixing scenario). If there aren't fixed columns returns the grid table
     */
    /**
         * Returns the fixed table - contains fixed columns(in ColumnFixing scenario). If there aren't fixed columns returns the grid table
         */
    IgGridComponent.prototype.fixedTable = /**
         * Returns the fixed table - contains fixed columns(in ColumnFixing scenario). If there aren't fixed columns returns the grid table
         */
    function () { return; };
    ;
    /**
     * Gets all immediate children of the current grid
     */
    /**
         * Gets all immediate children of the current grid
         */
    IgGridComponent.prototype.immediateChildrenWidgets = /**
         * Gets all immediate children of the current grid
         */
    function () { return; };
    ;
    /**
     * Gets all children of the current grid, recursively
     */
    /**
         * Gets all children of the current grid, recursively
         */
    IgGridComponent.prototype.childrenWidgets = /**
         * Gets all children of the current grid, recursively
         */
    function () { return; };
    ;
    /**
     * Gets all children's elements of the current grid, recursively
     */
    /**
         * Gets all children's elements of the current grid, recursively
         */
    IgGridComponent.prototype.children = /**
         * Gets all children's elements of the current grid, recursively
         */
    function () { return; };
    ;
    /**
     * Gets all immediate children's elements of the current grid
     */
    /**
         * Gets all immediate children's elements of the current grid
         */
    IgGridComponent.prototype.immediateChildren = /**
         * Gets all immediate children's elements of the current grid
         */
    function () { return; };
    ;
    /**
     * Returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons
     *
     * @param i     The row index.
     */
    /**
         * Returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons
         *
         * @param i     The row index.
         */
    IgGridComponent.prototype.rowAt = /**
         * Returns the row (TR element) at the specified index. jQuery selectors aren't used for performance reasons
         *
         * @param i     The row index.
         */
    function (i) { return; };
    ;
    /**
     * Returns the row TR element by row id
     *
     * @param rowId     The id of the row.
     * @param isFixed     Specify search in the fixed container.
     */
    /**
         * Returns the row TR element by row id
         *
         * @param rowId     The id of the row.
         * @param isFixed     Specify search in the fixed container.
         */
    IgGridComponent.prototype.rowById = /**
         * Returns the row TR element by row id
         *
         * @param rowId     The id of the row.
         * @param isFixed     Specify search in the fixed container.
         */
    function (rowId, isFixed) { return; };
    ;
    /**
     * Returns the fixed row (TR element) at the specified index. jQuery selectors aren't used for performance reasons(in ColumnFixing scenario - only when there is at least one fixed column)
     *
     * @param i     The row index.
     */
    /**
         * Returns the fixed row (TR element) at the specified index. jQuery selectors aren't used for performance reasons(in ColumnFixing scenario - only when there is at least one fixed column)
         *
         * @param i     The row index.
         */
    IgGridComponent.prototype.fixedRowAt = /**
         * Returns the fixed row (TR element) at the specified index. jQuery selectors aren't used for performance reasons(in ColumnFixing scenario - only when there is at least one fixed column)
         *
         * @param i     The row index.
         */
    function (i) { return; };
    ;
    /**
     * Returns a list of all fixed TR elements holding data in the grid(in ColumnFixing scenario - only when there is at least one fixed column)
     */
    /**
         * Returns a list of all fixed TR elements holding data in the grid(in ColumnFixing scenario - only when there is at least one fixed column)
         */
    IgGridComponent.prototype.fixedRows = /**
         * Returns a list of all fixed TR elements holding data in the grid(in ColumnFixing scenario - only when there is at least one fixed column)
         */
    function () { return; };
    ;
    /**
     * Returns a list of all TR elements holding data in the grid(when there is at least one fixed column returns rows only in the UNFIXED table)
     */
    /**
         * Returns a list of all TR elements holding data in the grid(when there is at least one fixed column returns rows only in the UNFIXED table)
         */
    IgGridComponent.prototype.rows = /**
         * Returns a list of all TR elements holding data in the grid(when there is at least one fixed column returns rows only in the UNFIXED table)
         */
    function () { return; };
    ;
    /**
     * Returns all data fixed rows recursively, not only the immediate ones(in ColumnFixing scenario - only when there is at least one fixed column)
     */
    /**
         * Returns all data fixed rows recursively, not only the immediate ones(in ColumnFixing scenario - only when there is at least one fixed column)
         */
    IgGridComponent.prototype.allFixedRows = /**
         * Returns all data fixed rows recursively, not only the immediate ones(in ColumnFixing scenario - only when there is at least one fixed column)
         */
    function () { return; };
    ;
    /**
     * Returns all data rows recursively, not only the immediate ones(when there is at least one fixed column returns rows only in the UNFIXED table)
     */
    /**
         * Returns all data rows recursively, not only the immediate ones(when there is at least one fixed column returns rows only in the UNFIXED table)
         */
    IgGridComponent.prototype.allRows = /**
         * Returns all data rows recursively, not only the immediate ones(when there is at least one fixed column returns rows only in the UNFIXED table)
         */
    function () { return; };
    ;
    /**
     * Returns a column object by the specified column key
     *
     * @param key     The column key.
     */
    /**
         * Returns a column object by the specified column key
         *
         * @param key     The column key.
         */
    IgGridComponent.prototype.columnByKey = /**
         * Returns a column object by the specified column key
         *
         * @param key     The column key.
         */
    function (key) { return; };
    ;
    /**
     * Returns a column object by the specified header text. If there are multiple matches, returns the first one.
     *
     * @param text     The column header text.
     */
    /**
         * Returns a column object by the specified header text. If there are multiple matches, returns the first one.
         *
         * @param text     The column header text.
         */
    IgGridComponent.prototype.columnByText = /**
         * Returns a column object by the specified header text. If there are multiple matches, returns the first one.
         *
         * @param text     The column header text.
         */
    function (text) { return; };
    ;
    /**
     * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
     * 				If multiple selection is disabled the function will return null.
     */
    /**
         * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
         * 				If multiple selection is disabled the function will return null.
         */
    IgGridComponent.prototype.selectedCells = /**
         * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
         * 				If multiple selection is disabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
     * 				If multiple selection is disabled the function will return null.
     */
    /**
         * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
         * 				If multiple selection is disabled the function will return null.
         */
    IgGridComponent.prototype.selectedRows = /**
         * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
         * 				If multiple selection is disabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     * 				If multiple selection is enabled the function will return null.
     */
    /**
         * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         * 				If multiple selection is enabled the function will return null.
         */
    IgGridComponent.prototype.selectedCell = /**
         * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         * 				If multiple selection is enabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently selected row that has the format { element: , index: }, if any.
     * 				If multiple selection is enabled the function will return null.
     */
    /**
         * Returns the currently selected row that has the format { element: , index: }, if any.
         * 				If multiple selection is enabled the function will return null.
         */
    IgGridComponent.prototype.selectedRow = /**
         * Returns the currently selected row that has the format { element: , index: }, if any.
         * 				If multiple selection is enabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     */
    /**
         * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         */
    IgGridComponent.prototype.activeCell = /**
         * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         */
    function () { return; };
    ;
    /**
     * Returns the currently active (focused) row that has the format { element: , index: }, if any.
     */
    /**
         * Returns the currently active (focused) row that has the format { element: , index: }, if any.
         */
    IgGridComponent.prototype.activeRow = /**
         * Returns the currently active (focused) row that has the format { element: , index: }, if any.
         */
    function () { return; };
    ;
    /**
     * Retrieves a cell value using the row index and the column key. If a primaryKey is defined, rowId is assumed to be the row Key (not index).
     * 				If primary key is not defined, then rowId is converted to a number and is used as a row index.
     *
     * @param rowId     Row index or row key (primary key).
     * @param colKey     The column key.
     */
    /**
         * Retrieves a cell value using the row index and the column key. If a primaryKey is defined, rowId is assumed to be the row Key (not index).
         * 				If primary key is not defined, then rowId is converted to a number and is used as a row index.
         *
         * @param rowId     Row index or row key (primary key).
         * @param colKey     The column key.
         */
    IgGridComponent.prototype.getCellValue = /**
         * Retrieves a cell value using the row index and the column key. If a primaryKey is defined, rowId is assumed to be the row Key (not index).
         * 				If primary key is not defined, then rowId is converted to a number and is used as a row index.
         *
         * @param rowId     Row index or row key (primary key).
         * @param colKey     The column key.
         */
    function (rowId, colKey) { return; };
    ;
    /**
     * Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)- does not apply when using a Multi-Row Layout grid.
     * 				This is the actual text (or HTML string) for the contents of the cell.
     *
     * @param rowId     Row index or row data key (primary key)
     * @param colKey     Column key.
     */
    /**
         * Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)- does not apply when using a Multi-Row Layout grid.
         * 				This is the actual text (or HTML string) for the contents of the cell.
         *
         * @param rowId     Row index or row data key (primary key)
         * @param colKey     Column key.
         */
    IgGridComponent.prototype.getCellText = /**
         * Returns the cell text. If colKey is a number, the index of the column is used (instead of a column name)- does not apply when using a Multi-Row Layout grid.
         * 				This is the actual text (or HTML string) for the contents of the cell.
         *
         * @param rowId     Row index or row data key (primary key)
         * @param colKey     Column key.
         */
    function (rowId, colKey) { return; };
    ;
    /**
     * Sets a new template for a column after initialization and renders the grid if not explicitly disabled. This method will replace any existing explicitly set row template and will build one anew from the column ones.
     *
     * @param col     An identifier of the column to set template for (index or key)
     * @param tmpl     The column template to set
     * @param render     Should the grid rerender after template is set
     */
    /**
         * Sets a new template for a column after initialization and renders the grid if not explicitly disabled. This method will replace any existing explicitly set row template and will build one anew from the column ones.
         *
         * @param col     An identifier of the column to set template for (index or key)
         * @param tmpl     The column template to set
         * @param render     Should the grid rerender after template is set
         */
    IgGridComponent.prototype.setColumnTemplate = /**
         * Sets a new template for a column after initialization and renders the grid if not explicitly disabled. This method will replace any existing explicitly set row template and will build one anew from the column ones.
         *
         * @param col     An identifier of the column to set template for (index or key)
         * @param tmpl     The column template to set
         * @param render     Should the grid rerender after template is set
         */
    function (col, tmpl, render) { return; };
    ;
    /**
     * Commits all pending transactions to the client data source. Note that there won't be anything to commit on the UI, since it is updated instantly. In order to rollback the actual UI, a call to dataBind() is required.
     *
     * @param rowId     If specified, will commit only that transaction corresponding to the specified record key.
     */
    /**
         * Commits all pending transactions to the client data source. Note that there won't be anything to commit on the UI, since it is updated instantly. In order to rollback the actual UI, a call to dataBind() is required.
         *
         * @param rowId     If specified, will commit only that transaction corresponding to the specified record key.
         */
    IgGridComponent.prototype.commit = /**
         * Commits all pending transactions to the client data source. Note that there won't be anything to commit on the UI, since it is updated instantly. In order to rollback the actual UI, a call to dataBind() is required.
         *
         * @param rowId     If specified, will commit only that transaction corresponding to the specified record key.
         */
    function (rowId) { return; };
    ;
    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rowId     If specified, will only rollback the transactions with that row id.
     * @param updateUI     Whether to update the UI or not.
     */
    /**
         * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
         *
         * @param rowId     If specified, will only rollback the transactions with that row id.
         * @param updateUI     Whether to update the UI or not.
         */
    IgGridComponent.prototype.rollback = /**
         * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
         *
         * @param rowId     If specified, will only rollback the transactions with that row id.
         * @param updateUI     Whether to update the UI or not.
         */
    function (rowId, updateUI) { return; };
    ;
    /**
     * Returns a record by a specified key (requires that primaryKey is set in the settings).
     * 				That is a wrapper for this.dataSource.findRecordByKey(key).
     *
     * @param key     Primary key of the record
     */
    /**
         * Returns a record by a specified key (requires that primaryKey is set in the settings).
         * 				That is a wrapper for this.dataSource.findRecordByKey(key).
         *
         * @param key     Primary key of the record
         */
    IgGridComponent.prototype.findRecordByKey = /**
         * Returns a record by a specified key (requires that primaryKey is set in the settings).
         * 				That is a wrapper for this.dataSource.findRecordByKey(key).
         *
         * @param key     Primary key of the record
         */
    function (key) { return; };
    ;
    /**
     * Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
     * 				That is a wrapper for this.dataSource.getDetachedRecord(t).
     *
     * @param t     A transaction object.
     */
    /**
         * Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
         * 				That is a wrapper for this.dataSource.getDetachedRecord(t).
         *
         * @param t     A transaction object.
         */
    IgGridComponent.prototype.getDetachedRecord = /**
         * Returns a standalone object (copy) that represents the committed transactions, but detached from the data source.
         * 				That is a wrapper for this.dataSource.getDetachedRecord(t).
         *
         * @param t     A transaction object.
         */
    function (t) { return; };
    ;
    /**
     * Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
     * 				That is a wrapper for this.dataSource.pendingTransactions().
     */
    /**
         * Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
         * 				That is a wrapper for this.dataSource.pendingTransactions().
         */
    IgGridComponent.prototype.pendingTransactions = /**
         * Returns a list of all transaction objects that are pending to be committed or rolled back to the data source.
         * 				That is a wrapper for this.dataSource.pendingTransactions().
         */
    function () { return; };
    ;
    /**
     * Returns a list of all transaction objects that are either pending, or have been committed in the data source.
     * 				That is a wrapper for this.dataSource.allTransactions().
     */
    /**
         * Returns a list of all transaction objects that are either pending, or have been committed in the data source.
         * 				That is a wrapper for this.dataSource.allTransactions().
         */
    IgGridComponent.prototype.allTransactions = /**
         * Returns a list of all transaction objects that are either pending, or have been committed in the data source.
         * 				That is a wrapper for this.dataSource.allTransactions().
         */
    function () { return; };
    ;
    /**
     * Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
     * 				That is a wrapper for this.dataSource.transactionsAsString().
     */
    /**
         * Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
         * 				That is a wrapper for this.dataSource.transactionsAsString().
         */
    IgGridComponent.prototype.transactionsAsString = /**
         * Returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently.
         * 				That is a wrapper for this.dataSource.transactionsAsString().
         */
    function () { return; };
    ;
    /**
     * Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log (a serialized JSON string) as part of the POST request.
     *
     * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
     * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
     */
    /**
         * Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log (a serialized JSON string) as part of the POST request.
         *
         * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
         * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
         */
    IgGridComponent.prototype.saveChanges = /**
         * Invokes an AJAX request to the updateUrl option (if specified) and passes the serialized transaction log (a serialized JSON string) as part of the POST request.
         *
         * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
         * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
         */
    function (success, error) { return; };
    ;
    /**
     * Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
     *
     * @param rec     Identifier/key of row. If missing, then number of rows in grid is used.
     */
    /**
         * Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
         *
         * @param rec     Identifier/key of row. If missing, then number of rows in grid is used.
         */
    IgGridComponent.prototype.renderNewRow = /**
         * Adds a new row (TR) to the grid, by taking a data row object. Assumes the record will have the primary key.
         *
         * @param rec     Identifier/key of row. If missing, then number of rows in grid is used.
         */
    function (rec) { return; };
    ;
    /**
     * If the data source points to a local JSON array of data, and it is necessary to reset it at runtime, it must be done through this API member instead of the options (options.dataSource)
     *
     * @param dataSource     New data source object.
     */
    /**
         * If the data source points to a local JSON array of data, and it is necessary to reset it at runtime, it must be done through this API member instead of the options (options.dataSource)
         *
         * @param dataSource     New data source object.
         */
    IgGridComponent.prototype.dataSourceObject = /**
         * If the data source points to a local JSON array of data, and it is necessary to reset it at runtime, it must be done through this API member instead of the options (options.dataSource)
         *
         * @param dataSource     New data source object.
         */
    function (dataSource) { return; };
    ;
    /**
     * Returns the total number of records in the underlying backend. If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
     * 				In order for this to work, the response JSON/XML must include a property that specifies the total number of records, which name is specified by options.responseTotalRecCountKey.
     * 				This functionality is completely delegated to the data source control.
     */
    /**
         * Returns the total number of records in the underlying backend. If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
         * 				In order for this to work, the response JSON/XML must include a property that specifies the total number of records, which name is specified by options.responseTotalRecCountKey.
         * 				This functionality is completely delegated to the data source control.
         */
    IgGridComponent.prototype.totalRecordsCount = /**
         * Returns the total number of records in the underlying backend. If paging or filtering is enabled, this may differ from the number of records in the client-side data source.
         * 				In order for this to work, the response JSON/XML must include a property that specifies the total number of records, which name is specified by options.responseTotalRecCountKey.
         * 				This functionality is completely delegated to the data source control.
         */
    function () { return; };
    ;
    /**
     * Causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well
     *
     * @param internal
     */
    /**
         * Causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well
         *
         * @param internal
         */
    IgGridComponent.prototype.dataBind = /**
         * Causes the grid to data bind to the data source (local or remote) , and re-render all of the data as well
         *
         * @param internal
         */
    function (internal) { return; };
    ;
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
    IgGridComponent.prototype.moveColumn = /**
         * Moves a visible column at a specified place, in front or behind a target column or at a target index
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column    An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
         * @param target    An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
         * @param after    Specifies whether the column moved should be moved after or before the target column. This parameter is disregarded if there is no target column specified but a target index is used.
         * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
         * @param callback    Specifies a custom function to be called when the column is moved.
         */
    function (column, target, after, inDom, callback) { return; };
    ;
    /**
     * Shows a hidden column. If the column is not hidden the method does nothing.
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column     An identifier for the column. If a number is provided it will be used as a column index. If a string is provided it will be used as a column key.
     * @param callback     Specifies a custom function to be called when the column is shown(optional)
     */
    /**
         * Shows a hidden column. If the column is not hidden the method does nothing.
         * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column     An identifier for the column. If a number is provided it will be used as a column index. If a string is provided it will be used as a column key.
         * @param callback     Specifies a custom function to be called when the column is shown(optional)
         */
    IgGridComponent.prototype.showColumn = /**
         * Shows a hidden column. If the column is not hidden the method does nothing.
         * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column     An identifier for the column. If a number is provided it will be used as a column index. If a string is provided it will be used as a column key.
         * @param callback     Specifies a custom function to be called when the column is shown(optional)
         */
    function (column, callback) { return; };
    ;
    /**
     * Hides a visible column. If the column is hidden the method does nothing.
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column     An identifier for the column. If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
     * @param callback     Specifies a custom function to be called when the column is hidden(optional)
     */
    /**
         * Hides a visible column. If the column is hidden the method does nothing.
         * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column     An identifier for the column. If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
         * @param callback     Specifies a custom function to be called when the column is hidden(optional)
         */
    IgGridComponent.prototype.hideColumn = /**
         * Hides a visible column. If the column is hidden the method does nothing.
         * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column     An identifier for the column. If a number is provided it will be used as a column index else if a string is provided it will be used as a column key.
         * @param callback     Specifies a custom function to be called when the column is hidden(optional)
         */
    function (column, callback) { return; };
    ;
    /**
     * Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
     *
     * @param key     column key
     */
    /**
         * Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
         *
         * @param key     column key
         */
    IgGridComponent.prototype.getUnboundValues = /**
         * Gets unbound values for the specified column key. If key is not specified returns all unboundvalues
         *
         * @param key     column key
         */
    function (key) { return; };
    ;
    /**
     * Sets unbound values for the unbound column with the specified key. If removeOldValues is true then values(if any) for the unbound columns are re-set with the new values
     *
     * @param key     key of the unbound column
     * @param values     array of values to be set on unbound values
     * @param removeOldValues     if true removes current unbound values(if any) for the specified column and apply the new ones specified in parameter values. Otherwise merge current values with the specified in parameter values
     */
    /**
         * Sets unbound values for the unbound column with the specified key. If removeOldValues is true then values(if any) for the unbound columns are re-set with the new values
         *
         * @param key     key of the unbound column
         * @param values     array of values to be set on unbound values
         * @param removeOldValues     if true removes current unbound values(if any) for the specified column and apply the new ones specified in parameter values. Otherwise merge current values with the specified in parameter values
         */
    IgGridComponent.prototype.setUnboundValues = /**
         * Sets unbound values for the unbound column with the specified key. If removeOldValues is true then values(if any) for the unbound columns are re-set with the new values
         *
         * @param key     key of the unbound column
         * @param values     array of values to be set on unbound values
         * @param removeOldValues     if true removes current unbound values(if any) for the specified column and apply the new ones specified in parameter values. Otherwise merge current values with the specified in parameter values
         */
    function (key, values, removeOldValues) { return; };
    ;
    /**
     * Sets unbound value for the unbound cell by the specified column key and row primary key.
     *
     * @param col     key of the unbound column
     * @param rowId     primary key value of the row
     * @param val     value to be set on unbound cell
     * @param notToRender     if false will re-render the row
     */
    /**
         * Sets unbound value for the unbound cell by the specified column key and row primary key.
         *
         * @param col     key of the unbound column
         * @param rowId     primary key value of the row
         * @param val     value to be set on unbound cell
         * @param notToRender     if false will re-render the row
         */
    IgGridComponent.prototype.setUnboundValueByPK = /**
         * Sets unbound value for the unbound cell by the specified column key and row primary key.
         *
         * @param col     key of the unbound column
         * @param rowId     primary key value of the row
         * @param val     value to be set on unbound cell
         * @param notToRender     if false will re-render the row
         */
    function (col, rowId, val, notToRender) { return; };
    ;
    /**
     * Returns an unbound column with the specified key. If not found returns null
     *
     * @param key    a column key
     */
    /**
         * Returns an unbound column with the specified key. If not found returns null
         *
         * @param key    a column key
         */
    IgGridComponent.prototype.getUnboundColumnByKey = /**
         * Returns an unbound column with the specified key. If not found returns null
         *
         * @param key    a column key
         */
    function (key) { return; };
    ;
    /**
     * Returns whether there is vertical scrollbar. Because of perfrormance issues in older Internet Explorer especially 8,9 - there is no need to check if height is not set - there is no scrollbar OR if row virtualization is enabled - it is supposed there is vertical scrollbar
     */
    /**
         * Returns whether there is vertical scrollbar. Because of perfrormance issues in older Internet Explorer especially 8,9 - there is no need to check if height is not set - there is no scrollbar OR if row virtualization is enabled - it is supposed there is vertical scrollbar
         */
    IgGridComponent.prototype.hasVerticalScrollbar = /**
         * Returns whether there is vertical scrollbar. Because of perfrormance issues in older Internet Explorer especially 8,9 - there is no need to check if height is not set - there is no scrollbar OR if row virtualization is enabled - it is supposed there is vertical scrollbar
         */
    function () { return; };
    ;
    /**
     * Auto resize columns that have property width set to "*" so content to be auto-fitted(not shrinked/cutted). Auto-resizing is applied ONLY for visible columns
     */
    /**
         * Auto resize columns that have property width set to "*" so content to be auto-fitted(not shrinked/cutted). Auto-resizing is applied ONLY for visible columns
         */
    IgGridComponent.prototype.autoSizeColumns = /**
         * Auto resize columns that have property width set to "*" so content to be auto-fitted(not shrinked/cutted). Auto-resizing is applied ONLY for visible columns
         */
    function () { return; };
    ;
    /**
     * Calculates the width of the column so its content to be auto-fitted to the width of the data in it(the content should NOT be shrinked/cutted)
     *
     * @param columnIndex    Visible column index
     */
    /**
         * Calculates the width of the column so its content to be auto-fitted to the width of the data in it(the content should NOT be shrinked/cutted)
         *
         * @param columnIndex    Visible column index
         */
    IgGridComponent.prototype.calculateAutoFitColumnWidth = /**
         * Calculates the width of the column so its content to be auto-fitted to the width of the data in it(the content should NOT be shrinked/cutted)
         *
         * @param columnIndex    Visible column index
         */
    function (columnIndex) { return; };
    ;
    /**
     * Get visible index by specified column key. If column is not found or is hidden then returns -1.
     * 				Note: Method does not count column groups (Multi-Column Headers).
     *
     * @param columnKey     columnKey
     * @param includeDataSkip     Optional parameter - if set to true include non data columns(like expander column, row selectors column, etc.) in calculations
     */
    /**
         * Get visible index by specified column key. If column is not found or is hidden then returns -1.
         * 				Note: Method does not count column groups (Multi-Column Headers).
         *
         * @param columnKey     columnKey
         * @param includeDataSkip     Optional parameter - if set to true include non data columns(like expander column, row selectors column, etc.) in calculations
         */
    IgGridComponent.prototype.getVisibleIndexByKey = /**
         * Get visible index by specified column key. If column is not found or is hidden then returns -1.
         * 				Note: Method does not count column groups (Multi-Column Headers).
         *
         * @param columnKey     columnKey
         * @param includeDataSkip     Optional parameter - if set to true include non data columns(like expander column, row selectors column, etc.) in calculations
         */
    function (columnKey, includeDataSkip) { return; };
    ;
    /**
     * When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
     *
     * @param cols an array of column objects
     */
    /**
         * When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
         *
         * @param cols an array of column objects
         */
    IgGridComponent.prototype.renderMultiColumnHeader = /**
         * When called the method re-renders the whole grid(also rebinds to the data source) and renders the cols object
         *
         * @param cols an array of column objects
         */
    function (cols) { return; };
    ;
    /**
     * Scroll to the specified row or specified position(in pixels)
     *
     * @param scrollerPosition     An identifier of the vertical scroll position. When it is string then it is interpreted as pixels otherwise it is the row number
     */
    /**
         * Scroll to the specified row or specified position(in pixels)
         *
         * @param scrollerPosition     An identifier of the vertical scroll position. When it is string then it is interpreted as pixels otherwise it is the row number
         */
    IgGridComponent.prototype.virtualScrollTo = /**
         * Scroll to the specified row or specified position(in pixels)
         *
         * @param scrollerPosition     An identifier of the vertical scroll position. When it is string then it is interpreted as pixels otherwise it is the row number
         */
    function (scrollerPosition) { return; };
    ;
    /**
     * Returns column object and visible index for the table cell(TD) which is passed as argument
     *
     * @param $td     cell(TD) - either DOM TD element or jQuery object
     */
    /**
         * Returns column object and visible index for the table cell(TD) which is passed as argument
         *
         * @param $td     cell(TD) - either DOM TD element or jQuery object
         */
    IgGridComponent.prototype.getColumnByTD = /**
         * Returns column object and visible index for the table cell(TD) which is passed as argument
         *
         * @param $td     cell(TD) - either DOM TD element or jQuery object
         */
    function ($td) { return; };
    ;
    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     * 				1. Remove custom CSS classes that were added.
     * 				2. Unwrap any wrapping elements such as scrolling divs and other containers.
     * 				3. Unbind all events that were bound.
     *
     * @param notToCallDestroy
     */
    /**
         * Destroy is part of the jQuery UI widget API and does the following:
         * 				1. Remove custom CSS classes that were added.
         * 				2. Unwrap any wrapping elements such as scrolling divs and other containers.
         * 				3. Unbind all events that were bound.
         *
         * @param notToCallDestroy
         */
    IgGridComponent.prototype.destroy = /**
         * Destroy is part of the jQuery UI widget API and does the following:
         * 				1. Remove custom CSS classes that were added.
         * 				2. Unwrap any wrapping elements such as scrolling divs and other containers.
         * 				3. Unbind all events that were bound.
         *
         * @param notToCallDestroy
         */
    function (notToCallDestroy) { return; };
    ;
    IgGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    "selector": "ig-grid",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "autoAdjustHeight", "avgRowHeight", "avgColumnWidth", "defaultColumnWidth", "autoGenerateColumns", "virtualization", "virtualizationMode", "requiresDataBinding", "rowVirtualization", "columnVirtualization", "virtualizationMouseWheelStep", "adjustVirtualHeights", "templatingEngine", "columns", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "responseTotalRecCountKey", "requestType", "responseContentType", "showHeader", "showFooter", "fixedHeaders", "fixedFooters", "caption", "features", "tabIndex", "localSchemaTransform", "primaryKey", "serializeTransactionLog", "autoCommit", "aggregateTransactions", "autoFormat", "renderCheckboxes", "updateUrl", "restSettings", "alternateRowStyles", "autofitLastColumn", "enableHoverStyles", "enableUTCDates", "mergeUnboundColumns", "jsonpRequest", "enableResizeContainerCheck", "featureChooserIconDisplay", "scrollSettings"],
                    outputs: ["cellClick", "cellRightClick", "dataBinding", "dataBound", "rendering", "rendered", "dataRendering", "dataRendered", "headerRendering", "headerRendered", "footerRendering", "footerRendered", "headerCellRendered", "rowsRendering", "rowsRendered", "schemaGenerated", "columnsCollectionModified", "requestError", "created", "destroyed"]
                },] },
    ];
    /** @nocollapse */
    IgGridComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgGridComponent;
}(iggridbase_1.IgGridBase));
exports.IgGridComponent = IgGridComponent;
//# sourceMappingURL=iggrid.component.js.map