import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgContentControlBase } from "../igcontrolbase/igcontentcontrolbase";

@Component({
	selector: "ig-dialog",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","mainElement","state","pinned","closeOnEscape","showCloseButton","showMaximizeButton","showMinimizeButton","showPinButton","pinOnMinimized","imageClass","headerText","showHeader","showFooter","footerText","dialogClass","container","height","width","minHeight","minWidth","maxHeight","maxWidth","draggable","position","resizable","tabIndex","openAnimation","closeAnimation","zIndex","modal","trackFocus","closeButtonTitle","minimizeButtonTitle","maximizeButtonTitle","pinButtonTitle","unpinButtonTitle","restoreButtonTitle","temporaryUrl","enableHeaderFocus","enableDblclick"],
	outputs: ["stateChanging","stateChanged","animationEnded","focus","blur"]
})
export class IgDialogComponent extends IgContentControlBase<IgDialog> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Destroys the igDialog and moves the target element to its original parent.
	 */
	public destroy(): Object { return; } ;

	/**
 	 * Gets/Sets the state of the editor.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 *
	 * @param state     New state.
	 */
	public state(state?: string): string { return; } ;

	/**
 	 * Gets reference to the dynamically created DIV element which represents the dialog.
	 */
	public mainElement(): Element { return; } ;

	/**
 	 * Closes the dialog if it is opened.
	 * 				Notes:
	 * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 * 				2. That method does not change minimized or maximized state of the dialog.
	 * 				It means that method "open" will open the dialog and keep previous minimized or maximized state.
	 *
	 * @param e     Browser event: internal use only.
	 */
	public close(e?: Object): Object { return; } ;

	/**
 	 * Opens the dialog if it is closed. Notes:
	 * 				1. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 * 				2. That method does not change minimized or maximized state of the dialog. It means that if the dialog was in minimized or maximized stated when closed by "close" method, then the dialog will open in minimized or maximized state respectively.
	 */
	public open(): Object { return; } ;

	/**
 	 * Minimizes the dialog if it is not minimized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public minimize(): Object { return; } ;

	/**
 	 * Maximizes the dialog if it is not maximized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public maximize(): Object { return; } ;

	/**
 	 * Sets the normal state for the dialog if it was maximized or minimized.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public restore(): Object { return; } ;

	/**
 	 * Pins the dialog if it is not pinned.
	 * 				When the dialog is pinned, then the html element of the dialog is moved to the original container where the target element was located and position:absolute is removed.
	 * 				The pinned dialog does not support modal state, maximized state and it can not be moved.
	 * 				Notes:
	 * 				1. If the parent element of the original target-element is invisible, then the pinned dialog becomes invisible as well.
	 * 				2. If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public pin(): Object { return; } ;

	/**
 	 * Unpins the dialog if it is pinned.
	 * 				Note: If the state of the dialog changes, then stateChanging and stateChanged events are raised.
	 */
	public unpin(): Object { return; } ;

	/**
 	 * Gets a reference to the top modal dialog.
	 */
	public getTopModal(): Object { return; } ;

	/**
 	 * Checks if the dialog is modal and if it is currently active.
	 */
	public isTopModal(): boolean { return; } ;

	/**
 	 * Moves a not modal dialog to the top.
	 *
	 * @param e     Original event of browser.
	 */
	public moveToTop(e?: Object): Object { return; } ;

	/**
 	 * Retrieves the igDialog content container or sets its content to be the new content provided.
	 *
	 * @param newContent     The new html content provided as a string. If the parameter is provided then the method acts as a setter.
	 */
	public content(newContent?: string): Object { return; } ;
}