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
var igcontentcontrolbase_1 = require("../igcontrolbase/igcontentcontrolbase");
var IgSplitterComponent = /** @class */ (function (_super) {
    __extends(IgSplitterComponent, _super);
    function IgSplitterComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns the element that represents this widget.
     */
    /**
         * Returns the element that represents this widget.
         */
    IgSplitterComponent.prototype.widget = /**
         * Returns the element that represents this widget.
         */
    function () { return; };
    ;
    /**
     * Expand the specified panel by index.
     *
     * @param index Specifies the index of the panel to expand.
     */
    /**
         * Expand the specified panel by index.
         *
         * @param index Specifies the index of the panel to expand.
         */
    IgSplitterComponent.prototype.expandAt = /**
         * Expand the specified panel by index.
         *
         * @param index Specifies the index of the panel to expand.
         */
    function (index) { return; };
    ;
    /**
     * Collapse the specified panel.
     *
     * @param index Specifies the index of the panel to collapse.
     */
    /**
         * Collapse the specified panel.
         *
         * @param index Specifies the index of the panel to collapse.
         */
    IgSplitterComponent.prototype.collapseAt = /**
         * Collapse the specified panel.
         *
         * @param index Specifies the index of the panel to collapse.
         */
    function (index) { return; };
    ;
    /**
     * Retrieves the jQuery element of the first panel.
     */
    /**
         * Retrieves the jQuery element of the first panel.
         */
    IgSplitterComponent.prototype.firstPanel = /**
         * Retrieves the jQuery element of the first panel.
         */
    function () { return; };
    ;
    /**
     * Retrieves the jQuery element of the second panel.
     */
    /**
         * Retrieves the jQuery element of the second panel.
         */
    IgSplitterComponent.prototype.secondPanel = /**
         * Retrieves the jQuery element of the second panel.
         */
    function () { return; };
    ;
    /**
     * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
     */
    /**
         * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
         */
    IgSplitterComponent.prototype.refreshLayout = /**
         * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
         */
    function () { return; };
    ;
    /**
     * You can set new size of the first panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the first panel.
     */
    /**
         * You can set new size of the first panel after the splitter is rendered.
         *
         * @param size Specifies the new size of the first panel.
         */
    IgSplitterComponent.prototype.setFirstPanelSize = /**
         * You can set new size of the first panel after the splitter is rendered.
         *
         * @param size Specifies the new size of the first panel.
         */
    function (size) { return; };
    ;
    /**
     * You can set new size of the second panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the second panel.
     */
    /**
         * You can set new size of the second panel after the splitter is rendered.
         *
         * @param size Specifies the new size of the second panel.
         */
    IgSplitterComponent.prototype.setSecondPanelSize = /**
         * You can set new size of the second panel after the splitter is rendered.
         *
         * @param size Specifies the new size of the second panel.
         */
    function (size) { return; };
    ;
    /**
     * Destroys the igSplitter widget
     */
    /**
         * Destroys the igSplitter widget
         */
    IgSplitterComponent.prototype.destroy = /**
         * Destroys the igSplitter widget
         */
    function () { return; };
    ;
    IgSplitterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-splitter",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "orientation", "panels", "dragDelta", "resizeOtherSplitters"],
                    outputs: ["collapsed", "expanded", "resizeStarted", "resizing", "resizeEnded", "layoutRefreshing", "layoutRefreshed"]
                },] },
    ];
    /** @nocollapse */
    IgSplitterComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgSplitterComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgSplitterComponent = IgSplitterComponent;
//# sourceMappingURL=igsplitter.component.js.map