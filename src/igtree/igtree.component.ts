import { Component, Renderer, ElementRef, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-tree",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","checkboxMode","singleBranchExpand","hotTracking","parentNodeImageUrl","parentNodeImageClass","parentNodeImageTooltip","leafNodeImageUrl","leafNodeImageClass","leafNodeImageTooltip","animationDuration","pathSeparator","dataSource","dataSourceUrl","dataSourceType","responseDataKey","responseDataType","requestType","responseContentType","initialExpandDepth","loadOnDemand","bindings","defaultNodeTarget","dragAndDrop","updateUrl","dragAndDropSettings"],
	outputs: ["dataBinding","dataBound","rendering","rendered","selectionChanging","selectionChanged","nodeCheckstateChanging","nodeCheckstateChanged","nodePopulating","nodePopulated","nodeCollapsing","nodeCollapsed","nodeExpanding","nodeExpanded","nodeClick","nodeDoubleClick","dragStart","drag","dragStop","nodeDropping","nodeDropped"]
})
export class IgTreeComponent extends IgControlBase<IgTree> {
	private _dataSource: any;
	private _changes: any;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	ngOnInit() {
		super.ngOnInit();
		this._dataSource = jQuery.extend(true, [], this._config.dataSource);
	}

	ngDoCheck() {
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			if (typeof this._config.dataSource === "string" || this._config.dataSource instanceof Array) {
				return;
			} else {
				this._changes = this._differ.diff(this._config.dataSource);
			}
			if (this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					this._changes.forEachAddedItem(r => element.igTree("dataBind"));
					this._changes.forEachRemovedItem(r => element.igTree("dataBind"));
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				element.igTree("dataBind");
			}
		}
	}

	optionChange(options?) {
		var opts = options || jQuery.extend(true, {}, this._config);
		// Bindings are modified internally by the tree. Excluding them from the change detection
		if (opts.bindings) {
			delete opts.bindings;
		}
		super.optionChange(opts);
	}

	/**
 	 * Performs databinding on the igTree.
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Toggles the checkstate of a node if checkboxMode is not set to off, otherwise does nothing.
	 *
	 * @param node     Specifies the node element the checkbox of which would be toggled.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public toggleCheckstate(node: Object, event?: Object): void { return; } ;

	/**
 	 * Toggles the collapse/expand state for the specified node.
	 *
	 * @param node     Specifies the node element the checkbox of which would be toggled.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public toggle(node: Object, event?: Object): void { return; } ;

	/**
 	 * Expands the tree down to the specified node and selects the node if specified.
	 *
	 * @param node     Specifies the node element down to which the tree would be expanded.
	 * @param toSelect     Specifies the whether to select the node after expanding to it.
	 */
	public expandToNode(node: Object, toSelect?: boolean): void { return; } ;

	/**
 	 * Expands the specified node.
	 *
	 * @param node     Specifies the node element to expand.
	 */
	public expand(node: Object): void { return; } ;

	/**
 	 * Collapses the specified node.
	 *
	 * @param node     Specifies the node element to collapse.
	 */
	public collapse(node: Object): void { return; } ;

	/**
 	 * Retrieves the parent node element of the specified node element.
	 *
	 * @param node     Specifies the jQuery selected node element to collapse.
	 */
	public parentNode(node: Object): Object { return; } ;

	/**
 	 * Retrieves the jQuery element of the node with the specified path.
	 *
	 * @param nodePath     Specifies the path to the required node.
	 */
	public nodeByPath(nodePath: string): Object { return; } ;

	/**
 	 * Retrieves the jQuery element of the node with the specified value.
	 *
	 * @param value     Specifies the value of the required node.
	 */
	public nodesByValue(value: string): Object { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes checked.
	 */
	public checkedNodes(): any[] { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes unchecked.
	 */
	public uncheckedNodes(): any[] { return; } ;

	/**
 	 * Retrieves all the node objects for the nodes that have their checkboxes partially checked.
	 */
	public partiallyCheckedNodes(): any[] { return; } ;

	/**
 	 * Selects a node.
	 *
	 * @param node     Specifies the node element to be selected.
	 * @param event     Indicates the browser event which triggered this action, if this is not an API call.
	 */
	public select(node: Object, event?: Object): void { return; } ;

	/**
 	 * Deselects the specified node.
	 *
	 * @param node     Specifies the node element to be deselected.
	 */
	public deselect(node: Object): void { return; } ;

	/**
 	 * Deselects all the selected nodes.
	 */
	public clearSelection(): void { return; } ;

	/**
 	 * Retrieves the node object for the selected node.
	 */
	public selectedNode(): Object { return; } ;

	/**
 	 * Retrieves all node objects with the specified text (case sensitive).
	 *
	 * @param text     The text to search for.
	 * @param parent     The node element to start the search from. If not specified then search would start from the root of the tree.
	 */
	public findNodesByText(text: string, parent?: Object): any[] { return; } ;

	/**
 	 * Retrieves all node objects for the immediate children of the specified parent with the specified text (case sensitive).
	 *
	 * @param text     The text to search for.
	 * @param parent     The node element the children of which would be searched.
	 */
	public findImmediateNodesByText(text: string, parent?: Object): any[] { return; } ;

	/**
 	 * Retrieves the n-th jQuery node element child of the specified parent.
	 *
	 * @param index     Specifies the index the node at which to be retrieved.
	 * @param parent     The parent node element to start the search from.
	 */
	public nodeByIndex(index: number, parent?: Object): Object { return; } ;

	/**
 	 * Retrieves a node object for the specified node element.
	 *
	 * @param element     Specifies the node element.
	 */
	public nodeFromElement(element: Object): Object { return; } ;

	/**
 	 * Retrieves a node object collection of the immediate children of the provided node element.
	 *
	 * @param parent     Specifies the node element.
	 */
	public children(parent: Object): any[] { return; } ;

	/**
 	 * Retrieves a node object collection of the immediate children of the node with the provided path.
	 *
	 * @param path     Specifies the path of the node the children of which are to be retrieved.
	 */
	public childrenByPath(path: string): any[] { return; } ;

	/**
 	 * Returns true if the provided node element is selected and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isSelected(node: Object): boolean { return; } ;

	/**
 	 * Returns true if the provided node element is expanded and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isExpanded(node: Object): boolean { return; } ;

	/**
 	 * Returns true if the provided node element has its checkbox checkstate checked and false otherwise.
	 *
	 * @param node     Specifies the node element.
	 */
	public isChecked(node: Object): boolean { return; } ;

	/**
 	 * Returns the specified node checkstate.
	 *
	 * @param node     Specifies the node element.
	 */
	public checkState(node: Object): string { return; } ;

	/**
 	 * Adds a new array of nodes to the tree. New nodes are appended to the root or to a specified parent node, at a specified index.
	 *
	 * @param node     Specifies the data used to create the new nodeс.
	 * @param parent     Specifies the element of the parent node the nodes are to be appended to.
	 * @param nodeIndex     Specifies the index at which the nodes to be inserted.
	 */
	public addNode(node: Object, parent?: Object, nodeIndex?: number): void { return; } ;

	/**
 	 * Removes the node with with the specified path and all of its children.
	 *
	 * @param path     Specifies the path of the node to be removed.
	 */
	public removeAt(path: string): void { return; } ;

	/**
 	 * Removing all the nodes with the specified value.
	 *
	 * @param value     Specifies the value of the nodes to be removed.
	 */
	public removeNodesByValue(value: string): void { return; } ;

	/**
 	 * Performs a UI update on the provided node element with the provided data.
	 *
	 * @param element     Specifies the node to be updated.
	 * @param data     Specifies the new data item the node would update according to.
	 */
	public applyChangesToNode(element: Object, data: Object): void { return; } ;

	/**
 	 * Returns the transaction log stack.
	 */
	public transactionLog(): any[] { return; } ;

	/**
 	 * Returns the data for the node with specified path.
	 *
	 * @param path     Specifies the node path for which the data is returned.
	 */
	public nodeDataFor(path: string): Object { return; } ;

	/**
 	 * Destructor for the igTree widget.
	 */
	public destroy(): void { return; } ;
}