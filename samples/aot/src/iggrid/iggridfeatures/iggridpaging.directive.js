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
var feature_1 = require("../feature");
var IgGridPagingFeature = /** @class */ (function (_super) {
    __extends(IgGridPagingFeature, _super);
    function IgGridPagingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Gets/Sets the current page index, delegates data binding and paging to [$.ig.DataSource](ig.datasource).
     *
     * @param index     The page index to go to.
     */
    /**
         * Gets/Sets the current page index, delegates data binding and paging to [$.ig.DataSource](ig.datasource).
         *
         * @param index     The page index to go to.
         */
    IgGridPagingFeature.prototype.pageIndex = /**
         * Gets/Sets the current page index, delegates data binding and paging to [$.ig.DataSource](ig.datasource).
         *
         * @param index     The page index to go to.
         */
    function (index) { return; };
    ;
    /**
     * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
     *
     * @param size     The new page size.
     */
    /**
         * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
         *
         * @param size     The new page size.
         */
    IgGridPagingFeature.prototype.pageSize = /**
         * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
         *
         * @param size     The new page size.
         */
    function (size) { return; };
    ;
    /**
     * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
     */
    /**
         * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
         */
    IgGridPagingFeature.prototype.destroy = /**
         * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
         */
    function () { return; };
    ;
    IgGridPagingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'paging',
                    inputs: ["disabled", "create", "pageSize", "recordCountKey", "pageSizeUrlKey", "pageIndexUrlKey", "currentPageIndex", "type", "showPageSizeDropDown", "pageSizeDropDownLabel", "pageSizeDropDownTrailingLabel", "pageSizeDropDownLocation", "showPagerRecordsLabel", "pagerRecordsLabelTemplate", "nextPageLabelText", "prevPageLabelText", "firstPageLabelText", "lastPageLabelText", "showFirstLastPages", "showPrevNextPages", "currentPageDropDownLeadingLabel", "currentPageDropDownTrailingLabel", "currentPageDropDownTooltip", "pageSizeDropDownTooltip", "pagerRecordsLabelTooltip", "prevPageTooltip", "nextPageTooltip", "firstPageTooltip", "lastPageTooltip", "pageTooltipFormat", "pageSizeList", "pageCountLimit", "visiblePageCount", "defaultDropDownWidth", "delayOnPageChanged", "persist", "inherit"],
                    outputs: ["pageIndexChanging", "pageIndexChanged", "pageSizeChanging", "pageSizeChanged", "pagerRendering", "pagerRendered"]
                },] },
    ];
    /** @nocollapse */
    IgGridPagingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridPagingFeature;
}(feature_1.Feature));
exports.IgGridPagingFeature = IgGridPagingFeature;
//# sourceMappingURL=iggridpaging.directive.js.map