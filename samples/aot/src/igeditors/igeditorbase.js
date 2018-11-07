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
    IgEditorBase = __decorate([
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgEditorBase);
    return IgEditorBase;
}(igcontrolbase_1.IgControlBase));
exports.IgEditorBase = IgEditorBase;
//# sourceMappingURL=igeditorbase.js.map