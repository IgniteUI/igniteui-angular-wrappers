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
var IgGridColumnMovingFeature = /** @class */ (function (_super) {
    __extends(IgGridColumnMovingFeature, _super);
    function IgGridColumnMovingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Restoring overwritten functions
     */
    IgGridColumnMovingFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Moves a visible column at a specified place, in front or behind a target column or at a target index
     * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column    An identifier of the column to be moved. It can be a key, a Multi-Column Header identificator, or an index in a number format. The latter is not supported when the grid contains multi-column headers.
     * @param target    An identifier of a column where the moved column should move to or an index at which the moved column should be moved to. In the case of a column identifier the column will be moved after it by default.
     * @param after    Specifies whether the column moved should be moved after or before the target column.
     * @param inDom    Specifies whether the column moving will be enacted through DOM manipulation or through rerendering of the grid.
     * @param callback    Specifies a custom function to be called when the column is moved.
     */
    IgGridColumnMovingFeature.prototype.moveColumn = function (column, target, after, inDom, callback) { return; };
    ;
    IgGridColumnMovingFeature = __decorate([
        core_1.Directive({
            selector: 'column-moving',
            inputs: ["disabled", "create", "columnSettings", "mode", "moveType", "addMovingDropdown", "movingDialogWidth", "movingDialogHeight", "movingDialogAnimationDuration", "movingAcceptanceTolerance", "movingScrollTolerance", "scrollSpeedMultiplier", "scrollDelta", "hideHeaderContentsDuringDrag", "dragHelperOpacity", "movingDialogCaptionButtonDesc", "movingDialogCaptionButtonAsc", "movingDialogCaptionText", "movingDialogDisplayText", "movingDialogDropTooltipText", "movingDialogDropTooltipMarkup", "dropDownMoveLeftText", "dropDownMoveRightText", "dropDownMoveFirstText", "dropDownMoveLastText", "movingToolTipMove", "featureChooserSubmenuText", "columnMovingDialogContainment", "dialogWidget", "inherit"],
            outputs: ["columnDragStart", "columnDragEnd", "columnDragCanceled", "columnMoving", "columnMoved", "movingDialogOpening", "movingDialogOpened", "movingDialogDragged", "movingDialogClosing", "movingDialogClosed", "movingDialogContentsRendering", "movingDialogContentsRendered", "movingDialogMoveUpButtonPressed", "movingDialogMoveDownButtonPressed", "movingDialogDragColumnMoving", "movingDialogDragColumnMoved"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridColumnMovingFeature);
    return IgGridColumnMovingFeature;
}(feature_1.Feature));
exports.IgGridColumnMovingFeature = IgGridColumnMovingFeature;
//# sourceMappingURL=iggridcolumnmoving.js.map