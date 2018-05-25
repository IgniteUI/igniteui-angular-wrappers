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
var core_1 = require("@angular/core");
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var forms_1 = require("@angular/forms");
var IgComboComponent = /** @class */ (function (_super) {
    __extends(IgComboComponent, _super);
    function IgComboComponent(model, el, renderer, differs, kvalDiffers, cdr) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
        _this.model = model;
        _this.onChange = function (_) {
        };
        _this.onTouched = function () {
        };
        if (model) {
            model.valueAccessor = _this;
            _this._model = model;
        }
        return _this;
    }
    Object.defineProperty(IgComboComponent.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgComboComponent.prototype.ngOnInit = function () {
        var that = this;
        var valueKey = this["valueKey"] || this.options.valueKey;
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
        if (this._model) {
            // D.P. #244 only attach selectionchanged handler if there's a model to update
            jQuery(this._el).on(this._widgetName.toLowerCase() + "selectionchanged", function (evt, ui) {
                var items = ui.items;
                if (items.length <= 0 && !ui.owner.options.multiSelection.enabled) {
                    that._model.viewToModelUpdate(null);
                    return;
                }
                if (ui.owner.options.multiSelection.enabled) {
                    that._model.viewToModelUpdate(items.map(function (item) {
                        return item.data[valueKey];
                    }));
                }
                else {
                    that._model.viewToModelUpdate(items[0].data[valueKey]);
                }
            });
            //manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
            this.writeValue(this._model.value);
        }
    };
    IgComboComponent.prototype.writeValue = function (value) {
        if (!!jQuery(this._el).data(this._widgetName)) {
            jQuery(this._el)[this._widgetName]("value", value);
        }
    };
    IgComboComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    IgComboComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    IgComboComponent.prototype.dataSourceApplyChanges = function (changes) {
        //dataSource has changed.
        var element = jQuery(this._el);
        if (element[this._widgetName]) {
            element[this._widgetName]("option", "dataSource", this._dataSource);
        }
        if (this.model && this.model.value) {
            this.writeValue(this.model.value);
        }
    };
    IgComboComponent.prototype.updateComboItem = function (rec, val, key, index) {
        var element = jQuery(this._el);
        var comboItem = element.data("igCombo").itemsFromIndex(index);
        element.data("igCombo")._updateItem(comboItem.element, rec);
        if (element.data("igCombo").isSelected(comboItem.element)) {
            //should update the input
            element.data("igCombo")._updateInputValues(false);
        }
    };
    IgComboComponent.prototype.ngOnChanges = function (changes) {
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
    IgComboComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._differ) {
            var changes = this._differ.diff(this._dataSource);
            //check if grid is initialized
            var combo = jQuery(this._el).data(this._widgetName);
            if (changes && combo) {
                this.dataSourceApplyChanges(changes);
            }
            if (this._changes && combo) {
                //check recs
                for (var i = 0; i < this._dataSource.length; i++) {
                    var item = this._dataSource[i];
                    var recChanges = this._changes[i].diff(item);
                    if (recChanges) {
                        recChanges.forEachChangedItem(function (change) {
                            _this.updateComboItem(item, change.currentValue, change.key, i);
                        });
                    }
                }
            }
        }
        _super.prototype.ngDoCheck.call(this);
    };
    /**
     * Performs databinding on the combo box. The [databinding](ui.igcombo#events:dataBinding) and [dataBound](ui.igcombo#events:dataBound) events are always raised.
     */
    /**
         * Performs databinding on the combo box. The [databinding](ui.igcombo#events:dataBinding) and [dataBound](ui.igcombo#events:dataBound) events are always raised.
         */
    IgComboComponent.prototype.dataBind = /**
         * Performs databinding on the combo box. The [databinding](ui.igcombo#events:dataBinding) and [dataBound](ui.igcombo#events:dataBound) events are always raised.
         */
    function () { return; };
    ;
    /**
     * Forces an update of the igCombo value according to the current text in the igCombo input.
     *
     * 				The refresh is primarily intended to be used with [allowCustomValue](ui.igcombo#options:allowCustomValue) set to true.
     * 				The refresh will take the current text and, if no selection is applied, will set it as igCombo value provided that [allowCustomValue](ui.igcombo#options:allowCustomValue) true.
     */
    /**
         * Forces an update of the igCombo value according to the current text in the igCombo input.
         *
         * 				The refresh is primarily intended to be used with [allowCustomValue](ui.igcombo#options:allowCustomValue) set to true.
         * 				The refresh will take the current text and, if no selection is applied, will set it as igCombo value provided that [allowCustomValue](ui.igcombo#options:allowCustomValue) true.
         */
    IgComboComponent.prototype.refreshValue = /**
         * Forces an update of the igCombo value according to the current text in the igCombo input.
         *
         * 				The refresh is primarily intended to be used with [allowCustomValue](ui.igcombo#options:allowCustomValue) set to true.
         * 				The refresh will take the current text and, if no selection is applied, will set it as igCombo value provided that [allowCustomValue](ui.igcombo#options:allowCustomValue) true.
         */
    function () { return; };
    ;
    /**
     * Gets the associated data of an item by value matching it's [valueKey](ui.igcombo#options:valueKey) property.
     *
     * @param value Value matching the valueKey property of item to be tested if it is selected
     */
    /**
         * Gets the associated data of an item by value matching it's [valueKey](ui.igcombo#options:valueKey) property.
         *
         * @param value Value matching the valueKey property of item to be tested if it is selected
         */
    IgComboComponent.prototype.dataForValue = /**
         * Gets the associated data of an item by value matching it's [valueKey](ui.igcombo#options:valueKey) property.
         *
         * @param value Value matching the valueKey property of item to be tested if it is selected
         */
    function (value) { return; };
    ;
    /**
     * Gets the associated data of li element in the combo.
     *
     * @param $element jQuery element of item in the drop down list
     */
    /**
         * Gets the associated data of li element in the combo.
         *
         * @param $element jQuery element of item in the drop down list
         */
    IgComboComponent.prototype.dataForElement = /**
         * Gets the associated data of li element in the combo.
         *
         * @param $element jQuery element of item in the drop down list
         */
    function ($element) { return; };
    ;
    /**
     * Gets object/s containing data and list item in the combo by element/s.
     *
     * @param $element jQuery object with drop down list item element or elements
     */
    /**
         * Gets object/s containing data and list item in the combo by element/s.
         *
         * @param $element jQuery object with drop down list item element or elements
         */
    IgComboComponent.prototype.itemsFromElement = /**
         * Gets object/s containing data and list item in the combo by element/s.
         *
         * @param $element jQuery object with drop down list item element or elements
         */
    function ($element) { return; };
    ;
    /**
     * Gets object/s containing data and list item in the combo by value/s.
     *
     * @param value Value of item in the drop down list or array with values.
     */
    /**
         * Gets object/s containing data and list item in the combo by value/s.
         *
         * @param value Value of item in the drop down list or array with values.
         */
    IgComboComponent.prototype.itemsFromValue = /**
         * Gets object/s containing data and list item in the combo by value/s.
         *
         * @param value Value of item in the drop down list or array with values.
         */
    function (value) { return; };
    ;
    /**
     * Gets object/s containing data and list item in the combo by index/es.
     *
     * @param index Index or array of indexes of items in the drop down list
     */
    /**
         * Gets object/s containing data and list item in the combo by index/es.
         *
         * @param index Index or array of indexes of items in the drop down list
         */
    IgComboComponent.prototype.itemsFromIndex = /**
         * Gets object/s containing data and list item in the combo by index/es.
         *
         * @param index Index or array of indexes of items in the drop down list
         */
    function (index) { return; };
    ;
    /**
     * Gets array with data and objects representing li elements in combo box.
     */
    /**
         * Gets array with data and objects representing li elements in combo box.
         */
    IgComboComponent.prototype.items = /**
         * Gets array with data and objects representing li elements in combo box.
         */
    function () { return; };
    ;
    /**
     * Gets array with objects representing the filtered li elements in combo box.
     */
    /**
         * Gets array with objects representing the filtered li elements in combo box.
         */
    IgComboComponent.prototype.filteredItems = /**
         * Gets array with objects representing the filtered li elements in combo box.
         */
    function () { return; };
    ;
    /**
     * Gets array with objects representing selected li elements in combo box.
     */
    /**
         * Gets array with objects representing selected li elements in combo box.
         */
    IgComboComponent.prototype.selectedItems = /**
         * Gets array with objects representing selected li elements in combo box.
         */
    function () { return; };
    ;
    /**
     * Triggers filtering.
     *
     * @param texts Filter by string, or array of strings.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
     */
    /**
         * Triggers filtering.
         *
         * @param texts Filter by string, or array of strings.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
         */
    IgComboComponent.prototype.filter = /**
         * Triggers filtering.
         *
         * @param texts Filter by string, or array of strings.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
         */
    function (texts, event) { return; };
    ;
    /**
     * Clears filtering.
     *
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
     */
    /**
         * Clears filtering.
         *
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
         */
    IgComboComponent.prototype.clearFiltering = /**
         * Clears filtering.
         *
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [filtering](ui.igcombo#events:filtering) and [filtered](ui.igcombo#events:filtered) events.
         */
    function (event) { return; };
    ;
    /**
     * Opens the drop-down.
     *
     * @param callback Specifies callback function to be executed when open animation is completed.
     * @param focusCombo Set to false to not focus combo"s text input after the drop down is opened. By default the combo's input is focused.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownOpening](ui.igcombo#events:dropDownOpening) and [dropDownOpened](ui.igcombo#events:dropDownOpened) events.
     */
    /**
         * Opens the drop-down.
         *
         * @param callback Specifies callback function to be executed when open animation is completed.
         * @param focusCombo Set to false to not focus combo"s text input after the drop down is opened. By default the combo's input is focused.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownOpening](ui.igcombo#events:dropDownOpening) and [dropDownOpened](ui.igcombo#events:dropDownOpened) events.
         */
    IgComboComponent.prototype.openDropDown = /**
         * Opens the drop-down.
         *
         * @param callback Specifies callback function to be executed when open animation is completed.
         * @param focusCombo Set to false to not focus combo"s text input after the drop down is opened. By default the combo's input is focused.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownOpening](ui.igcombo#events:dropDownOpening) and [dropDownOpened](ui.igcombo#events:dropDownOpened) events.
         */
    function (callback, focusCombo, event) { return; };
    ;
    /**
     * Closes the drop down.
     *
     * @param callback Specifies callback function to be executed when close animation is completed.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownClosing](ui.igcombo#events:dropDownClosing) and [dropDownClosed](ui.igcombo#events:dropDownClosed) events.
     */
    /**
         * Closes the drop down.
         *
         * @param callback Specifies callback function to be executed when close animation is completed.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownClosing](ui.igcombo#events:dropDownClosing) and [dropDownClosed](ui.igcombo#events:dropDownClosed) events.
         */
    IgComboComponent.prototype.closeDropDown = /**
         * Closes the drop down.
         *
         * @param callback Specifies callback function to be executed when close animation is completed.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [dropDownClosing](ui.igcombo#events:dropDownClosing) and [dropDownClosed](ui.igcombo#events:dropDownClosed) events.
         */
    function (callback, event) { return; };
    ;
    /**
     * Clears the input text, resets highlighting, filtering and selection.
     *
     * @param options     Object with set of options controlling the behavior of this api method.
     focusCombo (boolean): Set to true to focus combo after clearing the input.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
     */
    /**
         * Clears the input text, resets highlighting, filtering and selection.
         *
         * @param options     Object with set of options controlling the behavior of this api method.
         focusCombo (boolean): Set to true to focus combo after clearing the input.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    IgComboComponent.prototype.clearInput = /**
         * Clears the input text, resets highlighting, filtering and selection.
         *
         * @param options     Object with set of options controlling the behavior of this api method.
         focusCombo (boolean): Set to true to focus combo after clearing the input.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    function (options, event) { return; };
    ;
    /**
     * Verifies whether a specified value is selected.
     *
     * @param value Value matching the [valueKey](ui.igcombo#options:valueKey) property of item to be tested if it is selected
     */
    /**
         * Verifies whether a specified value is selected.
         *
         * @param value Value matching the [valueKey](ui.igcombo#options:valueKey) property of item to be tested if it is selected
         */
    IgComboComponent.prototype.isValueSelected = /**
         * Verifies whether a specified value is selected.
         *
         * @param value Value matching the [valueKey](ui.igcombo#options:valueKey) property of item to be tested if it is selected
         */
    function (value) { return; };
    ;
    /**
     * Verifies whether the li representing the data source's record at the specified index is selected.
     *
     * @param index Index of data source record
     */
    /**
         * Verifies whether the li representing the data source's record at the specified index is selected.
         *
         * @param index Index of data source record
         */
    IgComboComponent.prototype.isIndexSelected = /**
         * Verifies whether the li representing the data source's record at the specified index is selected.
         *
         * @param index Index of data source record
         */
    function (index) { return; };
    ;
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
    IgComboComponent.prototype.value = /**
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
    function (value, options, event) { return; };
    ;
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
    IgComboComponent.prototype.select = /**
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
    function ($items, options, event) { return; };
    ;
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
    IgComboComponent.prototype.index = /**
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
    function (index, options, event) { return; };
    ;
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
    IgComboComponent.prototype.selectAll = /**
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
    function (options, event) { return; };
    ;
    /**
     * Deselects a list item from the drop down list by value.
     *
     * @param value Value or array of values matching the [valueKey](ui.igcombo#options:valueKey) property of item/items to be deselected
     * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
     */
    /**
         * Deselects a list item from the drop down list by value.
         *
         * @param value Value or array of values matching the [valueKey](ui.igcombo#options:valueKey) property of item/items to be deselected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    IgComboComponent.prototype.deselectByValue = /**
         * Deselects a list item from the drop down list by value.
         *
         * @param value Value or array of values matching the [valueKey](ui.igcombo#options:valueKey) property of item/items to be deselected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    function (value, options, event) { return; };
    ;
    /**
     * Deselects a list item from the drop down list.
     *
     * @param $items jQuery object with item or items to be deselected
     * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
     */
    /**
         * Deselects a list item from the drop down list.
         *
         * @param $items jQuery object with item or items to be deselected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    IgComboComponent.prototype.deselect = /**
         * Deselects a list item from the drop down list.
         *
         * @param $items jQuery object with item or items to be deselected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    function ($items, options, event) { return; };
    ;
    /**
     * Deselects a list item from the drop down list by index.
     *
     * @param index Index or array of indexes of items to be selected
     * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
     */
    /**
         * Deselects a list item from the drop down list by index.
         *
         * @param index Index or array of indexes of items to be selected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    IgComboComponent.prototype.deselectByIndex = /**
         * Deselects a list item from the drop down list by index.
         *
         * @param index Index or array of indexes of items to be selected
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    function (index, options, event) { return; };
    ;
    /**
     * Deselects all selected items from the drop down list.
     *
     * @param options Object with set of options controlling the behavior of this api method.
                    focusCombo (boolean): Set to true to focus combo after the deselection.
                    keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
     * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
     */
    /**
         * Deselects all selected items from the drop down list.
         *
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    IgComboComponent.prototype.deselectAll = /**
         * Deselects all selected items from the drop down list.
         *
         * @param options Object with set of options controlling the behavior of this api method.
                        focusCombo (boolean): Set to true to focus combo after the deselection.
                        keepInputText (boolean): Set to true to keep input text unchanged after the deselection. By default input text is updated.
         * @param event Indicates the browser event which triggered this action (not API). Calling the method with this param set to "true" will trigger [selectionChanging](ui.igcombo#events:selectionChanging) and [selectionChanged](ui.igcombo#events:selectionChanged) events.
         */
    function (options, event) { return; };
    ;
    /**
     * Gets/Sets index of active item in list.
     *
     * @param index New active index for list. In order to clear active item, use -1.
     * @return number|object Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
     */
    /**
         * Gets/Sets index of active item in list.
         *
         * @param index New active index for list. In order to clear active item, use -1.
         * @return number|object Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
         */
    IgComboComponent.prototype.activeIndex = /**
         * Gets/Sets index of active item in list.
         *
         * @param index New active index for list. In order to clear active item, use -1.
         * @return number|object Returns index of active item in list or -1, if parameter is undefined. Otherwise, it returns reference to this igCombo.
         */
    function (index) { return; };
    ;
    /**
     * Gets/Sets text in text input field.
     *
     * @param text New text value for combo's input field.
     * @return string|object If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
     */
    /**
         * Gets/Sets text in text input field.
         *
         * @param text New text value for combo's input field.
         * @return string|object If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
         */
    IgComboComponent.prototype.text = /**
         * Gets/Sets text in text input field.
         *
         * @param text New text value for combo's input field.
         * @return string|object If parameter is undefined, then current text in field is returned. Otherwise, it returns reference to this igCombo.
         */
    function (text) { return; };
    ;
    /**
     * Gets/Sets scrollTop attribute of html element, which scrolls drop-down list of items.
     *
     * @param value New value for scroll top in list. Note: if list is closed and new value is provided, then openDropDown() is called automatically.
     * @return number|object If parameter is undefined, then scrollTop is returned. Otherwise, it returns reference to this igCombo.
     */
    /**
         * Gets/Sets scrollTop attribute of html element, which scrolls drop-down list of items.
         *
         * @param value New value for scroll top in list. Note: if list is closed and new value is provided, then openDropDown() is called automatically.
         * @return number|object If parameter is undefined, then scrollTop is returned. Otherwise, it returns reference to this igCombo.
         */
    IgComboComponent.prototype.listScrollTop = /**
         * Gets/Sets scrollTop attribute of html element, which scrolls drop-down list of items.
         *
         * @param value New value for scroll top in list. Note: if list is closed and new value is provided, then openDropDown() is called automatically.
         * @return number|object If parameter is undefined, then scrollTop is returned. Otherwise, it returns reference to this igCombo.
         */
    function (value) { return; };
    ;
    /**
     * Gets jQuery objects representing all rendered list items in the combo drop down list.
     */
    /**
         * Gets jQuery objects representing all rendered list items in the combo drop down list.
         */
    IgComboComponent.prototype.listItems = /**
         * Gets jQuery objects representing all rendered list items in the combo drop down list.
         */
    function () { return; };
    ;
    /**
     * Gets jQuery object of the outer element of the combo.
     */
    /**
         * Gets jQuery object of the outer element of the combo.
         */
    IgComboComponent.prototype.comboWrapper = /**
         * Gets jQuery object of the outer element of the combo.
         */
    function () { return; };
    ;
    /**
     * Gets jQuery object of the drop down associated with this combo widget
     */
    /**
         * Gets jQuery object of the drop down associated with this combo widget
         */
    IgComboComponent.prototype.dropDown = /**
         * Gets jQuery object of the drop down associated with this combo widget
         */
    function () { return; };
    ;
    /**
     * Gets jQuery object of the container that holds the list with items.
     */
    /**
         * Gets jQuery object of the container that holds the list with items.
         */
    IgComboComponent.prototype.list = /**
         * Gets jQuery object of the container that holds the list with items.
         */
    function () { return; };
    ;
    /**
     * Gets jQuery object of the text input associated with this combo widget.
     */
    /**
         * Gets jQuery object of the text input associated with this combo widget.
         */
    IgComboComponent.prototype.textInput = /**
         * Gets jQuery object of the text input associated with this combo widget.
         */
    function () { return; };
    ;
    /**
     * Gets jQuery object of the value input associated with this combo widget.
     */
    /**
         * Gets jQuery object of the value input associated with this combo widget.
         */
    IgComboComponent.prototype.valueInput = /**
         * Gets jQuery object of the value input associated with this combo widget.
         */
    function () { return; };
    ;
    /**
     * Gets reference to [igValidator](ui.igvalidator) used by igCombo.
     *
     * @param destroy Request to destroy validator.
     */
    /**
         * Gets reference to [igValidator](ui.igvalidator) used by igCombo.
         *
         * @param destroy Request to destroy validator.
         */
    IgComboComponent.prototype.validator = /**
         * Gets reference to [igValidator](ui.igvalidator) used by igCombo.
         *
         * @param destroy Request to destroy validator.
         */
    function (destroy) { return; };
    ;
    /**
     * Trigger validation.
     */
    /**
         * Trigger validation.
         */
    IgComboComponent.prototype.validate = /**
         * Trigger validation.
         */
    function () { return; };
    ;
    /**
     * Returns boolean representing whether the combo drop down list is opened.
     */
    /**
         * Returns boolean representing whether the combo drop down list is opened.
         */
    IgComboComponent.prototype.dropDownOpened = /**
         * Returns boolean representing whether the combo drop down list is opened.
         */
    function () { return; };
    ;
    /**
     * Repositions drop down under combo input. Has effect only when the drop down is attached to body.
     */
    /**
         * Repositions drop down under combo input. Has effect only when the drop down is attached to body.
         */
    IgComboComponent.prototype.positionDropDown = /**
         * Repositions drop down under combo input. Has effect only when the drop down is attached to body.
         */
    function () { return; };
    ;
    /**
     * Destroys the igCombo widget.
     */
    /**
         * Destroys the igCombo widget.
         */
    IgComboComponent.prototype.destroy = /**
         * Destroys the igCombo widget.
         */
    function () { return; };
    ;
    IgComboComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-combo",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dropDownWidth", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "responseDataType", "responseContentType", "requestType", "valueKey", "textKey", "itemTemplate", "headerTemplate", "footerTemplate", "inputName", "animationShowDuration", "animationHideDuration", "dropDownAttachedToBody", "filteringType", "filterExprUrlKey", "filteringCondition", "filteringLogic", "noMatchFoundText", "loadOnDemandSettings", "visibleItemsCount", "placeHolder", "mode", "virtualization", "multiSelection", "grouping", "validatorOptions", "highlightMatchesMode", "caseSensitive", "autoSelectFirstMatch", "autoComplete", "allowCustomValue", "closeDropDownOnBlur", "delayInputChangeProcessing", "tabIndex", "dropDownOnFocus", "closeDropDownOnSelect", "selectItemBySpaceKey", "initialSelectedItems", "preventSubmitOnEnter", "format", "suppressKeyboard", "enableClearButton", "dropDownButtonTitle", "clearButtonTitle", "dropDownOrientation"],
                    outputs: ["rendered", "dataBinding", "dataBound", "filtering", "filtered", "itemsRendering", "itemsRendered", "dropDownOpening", "dropDownOpened", "dropDownClosing", "dropDownClosed", "selectionChanging", "selectionChanged"]
                },] },
    ];
    /** @nocollapse */
    IgComboComponent.ctorParameters = function () { return [
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IgComboComponent.propDecorators = {
        "dataSource": [{ type: core_1.Input },],
    };
    return IgComboComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgComboComponent = IgComboComponent;
//# sourceMappingURL=igcombo.component.js.map