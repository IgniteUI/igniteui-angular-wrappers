import { ElementRef, EventEmitter } from "@angular/core";

declare var jQuery: any;

export class Feature<Model> {
    public _el: any;
    public _settings: any = {};
    public initSettings: Model;
    public name: string;
    private _events: any;
    private featureName: string;

    constructor(el: ElementRef) {
        this._el = el;
        this.name = this.normalizeName(el.nativeElement.nodeName.toLowerCase());
        this.featureName = "igGrid" + this.name;
        for (var propt in jQuery.ui["igGrid" + this.name].prototype.events) {
            this[propt] = new EventEmitter();
        }
    }

    ngOnInit() {
        let self = this;
        this.initSettings = jQuery.extend(true, {}, this);
        let evtName;
        this._events = new Map<string, string>();
        let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table");

        //event binding for features
        for (var propt in jQuery.ui[this.featureName].prototype.events) {
            evtName = this.featureName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(grid).on(evtName, function (evt, ui) {
                self[self._events[evt.type]].emit({ event: evt, ui: ui });
            });
        }
        for (var setting in jQuery.ui[this.featureName].prototype.options) {
            Object.defineProperty(self, setting, {
                set: self.createFeatureSetter(setting),
                get: self.createFeatureGetter(setting),
                enumerable: true,
                configurable: true
            });
        }
        var propNames = Object.getOwnPropertyNames(jQuery.ui[this.featureName].prototype);
        for (var i = 0; i < propNames.length; i++) {
            var name = propNames[i];
            if (name.indexOf("_") !== 0 && typeof jQuery.ui[this.featureName].prototype[name] === "function") {
                Object.defineProperty(self, name, {
                    get: self.createMethodGetter(name)
                });
            }
        }
    }

    createFeatureSetter(name) {
        return function (value) {
            let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table[role='grid']");
            this._settings[name] = value;

            if (jQuery.ui[this.featureName] &&
                jQuery.ui[this.featureName].prototype.options &&
                jQuery.ui[this.featureName].prototype.options.hasOwnProperty(name) &&
                grid.data(this.featureName)) {
                grid[this.featureName]("option", name, value);
            }
        }
    }

    createFeatureGetter(name) {
        return function () {
            return this._settings[name];
        }
    }
    createMethodGetter(name) {
        return function () {
            let grid = jQuery(this._el.nativeElement).closest("ig-grid").find("table[role='grid']");
            if (grid.length === 0) {
                grid = jQuery(this._el.nativeElement).closest("ig-hierarchical-grid").find("table[role='grid']");
            }
            var args = [];
            var feature = grid.data(this.featureName);
            return jQuery.proxy(feature[name], feature);
        }
    }

    normalizeName(str) {
        //convert hyphen to camelCase
        let name = str.replace(/-([a-z])/g, function (group) {
            return group[1].toUpperCase();
        })
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}