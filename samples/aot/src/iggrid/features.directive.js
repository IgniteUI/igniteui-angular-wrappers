"use strict";
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
    Features.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'features'
                },] },
    ];
    /** @nocollapse */
    Features.propDecorators = {
        "sorting": [{ type: core_1.ContentChild, args: [iggridsorting_directive_1.IgGridSortingFeature,] },],
        "filtering": [{ type: core_1.ContentChild, args: [iggridfiltering_directive_1.IgGridFilteringFeature,] },],
        "paging": [{ type: core_1.ContentChild, args: [iggridpaging_directive_1.IgGridPagingFeature,] },],
        "updating": [{ type: core_1.ContentChild, args: [iggridupdating_directive_1.IgGridUpdatingFeature,] },],
        "groupBy": [{ type: core_1.ContentChild, args: [iggridgroupby_directive_1.IgGridGroupByFeature,] },],
        "columnMoving": [{ type: core_1.ContentChild, args: [iggridcolumnmoving_1.IgGridColumnMovingFeature,] },],
        "hiding": [{ type: core_1.ContentChild, args: [iggridhiding_directive_1.IgGridHidingFeature,] },],
        "cellMerging": [{ type: core_1.ContentChild, args: [iggridcellmerging_directive_1.IgGridCellMergingFeature,] },],
        "responsive": [{ type: core_1.ContentChild, args: [iggridresponsive_directive_1.IgGridResponsiveFeature,] },],
        "resizing": [{ type: core_1.ContentChild, args: [iggridresizing_directive_1.IgGridResizingFeature,] },],
        "selection": [{ type: core_1.ContentChild, args: [iggridselection_directive_1.IgGridSelectionFeature,] },],
        "rowSelectors": [{ type: core_1.ContentChild, args: [iggridrowselectors_directive_1.IgGridRowSelectorsFeature,] },],
        "summaries": [{ type: core_1.ContentChild, args: [iggridsummaries_directive_1.IgGridSummariesFeature,] },],
        "columnFixing": [{ type: core_1.ContentChild, args: [iggridcolumnfixing_directive_1.IgGridColumnFixingFeature,] },],
        "tooltips": [{ type: core_1.ContentChild, args: [iggridtooltips_directive_1.IgGridTooltipsFeature,] },],
        "appendRowsOnDemand": [{ type: core_1.ContentChild, args: [iggridappendrowsondemand_directive_1.IgGridAppendRowsOnDemandFeature,] },],
        "multiColumnHeaders": [{ type: core_1.ContentChild, args: [iggridmulticolumnheaders_directive_1.IgGridMultiColumnHeadersFeature,] },],
    };
    return Features;
}());
exports.Features = Features;
//# sourceMappingURL=features.directive.js.map