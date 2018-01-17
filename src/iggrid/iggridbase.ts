import {IgControlBase} from '../igcontrolbase/igcontrolbase';
import {AfterContentInit, QueryList, ContentChild, ContentChildren, ElementRef, Renderer, IterableDiffers} from '@angular/core';
import { Column } from './column.directive';
import { Features } from './features.directive';

export class IgGridBase<Model> extends IgControlBase<Model> implements AfterContentInit  {
	protected _dataSource: any;
	protected _changes: any;
	@ContentChildren(Column) _columns: QueryList<Column>;
	@ContentChild(Features) featuresList: Features;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
      this._dataSource = this._opts.dataSource ? 
	    jQuery.extend(true, [], this._opts.dataSource) :
        jQuery.extend(true, [], this._config.dataSource);
	}
	ngAfterContentInit() {
		if (this._columns && this._columns.length) {
			if (this._config) {
				this._config["columns"] = this._columns.map((c) => c._settings);
			} else {
				this._opts["columns"] = this._columns.map((c) => c._settings);
			}
		}
		if (this.featuresList){
			if (this._config) {
				this._config["features"] = this.featuresList.allFeatures.map((c) => { return c.initSettings;} );	
			} else{
				this._opts["features"] = this.featuresList.allFeatures.map((c) => { return c.initSettings;});
			}
		}
		if(this._config && this._config["features"] && !this.featuresList){
			this.featuresList = new Features();
			//populate featuresList
			for(var i=0; i < this._config["features"].length; i++){				
				var featureName = this._config["features"][i].name.charAt(0).toLowerCase() + this._config["features"][i].name.slice(1);				
				this.featuresList.addFeature(featureName, this._el);
			}
		}
		super.ngOnInit();
	}

	createDataSource(value: any) {
    return jQuery.extend(true, [], value);
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
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [],
				element = jQuery(this._el),
				grid = element.data(this._widgetName),
				td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;

			//check for changes in collection
			if (!(this._config.dataSource instanceof Array)) {
				return;
			}
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._changes && grid) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				this._changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
				this._changes.forEachRemovedItem(r => this.deleteRow(r.item[pkKey]));
			}
			//check for changes in values
			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				for (i = 0; i < diff.length; i++) {
					for (j = 0; j < diff[i].txlog.length; j++) {
						record = this._config.dataSource[diff[i].index];
						td = grid._getCellsByColKey(element.find("tr[data-id='" + record[pkKey] + "']"), diff[i].txlog[j].key);

						column = grid.columnByKey(diff[i].txlog[j].key);
						if (column) {
							if (column.template) {
								newFormattedVal = grid._renderTemplatedCell(record, column);
							} else {
								newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
							}
							//if current cell is still in edit mode, exit it.
							if (jQuery(td).find("input.ui-igedit-input").length > 0){
								element.data("igGridUpdating").endEdit();
							}
							jQuery(td).html(newFormattedVal);
							if (grid.options.localSchemaTransform) {
								record = grid.dataSource.schema().transform([record])[0];
							}
							grid.dataSource.updateRow(record[pkKey], record);
							grid.dataSource._commitTransactionsByRowId(record[pkKey]);
						}
					}
				}
			}
		}
	}
	allRows() { };

	optionChange(options?) {
		var opts = options || jQuery.extend(true, {}, this._config);
		// Columns are modified internally by the grid. Excluding them from the change detection
		if (opts.columns) {
			delete opts.columns;
		}
		super.optionChange(opts);
	}
}
