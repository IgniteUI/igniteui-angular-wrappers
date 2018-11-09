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
var IgHierarchicalGridComponent = /** @class */ (function (_super) {
    __extends(IgHierarchicalGridComponent, _super);
    function IgHierarchicalGridComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgHierarchicalGridComponent.prototype.deleteRow = function (id) {
        var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']"), childContainer = tr.next("tr[data-container]");
        if (tr.length > 0) {
            tr.remove();
            childContainer.remove();
            element.data("igGrid").dataSource.deleteRow(id, true);
            element.data("igGrid").dataSource._removeTransactionsByRecordId(id);
        }
    };
    IgHierarchicalGridComponent.prototype.updateRow = function (rec, currValue, key) {
        var element = jQuery(this._el);
        var childrenDataProperty = this["childrenDataProperty"] || this.options.childrenDataProperty;
        var childGrid = element.data(this._widgetName).allChildrenWidgets().filter(function (indx) {
            var parentRow = jQuery(this.element).closest('tr[data-container]').prev();
            var parentGridPK = parentRow.closest(".ui-iggrid-table").data("igGrid").options.primaryKey;
            return (childrenDataProperty === key ||
                parentRow.next("[data-container]").find("table[role='grid']").attr("id").contains("_" + key + "_"))
                && parentRow.attr("data-id") == rec[parentGridPK];
        });
        if (childGrid.length > 0) {
            jQuery(childGrid).each(function () {
                this.dataBind();
            });
        }
        else {
            _super.prototype.updateRow.call(this, rec, currValue, key);
        }
    };
    IgHierarchicalGridComponent.prototype.markForCheck = function () {
        _super.prototype.markForCheck.call(this);
        var element = jQuery(this._el);
        var childrenDataProperty = this["childrenDataProperty"] || this.options.childrenDataProperty;
        var childGrids = element.data(this._widgetName).allChildrenWidgets();
        for (var i = 0; i < childGrids.length; i++) {
            childGrids[i].dataBind();
        }
    };
    /**
     * Data binds the hierarchical grid. No child grids will be created or rendered by default, unless there is initialExpandDepth >= 0 set.
     */
    IgHierarchicalGridComponent.prototype.dataBind = function () { return; };
    ;
    /**
     * Returns the element of the root grid (igGrid)
     */
    IgHierarchicalGridComponent.prototype.root = function () { return; };
    ;
    /**
     * Returns the widget object of the root grid (igGrid)
     */
    IgHierarchicalGridComponent.prototype.rootWidget = function () { return; };
    ;
    /**
     * Returns a flat list of all child grid elements (recursive)
     */
    IgHierarchicalGridComponent.prototype.allChildren = function () { return; };
    ;
    /**
     * Expands or collapses (toggles) a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is toggled(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was toggled
     */
    IgHierarchicalGridComponent.prototype.toggle = function (element, callback) { return; };
    ;
    /**
     * Expands (toggles) a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments first is hierarchical grid object, second is the row element that was expanded
     */
    IgHierarchicalGridComponent.prototype.expand = function (id, callback) { return; };
    ;
    /**
     * Collapses a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was collapsed
     */
    IgHierarchicalGridComponent.prototype.collapse = function (id, callback) { return; };
    ;
    /**
     * Checks if a parent row is currently collapsed
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     */
    IgHierarchicalGridComponent.prototype.collapsed = function (element) { return; };
    ;
    /**
     * Checks if a parent row is populated with data
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     */
    IgHierarchicalGridComponent.prototype.populated = function (element) { return; };
    ;
    /**
     * Commits pending transactions to the client data source for main and all child grids.
     */
    IgHierarchicalGridComponent.prototype.commit = function () { return; };
    ;
    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rebind     Whether to perform a rebind.
     */
    IgHierarchicalGridComponent.prototype.rollback = function (rebind) { return; };
    ;
    /**
     * Posts to the settings.updateUrl using $.ajax, by serializing the changes as url params
     *
     * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
     * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
     */
    IgHierarchicalGridComponent.prototype.saveChanges = function (success, error) { return; };
    ;
    /**
     * Destroys the hierarchical grid by recursively destroying all child grids
     */
    IgHierarchicalGridComponent.prototype.destroy = function () { return; };
    ;
    IgHierarchicalGridComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "ig-hierarchical-grid",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "initialDataBindDepth", "initialExpandDepth", "odata", "rest", "maxDataBindDepth", "defaultChildrenDataProperty", "autoGenerateLayouts", "expandCollapseAnimations", "expandColWidth", "pathSeparator", "animationDuration", "expandTooltip", "collapseTooltip", "columnLayouts", "width", "height", "autoAdjustHeight", "avgRowHeight", "avgColumnWidth", "defaultColumnWidth", "autoGenerateColumns", "virtualization", "virtualizationMode", "requiresDataBinding", "rowVirtualization", "columnVirtualization", "virtualizationMouseWheelStep", "adjustVirtualHeights", "templatingEngine", "columns", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "responseTotalRecCountKey", "requestType", "responseContentType", "showHeader", "showFooter", "fixedHeaders", "fixedFooters", "caption", "features", "tabIndex", "localSchemaTransform", "primaryKey", "serializeTransactionLog", "autoCommit", "aggregateTransactions", "autoFormat", "renderCheckboxes", "updateUrl", "restSettings", "alternateRowStyles", "autofitLastColumn", "enableHoverStyles", "enableUTCDates", "mergeUnboundColumns", "jsonpRequest", "enableResizeContainerCheck", "featureChooserIconDisplay", "scrollSettings"],
            outputs: ["rowExpanding", "rowExpanded", "rowCollapsing", "rowCollapsed", "childrenPopulating", "childrenPopulated", "childGridRendered", "childGridCreating", "childGridCreated", "cellClick", "cellRightClick", "dataBinding", "dataBound", "rendering", "rendered", "dataRendering", "dataRendered", "headerRendering", "headerRendered", "footerRendering", "footerRendered", "headerCellRendered", "rowsRendering", "rowsRendered", "schemaGenerated", "columnsCollectionModified", "requestError", "created", "destroyed"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgHierarchicalGridComponent);
    return IgHierarchicalGridComponent;
}(iggridbase_1.IgGridBase));
exports.IgHierarchicalGridComponent = IgHierarchicalGridComponent;
//# sourceMappingURL=ighierarchicalgrid.component.js.map