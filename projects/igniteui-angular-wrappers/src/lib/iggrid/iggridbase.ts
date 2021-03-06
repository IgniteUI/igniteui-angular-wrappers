import { IgControlBase } from '../igcontrolbase/igcontrolbase';
import {
  AfterContentInit,
  QueryList,
  ContentChild,
  ContentChildren,
  ElementRef,
  KeyValueDiffers,
  IterableDiffers,
  SimpleChanges,
  Input,
  ChangeDetectorRef,
  Renderer2,
  Directive,
  OnInit,
  OnChanges,
  DoCheck
} from '@angular/core';
import { Column } from './column.directive';
import { Features } from './features.directive';

@Directive()
export class IgGridBase<Model> extends IgControlBase<Model> implements AfterContentInit, OnInit, OnChanges, DoCheck {
    @Input()
    public set dataSource(value: any) {
        this._dataSource = value;
        const grid = jQuery(this._el).data(this._widgetName);
        if (grid) {
            jQuery(this._el)[this._widgetName]('option', 'dataSource', this._dataSource);
        }
    }
    @Input()
    public primaryKey: string;

    protected _changes: any;
    @ContentChildren(Column) _columns: QueryList<Column>;
    @ContentChild(Features, {static: true}) featuresList: Features;
    private _dataSource;

    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }

    ngOnInit() {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options.dataSource;
        }
        if (!this.options.dataSource && this._dataSource) {
            this.options.dataSource = this._dataSource;
        }
    }
    ngAfterContentInit() {
        if (this._columns && this._columns.length) {
            if (this.options) {
                this.options.columns = this._columns.map((c) => c._settings);
            }
        }
        if (this.featuresList) {
            if (this.options) {
                this.options.features = this.featuresList.allFeatures.map((c) => c.initSettings);
            }
        }
        if (this.options && this.options.features && !this.featuresList) {
            this.featuresList = new Features();
            // populate featuresList
            this.options.features.forEach(feature => {
                const featureName = feature.name.charAt(0).toLowerCase() + feature.name.slice(1);
                this.featuresList.addFeature(featureName, this._el);
            });
        }
        super.ngOnInit();
    }

    createDataSource(value: any) {
        return jQuery.extend(true, [], value);
    }

    deleteRow(id, index) {
        const element = jQuery(this._el);
        const tr = element.find('tr[data-id=\'' + id + '\']');

        if (tr.length > 0) {
            tr.remove();
            jQuery(this._el).data(this._widgetName).dataSource.deleteRow(id, true);
            jQuery(this._el).data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
        }
        this._changes.splice(index, 1);
    }

    addRow(rowData, index) {
        let grid;
        const pkKey = this.primaryKey || this.options.primaryKey;
        const existingDomRow = jQuery(this._el).find('tr[data-id=\'' + rowData[pkKey] + '\']');
        let widgetName = this._widgetName;
        let existingRow;
        let t;

        if (this._widgetName === 'igHierarchicalGrid') {
            widgetName = 'igGrid';
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
            // add transaction
            t = grid.dataSource._createNewRowTransaction(rowData[pkKey], rowData);
            grid.dataSource._addTransaction(t);
            grid.dataSource._removeTransactionByTransactionId(t.tid);
        }
        this._changes.push(this.kvalDiffers.find({}).create());
    }
    updateRow(rec, currValue, key) {
        const pkKey = this.primaryKey || this.options.primaryKey;
        let widgetName = this._widgetName;
        if (this._widgetName === 'igHierarchicalGrid') {
            widgetName = 'igGrid';
        }
        const element = jQuery(this._el);
        const grid = element.data(widgetName);
        const column = grid.columnByKey(key);
        let newFormattedVal;
        let td;
        if (column) {
            if (column.template) {
                newFormattedVal = grid._renderTemplatedCell(rec, column);
            } else {
                newFormattedVal = grid._renderCell(currValue, column, rec);
            }
            td = grid._getCellsByColKey(element.find('tr[data-id=\'' + rec[pkKey] + '\']'), key);
            // if current cell is still in edit mode, exit it.
            if (jQuery(td).find('input.ui-igedit-input').length > 0) {
                element.data('igGridUpdating').endEdit();
            }
            jQuery(td).html(newFormattedVal);
            if (grid.options.localSchemaTransform) {
                rec = grid.dataSource.schema().transform([rec])[0];
            }

            grid.dataSource.updateRow(rec[pkKey], rec);
            grid.dataSource._commitTransactionsByRowId(rec[pkKey]);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const ds = 'dataSource';
        if (ds in changes) {
            const value = changes[ds].currentValue;
            if (value) {
                try {
                    this._differ = this._differs.find(value).create();
                    this._changes = [];
                    this._dataSource.forEach(item => {
                      this._changes.push(this.kvalDiffers.find({}).create());
                    });
                } catch (e) {
                    throw new Error('Only binding to arrays is supported.');
                }
            }
        }
        super.ngOnChanges(changes);
    }
    ngDoCheck() {
        if (this._differ) {
            const changes = this._differ.diff(this._dataSource);
            // check if grid is initialized
            const grid = jQuery(this._el).data(this._widgetName);
            if (changes && grid) {
                this.dataSourceApplyChanges(changes);
            }
            if (changes && changes.isDirty && grid) {
                // data source has been changed post initialization.
                jQuery(this._el)[this._widgetName]('option', 'dataSource', this._dataSource);
            }
            if (this._changes && grid) {
                const pkKey = this.primaryKey || this.options.primaryKey;
                // check recs
                for (let i = 0; i < this._dataSource.length; i++) {
                    const item = this._dataSource[i];
                    const rowChanges = this._changes[i].diff(item);
                    if (rowChanges) {
                        rowChanges.forEachChangedItem((change: any) => {
                            this.updateRow(item, change.currentValue, change.key);
                        });
                    }
                }
            }
        }
        super.ngDoCheck();
    }
    public dataSourceApplyChanges(changes) {
        const pkKey = this.primaryKey || this.options.primaryKey;
        changes.forEachAddedItem(r => this.addRow(r.item, r.currentIndex));
        changes.forEachRemovedItem(r => { this.deleteRow(r.item[pkKey], r.previousIndex); });
    }

    allRows() { }
}
