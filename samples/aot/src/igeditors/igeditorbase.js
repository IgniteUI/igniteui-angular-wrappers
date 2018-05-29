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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var IgEditorBase = /** @class */ (function (_super) {
    __extends(IgEditorBase, _super);
    function IgEditorBase(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
        _this.model = model;
        _this.onChange = function (_) {
        };
        _this.onTouched = function () {
        };
        if (model) {
            model.valueAccessor = _this;
            _this._model = model;
        }
        return _this;
    }
    IgEditorBase.prototype.ngOnInit = function () {
        var that = this;
        _super.prototype.ngOnInit.call(this);
        if (this._model) {
            jQuery(this._el).on(this._widgetName.toLowerCase() + "valuechanged", function (evt, ui) {
                that.onChange(ui.newValue);
            });
            if (this._widgetName === "igTextEditor") {
                jQuery(this._el).on(this._widgetName.toLowerCase() + "textchanged", function (evt, ui) {
                    that.onChange(ui.text);
                });
            }
            jQuery(this._el).on(this._widgetName.toLowerCase() + "blur", function (evt, ui) {
                that.onTouched();
            });
            //manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
            this.writeValue(this._model.value);
        }
    };
    IgEditorBase.prototype.writeValue = function (value) {
        if (!!jQuery(this._el).data(this._widgetName) && value !== null) {
            jQuery(this._el)[this._widgetName]("value", value);
        }
    };
    IgEditorBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    IgEditorBase.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    IgEditorBase.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgEditorBase;
}(igcontrolbase_1.IgControlBase));
exports.IgEditorBase = IgEditorBase;
//# sourceMappingURL=igeditorbase.js.map