/// <reference path="jquery.d.ts" />
/// <reference path="igniteui.d.ts" />
/// <reference path="./../typings/main.d.ts"/>

import {Component, Directive, Inject, ElementRef, EventEmitter, Output, Input, Query, QueryList, Renderer, OnChanges, NgZone,
	SimpleChange, ChangeDetectionStrategy, IterableDiffers, DoCheck, Optional} from 'angular2/core';
import {NgModel, ControlValueAccessor} from 'angular2/common';

declare var jQuery:any;
declare var Reflect:any;

var NODES = {
	"ig-text-editor": "input",
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
	"ig-qrcode-barcode": "div",
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
	"ig-tile-manager": "div"
};

const _reflect: any = Reflect;

export function IgComponent(args: any = {}) {

	return function (cls) {
		// get current annotations
		let annotations = _reflect.getMetadata('annotations', cls) || [];

		var sel = cls.name
			//transform Uppercase to dash + LowerCase letter
			.replace(/([A-Z])/g, (group) => { return "-" + group[0].toLowerCase(); })
			//remove first dash and "-component"
			.slice(1).replace("-component", "");

		args.selector = sel;
		args.template = "<ng-content></ng-content>";
		args.inputs = ["options.columns:columns", "options.width:width", "options:height:height", "options:dataSource:dataSource", "options.dataSource[0].Name:dataSource[0].Name"];

		var contrName = sel.replace(/-([a-z])/g, function (group) {
			return group[1].toUpperCase();
		});

		var evt = [];
		if (jQuery.ui[contrName]) {
			for (var propt in jQuery.ui[contrName].prototype.events) {
				evt.push(propt);
			}
			args.events = evt;
		}
		annotations.push(new Component(args));
		// redefine with added annotations
		_reflect.defineMetadata('annotations', annotations, cls);

		return cls;
	}
}

export class IgControlBase<Model> implements DoCheck {
	private _opts: any;
	private _differs: any;
	protected _el: any;
	protected _widgetName: string;
	protected _differ: any;
	protected _config: any;
	protected _events: Map<string, string>;
	@Input() set options(v: Model) {
		this._config = v;
		this._differ = this._differs.find([]).create(null);
		this._opts = JSON.parse(JSON.stringify(this._config));
		if (this._opts.dataSource) {
			delete this._opts.dataSource;
		}
	};
	@Input() widgetId: string;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		this._differs = differs;
		this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase());//ig-grid -> igGrid
		this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));

		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			this[propt] = new EventEmitter();
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
				that[that._events[evt.type]].emit({ event: evt, ui: ui });
			});
		}

		jQuery(this._el).attr("id", this.widgetId);
		jQuery(this._el)[this._widgetName](this._config);
	}

	ngDoCheck() {
		this.optionChange();
	}

	optionChange() {
		if (this._differ != null) {
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, option;
			var opts = JSON.parse(JSON.stringify(this._config));
			if (opts.dataSource) {
				delete opts.dataSource;
			}

			if (!this.equalsDiff(opts, this._opts, diff)) {
				this._opts = JSON.parse(JSON.stringify(opts));
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
}

export class IgGridBase<Model> extends IgControlBase<Model> {
	protected _dataSource: any;
	protected _changes: any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
		super.ngOnInit();
		this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
	}

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']");

		if (tr.length > 0) {
			tr.remove();
			jQuery(this._el).data(this._widgetName).dataSource.deleteRow(id, true);
            jQuery(this._el).data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
		}
	}

	addRow(rowData, index) {
		var grid, existingDomRow = jQuery(this._el).find("tr[data-id='" + rowData[this._config.primaryKey] + "']"),
			pkKey = this._config.primaryKey,
			widgetName = this._widgetName, existingRow, t;

		if (this._widgetName === "igHierarchicalGrid") {
			widgetName = "igGrid";
		}

		grid = jQuery(this._el).data(widgetName);

		if (existingDomRow.length === 0) {
			grid.renderNewRow(rowData, rowData[pkKey]);
		}

		existingRow = grid.dataSource.findRecordByKey(rowData[pkKey]);
		if (!existingRow) {
			// add the row without affecting the original DS (scope source) 
			// TODO: trigger rowAdded event?
			grid.dataSource._addRow(rowData, index);
			//add transaction
			t = grid.dataSource._createNewRowTransaction(rowData[pkKey], rowData);
			grid.dataSource._addTransaction(t);
			grid.dataSource._removeTransactionByTransactionId(t.tid);
		}
	}

	ngDoCheck() {
		this.optionChange();
		if (this._differ != null) {
			var diff = [],
			element = jQuery(this._el),
			grid = element.data(this._widgetName),
			colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				if (this._changes) {
					this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
					this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]))
				}
			}
			//check for changes in values
			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						colIndex = element.data(this._widgetName)._getCellIndexByColumnKey(diff[i].txlog[j].key);
						record = this._config.dataSource[diff[i].index];
						td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);

						column = element.data(this._widgetName).columnByKey(diff[i].txlog[j].key);
						if (column) {
							if (column.template) {
								newFormattedVal = grid._renderTemplatedCell(diff[i].txlog[j].newVal, column).substring(1);
							} else {
								newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
							}
							jQuery(td).html(newFormattedVal);
							grid.dataSource.updateRow(record[pkKey], record);
							grid.dataSource._commitTransactionsByRowId(record[pkKey]);
						}
					}
				}
			}
		}
	}
}

@IgComponent()
export class IgGridComponent extends IgGridBase<IgGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
}

@IgComponent()
export class IgTreeGridComponent extends IgGridBase<IgTreeGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']");
		if (tr.length > 0) {
			tr.remove();
			element.data(this._widgetName).dataSource.deleteRow(id, true);
			element.data(this._widgetName).dataSource._removeTransactionsByRecordId(id);

			if (tr.attr("aria-owns")) {
				jQuery(tr.attr("aria-owns").split(" ")).each(function () {
					jQuery("#" + this).remove();
				});
			}
		}
	}
}

@IgComponent()
export class IgHierarchicalGridComponent extends IgGridBase<IgHierarchicalGrid> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	deleteRow(id) {
		var element = jQuery(this._el),
			tr = element.find("tr[data-id='" + id + "']"),
			childContainer = tr.next("tr[data-container]");

		if (tr.length > 0) {
			tr.remove();
			childContainer.remove();
			element.data("igGrid").dataSource.deleteRow(id, true);
			element.data("igGrid").dataSource._removeTransactionsByRecordId(id);
		}
	}

	ngDoCheck() {
		this.optionChange();
		if (this._differ != null) {
			var diff = [],
			element = jQuery(this._el),
			colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column,
			mainGrid = element.data("igGrid"),
			data = this._config.dataSource;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				if (this._changes) {
					this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
					this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]))
				}
			}
			//check for changes in values
			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						var childGrid = element.data(this._widgetName).allChildrenWidgets().filter(function (indx) {
							var parentRow = jQuery(this.element).closest('tr[data-container]').prev();
							var parentGridPK = parentRow.closest(".ui-iggrid-table").data("igGrid").options.primaryKey;
							return this.options.childrenDataProperty === diff[i].txlog[j].key && parentRow.attr("data-id") == data[diff[i].index][parentGridPK];
						});
						if (childGrid.length > 0) {
							jQuery(childGrid).each(function () {
								this.dataBind();
							});
						} else {
							colIndex = mainGrid._getCellIndexByColumnKey(diff[i].txlog[j].key);
							record = this._config.dataSource[diff[i].index];
							td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);

							column = mainGrid.columnByKey(diff[i].txlog[j].key);
							if (column) {
							if (column.template) {
								newFormattedVal = mainGrid._renderTemplatedCell(diff[i].txlog[j].newVal, column).substring(1);
							} else {
								newFormattedVal = mainGrid._renderCell(diff[i].txlog[j].newVal, column, record);
							}
								jQuery(td).html(newFormattedVal);
								mainGrid.dataSource.updateRow(record[pkKey], record);
								mainGrid.dataSource._commitTransactionsByRowId(record[pkKey]);
							}
						}
					}
				}
			}
		}
	}
}

@IgComponent()
export class IgComboComponent extends IgControlBase<IgCombo> implements ControlValueAccessor {
	protected _model: any;
	private _dataSource: any;
	private _changes: any;

	constructor( @Optional() public model: NgModel, el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
		if (model) {
			model.valueAccessor = this;
			this._model = model;
		}
	}

	ngOnInit() {
		let that = this;
		super.ngOnInit();
		jQuery(this._el).on(this._widgetName.toLowerCase() + "selectionchanged", function (evt, ui) {
			var items = ui.items;
			if (items.length > 0) {
				that._model.viewToModelUpdate(items[0].data[that._config.valueKey]);
			}
		});
		this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
	}
	writeValue(value) {
		if (!!jQuery(this._el).data(this._widgetName)) {
			jQuery(this._el)[this._widgetName]("value", value);
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: () => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	ngDoCheck() {
		this.optionChange();
		if (this._differ != null) {
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				if (this._changes) {
					this._changes.forEachAddedItem(r => element.data("igCombo").dataBind());
					this._changes.forEachRemovedItem(r => element.data("igCombo").dataBind())
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						record = this._config.dataSource[diff[i].index];
						item = element.data("igCombo").itemsFromIndex(diff[i].index);
						element.data("igCombo")._updateItem(item.element, record);
						if (element.data("igCombo").isSelected(item.element)) {
							//should update the input
							element.data("igCombo")._updateInputValues(false);
						}
					}
				}
			}
		}
	}
}

export class IgEditorBase<Model> extends IgControlBase<Model> implements ControlValueAccessor {
	protected _model: any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) {
		super(el, renderer, differs);
		if (model) {
			model.valueAccessor = this;
			this._model = model;
		}
	}

	ngOnInit() {
		let that = this;
		super.ngOnInit();
		if (this._model) {
			jQuery(this._el).on(this._widgetName.toLowerCase() + "valuechanged", function (evt, ui) {
				that._model.viewToModelUpdate(ui.newValue);
			});
		}
	}

	writeValue(value: any) {
		if (!!jQuery(this._el).data(this._widgetName) && value !== null) {
			jQuery(this._el)[this._widgetName]("value", value);
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
}

//Editors
@IgComponent()
export class IgCheckboxEditorComponent extends IgEditorBase<IgCheckboxEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgCurrencyEditorComponent extends IgEditorBase<IgCurrencyEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgDateEditorComponent extends IgEditorBase<IgDateEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgDatePickerComponent extends IgEditorBase<IgDatePicker> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgMaskEditorComponent extends IgEditorBase<IgMaskEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgNumericEditorComponent extends IgEditorBase<IgNumericEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgPercentEditorComponent extends IgEditorBase<IgPercentEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgTextEditorComponent extends IgEditorBase<IgTextEditor> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); } }

@IgComponent()
export class IgTreeComponent extends IgControlBase<IgTree> {
	private _dataSource:any;
	private _changes:any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
		super.ngOnInit();
		this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
	}

	ngDoCheck() {
		this.optionChange();
		if (this._differ != null) {
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				if (this._changes) {
					this._changes.forEachAddedItem(r => element.igTree("dataBind"));
					this._changes.forEachRemovedItem(r => element.igTree("dataBind"));
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
				element.igTree("dataBind");
			}
		}
	}
}

export class IgContentControlBase<Model> extends IgControlBase<Model> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
		jQuery(this._el).append(el.nativeElement.childNodes);
	}
}

@IgComponent()
export class IgDialogComponent extends IgContentControlBase<IgDialog> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgSplitterComponent extends IgContentControlBase<IgSplitter> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgLayoutManagerComponent extends IgContentControlBase<IgLayoutManager> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgTileManagerComponent extends IgContentControlBase<IgTileManager> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgHtmlEditorComponent extends IgControlBase<IgHtmlEditor> implements ControlValueAccessor { 
    protected _model: any;
    protected _zone: any;
    constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel, private zone:NgZone ) { super(el, renderer, differs);
        if (model) {
			model.valueAccessor = this;
            this._zone = zone;
			this._model = model;
		}    
     }
    ngOnInit() {
		super.ngOnInit();
        let that = this;
        if (this._model) {
             var iframe=jQuery(this._el).find("iframe")[0].contentWindow.document;
			jQuery(iframe).find("body[contenteditable=true]").on("keyup", function (evt, ui) {
				that._model.viewToModelUpdate(jQuery(evt.target).html());       
                that._zone.run(() => {
                        that._model.viewToModelUpdate(jQuery(evt.target).html());
                    });
			});
		}
		
	}
    writeValue(value: any) {       
		if (!!jQuery(this._el).data(this._widgetName) && value !== null && value !== jQuery(this._el)[this._widgetName]("getContent","html")) {
			jQuery(this._el)[this._widgetName]("setContent", value, "html");
		}
	}

	onChange = (_: any) => {
	};
	onTouched = () => {
	};

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
 }


@IgComponent()
export class IgValidatorComponent extends IgControlBase<IgValidator> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var evtName;
		this._el = jQuery(document).find("#" + this.widgetId);
		jQuery(this._el)[this._widgetName](this._config);
		
		//events binding
		let that = this;
		for (var propt in jQuery.ui[this._widgetName].prototype.events) {
			evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
			this._events[evtName] = propt;
			jQuery(this._el).on(evtName, function (evt, ui) {
				that[that._events[evt.type]].emit({ event: evt, ui: ui });
			});
		}
	}
}

//Pivot Grids
@IgComponent()
export class IgPivotDataSelectorComponent extends IgControlBase<IgPivotDataSelector> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgPivotGridComponent extends IgControlBase<IgPivotGrid> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

//Charts
@IgComponent()
export class IgDataChartComponent extends IgControlBase<IgDataChart> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgPieChartComponent extends IgControlBase<IgPieChart> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgDoughnutChartComponent extends IgControlBase<IgDoughnutChart> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgFunnelChartComponent extends IgControlBase<IgFunnelChart> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgRadialGaugeComponent extends IgControlBase<IgRadialGauge> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgZoombarComponent extends IgControlBase<IgZoombar> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgMapComponent extends IgControlBase<IgMap> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgSparklineComponent extends IgControlBase<IgSparkline> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgBulletGraphComponent extends IgControlBase<IgBulletGraph> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgLinearGaugeComponent extends IgControlBase<IgLinearGauge> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgQRCodeBarcodeComponent extends IgControlBase<IgQRCodeBarcode> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

//Others
@IgComponent()
export class IgUploadComponent extends IgControlBase<IgUpload> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgPopoverComponent extends IgControlBase<IgPopover> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var elem = jQuery(document).find("#" + this.widgetId);
		if (elem.length === 1) {
			this._el = elem;
			//events binding
			let that = this;
			var evtName;
			for (var propt in jQuery.ui[this._widgetName].prototype.events) {
				evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
				this._events[evtName] = propt;
				jQuery(this._el).on(evtName, function (evt, ui) {
					that[that._events[evt.type]].emit({ event: evt, ui: ui });
				});
			}

			jQuery(this._el)[this._widgetName](this._config);
		} else {
			super.ngOnInit();
		}

	}
}

@IgComponent()
//TODO: change the model from any to IgNotifier when added to igniteui typescript definitions
export class IgNotifierComponent extends IgControlBase<any> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) {
		super(el, renderer, differs);
	}

	ngOnInit() {
		var elem = jQuery(document).find("#" + this.widgetId);
		if (elem.length === 1) {
			this._el = elem;

			//events binding
			let that = this;
			var evtName;
			for (var propt in jQuery.ui[this._widgetName].prototype.events) {
				evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
				this._events[evtName] = propt;
				jQuery(this._el).on(evtName, function (evt, ui) {
					that[that._events[evt.type]].emit({ event: evt, ui: ui });
				});
			}

			jQuery(this._el)[this._widgetName](this._config);
		} else {
			super.ngOnInit();
		}
	}
}

@IgComponent()
export class IgRatingComponent extends IgControlBase<IgRating> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgVideoPlayerComponent extends IgControlBase<IgVideoPlayer> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgRadialMenuComponent extends IgControlBase<IgRadialMenu> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }

@IgComponent()
export class IgSplitButtonComponent extends IgControlBase<IgSplitButton> { constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } }