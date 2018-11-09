"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var iggridbase_1 = require("../iggrid/iggridbase");
var IgTreeGridComponent = /** @class */ (function (_super) {
    __extends(IgTreeGridComponent, _super);
    function IgTreeGridComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgTreeGridComponent.prototype.deleteRow = function (id) {
        var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']"), dataLevel = tr.attr("aria-level");
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
    };
    IgTreeGridComponent.prototype.updateRow = function (rec, currValue, key) {
        var element = jQuery(this._el);
        var grid = element.data(this._widgetName);
        var childDataKey = this["childDataKey"] || this.options.childDataKey;
        var column = element.data(this._widgetName).columnByKey(key);
        if (!column && key === childDataKey) {
            //we have an hierarchical data source and one of the nested collections has changed.
            grid.dataBind();
        }
        else {
            _super.prototype.updateRow.call(this, rec, currValue, key);
        }
    };
    IgTreeGridComponent.prototype.markForCheck = function () {
        _super.prototype.markForCheck.call(this);
        var childDataKey = this["childDataKey"] || this.options.childDataKey;
        if (childDataKey) {
            this.dataBind();
        }
    };
    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rowId     If specified, will only rollback the transactions with that row id.
     * @param updateUI     Whether to update the UI or not.
     */
    IgTreeGridComponent.prototype.rollback = function (rowId, updateUI) { return; };
    ;
    /**
     * Causes the treegrid to data bind to the data source (local or remote) , and re-render all of the data
     */
    IgTreeGridComponent.prototype.dataBind = function () { return; };
    ;
    /**
     * Toggle row by specified row or row identifier
     *
     * @param row     jQuery table row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    IgTreeGridComponent.prototype.toggleRow = function (row, callback) { return; };
    ;
    /**
     * Expands a parent row by specified row or row identifier
     *
     * @param row     jQuery table row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    IgTreeGridComponent.prototype.expandRow = function (row, callback) { return; };
    ;
    /**
     * Collapses a parent row by specified row or row identifier
     *
     * @param row     jQuery table row object, raw DOM row object or a row id.
     * @param callback     Specifies a custom function to be called when row is expanded/collapsed. The callback has 4 arguments- a reference to the current context(this), object that holds 2 properties(unfixedRow - DOM representation of the unfixed row, fixedRow - DOM representation of the fixed row, if there is no fixed columns it is undefined), reference to the dataRecord, expand - specifies whether row is expanded
     */
    IgTreeGridComponent.prototype.collapseRow = function (row, callback) { return; };
    ;
    /**
     * Adds a new row (TR) to the grid as a child of a specific row, by taking a data row object. Assumes the record will have the primary key.
     *
     * @param rec     The data row JavaScript object.
     * @param parentId     Identifier/key of the targeted parent row. If missing, then the new row is rendered to the bottom of the grid.
     */
    IgTreeGridComponent.prototype.renderNewChild = function (rec, parentId) { return; };
    ;
    /**
     * Destroys igTreeGrid
     */
    IgTreeGridComponent.prototype.destroy = function () { return; };
    ;
    IgTreeGridComponent = __decorate([
        core_1.Component({
            selector: "ig-tree-grid",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "autoAdjustHeight", "avgRowHeight", "avgColumnWidth", "defaultColumnWidth", "autoGenerateColumns", "virtualization", "virtualizationMode", "requiresDataBinding", "rowVirtualization", "columnVirtualization", "virtualizationMouseWheelStep", "adjustVirtualHeights", "templatingEngine", "columns", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "responseTotalRecCountKey", "requestType", "responseContentType", "showHeader", "showFooter", "fixedHeaders", "fixedFooters", "caption", "features", "tabIndex", "localSchemaTransform", "primaryKey", "serializeTransactionLog", "autoCommit", "aggregateTransactions", "autoFormat", "renderCheckboxes", "updateUrl", "restSettings", "alternateRowStyles", "autofitLastColumn", "enableHoverStyles", "enableUTCDates", "mergeUnboundColumns", "jsonpRequest", "enableResizeContainerCheck", "featureChooserIconDisplay", "scrollSettings", "indentation", "initialIndentationLevel", "showExpansionIndicator", "expandTooltipText", "collapseTooltipText", "foreignKey", "initialExpandDepth", "foreignKeyRootValue", "renderExpansionIndicatorColumn", "renderFirstDataCellFunction", "childDataKey", "renderExpansionCellFunction", "enableRemoteLoadOnDemand", "dataSourceSettings"],
            outputs: ["cellClick", "cellRightClick", "dataBinding", "dataBound", "rendering", "rendered", "dataRendering", "dataRendered", "headerRendering", "headerRendered", "footerRendering", "footerRendered", "headerCellRendered", "rowsRendering", "rowsRendered", "schemaGenerated", "columnsCollectionModified", "requestError", "created", "destroyed", "rowExpanding", "rowExpanded", "rowCollapsing", "rowCollapsed"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgTreeGridComponent);
    return IgTreeGridComponent;
}(iggridbase_1.IgGridBase));
exports.IgTreeGridComponent = IgTreeGridComponent;
//# sourceMappingURL=igtreegrid.component.js.map