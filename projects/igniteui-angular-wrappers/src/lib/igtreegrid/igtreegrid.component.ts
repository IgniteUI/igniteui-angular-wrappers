import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2, Input } from '@angular/core';
import { IgGridBase } from '../iggrid/iggridbase';

@Component({
    selector: 'ig-tree-grid',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'autoAdjustHeight', 'avgRowHeight', 'avgColumnWidth', 'defaultColumnWidth', 'autoGenerateColumns', 'virtualization', 'virtualizationMode', 'requiresDataBinding', 'rowVirtualization', 'columnVirtualization', 'virtualizationMouseWheelStep', 'adjustVirtualHeights', 'templatingEngine', 'columns', 'dataSource', 'dataSourceUrl', 'dataSourceType', 'responseDataKey', 'responseTotalRecCountKey', 'requestType', 'responseContentType', 'showHeader', 'showFooter', 'fixedHeaders', 'fixedFooters', 'caption', 'features', 'tabIndex', 'localSchemaTransform', 'primaryKey', 'serializeTransactionLog', 'autoCommit', 'aggregateTransactions', 'autoFormat', 'renderCheckboxes', 'updateUrl', 'restSettings', 'alternateRowStyles', 'autofitLastColumn', 'enableHoverStyles', 'enableUTCDates', 'mergeUnboundColumns', 'jsonpRequest', 'enableResizeContainerCheck', 'featureChooserIconDisplay', 'scrollSettings', 'indentation', 'initialIndentationLevel', 'showExpansionIndicator', 'expandTooltipText', 'collapseTooltipText', 'foreignKey', 'initialExpandDepth', 'foreignKeyRootValue', 'renderExpansionIndicatorColumn', 'renderFirstDataCellFunction', 'childDataKey', 'renderExpansionCellFunction', 'enableRemoteLoadOnDemand', 'dataSourceSettings'],
    outputs: ['cellClick', 'cellRightClick', 'dataBinding', 'dataBound', 'rendering', 'rendered', 'dataRendering', 'dataRendered', 'headerRendering', 'headerRendered', 'footerRendering', 'footerRendered', 'headerCellRendered', 'rowsRendering', 'rowsRendered', 'schemaGenerated', 'columnsCollectionModified', 'requestError', 'created', 'destroyed', 'rowExpanding', 'rowExpanded', 'rowCollapsing', 'rowCollapsed']
})
export class IgTreeGridComponent extends IgGridBase<IgTreeGrid> {
    @Input()
    public childDataKey: string;

    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }

    deleteRow(id) {
        const element = jQuery(this._el),
            tr = element.find('tr[data-id=\'' + id + '\']'),
            dataLevel = tr.attr('aria-level');
        if (tr.length > 0) {

            element.data(this._widgetName).dataSource.deleteRow(id, true);
            element.data(this._widgetName).dataSource._removeTransactionsByRecordId(id);

            let trs = tr.nextUntil('tr[data-level=' + dataLevel + ']');
            if (trs.length === 0) {
                trs = tr.nextAll('tr[data-level]');
            }

            tr.remove();
            trs.remove();
        }
    }

    updateRow(rec, currValue, key) {
        const element = jQuery(this._el);
        const grid = element.data(this._widgetName);
        const childDataKey = this.childDataKey || this.options.childDataKey;
        const column = element.data(this._widgetName).columnByKey(key);
        if (!column && key === childDataKey) {
            // we have an hierarchical data source and one of the nested collections has changed.
            grid.dataBind();
        } else {
            super.updateRow(rec, currValue, key);
        }
    }

    public markForCheck() {
        super.markForCheck();
        const childDataKey = this.childDataKey || this.options.childDataKey;
        if (childDataKey) {
            this.dataBind();
        }
    }

    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rowId     If specified, will only rollback the transactions with that row id.
     * @param updateUI     Whether to update the UI or not.
     */
    /* istanbul ignore next */
    public rollback(rowId?: Object, updateUI?: boolean): any[] { return; }

    /**
     * Causes the treegrid to data bind to the data source (local or remote) , and re-render all of the data
     */
    /* istanbul ignore next */
    public dataBind(): void { return; }

    /**
     * Toggle row by specified row or row identifier
     *
     * @param row     jQuery table row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    /* istanbul ignore next */
    public toggleRow(row: Object, callback?: Function): void { return; }

    /**
     * Expands a parent row by specified row or row identifier
     *
     * @param row     jQuery table row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    /* istanbul ignore next */
    public expandRow(row: Object, callback?: Function): void { return; }

    /**
     * Collapses a parent row by specified row or row identifier
     *
     * @param row     jQuery table row object, raw DOM row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    /* istanbul ignore next */
    public collapseRow(row: Object, callback?: Function): void { return; }

    /**
     * Adds a new row (TR) to the grid as a child of a specific row, by taking a data row object. Assumes the record will have the primary key.
     *
     * @param rec     The data row JavaScript object.
     * @param parentId     Identifier/key of the targeted parent row. If missing, then the new row is rendered to the bottom of the grid.
     */
    /* istanbul ignore next */
    public renderNewChild(rec: Object, parentId?: string): void { return; }

    /**
     * Destroys igTreeGrid
     */
    /* istanbul ignore next */
    public destroy(): Object { return; }
}
