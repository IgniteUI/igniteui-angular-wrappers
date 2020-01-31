import { Component, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, Renderer2 } from "@angular/core";
import { IgGridBase } from "../iggrid/iggridbase";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "ig-hierarchical-grid",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "initialDataBindDepth", "initialExpandDepth", "odata", "rest", "maxDataBindDepth", "defaultChildrenDataProperty", "autoGenerateLayouts", "expandCollapseAnimations", "expandColWidth", "pathSeparator", "animationDuration", "expandTooltip", "collapseTooltip", "columnLayouts", "width", "height", "autoAdjustHeight", "avgRowHeight", "avgColumnWidth", "defaultColumnWidth", "autoGenerateColumns", "virtualization", "virtualizationMode", "requiresDataBinding", "rowVirtualization", "columnVirtualization", "virtualizationMouseWheelStep", "adjustVirtualHeights", "templatingEngine", "columns", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "responseTotalRecCountKey", "requestType", "responseContentType", "showHeader", "showFooter", "fixedHeaders", "fixedFooters", "caption", "features", "tabIndex", "localSchemaTransform", "primaryKey", "serializeTransactionLog", "autoCommit", "aggregateTransactions", "autoFormat", "renderCheckboxes", "updateUrl", "restSettings", "alternateRowStyles", "autofitLastColumn", "enableHoverStyles", "enableUTCDates", "mergeUnboundColumns", "jsonpRequest", "enableResizeContainerCheck", "featureChooserIconDisplay", "scrollSettings"],
    outputs: ["rowExpanding", "rowExpanded", "rowCollapsing", "rowCollapsed", "childrenPopulating", "childrenPopulated", "childGridRendered", "childGridCreating", "childGridCreated", "cellClick", "cellRightClick", "dataBinding", "dataBound", "rendering", "rendered", "dataRendering", "dataRendered", "headerRendering", "headerRendered", "footerRendering", "footerRendered", "headerCellRendered", "rowsRendering", "rowsRendered", "schemaGenerated", "columnsCollectionModified", "requestError", "created", "destroyed"]
})
export class IgHierarchicalGridComponent extends IgGridBase<IgHierarchicalGrid> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }

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
    updateRow(rec, currValue, key) {
        const element = jQuery(this._el);
        const childrenDataProperty = this["childrenDataProperty"] || this.options.childrenDataProperty;

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
        } else {
            super.updateRow(rec, currValue, key);
        }
    }
    public markForCheck() {
        super.markForCheck();
        const element = jQuery(this._el);
        const childrenDataProperty = this["childrenDataProperty"] || this.options.childrenDataProperty;
        var childGrids = element.data(this._widgetName).allChildrenWidgets();
        for (var i = 0; i < childGrids.length; i++) {
            childGrids[i].dataBind();
        }
    }
    /**
     * Data binds the hierarchical grid. No child grids will be created or rendered by default, unless there is initialExpandDepth >= 0 set.
     */
    /* istanbul ignore next */
    public dataBind(): void { return; };

    /**
     * Returns the element of the root grid (igGrid)
     */
    /* istanbul ignore next */
    public root(): Object { return; };

    /**
     * Returns the widget object of the root grid (igGrid)
     */
    /* istanbul ignore next */
    public rootWidget(): Object { return; };

    /**
     * Returns a flat list of all child grid elements (recursive)
     */
    /* istanbul ignore next */
    public allChildren(): Object { return; };

    /**
     * Expands or collapses (toggles) a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is toggled(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was toggled
     */
    /* istanbul ignore next */
    public toggle(element: Element, callback?: Function): void { return; };

    /**
     * Expands (toggles) a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments first is hierarchical grid object, second is the row element that was expanded
     */
    /* istanbul ignore next */
    public expand(id: Element, callback?: Function): void { return; };

    /**
     * Collapses a parent row
     * 				Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param id     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     * @param callback     Specifies a custom function to be called when parent row is expanded(optional). Takes 2 arguments - first is hierarchical grid object, second is the row element that was collapsed
     */
    /* istanbul ignore next */
    public collapse(id: Element, callback?: Function): void { return; };

    /**
     * Checks if a parent row is currently collapsed
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     */
    /* istanbul ignore next */
    public collapsed(element: Element): boolean { return; };

    /**
     * Checks if a parent row is populated with data
     *
     * @param element     accepts a dom element, or a jquery wrapped dom element that should be a TR and should specify a parent row
     */
    /* istanbul ignore next */
    public populated(element: Element): boolean { return; };

    /**
     * Commits pending transactions to the client data source for main and all child grids.
     */
    /* istanbul ignore next */
    public commit(): void { return; };

    /**
     * Clears the transaction log (delegates to igDataSource). Note that this does not update the UI. In case the UI must be updated, set the second parameter "updateUI" to true, which will trigger a call to dataBind() to re-render the contents.
     *
     * @param rebind     Whether to perform a rebind.
     */
    /* istanbul ignore next */
    public rollback(rebind?: boolean): void { return; };

    /**
     * Posts to the settings.updateUrl using $.ajax, by serializing the changes as url params
     *
     * @param success    Specifies a custom function to be called when AJAX request to the updateUrl option succeeds(optional)
     * @param error    Specifies a custom function to be called when AJAX request to the updateUrl option fails(optional)
     */
    /* istanbul ignore next */
    public saveChanges(success: Function, error: Function): void { return; };

    /**
     * Destroys the hierarchical grid by recursively destroying all child grids
     */
    /* istanbul ignore next */
    public destroy(): void { return; };
}