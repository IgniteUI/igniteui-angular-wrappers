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
var IgDialogComponent = /** @class */ (function (_super) {
    __extends(IgDialogComponent, _super);
    function IgDialogComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Destroys the igDialog and moves the target element to its original parent.
     */
    /**
         * Destroys the igDialog and moves the target element to its original parent.
         */
    IgDialogComponent.prototype.destroy = /**
         * Destroys the igDialog and moves the target element to its original parent.
         */
    function () { return; };
    ;
    /**
     * Gets/Sets the state of the editor.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     *
     * @param state     New state.
     */
    /**
         * Gets/Sets the state of the editor.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         *
         * @param state     New state.
         */
    IgDialogComponent.prototype.state = /**
         * Gets/Sets the state of the editor.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         *
         * @param state     New state.
         */
    function (state) { return; };
    ;
    /**
     * Gets reference to the dynamically created DIV element which represents the dialog.
     */
    /**
         * Gets reference to the dynamically created DIV element which represents the dialog.
         */
    IgDialogComponent.prototype.mainElement = /**
         * Gets reference to the dynamically created DIV element which represents the dialog.
         */
    function () { return; };
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
    /**
         * Closes the dialog if it is opened.
         * 				Notes:
         * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         * 				2. That method does not change minimized or maximized state of the dialog.
         * 				It means that method "open" will open the dialog and keep previous minimized or maximized state.
         *
         * @param e     Browser event: internal use only.
         */
    IgDialogComponent.prototype.close = /**
         * Closes the dialog if it is opened.
         * 				Notes:
         * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         * 				2. That method does not change minimized or maximized state of the dialog.
         * 				It means that method "open" will open the dialog and keep previous minimized or maximized state.
         *
         * @param e     Browser event: internal use only.
         */
    function (e) { return; };
    ;
    /**
     * Opens the dialog if it is closed. Notes:
     * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
     */
    /**
         * Opens the dialog if it is closed. Notes:
         * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
         */
    IgDialogComponent.prototype.open = /**
         * Opens the dialog if it is closed. Notes:
         * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
         */
    function () { return; };
    ;
    /**
     * Minimizes the dialog if it is not minimized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    /**
         * Minimizes the dialog if it is not minimized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    IgDialogComponent.prototype.minimize = /**
         * Minimizes the dialog if it is not minimized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    function () { return; };
    ;
    /**
     * Maximizes the dialog if it is not maximized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    /**
         * Maximizes the dialog if it is not maximized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    IgDialogComponent.prototype.maximize = /**
         * Maximizes the dialog if it is not maximized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    function () { return; };
    ;
    /**
     * Sets the normal state for the dialog if it was maximized or minimized.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    /**
         * Sets the normal state for the dialog if it was maximized or minimized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    IgDialogComponent.prototype.restore = /**
         * Sets the normal state for the dialog if it was maximized or minimized.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    function () { return; };
    ;
    /**
     * Pins the dialog if it is not pinned.
     * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
     * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
     * 				Notes:
     * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
     * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    /**
         * Pins the dialog if it is not pinned.
         * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
         * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
         * 				Notes:
         * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
         * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    IgDialogComponent.prototype.pin = /**
         * Pins the dialog if it is not pinned.
         * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
         * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
         * 				Notes:
         * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
         * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    function () { return; };
    ;
    /**
     * Unpins the dialog if it is pinned.
     * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
     */
    /**
         * Unpins the dialog if it is pinned.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    IgDialogComponent.prototype.unpin = /**
         * Unpins the dialog if it is pinned.
         * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
         */
    function () { return; };
    ;
    /**
     * Gets a reference to the top modal dialog.
     */
    /**
         * Gets a reference to the top modal dialog.
         */
    IgDialogComponent.prototype.getTopModal = /**
         * Gets a reference to the top modal dialog.
         */
    function () { return; };
    ;
    /**
     * Checks if the dialog is modal and if it is currently active.
     */
    /**
         * Checks if the dialog is modal and if it is currently active.
         */
    IgDialogComponent.prototype.isTopModal = /**
         * Checks if the dialog is modal and if it is currently active.
         */
    function () { return; };
    ;
    /**
     * Moves a not modal dialog to the top.
     *
     * @param e     Original event of browser.
     */
    /**
         * Moves a not modal dialog to the top.
         *
         * @param e     Original event of browser.
         */
    IgDialogComponent.prototype.moveToTop = /**
         * Moves a not modal dialog to the top.
         *
         * @param e     Original event of browser.
         */
    function (e) { return; };
    ;
    /**
     * Retrieves the igDialog content container or sets its content to be the new content provided.
     *
     * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
     */
    /**
         * Retrieves the igDialog content container or sets its content to be the new content provided.
         *
         * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
         */
    IgDialogComponent.prototype.content = /**
         * Retrieves the igDialog content container or sets its content to be the new content provided.
         *
         * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
         */
    function (newContent) { return; };
    ;
    IgDialogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-dialog",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "mainElement", "state", "pinned", "closeOnEscape", "showCloseButton", "showMaximizeButton", "showMinimizeButton", "showPinButton", "pinOnMinimized", "imageClass", "headerText", "showHeader", "showFooter", "footerText", "dialogClass", "container", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "draggable", "position", "resizable", "tabIndex", "openAnimation", "closeAnimation", "zIndex", "modal", "trackFocus", "closeButtonTitle", "minimizeButtonTitle", "maximizeButtonTitle", "pinButtonTitle", "unpinButtonTitle", "restoreButtonTitle", "temporaryUrl", "enableHeaderFocus", "enableDblclick"],
                    outputs: ["stateChanging", "stateChanged", "animationEnded", "focus", "blur"]
                },] },
    ];
    /** @nocollapse */
    IgDialogComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgDialogComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgDialogComponent = IgDialogComponent;
//# sourceMappingURL=igdialog.component.js.map