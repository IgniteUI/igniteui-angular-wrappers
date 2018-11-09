"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgTreeComponent = /** @class */ (function (_super) {
    __extends(IgTreeComponent, _super);
    function IgTreeComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgTreeComponent.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgTreeComponent.prototype.ngOnInit = function () {
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    IgTreeComponent.prototype.ngOnChanges = function (changes) {
        var ds = "dataSource";
        //const options = "options";
        if (ds in changes) {
            var value = changes[ds].currentValue;
            if (!this._differ && value) {
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
    IgTreeComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._differ) {
            var changes = this._differ.diff(this._dataSource);
            //check if grid is initialized
            var elem = jQuery(this._el).data(this._widgetName);
            if (changes && elem) {
                this.dataSourceApplyChanges(changes);
            }
            if (this._changes && elem) {
                //check recs
                for (var i = 0; i < this._dataSource.length; i++) {
                    var item = this._dataSource[i];
                    var rowChanges = this._changes[i].diff(item);
                    if (rowChanges) {
                        rowChanges.forEachChangedItem(function (change) {
                            _this.updateItem(item, change.currentValue, change.key);
                        });
                    }
                }
            }
        }
        _super.prototype.ngDoCheck.call(this);
    };
    IgTreeComponent.prototype.addItem = function (item, index) {
        this.dataBind();
        this._changes.push(this.kvalDiffers.find({}).create());
    };
    IgTreeComponent.prototype.deleteItem = function (item, index) {
        this.dataBind();
        this._changes.splice(index, 1);
    };
    IgTreeComponent.prototype.dataSourceApplyChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (r) { return _this.addItem(r.item, r.currentIndex); });
        changes.forEachRemovedItem(function (r) { _this.deleteItem(r.item, r.previousIndex); });
    };
    IgTreeComponent.prototype.updateItem = function (item, value, key) {
        this.dataBind();
    };
    IgTreeComponent.prototype.markForCheck = function () {
        _super.prototype.markForCheck.call(this);
        var bindings = this["bindings"] || this.options.bindings;
        if (bindings && bindings.childDataProperty) {
            this.dataBind();
        }
    };
    // optionChange(options?) {
    // 	var opts = options || jQuery.extend(true, {}, this._config);
    // 	// Bindings are modified internally by the tree. Excluding them from the change detection
    // 	if (opts.bindings) {
    // 		delete opts.bindings;
    // 	}
    // 	super.optionChange(opts);
    // }
    /**
     * Performs databinding on the igTree.
     */
    IgTreeComponent.prototype.dataBind = function () { return; };
    ;
    /**
     * Toggles the checkstate of a node if checkboxMode is not set to off, otherwise does nothing.
     *
     * @param node     Specifies the node element the checkbox of which would be toggled.
     * @param event     Indicates the browser event which triggered this action, if this is not an API call.
     */
    IgTreeComponent.prototype.toggleCheckstate = function (node, event) { return; };
    ;
    /**
     * Toggles the collapse/expand state for the specified node.
     *
     * @param node     Specifies the node element the checkbox of which would be toggled.
     * @param event     Indicates the browser event which triggered this action, if this is not an API call.
     */
    IgTreeComponent.prototype.toggle = function (node, event) { return; };
    ;
    /**
     * Expands the tree down to the specified node and selects the node if specified.
     *
     * @param node     Specifies the node element down to which the tree would be expanded.
     * @param toSelect     Specifies the whether to select the node after expanding to it.
     */
    IgTreeComponent.prototype.expandToNode = function (node, toSelect) { return; };
    ;
    /**
     * Expands the specified node.
     *
     * @param node     Specifies the node element to expand.
     */
    IgTreeComponent.prototype.expand = function (node) { return; };
    ;
    /**
     * Collapses the specified node.
     *
     * @param node     Specifies the node element to collapse.
     */
    IgTreeComponent.prototype.collapse = function (node) { return; };
    ;
    /**
     * Retrieves the parent node element of the specified node element.
     *
     * @param node     Specifies the jQuery selected node element to collapse.
     */
    IgTreeComponent.prototype.parentNode = function (node) { return; };
    ;
    /**
     * Retrieves the jQuery element of the node with the specified path.
     *
     * @param nodePath     Specifies the path to the required node.
     */
    IgTreeComponent.prototype.nodeByPath = function (nodePath) { return; };
    ;
    /**
     * Retrieves the jQuery element of the node with the specified value.
     *
     * @param value     Specifies the value of the required node.
     */
    IgTreeComponent.prototype.nodesByValue = function (value) { return; };
    ;
    /**
     * Retrieves all the node objects for the nodes that have their checkboxes checked.
     */
    IgTreeComponent.prototype.checkedNodes = function () { return; };
    ;
    /**
     * Retrieves all the node objects for the nodes that have their checkboxes unchecked.
     */
    IgTreeComponent.prototype.uncheckedNodes = function () { return; };
    ;
    /**
     * Retrieves all the node objects for the nodes that have their checkboxes partially checked.
     */
    IgTreeComponent.prototype.partiallyCheckedNodes = function () { return; };
    ;
    /**
     * Selects a node.
     *
     * @param node     Specifies the node element to be selected.
     * @param event     Indicates the browser event which triggered this action, if this is not an API call.
     */
    IgTreeComponent.prototype.select = function (node, event) { return; };
    ;
    /**
     * Deselects the specified node.
     *
     * @param node     Specifies the node element to be deselected.
     */
    IgTreeComponent.prototype.deselect = function (node) { return; };
    ;
    /**
     * Deselects all the selected nodes.
     */
    IgTreeComponent.prototype.clearSelection = function () { return; };
    ;
    /**
     * Retrieves the node object for the selected node.
     */
    IgTreeComponent.prototype.selectedNode = function () { return; };
    ;
    /**
     * Retrieves all node objects with the specified text (case sensitive).
     *
     * @param text     The text to search for.
     * @param parent     The node element to start the search from. If not specified then search would start from the root of the tree.
     */
    IgTreeComponent.prototype.findNodesByText = function (text, parent) { return; };
    ;
    /**
     * Retrieves all node objects for the immediate children of the specified parent with the specified text (case sensitive).
     *
     * @param text     The text to search for.
     * @param parent     The node element the children of which would be searched.
     */
    IgTreeComponent.prototype.findImmediateNodesByText = function (text, parent) { return; };
    ;
    /**
     * Retrieves the n-th jQuery node element child of the specified parent.
     *
     * @param index     Specifies the index the node at which to be retrieved.
     * @param parent     The parent node element to start the search from.
     */
    IgTreeComponent.prototype.nodeByIndex = function (index, parent) { return; };
    ;
    /**
     * Retrieves a node object for the specified node element.
     *
     * @param element     Specifies the node element.
     */
    IgTreeComponent.prototype.nodeFromElement = function (element) { return; };
    ;
    /**
     * Retrieves a node object collection of the immediate children of the provided node element.
     *
     * @param parent     Specifies the node element.
     */
    IgTreeComponent.prototype.children = function (parent) { return; };
    ;
    /**
     * Retrieves a node object collection of the immediate children of the node with the provided path.
     *
     * @param path     Specifies the path of the node the children of which are to be retrieved.
     */
    IgTreeComponent.prototype.childrenByPath = function (path) { return; };
    ;
    /**
     * Returns true if the provided node element is selected and false otherwise.
     *
     * @param node     Specifies the node element.
     */
    IgTreeComponent.prototype.isSelected = function (node) { return; };
    ;
    /**
     * Returns true if the provided node element is expanded and false otherwise.
     *
     * @param node     Specifies the node element.
     */
    IgTreeComponent.prototype.isExpanded = function (node) { return; };
    ;
    /**
     * Returns true if the provided node element has its checkbox checkstate checked and false otherwise.
     *
     * @param node     Specifies the node element.
     */
    IgTreeComponent.prototype.isChecked = function (node) { return; };
    ;
    /**
     * Returns the specified node checkstate.
     *
     * @param node     Specifies the node element.
     */
    IgTreeComponent.prototype.checkState = function (node) { return; };
    ;
    /**
     * Adds a new array of nodes to the tree. New nodes are appended to the root or to a specified parent node, at a specified index.
     *
     * @param node     Specifies the data used to create the new nodeс.
     * @param parent     Specifies the element of the parent node the nodes are to be appended to.
     * @param nodeIndex     Specifies the index at which the nodes to be inserted.
     */
    IgTreeComponent.prototype.addNode = function (node, parent, nodeIndex) { return; };
    ;
    /**
     * Removes the node with with the specified path and all of its children.
     *
     * @param path     Specifies the path of the node to be removed.
     */
    IgTreeComponent.prototype.removeAt = function (path) { return; };
    ;
    /**
     * Removing all the nodes with the specified value.
     *
     * @param value     Specifies the value of the nodes to be removed.
     */
    IgTreeComponent.prototype.removeNodesByValue = function (value) { return; };
    ;
    /**
     * Performs a UI update on the provided node element with the provided data.
     *
     * @param element     Specifies the node to be updated.
     * @param data     Specifies the new data item the node would update according to.
     */
    IgTreeComponent.prototype.applyChangesToNode = function (element, data) { return; };
    ;
    /**
     * Returns the transaction log stack.
     */
    IgTreeComponent.prototype.transactionLog = function () { return; };
    ;
    /**
     * Returns the data for the node with specified path.
     *
     * @param path     Specifies the node path for which the data is returned.
     */
    IgTreeComponent.prototype.nodeDataFor = function (path) { return; };
    ;
    /**
     * Destructor for the igTree widget.
     */
    IgTreeComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgTreeComponent.prototype, "dataSource", null);
    IgTreeComponent = __decorate([
        core_1.Component({
            selector: "ig-tree",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "checkboxMode", "singleBranchExpand", "hotTracking", "parentNodeImageUrl", "parentNodeImageClass", "parentNodeImageTooltip", "leafNodeImageUrl", "leafNodeImageClass", "leafNodeImageTooltip", "animationDuration", "pathSeparator", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "responseDataType", "requestType", "responseContentType", "initialExpandDepth", "loadOnDemand", "bindings", "defaultNodeTarget", "dragAndDrop", "updateUrl", "dragAndDropSettings"],
            outputs: ["dataBinding", "dataBound", "rendering", "rendered", "selectionChanging", "selectionChanged", "nodeCheckstateChanging", "nodeCheckstateChanged", "nodePopulating", "nodePopulated", "nodeCollapsing", "nodeCollapsed", "nodeExpanding", "nodeExpanded", "nodeClick", "nodeDoubleClick", "dragStart", "drag", "dragStop", "nodeDropping", "nodeDropped"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgTreeComponent);
    return IgTreeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgTreeComponent = IgTreeComponent;
//# sourceMappingURL=igtree.component.js.map