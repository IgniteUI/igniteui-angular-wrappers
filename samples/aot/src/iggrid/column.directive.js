"use strict";
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
var Column = /** @class */ (function () {
    function Column(el) {
        this._settings = {};
        this._el = el;
        var self = this;
        var i, settings = ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass'];
        for (i = 0; i < settings.length; i++) {
            Object.defineProperty(self, settings[i], {
                set: self.createColumnsSetter(settings[i]),
                get: self.createColumnsGetter(settings[i]),
                enumerable: true,
                configurable: true
            });
        }
    }
    Column.prototype.createColumnsSetter = function (name) {
        return function (value) {
            var grid = jQuery(this._el.nativeElement.parentElement).find("table[role='grid']");
            var columns = grid["igGrid"]("option", "columns");
            this._settings[name] = value;
            if (jQuery.ui["igGrid"] &&
                jQuery.ui["igGrid"].prototype.options &&
                jQuery.ui["igGrid"].prototype.options.hasOwnProperty("columns") &&
                grid.data("igGrid")) {
                //reapply all column settings when a column setting is changed
                grid["igGrid"]("option", "columns", columns);
            }
        };
    };
    Column.prototype.createColumnsGetter = function (name) {
        return function () {
            return this._settings[name];
        };
    };
    Column = __decorate([
        core_1.Directive({
            selector: 'column',
            inputs: ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Column);
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.directive.js.map