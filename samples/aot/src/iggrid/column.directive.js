"use strict";
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
    Column.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'column',
                    inputs: ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass']
                },] },
    ];
    /** @nocollapse */
    Column.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.directive.js.map