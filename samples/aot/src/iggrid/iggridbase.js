"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var core_1 = require("@angular/core");
var column_directive_1 = require("./column.directive");
var features_directive_1 = require("./features.directive");
var IgGridBase = /** @class */ (function (_super) {
    __extends(IgGridBase, _super);
    function IgGridBase(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgGridBase.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
            var grid = jQuery(this._el).data(this._widgetName);
            if (grid) {
                jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgGridBase.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
    };
    IgGridBase.prototype.ngAfterContentInit = function () {
        if (this._columns && this._columns.length) {
            if (this.options) {
                this.options["columns"] = this._columns.map(function (c) { return c._settings; });
            }
        }
        if (this.featuresList) {
            if (this.options) {
                this.options["features"] = this.featuresList.allFeatures.map(function (c) { return c.initSettings; });
            }
        }
        if (this.options && this.options["features"] && !this.featuresList) {
            this.featuresList = new features_directive_1.Features();
            //populate featuresList
            for (var i = 0; i < this.options["features"].length; i++) {
                var featureName = this.options["features"][i].name.charAt(0).toLowerCase() + this.options["features"][i].name.slice(1);
                this.featuresList.addFeature(featureName, this._el);
            }
        }
        _super.prototype.ngOnInit.call(this);
    };
    IgGridBase.prototype.createDataSource = function (value) {
        return jQuery.extend(true, [], value);
    };
    IgGridBase.prototype.deleteRow = function (id, index) {
        var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']");
        if (tr.length > 0) {
            tr.remove();
            jQuery(this._el).data(this._widgetName).dataSource.deleteRow(id, true);
            jQuery(this._el).data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
        }
        this._changes.splice(index, 1);
    };
    IgGridBase.prototype.addRow = function (rowData, index) {
        var grid, pkKey = this["primaryKey"] || this.options["primaryKey"], existingDomRow = jQuery(this._el).find("tr[data-id='" + rowData[pkKey] + "']"), widgetName = this._widgetName, existingRow, t;
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
        this._changes.push(this.kvalDiffers.find({}).create());
    };
    IgGridBase.prototype.updateRow = function (rec, currValue, key) {
        var pkKey = this["primaryKey"] || this.options["primaryKey"];
        var widgetName = this._widgetName;
        if (this._widgetName === "igHierarchicalGrid") {
            widgetName = "igGrid";
        }
        var element = jQuery(this._el);
        var grid = element.data(widgetName);
        var tr = element.find("tr[data-id='" + rec[pkKey] + "']");
        var column = grid.columnByKey(key);
        var newFormattedVal;
        var td;
        if (column) {
            if (column.template) {
                newFormattedVal = grid._renderTemplatedCell(rec, column);
            }
            else {
                newFormattedVal = grid._renderCell(currValue, column, rec);
            }
            td = grid._getCellsByColKey(element.find("tr[data-id='" + rec[pkKey] + "']"), key);
            //if current cell is still in edit mode, exit it.
            if (jQuery(td).find("input.ui-igedit-input").length > 0) {
                element.data("igGridUpdating").endEdit();
            }
            jQuery(td).html(newFormattedVal);
            if (grid.options.localSchemaTransform) {
                rec = grid.dataSource.schema().transform([rec])[0];
            }
            grid.dataSource.updateRow(rec[pkKey], rec);
            grid.dataSource._commitTransactionsByRowId(rec[pkKey]);
        }
    };
    IgGridBase.prototype.ngOnChanges = function (changes) {
        var ds = "dataSource";
        if (ds in changes) {
            var value = changes[ds].currentValue;
            if (value) {
                try {
                    this._differ = this._differs.find(value).create();
                    this._changes = [];
                    for (var i = 0; i < this._dataSource.length; i++) {
                        this._changes.push(this.kvalDiffers.find({}).create());
                    }
                }
                catch (e) {
                    throw new Error("Only binding to arrays is supported.");
                }
            }
        }
        _super.prototype.ngOnChanges.call(this, changes);
    };
    IgGridBase.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._differ) {
            var changes = this._differ.diff(this._dataSource);
            //check if grid is initialized
            var grid = jQuery(this._el).data(this._widgetName);
            if (changes && grid) {
                this.dataSourceApplyChanges(changes);
            }
            if (changes && changes.isDirty && grid) {
                //data source has been changed post initialization.
                jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
            }
            if (this._changes && grid) {
                var pkKey = this["primaryKey"] || this.options["primaryKey"];
                //check recs
                for (var i = 0; i < this._dataSource.length; i++) {
                    var item = this._dataSource[i];
                    var rowChanges = this._changes[i].diff(item);
                    if (rowChanges) {
                        rowChanges.forEachChangedItem(function (change) {
                            _this.updateRow(item, change.currentValue, change.key);
                        });
                    }
                }
            }
        }
        _super.prototype.ngDoCheck.call(this);
    };
    IgGridBase.prototype.dataSourceApplyChanges = function (changes) {
        var _this = this;
        var pkKey = this["primaryKey"] || this.options["primaryKey"];
        changes.forEachAddedItem(function (r) { return _this.addRow(r.item, r.currentIndex); });
        changes.forEachRemovedItem(function (r) { _this.deleteRow(r.item[pkKey], r.previousIndex); });
    };
    IgGridBase.prototype.allRows = function () { };
    ;
    IgGridBase.propDecorators = {
        "dataSource": [{ type: core_1.Input },],
        "_columns": [{ type: core_1.ContentChildren, args: [column_directive_1.Column,] },],
        "featuresList": [{ type: core_1.ContentChild, args: [features_directive_1.Features,] },],
    };
    return IgGridBase;
}(igcontrolbase_1.IgControlBase));
exports.IgGridBase = IgGridBase;
//# sourceMappingURL=iggridbase.js.map