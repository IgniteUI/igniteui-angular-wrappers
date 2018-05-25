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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var forms_1 = require("@angular/forms");
var IgHtmlEditorComponent = /** @class */ (function (_super) {
    __extends(IgHtmlEditorComponent, _super);
    function IgHtmlEditorComponent(el, renderer, differs, model, zone, kvalDiffers, cdr) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
        _this.model = model;
        _this.zone = zone;
        _this.onChange = function (_) {
        };
        _this.onTouched = function () {
        };
        if (model) {
            model.valueAccessor = _this;
            _this._zone = zone;
            _this._model = model;
        }
        return _this;
    }
    IgHtmlEditorComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var that = this;
        if (this._model) {
            var iframe = jQuery(this._el).find("iframe")[0].contentWindow.document;
            jQuery(iframe).find("body[contenteditable=true]").on("keyup", function (evt, ui) {
                that._model.viewToModelUpdate(jQuery(evt.target).html());
                that._zone.run(function () {
                    that._model.viewToModelUpdate(jQuery(evt.target).html());
                });
            });
        }
    };
    IgHtmlEditorComponent.prototype.writeValue = function (value) {
        if (!!jQuery(this._el).data(this._widgetName) && value !== null && value !== jQuery(this._el)[this._widgetName]("getContent", "html")) {
            jQuery(this._el)[this._widgetName]("setContent", value, "html");
        }
    };
    IgHtmlEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    IgHtmlEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Returns the element on which the widget was instantiated
     */
    /**
         * Returns the element on which the widget was instantiated
         */
    IgHtmlEditorComponent.prototype.widget = /**
         * Returns the element on which the widget was instantiated
         */
    function () { return; };
    ;
    /**
     * Resizes the height of the workspace
     */
    /**
         * Resizes the height of the workspace
         */
    IgHtmlEditorComponent.prototype.resizeWorkspace = /**
         * Resizes the height of the workspace
         */
    function () { return; };
    ;
    /**
     * Gets the content of the html editor.
     *
     * @param format Returns the content as html or plain text. Values can be "text" or "html".
     */
    /**
         * Gets the content of the html editor.
         *
         * @param format Returns the content as html or plain text. Values can be "text" or "html".
         */
    IgHtmlEditorComponent.prototype.getContent = /**
         * Gets the content of the html editor.
         *
         * @param format Returns the content as html or plain text. Values can be "text" or "html".
         */
    function (format) { return; };
    ;
    /**
     * Sets the content of the html editor.
     *
     * @param content The content which will be set.
     * @param format The content type: "text" or "html".
     */
    /**
         * Sets the content of the html editor.
         *
         * @param content The content which will be set.
         * @param format The content type: "text" or "html".
         */
    IgHtmlEditorComponent.prototype.setContent = /**
         * Sets the content of the html editor.
         *
         * @param content The content which will be set.
         * @param format The content type: "text" or "html".
         */
    function (content, format) { return; };
    ;
    /**
     * Destroys the widget.
     */
    /**
         * Destroys the widget.
         */
    IgHtmlEditorComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    /**
     * Executes htmleditor commands.
     *
     * @param actionName The command name.
     * @param args Additional parameter for the command.
     */
    /**
         * Executes htmleditor commands.
         *
         * @param actionName The command name.
         * @param args Additional parameter for the command.
         */
    IgHtmlEditorComponent.prototype.executeAction = /**
         * Executes htmleditor commands.
         *
         * @param actionName The command name.
         * @param args Additional parameter for the command.
         */
    function (actionName, args) { return; };
    ;
    /**
     * Returns true/false if the editor contents were modified or not.
     */
    /**
         * Returns true/false if the editor contents were modified or not.
         */
    IgHtmlEditorComponent.prototype.isDirty = /**
         * Returns true/false if the editor contents were modified or not.
         */
    function () { return; };
    ;
    /**
     * Returns the window object associated with the Html Editor's content editable area
     */
    /**
         * Returns the window object associated with the Html Editor's content editable area
         */
    IgHtmlEditorComponent.prototype.contentWindow = /**
         * Returns the window object associated with the Html Editor's content editable area
         */
    function () { return; };
    ;
    /**
     * Returns the document object associated with the Html Editor's content editable area
     */
    /**
         * Returns the document object associated with the Html Editor's content editable area
         */
    IgHtmlEditorComponent.prototype.contentDocument = /**
         * Returns the document object associated with the Html Editor's content editable area
         */
    function () { return; };
    ;
    /**
     * Returns the content editable associated with this Html Editor
     */
    /**
         * Returns the content editable associated with this Html Editor
         */
    IgHtmlEditorComponent.prototype.contentEditable = /**
         * Returns the content editable associated with this Html Editor
         */
    function () { return; };
    ;
    /**
     * Returns Selection object that represent the current selection in the content editable
     */
    /**
         * Returns Selection object that represent the current selection in the content editable
         */
    IgHtmlEditorComponent.prototype.selection = /**
         * Returns Selection object that represent the current selection in the content editable
         */
    function () { return; };
    ;
    /**
     * Returns Range object that represent the current range in the content editable
     */
    /**
         * Returns Range object that represent the current range in the content editable
         */
    IgHtmlEditorComponent.prototype.range = /**
         * Returns Range object that represent the current range in the content editable
         */
    function () { return; };
    ;
    /**
     * Inserts the provided content at the position of the caret.
     *
     * @param element Accepts html string, DOM element or a jQuery object.
     */
    /**
         * Inserts the provided content at the position of the caret.
         *
         * @param element Accepts html string, DOM element or a jQuery object.
         */
    IgHtmlEditorComponent.prototype.insertAtCaret = /**
         * Inserts the provided content at the position of the caret.
         *
         * @param element Accepts html string, DOM element or a jQuery object.
         */
    function (element) { return; };
    ;
    IgHtmlEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-html-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "showFormattingToolbar", "showTextToolbar", "showInsertObjectToolbar", "showCopyPasteToolbar", "width", "height", "toolbarSettings", "customToolbars", "inputName", "value"],
                    outputs: ["rendered", "rendering", "actionExecuting", "actionExecuted", "toolbarCollapsing", "toolbarCollapsed", "toolbarExpanding", "toolbarExpanded", "cut", "copy", "paste", "undo", "redo", "workspaceResized"]
                },] },
    ];
    /** @nocollapse */
    IgHtmlEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
        { type: core_1.NgZone, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgHtmlEditorComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgHtmlEditorComponent = IgHtmlEditorComponent;
//# sourceMappingURL=ightmleditor.component.js.map