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
var igcontentcontrolbase_1 = require("../igcontrolbase/igcontentcontrolbase");
var IgDialogComponent = /** @class */ (function (_super) {
    __extends(IgDialogComponent, _super);
    function IgDialogComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Destroys the igDialog and moves the target element to its original parent.
     */
    IgDialogComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Gets/Sets the state of the editor.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     *
     * @param state     New state.
     */
    IgDialogComponent.prototype.state = function (state) { return; };
    ;
    /**
     * Gets reference to the dynamically created DIV element which represents the dialog.
     */
    IgDialogComponent.prototype.mainElement = function () { return; };
    ;
    /**
     * Closes the dialog if it is opened.
     * 				Notes:
     * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     * 				2. That method does not change minimized or maximized state of the dialog.
     * 				It means that method "open" will open the dialog and keep previous minimized or maximized state.
     *
     * @param e     Browser event: internal use only.
     */
    IgDialogComponent.prototype.close = function (e) { return; };
    ;
    /**
     * Opens the dialog if it is closed. Notes:
     * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
     */
    IgDialogComponent.prototype.open = function () { return; };
    ;
    /**
     * Minimizes the dialog if it is not minimized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    IgDialogComponent.prototype.minimize = function () { return; };
    ;
    /**
     * Maximizes the dialog if it is not maximized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    IgDialogComponent.prototype.maximize = function () { return; };
    ;
    /**
     * Sets the normal state for the dialog if it was maximized or minimized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    IgDialogComponent.prototype.restore = function () { return; };
    ;
    /**
     * Pins the dialog if it is not pinned.
     * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
     * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
     * 				Notes:
     * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
     * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    IgDialogComponent.prototype.pin = function () { return; };
    ;
    /**
     * Unpins the dialog if it is pinned.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    IgDialogComponent.prototype.unpin = function () { return; };
    ;
    /**
     * Gets a reference to the top modal dialog.
     */
    IgDialogComponent.prototype.getTopModal = function () { return; };
    ;
    /**
     * Checks if the dialog is modal and if it is currently active.
     */
    IgDialogComponent.prototype.isTopModal = function () { return; };
    ;
    /**
     * Moves a not modal dialog to the top.
     *
     * @param e     Original event of browser.
     */
    IgDialogComponent.prototype.moveToTop = function (e) { return; };
    ;
    /**
     * Retrieves the igDialog content container or sets its content to be the new content provided.
     *
     * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
     */
    IgDialogComponent.prototype.content = function (newContent) { return; };
    ;
    IgDialogComponent = __decorate([
        core_1.Component({
            selector: "ig-dialog",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "mainElement", "state", "pinned", "closeOnEscape", "showCloseButton", "showMaximizeButton", "showMinimizeButton", "showPinButton", "pinOnMinimized", "imageClass", "headerText", "showHeader", "showFooter", "footerText", "dialogClass", "container", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "draggable", "position", "resizable", "tabIndex", "openAnimation", "closeAnimation", "zIndex", "modal", "trackFocus", "closeButtonTitle", "minimizeButtonTitle", "maximizeButtonTitle", "pinButtonTitle", "unpinButtonTitle", "restoreButtonTitle", "temporaryUrl", "enableHeaderFocus", "enableDblclick"],
            outputs: ["stateChanging", "stateChanged", "animationEnded", "focus", "blur"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgDialogComponent);
    return IgDialogComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgDialogComponent = IgDialogComponent;
//# sourceMappingURL=igdialog.component.js.map