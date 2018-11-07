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
Object.defineProperty(exports, "__esModule", { value: true });
var igcontrolbase_1 = require("./igcontrolbase");
var IgContentControlBase = /** @class */ (function (_super) {
    __extends(IgContentControlBase, _super);
    function IgContentControlBase(el, renderer, differs, kvalDiffers, cdr) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
        _this.childNodes = el.nativeElement.childNodes;
        return _this;
    }
    IgContentControlBase.prototype.ngOnInit = function () {
        jQuery(this._el).append(this.childNodes);
        _super.prototype.ngOnInit.call(this);
    };
    return IgContentControlBase;
}(igcontrolbase_1.IgControlBase));
exports.IgContentControlBase = IgContentControlBase;
//# sourceMappingURL=igcontentcontrolbase.js.map