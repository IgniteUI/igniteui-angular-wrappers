"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NODES = {
    "ig-text-editor": "div",
    "ig-numeric-editor": "input",
    "ig-percent-editor": "input",
    "ig-mask-editor": "input",
    "ig-date-picker": "input",
    "ig-date-editor": "input",
    "ig-currency-editor": "input",
    "ig-checkbox-editor": "input",
    "ig-html-editor": "div",
    "ig-combo": "input",
    "ig-grid": "table",
    "ig-tree-grid": "table",
    "ig-hierarchical-grid": "table",
    "ig-pivot-data-selector": "div",
    "ig-pivot-grid": "table",
    "ig-data-chart": "div",
    "ig-pie-chart": "div",
    "ig-doughnut-chart": "div",
    "ig-funnel-chart": "div",
    "ig-radial-gauge": "div",
    "ig-sparkline": "div",
    "ig-zoombar": "div",
    "ig-map": "div",
    "ig-bullet-graph": "div",
    "ig-linear-gauge": "div",
    "ig-q-r-code-barcode": "div",
    "ig-validator": "div",
    "ig-upload": "div",
    "ig-popover": "div",
    "ig-rating": "div",
    "ig-video-player": "div",
    "ig-radial-menu": "div",
    "ig-split-button": "div",
    "ig-notifier": "div",
    "ig-tree": "div",
    "ig-dialog": "div",
    "ig-splitter": "div",
    "ig-layout-manager": "div",
    "ig-tile-manager": "div",
    "ig-spreadsheet": "div",
    "ig-scheduler": "div"
};
var IgControlBase = /** @class */ (function () {
    function IgControlBase(el, renderer, differs, kvalDiffers, cdr) {
        this.kvalDiffers = kvalDiffers;
        this.cdr = cdr;
        this.options = {};
        this._evtEmmiters = {};
        this._differs = differs;
        this._nativeElement = el.nativeElement;
        this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase()); //ig-grid -> igGrid
        this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));
        for (var propt in jQuery.ui[this._widgetName].prototype.events) {
            this[propt] = new core_1.EventEmitter();
            //cahcing the event emmitters for cases when the event name is the same as a method name.
            this._evtEmmiters[propt] = this[propt];
        }
    }
    IgControlBase.prototype.createSetter = function (name) {
        return function (value) {
            this.options[name] = value;
            if (this._config) {
                this._config[name] = value;
            }
            if (jQuery.ui[this._widgetName] &&
                jQuery.ui[this._widgetName].prototype.options &&
                jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(name) &&
                jQuery(this._el).data(this._widgetName)) {
                jQuery(this._el)[this._widgetName]("option", name, value);
            }
        };
    };
    IgControlBase.prototype.ngOnInit = function () {
        var evtName;
        var that = this;
        this._events = new Map();
        for (var opt in jQuery.ui[this._widgetName].prototype.options) {
            //copy root level options into this.options
            if (this[opt] && typeof this[opt] !== "function") {
                this.options[opt] = this[opt];
            }
        }
        for (var opt in jQuery.ui[this._widgetName].prototype.options) {
            if (opt !== "dataSource") {
                Object.defineProperty(this, opt, {
                    set: this.createSetter(opt),
                    enumerable: true,
                    configurable: true
                });
            }
        }
        var propNames = Object.getOwnPropertyNames(jQuery.ui[this._widgetName].prototype);
        for (var i = 0; i < propNames.length; i++) {
            var name = propNames[i];
            if (name.indexOf("_") !== 0 && typeof jQuery.ui[this._widgetName].prototype[name] === "function"
                && name !== "dataSource") {
                Object.defineProperty(that, name, {
                    get: that.createMethodGetter(name)
                });
            }
        }
        //events binding
        for (var propt in jQuery.ui[this._widgetName].prototype.events) {
            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(this._el).on(evtName, function (evt, ui) {
                var emmiter = that._evtEmmiters[that._events[evt.type]];
                emmiter.emit({ event: evt, ui: ui });
            });
        }
        jQuery(this._el).attr("id", this.widgetId);
        jQuery(this._el)[this._widgetName](this.options);
    };
    IgControlBase.prototype.createMethodGetter = function (name) {
        return function () {
            var widget = jQuery(this._el).data(this._widgetName);
            return jQuery.proxy(widget[name], widget);
        };
    };
    IgControlBase.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._optsDiffer) {
            var changes = this._optsDiffer.diff(this.options);
            if (changes) {
                changes.forEachChangedItem(function (change) {
                    _this[change.key] = change.currentValue;
                });
            }
        }
    };
    IgControlBase.prototype.ngOnChanges = function (changes) {
        var opts = "options";
        if (opts in changes) {
            var value = changes[opts].currentValue;
            //options have been changed. Destroy and re-create widget.
            if (jQuery(this._el).data(this._widgetName)) {
                jQuery(this._el)[this._widgetName]("destroy");
                jQuery(this._el)[this._widgetName](this.options);
            }
            try {
                this._optsDiffer = this.kvalDiffers.find({}).create();
            }
            catch (e) {
                throw new Error("Only binding to object is supported for options property.");
            }
        }
    };
    IgControlBase.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    IgControlBase.prototype.convertToCamelCase = function (str) {
        //convert hyphen to camelCase
        return str.replace(/-([a-z])/g, function (group) {
            return group[1].toUpperCase();
        });
    };
    IgControlBase.prototype.ngOnDestroy = function () {
        jQuery(this._el)[this._widgetName]("destroy");
        jQuery(this._el).remove();
        jQuery(this._nativeElement).remove();
    };
    IgControlBase.propDecorators = {
        "options": [{ type: core_1.Input },],
    };
    return IgControlBase;
}());
exports.IgControlBase = IgControlBase;
//# sourceMappingURL=igcontrolbase.js.map