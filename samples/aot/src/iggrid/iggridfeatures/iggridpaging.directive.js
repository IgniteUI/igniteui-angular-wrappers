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
    IgGridPagingFeature.prototype.pageIndex = function (index) { return; };
    ;
    /**
     * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
     *
     * @param size     The new page size.
     */
    IgGridPagingFeature.prototype.pageSize = function (size) { return; };
    ;
    /**
     * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
     */
    IgGridPagingFeature.prototype.destroy = function () { return; };
    ;
    IgGridPagingFeature = __decorate([
        core_1.Directive({
            selector: 'paging',
            inputs: ["disabled", "create", "pageSize", "recordCountKey", "pageSizeUrlKey", "pageIndexUrlKey", "currentPageIndex", "type", "showPageSizeDropDown", "pageSizeDropDownLabel", "pageSizeDropDownTrailingLabel", "pageSizeDropDownLocation", "showPagerRecordsLabel", "pagerRecordsLabelTemplate", "nextPageLabelText", "prevPageLabelText", "firstPageLabelText", "lastPageLabelText", "showFirstLastPages", "showPrevNextPages", "currentPageDropDownLeadingLabel", "currentPageDropDownTrailingLabel", "currentPageDropDownTooltip", "pageSizeDropDownTooltip", "pagerRecordsLabelTooltip", "prevPageTooltip", "nextPageTooltip", "firstPageTooltip", "lastPageTooltip", "pageTooltipFormat", "pageSizeList", "pageCountLimit", "visiblePageCount", "defaultDropDownWidth", "delayOnPageChanged", "persist", "inherit"],
            outputs: ["pageIndexChanging", "pageIndexChanged", "pageSizeChanging", "pageSizeChanged", "pagerRendering", "pagerRendered"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridPagingFeature);
    return IgGridPagingFeature;
}(feature_1.Feature));
exports.IgGridPagingFeature = IgGridPagingFeature;
//# sourceMappingURL=iggridpaging.directive.js.map