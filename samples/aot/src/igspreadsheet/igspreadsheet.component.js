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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgSpreadsheetComponent = /** @class */ (function (_super) {
    __extends(IgSpreadsheetComponent, _super);
    function IgSpreadsheetComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns an object that represents the pane with the focus.
     */
    IgSpreadsheetComponent.prototype.getActivePane = function () { return; };
    ;
    /**
     * Returns an object that represents the current selection of the active pane.
     */
    IgSpreadsheetComponent.prototype.getActiveSelection = function () { return; };
    ;
    /**
     * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire active selection.
     *				Any changes made to this object will affect all the objects in the selection. So for example, the
     *				Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other
     *				cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects
     *				affected by the selection will have their Font.Name updated to that value.
     */
    IgSpreadsheetComponent.prototype.getActiveSelectionCellRangeFormat = function () { return; };
    ;
    /**
     * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
     */
    IgSpreadsheetComponent.prototype.getIsRenamingWorksheet = function () { return; };
    ;
    /**
     * Returns an array of the panes for the activeWorksheet.
     *
     *				 returnType="ig.spreadsheet.SpreadsheetPane[]"
     */
    IgSpreadsheetComponent.prototype.getPanes = function () { return; };
    ;
    /**
     * Executes the action associated with the specified id.
     *
     * @param action An [enumeration](ig.spreadsheet.SpreadsheetAction) or string that identifies the action to execute.
     */
    IgSpreadsheetComponent.prototype.executeAction = function (action) { return; };
    ;
    /**
     * Forces any pending deferred work to render on the spreadsheet before continuing
     */
    IgSpreadsheetComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgSpreadsheetComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Notify the spreadsheet that style information used for rendering the spreadsheet may have been updated.
     */
    IgSpreadsheetComponent.prototype.styleUpdated = function () { return; };
    ;
    IgSpreadsheetComponent = __decorate([
        core_1.Component({
            selector: "ig-spreadsheet",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "activeCell", "isScrollLocked", "activeWorksheet", "allowAddWorksheet", "allowDeleteWorksheet", "areGridlinesVisible", "areHeadersVisible", "enterKeyNavigationDirection", "isEnterKeyNavigationEnabled", "isFormulaBarVisible", "isInEndMode", "isUndoEnabled", "nameBoxWidth", "selectionMode", "selectedWorksheets", "validationInputMessagePosition", "workbook", "zoomLevel"],
            outputs: ["actionExecuted", "actionExecuting", "activeCellChanged", "activePaneChanged", "activeWorksheetChanged", "editRangePasswordNeeded", "hyperlinkExecuting", "selectionChanged", "userPromptDisplaying", "workbookDirtied"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgSpreadsheetComponent);
    return IgSpreadsheetComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgSpreadsheetComponent = IgSpreadsheetComponent;
//# sourceMappingURL=igspreadsheet.component.js.map