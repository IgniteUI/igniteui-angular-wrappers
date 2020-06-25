import { ElementRef, EventEmitter, Directive, OnInit } from '@angular/core';

declare var jQuery: any;

@Directive()
export class Feature<Model> implements OnInit {
    public _el: any;
    public _settings: any = {};
    public initSettings: Model;
    public name: string;
    private _events: any;
    private featureName: string;

    constructor(el: ElementRef) {
        this._el = el;
        this.name = this.normalizeName(el.nativeElement.nodeName.toLowerCase());
        this.featureName = 'igGrid' + this.name;
        for (const propt in jQuery.ui['igGrid' + this.name].prototype.events) {
          if (jQuery.ui['igGrid' + this.name].prototype.events.hasOwnProperty(propt)) {
            this[propt] = new EventEmitter();
          }
        }
    }

    cloneObject(obj: any): any {
        const clone = {};
        for (const i in obj) {
            if (obj[i] != null) {
                if (!i.startsWith('_') && typeof obj[i] === 'object') {
                    clone[i] = this.cloneObject(obj[i]);
                } else {
                    clone[i] = obj[i];
                }
            }
        }
        return clone;
    }

    ngOnInit() {
        const self = this;
        this.initSettings = this.cloneObject(this);
        let evtName;
        this._events = new Map<string, string>();
        const grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table');

        // event binding for features
        for (const propt in jQuery.ui[this.featureName].prototype.events) {
          if (jQuery.ui[this.featureName].prototype.events.hasOwnProperty(propt)) {
            evtName = this.featureName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(grid).on(evtName, (evt, ui) => {
                this[this._events[evt.type]].emit({ event: evt, ui });
            });
          }
        }
        for (const setting in jQuery.ui[this.featureName].prototype.options) {
          if (jQuery.ui[this.featureName].prototype.options.hasOwnProperty(setting)) {
            Object.defineProperty(this, setting, {
                set: this.createFeatureSetter(setting),
                get: this.createFeatureGetter(setting),
                enumerable: true,
                configurable: true
            });
          }
        }
        const propNames = Object.getOwnPropertyNames(jQuery.ui[this.featureName].prototype);
        propNames.forEach(name => {
          if (name.indexOf('_') !== 0 && typeof jQuery.ui[this.featureName].prototype[name] === 'function') {
              Object.defineProperty(self, name, {
                  get: this.createMethodGetter(name)
              });
          }
        });
    }

    createFeatureSetter(name) {
        return function(value) {
            const grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table[role=\'grid\']');
            this._settings[name] = value;

            if (jQuery.ui[this.featureName] &&
                jQuery.ui[this.featureName].prototype.options &&
                jQuery.ui[this.featureName].prototype.options.hasOwnProperty(name) &&
                grid.data(this.featureName)) {
                grid[this.featureName]('option', name, value);
            }
        };
    }

    createFeatureGetter(name) {
        return () => {
            return this._settings[name];
        };
    }
    createMethodGetter(name) {
        return () => {
            let grid = jQuery(this._el.nativeElement).closest('ig-grid').find('table[role=\'grid\']');
            if (grid.length === 0) {
                grid = jQuery(this._el.nativeElement).closest('ig-hierarchical-grid').find('table[role=\'grid\']');
            }
            const feature = grid.data(this.featureName);
            return jQuery.proxy(feature[name], feature);
        };
    }

    normalizeName(str) {
        // convert hyphen to camelCase
        const name = str.replace(/-([a-z])/g, group => group[1].toUpperCase());
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
