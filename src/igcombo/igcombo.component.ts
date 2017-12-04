import { Component, Optional, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";
import { ControlValueAccessor, NgModel } from "@angular/forms";

declare var jQuery: any;

@Component({
	selector: "ig-combo",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dropDownWidth","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","responseDataType","responseContentType","requestType","valueKey","textKey","itemTemplate","headerTemplate","footerTemplate","inputName","animationShowDuration","animationHideDuration","dropDownAttachedToBody","filteringType","filterExprUrlKey","filteringCondition","filteringLogic","noMatchFoundText","loadOnDemandSettings","visibleItemsCount","placeHolder","mode","virtualization","multiSelection","grouping","validatorOptions","highlightMatchesMode","caseSensitive","autoSelectFirstMatch","autoComplete","allowCustomValue","closeDropDownOnBlur","delayInputChangeProcessing","tabIndex","dropDownOnFocus","closeDropDownOnSelect","selectItemBySpaceKey","initialSelectedItems","preventSubmitOnEnter","format","suppressKeyboard","enableClearButton","dropDownButtonTitle","clearButtonTitle","dropDownOrientation"],
	outputs: ["rendered","dataBinding","dataBound","filtering","filtered","itemsRendering","itemsRendered","dropDownOpening","dropDownOpened","dropDownClosing","dropDownClosed","selectionChanging","selectionChanged"]
})
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
			
			if (items.length <= 0 || !that._model) {
				return;
			}
			
			if (ui.owner.options.multiSelection.enabled) {
				that._model.viewToModelUpdate(items.map(function(item) {
					return item.data[that._config.valueKey];
				}));
			} else {
				that._model.viewToModelUpdate(items[0].data[that._config.valueKey]);
			}
		});
		this._dataSource = jQuery.extend(true, [], this._config.dataSource);
		//manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
		if (this._model) {
			this.writeValue(this._model.value);
		}
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
		if (this._differ != null && this._allowChangeDetection) {
			this.optionChange();
			this._allowChangeDetection = false;
			var diff = [];
			var element = jQuery(this._el);
			var i, j, valKey = this._config.valueKey, record, item;

			//check for changes in collection
			if (!(this._config.dataSource instanceof Array)) {
				return;
			}
			this._changes = this._differ.diff(this._config.dataSource);
			if (this._config.dataSource && this._config.dataSource.length !== this._dataSource.length) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
				if (this._changes) {
					 element.data("igCombo").dataBind();
					if (this.model && this.model.value) {
						this.writeValue(this.model.value);
					}
				}
			}

			if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
				this._dataSource = jQuery.extend(true, [], this._config.dataSource);
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

	/**
 	 * Performs databinding on the combo box. The [databinding](ui.igcombo#events:dataBinding) and [dataBound](ui.igcombo#events:dataBound) events are always raised.
	 */
	public dataBind(): Object { return; } ;

	/**
 	 * Forces an update of the igCombo value according to the current text in the igCombo input.
	 *             
	 * 				The refresh is primarily intended to be used with [allowCustomValue](ui.igcombo#options:allowCustomValue) set to true.
	 * 				The refresh will take the current text and, if no selection is applied, will set it as igCombo value provided that [allowCustomValue](ui.igcombo#options:allowCustomValue) true.
	 */
	public refreshValue(): Object { return; } ;

	/**
 	 * Gets the associated data of an item by value matching it's [valueKey](ui.igcombo#options:valueKey) property.
	 *
	 * @param value Value matching the valueKey property of item to be tested if it is selected
	 */
	public dataForValue(value: Object): Object { return; } ;

	/**
 	 * Gets the associated data of li element in the combo.
	 *
	 * @param $element jQuery element of item in the drop down list
	 */
	public dataForElement($element: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by element/s.
	 *
	 * @param $element jQuery object with drop down list item element or elements
	 */
	public itemsFromElement($element: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by value/s.
	 *
	 * @param value Value of item in the drop down list or array with values.
	 */
	public itemsFromValue(value: Object): Object { return; } ;

	/**
 	 * Gets object/s containing data and list item in the combo by index/es.
	 *
	 * @param index Index or array of indexes of items in the drop down list
	 */
	public itemsFromIndex(index: number): Object { return; } ;

	/**
 	 * Gets array with data and objects representing li elements in combo box.
	 */
	public items(): any[] { return; } ;

	/**
 	 * Gets array with objects representing the filtered li elements in combo box.
	 */
	public filteredItems(): any[] { return; } ;

	/**
 	 * Gets array with objects representing selected li elements in combo box.
	 */
	public selectedItems(): any[] { return; } ;

	/**
 	 * Triggers filtering.
	 *
	 * @param texts Filter by string, or array of strings.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
	 */
	public filter(texts?: Object, event?: Object): Object { return; } ;

	/**
 	 * Clears filtering.
	 *
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
	 */
	public clearFiltering(event?: Object): Object { return; } ;

	/**
 	 * Opens the drop-down.
	 *
	 * @param callback Specifies callback function to be executed when open animation is completed.
	 * @param focusCombo Set to false to not focus combo"s text input after the drop down is opened. By default the combo's input is focused.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownOpening](ui.igcombo#events:dropDownOpening) and [dropDownOpened](ui.igcombo#events:dropDownOpened) events.
	 */
	public openDropDown(callback?: Function, focusCombo?: boolean, event?: Object): Object { return; } ;

	/**
 	 * Closes the drop down.
	 *
	 * @param callback Specifies callback function to be executed when close animation is completed.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownClosing](ui.igcombo#events:dropDownClosing) and [dropDownClosed](ui.igcombo#events:dropDownClosed) events.
	 */
	public closeDropDown(callback?: Function, event?: Object): Object { return; } ;

	/**
 	 * Clears the input text, resets highlighting, filtering and selection.
	 *
	 * @param options     Object with set of options controlling the behavior of this api method.
     focusCombo (boolean): Set to true to focus combo after clearing the input.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public clearInput(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Verifies whether a specified value is selected.
	 *
	 * @param value Value matching the [valueKey](ui.igcombo#options:valueKey) property of item to be tested if it is selected
	 */
	public isValueSelected(value: Object): boolean { return; } ;

	/**
 	 * Verifies whether the li representing the data source's record at the specified index is selected.
	 *
	 * @param index Index of data source record
	 */
	public isIndexSelected(index: Object): boolean { return; } ;

	/**
 	 * Selects list item/items from the drop-down list by specified value or array of values. When called witout params will return the value of the selected item or if [multiSelection](ui.igcombo#options:multiSelection) is enabled array of selected values.
	 *
	 * @param value Value or array of values matching the valueKey property of item/items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public value(value?: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Selects a list item from the drop-down list.
	 *
	 * @param $items jQuery object with item or items to be selected.
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public select($items: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Gets/Sets selected item/s from the drop-down list by specified index.
	 *
	 * @param index Index or array of indexes of items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    additive (boolean): Set to true to select the item without losing other selection. Works only when multi selection is enabled.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public index(index?: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Selects all items from the drop-down list.
	 *
	 * @param options Object with set of options controlling the behavior of this api method.
                    closeDropDown (boolean): Set to true to close the drop down list after the selection.
                    focusCombo (boolean): Set to true to focus combo after the selection.
                    keepFiltering (boolean): Set to true to keep filtering after the selection. By default the filtering is cleared.
                    keepInputText (boolean): Set to true to keep input text unchanged after the selection. By default input text is updated.
                    keepHighlighting (boolean): Set to true to keep highlighting unchanged after the selection. By default highlighting is removed.
                    keepNavItem (boolean): Set to true to keep current navigation item unchanged after the selection. By default the navigation item is changed to the new selected item.
                    keepScrollPosition (boolean): Set to true to keep current scroll position. By default the scroll position will change so that the last selected item is visible.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public selectAll(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list by value.
	 *
	 * @param value Value or array of values matching the [valueKey](ui.igcombo#options:valueKey) property of item/items to be deselected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectByValue(value: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list.
	 *
	 * @param $items jQuery object with item or items to be deselected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselect($items: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects a list item from the drop down list by index.
	 *
	 * @param index Index or array of indexes of items to be selected
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectByIndex(index: Object, options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Deselects all selected items from the drop down list.
	 *
	 * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
	 * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
	 */
	public deselectAll(options?: Object, event?: Object): Object { return; } ;

	/**
 	 * Gets/Sets index of active item in list.
	 *
	 * @param index New active index for list. In order to clear active item, use -1.
	 * @return number|object Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
	 */
	public activeIndex(index?: number): number|Object { return; } ;

	/**
 	 * Gets/Sets text in text input field.
	 *
	 * @param text New text value for combo's input field.
	 * @return string|object If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
	 */
	public text(text?: string): string|Object { return; } ;

	/**
 	 * Gets/Sets scrollTop attribute of html element, which scrolls drop-down list of items.
	 *
	 * @param value New value for scroll top in list. Note: if list is closed and new value is provided, then openDropDown() is called automatically.
	 * @return number|object If parameter is undefined, then scrollTop is returned. Otherwise, it returns reference to this igCombo.
	 */
	public listScrollTop(value?: number): number|Object { return; } ;

	/**
 	 * Gets jQuery objects representing all rendered list items in the combo drop down list.
	 */
	public listItems(): Object { return; } ;

	/**
 	 * Gets jQuery object of the outer element of the combo.
	 */
	public comboWrapper(): Object { return; } ;

	/**
 	 * Gets jQuery object of the drop down associated with this combo widget
	 */
	public dropDown(): Object { return; } ;

	/**
 	 * Gets jQuery object of the container that holds the list with items.
	 */
	public list(): Object { return; } ;

	/**
 	 * Gets jQuery object of the text input associated with this combo widget.
	 */
	public textInput(): Object { return; } ;

	/**
 	 * Gets jQuery object of the value input associated with this combo widget.
	 */
	public valueInput(): Object { return; } ;

	/**
 	 * Gets reference to [igValidator](ui.igvalidator) used by igCombo.
	 *
	 * @param destroy Request to destroy validator.
	 */
	public validator(destroy?: boolean): Object { return; } ;

	/**
 	 * Trigger validation.
	 */
	public validate(): boolean { return; } ;

	/**
 	 * Returns boolean representing whether the combo drop down list is opened.
	 */
	public dropDownOpened(): boolean { return; } ;

	/**
 	 * Repositions drop down under combo input. Has effect only when the drop down is attached to body.
	 */
	public positionDropDown(): Object { return; } ;

	/**
 	 * Destroys the igCombo widget.
	 */
	public destroy(): Object { return; } ;
}