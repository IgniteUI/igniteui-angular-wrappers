"use strict";
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
var iggridsorting_directive_1 = require("./iggridfeatures/iggridsorting.directive");
var iggridfiltering_directive_1 = require("./iggridfeatures/iggridfiltering.directive");
var iggridpaging_directive_1 = require("./iggridfeatures/iggridpaging.directive");
var iggridupdating_directive_1 = require("./iggridfeatures/iggridupdating.directive");
var iggridgroupby_directive_1 = require("./iggridfeatures/iggridgroupby.directive");
var iggridcolumnmoving_1 = require("./iggridfeatures/iggridcolumnmoving");
var iggridhiding_directive_1 = require("./iggridfeatures/iggridhiding.directive");
var iggridcellmerging_directive_1 = require("./iggridfeatures/iggridcellmerging.directive");
var iggridresponsive_directive_1 = require("./iggridfeatures/iggridresponsive.directive");
var iggridresizing_directive_1 = require("./iggridfeatures/iggridresizing.directive");
var iggridselection_directive_1 = require("./iggridfeatures/iggridselection.directive");
var iggridrowselectors_directive_1 = require("./iggridfeatures/iggridrowselectors.directive");
var iggridsummaries_directive_1 = require("./iggridfeatures/iggridsummaries.directive");
var iggridcolumnfixing_directive_1 = require("./iggridfeatures/iggridcolumnfixing.directive");
var iggridtooltips_directive_1 = require("./iggridfeatures/iggridtooltips.directive");
var iggridappendrowsondemand_directive_1 = require("./iggridfeatures/iggridappendrowsondemand.directive");
var iggridmulticolumnheaders_directive_1 = require("./iggridfeatures/iggridmulticolumnheaders.directive");
var Features = /** @class */ (function () {
    function Features() {
        this.allFeatures = new Array();
    }
    Features.prototype.addFeature = function (name, parent) {
        var nodeName = name.replace(/([A-Z])/g, function (g) { return '-' + g[0].toLowerCase(); });
        var el = document.createElement(nodeName);
        el = parent.appendChild(el);
        var child = new core_1.ElementRef(el);
        switch (nodeName) {
            case "filtering":
                this.filtering = new iggridfiltering_directive_1.IgGridFilteringFeature(child);
                break;
            case "sorting":
                this.sorting = new iggridsorting_directive_1.IgGridSortingFeature(child);
                break;
            case "paging":
                this.paging = new iggridpaging_directive_1.IgGridPagingFeature(child);
                break;
            case "updating":
                this.updating = new iggridupdating_directive_1.IgGridUpdatingFeature(child);
                break;
            case "group-by":
                this.groupBy = new iggridgroupby_directive_1.IgGridGroupByFeature(child);
                break;
            case "column-moving":
                this.columnMoving = new iggridcolumnmoving_1.IgGridColumnMovingFeature(child);
                break;
            case "hiding":
                this.hiding = new iggridhiding_directive_1.IgGridHidingFeature(child);
                break;
            case "responsive":
                this.responsive = new iggridresponsive_directive_1.IgGridResponsiveFeature(child);
                break;
            case "cell-merging":
                this.cellMerging = new iggridcellmerging_directive_1.IgGridCellMergingFeature(child);
                break;
            case "resizing":
                this.resizing = new iggridresizing_directive_1.IgGridResizingFeature(child);
                break;
            case "selection":
                this.selection = new iggridselection_directive_1.IgGridSelectionFeature(child);
                break;
            case "row-selectors":
                this.rowSelectors = new iggridrowselectors_directive_1.IgGridRowSelectorsFeature(child);
                break;
            case "summaries":
                this.summaries = new iggridsummaries_directive_1.IgGridSummariesFeature(child);
                break;
            case "column-fixing":
                this.columnFixing = new iggridcolumnfixing_directive_1.IgGridColumnFixingFeature(child);
                break;
            case "tooltips":
                this.tooltips = new iggridtooltips_directive_1.IgGridTooltipsFeature(child);
                break;
            case "append-rows-on-demand":
                this.appendRowsOnDemand = new iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature(child);
                break;
            case "multi-column-headers":
                this.multiColumnHeaders = new iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature(child);
                break;
        }
        this[name].ngOnInit();
        this.allFeatures.push(this[name]);
    };
    Features.prototype.ngAfterContentInit = function () {
        this.filtering ? this.allFeatures.push(this.filtering) : null;
        this.sorting ? this.allFeatures.push(this.sorting) : null;
        this.paging ? this.allFeatures.push(this.paging) : null;
        this.updating ? this.allFeatures.push(this.updating) : null;
        this.groupBy ? this.allFeatures.push(this.groupBy) : null;
        this.columnMoving ? this.allFeatures.push(this.columnMoving) : null;
        this.hiding ? this.allFeatures.push(this.hiding) : null;
        this.responsive ? this.allFeatures.push(this.responsive) : null;
        this.cellMerging ? this.allFeatures.push(this.cellMerging) : null;
        this.resizing ? this.allFeatures.push(this.resizing) : null;
        this.selection ? this.allFeatures.push(this.selection) : null;
        this.rowSelectors ? this.allFeatures.push(this.rowSelectors) : null;
        this.summaries ? this.allFeatures.push(this.summaries) : null;
        this.columnFixing ? this.allFeatures.push(this.columnFixing) : null;
        this.tooltips ? this.allFeatures.push(this.tooltips) : null;
        this.appendRowsOnDemand ? this.allFeatures.push(this.appendRowsOnDemand) : null;
        this.multiColumnHeaders ? this.allFeatures.push(this.multiColumnHeaders) : null;
    };
    __decorate([
        core_1.ContentChild(iggridsorting_directive_1.IgGridSortingFeature),
        __metadata("design:type", iggridsorting_directive_1.IgGridSortingFeature)
    ], Features.prototype, "sorting", void 0);
    __decorate([
        core_1.ContentChild(iggridfiltering_directive_1.IgGridFilteringFeature),
        __metadata("design:type", iggridfiltering_directive_1.IgGridFilteringFeature)
    ], Features.prototype, "filtering", void 0);
    __decorate([
        core_1.ContentChild(iggridpaging_directive_1.IgGridPagingFeature),
        __metadata("design:type", iggridpaging_directive_1.IgGridPagingFeature)
    ], Features.prototype, "paging", void 0);
    __decorate([
        core_1.ContentChild(iggridupdating_directive_1.IgGridUpdatingFeature),
        __metadata("design:type", iggridupdating_directive_1.IgGridUpdatingFeature)
    ], Features.prototype, "updating", void 0);
    __decorate([
        core_1.ContentChild(iggridgroupby_directive_1.IgGridGroupByFeature),
        __metadata("design:type", iggridgroupby_directive_1.IgGridGroupByFeature)
    ], Features.prototype, "groupBy", void 0);
    __decorate([
        core_1.ContentChild(iggridcolumnmoving_1.IgGridColumnMovingFeature),
        __metadata("design:type", iggridcolumnmoving_1.IgGridColumnMovingFeature)
    ], Features.prototype, "columnMoving", void 0);
    __decorate([
        core_1.ContentChild(iggridhiding_directive_1.IgGridHidingFeature),
        __metadata("design:type", iggridhiding_directive_1.IgGridHidingFeature)
    ], Features.prototype, "hiding", void 0);
    __decorate([
        core_1.ContentChild(iggridcellmerging_directive_1.IgGridCellMergingFeature),
        __metadata("design:type", iggridcellmerging_directive_1.IgGridCellMergingFeature)
    ], Features.prototype, "cellMerging", void 0);
    __decorate([
        core_1.ContentChild(iggridresponsive_directive_1.IgGridResponsiveFeature),
        __metadata("design:type", iggridresponsive_directive_1.IgGridResponsiveFeature)
    ], Features.prototype, "responsive", void 0);
    __decorate([
        core_1.ContentChild(iggridresizing_directive_1.IgGridResizingFeature),
        __metadata("design:type", iggridresizing_directive_1.IgGridResizingFeature)
    ], Features.prototype, "resizing", void 0);
    __decorate([
        core_1.ContentChild(iggridselection_directive_1.IgGridSelectionFeature),
        __metadata("design:type", iggridselection_directive_1.IgGridSelectionFeature)
    ], Features.prototype, "selection", void 0);
    __decorate([
        core_1.ContentChild(iggridrowselectors_directive_1.IgGridRowSelectorsFeature),
        __metadata("design:type", iggridrowselectors_directive_1.IgGridRowSelectorsFeature)
    ], Features.prototype, "rowSelectors", void 0);
    __decorate([
        core_1.ContentChild(iggridsummaries_directive_1.IgGridSummariesFeature),
        __metadata("design:type", iggridsummaries_directive_1.IgGridSummariesFeature)
    ], Features.prototype, "summaries", void 0);
    __decorate([
        core_1.ContentChild(iggridcolumnfixing_directive_1.IgGridColumnFixingFeature),
        __metadata("design:type", iggridcolumnfixing_directive_1.IgGridColumnFixingFeature)
    ], Features.prototype, "columnFixing", void 0);
    __decorate([
        core_1.ContentChild(iggridtooltips_directive_1.IgGridTooltipsFeature),
        __metadata("design:type", iggridtooltips_directive_1.IgGridTooltipsFeature)
    ], Features.prototype, "tooltips", void 0);
    __decorate([
        core_1.ContentChild(iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature),
        __metadata("design:type", iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature)
    ], Features.prototype, "appendRowsOnDemand", void 0);
    __decorate([
        core_1.ContentChild(iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature),
        __metadata("design:type", iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature)
    ], Features.prototype, "multiColumnHeaders", void 0);
    Features = __decorate([
        core_1.Directive({
            selector: 'features'
        })
    ], Features);
    return Features;
}());
exports.Features = Features;
//# sourceMappingURL=features.directive.js.map