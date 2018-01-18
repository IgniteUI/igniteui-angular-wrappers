import { ElementRef, EventEmitter, Renderer, IterableDiffers, DoCheck } from '@angular/core';

declare var jQuery: any;

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

export class IgControlBase<Model> implements DoCheck {
	private _differs: any;
	protected _opts: any = {};
	protected _el: any;
	protected _widgetName: string;
	protected _differ: any;
	protected _config: any;
	protected _events: Map<string, string>;
	protected _allowChangeDetection = true;
	private _evtEmmiters : any = {};
	private _changeDetectionInterval: any;
	private _nativeElement:any;

	set options(v: Model) {
		if (this._config !== undefined && this._config !== null) {
			//if the options are alrealy set recreate the component
			jQuery(this._el)[this._widgetName]("destroy");
			this._config = jQuery.extend(false, this._config, v);
			jQuery(this._el)[this._widgetName](this._config);
		} else {
			this._config = jQuery.extend(true, v, this._opts);
			if (this._opts.dataSource) {
				// _config.dataSource should reference the data if the data is set as a top-level opts
				// to allow two-way data binding
				this._config.dataSource = this._opts.dataSource;
			}
			this._differ = this._differs.find([]).create(null);
		}
		this._opts = jQuery.extend(true, {}, this._config);
		if (this._opts.dataSource) {
			delete this._opts.dataSource;
		}
	};
	public widgetId: string;
	public changeDetectionInterval: number;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		this._differs = differs;
		this._nativeElement = el.nativeElement;
		this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase());//ig-grid -> igGrid
		this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));

		for (var opt in jQuery.ui[this._widgetName].prototype.options) {
			Object.defineProperty(this, opt, {
				set: this.createSetter(opt),
				enumerable: true,
				configurable: true
			});
		}

		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			this[propt] = new EventEmitter();
			//cahcing the event emmitters for cases when the event name is the same as a method name.
			this._evtEmmiters[propt] = this[propt];
		}
	}

	createSetter(name) {
		return function (value) {
			this._opts[name] = value;
			if (this._config) {
				this._config[name] = value;
			}
			if (jQuery.ui[this._widgetName] &&
				jQuery.ui[this._widgetName].prototype.options &&
				jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(name) &&
				jQuery(this._el).data(this._widgetName)) {
				jQuery(this._el)[this._widgetName]("option", name, value);
				if(name === "dataSource" && typeof this.createDataSource === 'function') {
          this._dataSource = this.createDataSource(value);
				}
			}
		}
	}

	ngOnInit() {
		var evtName;
		this._events = new Map<string, string>();

		//events binding
		let that = this;

		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(this._el).on(evtName, function (evt, ui) {
				var emmiter = that._evtEmmiters[that._events[evt.type]];
				emmiter.emit({ event: evt, ui: ui });
			});
		}
		var propNames = Object.getOwnPropertyNames(jQuery.ui[this._widgetName].prototype);
		for(var i = 0; i < propNames.length; i++) {
			var name = propNames[i];
			if(name.indexOf("_") !== 0 && typeof jQuery.ui[this._widgetName].prototype[name] === "function"){
				Object.defineProperty(that, name, {
					get: that.createMethodGetter(name)
				});
			}
		}

		

		if (this.changeDetectionInterval === undefined || this.changeDetectionInterval === null) {
			this.changeDetectionInterval = 500;
		}

		this._changeDetectionInterval = setInterval(function () {
			that._allowChangeDetection = true;
		}, this.changeDetectionInterval);

		jQuery(this._el).attr("id", this.widgetId);
		if (this._config === null || this._config === undefined) {
			//if there is no config specified in the component template use the defined top-level options for a configuration
			//by invoking the setter of options property
			this.options = this._opts;
		}
		jQuery(this._el)[this._widgetName](this._config);
	}
	createMethodGetter(name) {
		return function () {
			var widget = jQuery(this._el).data(this._widgetName);
			return jQuery.proxy(widget[name], widget);
		}
	}

	ngDoCheck() {
		if (this._allowChangeDetection) {
			this._allowChangeDetection = false;
			this.optionChange();
		}
	}

	optionChange(options?) {
		if (this._differ != null) {
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, option;
			var opts = options || jQuery.extend(true, {}, this._config);
			if (opts.dataSource) {
				delete opts.dataSource;
			}

			if (!this.equalsDiff(opts, this._opts, diff)) {
				this._opts = jQuery.extend(true, {}, opts);
				for (i = 0; i < diff.length; i++) {
					option = diff[i].key;
					if (jQuery.ui[this._widgetName] &&
						jQuery.ui[this._widgetName].prototype.options &&
						jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(option) &&
						jQuery(this._el).data(this._widgetName)) {
						jQuery(this._el)[this._widgetName]("option", option, diff[i].newVal);
					}
				}
			}
		}
	}

	// Interrogation functions
	isDate(value) {
		return Object.prototype.toString.call(value) === "[object Date]";
	}

	isRegExp(value) {
		return Object.prototype.toString.call(value) === "[object RegExp]";
	}

	isScope(obj) {
		return obj && obj.jQueryevalAsync && obj.jQuerywatch;
	}

	isWindow(obj) {
		return obj && obj.document && obj.location && obj.alert && obj.setInterval;
	}

	isFunction(value) { return typeof value === "function"; }

	isArray(value) {
		return Object.prototype.toString.call(value) === "[object Array]";
	}

	equalsDiff(o1, o2, diff?) {
		if (o1 === o2) { return true; }
		if (o1 === null || o2 === null) { return false; }
		if (o1 !== o1 && o2 !== o2) { return true; }// NaN === NaN
		var isDOMnode = typeof Node === "object" ? o1 instanceof Node : 
				o1 && typeof o1 === "object" && typeof o1.nodeType === "number" && typeof o1.nodeName==="string",
		isDOMelement = typeof HTMLElement === "object" ? o1 instanceof HTMLElement : 
				o1 && typeof o1 === "object" && o1 !== null && o1.nodeType === 1 && typeof o1.nodeName==="string"
		if (isDOMnode || isDOMelement) {
			return;
		}
		var t1 = typeof o1, t2 = typeof o2, length, key, keySet, dirty, skipDiff = false, changedVals = [];
		if (t1 === t2) {
			if (t1 === "object") {
				if (this.isArray(o1)) {
					if (!this.isArray(o2)) { return false; }
					if ((length = o1.length) === o2.length) {
						if (!this.isArray(diff)) {
							skipDiff = true;
						}
						for (key = 0; key < length; key++) {
							// we are comparing objects here
							if (!this.equalsDiff(o1[key], o2[key], changedVals)) {
								dirty = true;
								if (!skipDiff) {
									diff.push({ index: key, txlog: changedVals });
								}
							}
						}
						if (dirty) {
							return false;
						}
						return true;
					}
				} else if (this.isDate(o1)) {
					return this.isDate(o2) && o1.getTime() === o2.getTime();
				} else if (this.isRegExp(o1) && this.isRegExp(o2)) {
					return o1.toString() === o2.toString();
				} else {
					if (this.isScope(o1) || this.isScope(o2) || this.isWindow(o1) || this.isWindow(o2) || this.isArray(o2)) { return false; }
					keySet = {};
					if (!this.isArray(diff)) {
						skipDiff = true;
					}
					for (key in o1) {
						if (key.charAt(0) === "jQuery" || this.isFunction(o1[key])) { continue; }
						if (!this.equalsDiff(o1[key], o2[key])) {
							dirty = true;
							if (!skipDiff) {
								diff.push({ key: key, oldVal: o2[key], newVal: o1[key] });
							}
						}
						keySet[key] = true;
					}
					for (key in o2) {
						if (!keySet.hasOwnProperty(key) &&
							key.charAt(0) !== "jQuery" &&
							o2[key] !== undefined &&
							!this.isFunction(o2[key])) { return false; }
					}
					if (dirty) {
						return false;
					}
					return true;
				}
			}
		}
		return false;
	}

	convertToCamelCase(str) {
		//convert hyphen to camelCase
		return str.replace(/-([a-z])/g, function (group) {
			return group[1].toUpperCase();
		});
	}

	ngOnDestroy() {
		clearInterval(this._changeDetectionInterval);
		jQuery(this._el)[this._widgetName]("destroy");
		jQuery(this._el).remove();
		jQuery(this._nativeElement).remove();
	}
}