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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
    IgHtmlEditorComponent.prototype.widget = function () { return; };
    ;
    /**
     * Resizes the height of the workspace
     */
    IgHtmlEditorComponent.prototype.resizeWorkspace = function () { return; };
    ;
    /**
     * Gets the content of the html editor.
     *
     * @param format Returns the content as html or plain text. Values can be "text" or "html".
     */
    IgHtmlEditorComponent.prototype.getContent = function (format) { return; };
    ;
    /**
     * Sets the content of the html editor.
     *
     * @param content The content which will be set.
     * @param format The content type: "text" or "html".
     */
    IgHtmlEditorComponent.prototype.setContent = function (content, format) { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgHtmlEditorComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Executes htmleditor commands.
     *
     * @param actionName The command name.
     * @param args Additional parameter for the command.
     */
    IgHtmlEditorComponent.prototype.executeAction = function (actionName, args) { return; };
    ;
    /**
     * Returns true/false if the editor contents were modified or not.
     */
    IgHtmlEditorComponent.prototype.isDirty = function () { return; };
    ;
    /**
     * Returns the window object associated with the Html Editor's content editable area
     */
    IgHtmlEditorComponent.prototype.contentWindow = function () { return; };
    ;
    /**
     * Returns the document object associated with the Html Editor's content editable area
     */
    IgHtmlEditorComponent.prototype.contentDocument = function () { return; };
    ;
    /**
     * Returns the content editable associated with this Html Editor
     */
    IgHtmlEditorComponent.prototype.contentEditable = function () { return; };
    ;
    /**
     * Returns Selection object that represent the current selection in the content editable
     */
    IgHtmlEditorComponent.prototype.selection = function () { return; };
    ;
    /**
     * Returns Range object that represent the current range in the content editable
     */
    IgHtmlEditorComponent.prototype.range = function () { return; };
    ;
    /**
     * Inserts the provided content at the position of the caret.
     *
     * @param element Accepts html string, DOM element or a jQuery object.
     */
    IgHtmlEditorComponent.prototype.insertAtCaret = function (element) { return; };
    ;
    IgHtmlEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-html-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "showFormattingToolbar", "showTextToolbar", "showInsertObjectToolbar", "showCopyPasteToolbar", "width", "height", "toolbarSettings", "customToolbars", "inputName", "value"],
            outputs: ["rendered", "rendering", "actionExecuting", "actionExecuted", "toolbarCollapsing", "toolbarCollapsed", "toolbarExpanding", "toolbarExpanded", "cut", "copy", "paste", "undo", "redo", "workspaceResized"]
        }),
        __param(3, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, forms_1.NgModel, core_1.NgZone, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgHtmlEditorComponent);
    return IgHtmlEditorComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgHtmlEditorComponent = IgHtmlEditorComponent;
//# sourceMappingURL=ightmleditor.component.js.map