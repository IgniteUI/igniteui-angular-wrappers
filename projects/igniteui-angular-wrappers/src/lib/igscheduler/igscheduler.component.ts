import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-scheduler",
	template: "<ng-content></ng-content>",
	inputs:["widgetId","options","changeDetectionInterval","disabled","create","views","viewMode","selectedDate","enableTodayButton","width","height","agendaViewSettings","monthViewSettings","appointmentDialogSuppress"],
	outputs:["agendaRangeChanging","agendaRangeChanged","daySelected","monthChanging","monthChanged","rendering","rendered","viewChanging","viewChanged","appointmentDialogOpening","appointmentDialogOpened","appointmentDialogClosing","appointmentDialogClosed","appointmentCreating","appointmentCreated","appointmentDeleting","appointmentDeleted","appointmentEditing","appointmentEdited"]
})
export class IgSchedulerComponent extends IgControlBase<IgScheduler> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { 
		super(el, renderer, differs, kvalDiffers, cdr);
	}	

	/**
	 * Gets reference to appointment by id
	 *
	 * @param id 
	 */
	public getAppointmentById(id: Object): Object { return; };

	/**
	  * Creates a new appointment and renders it to the scheduler
	 *
	 * @param appointment 
	 */
	public createAppointment(appointment: Object): Object { return; };

	/**
	  * Deletes appointment from the appointment collection
	 *
	 * @param appointment	appointment
	 */
	public deleteAppointment(appointment: Object): Object { return; };

	/**
	  * Deletes appointment from the appointment collection
	 *
	 * @param appointment	appointment
	 * @param updateAppoinment	updateAppoinment
	 */
	public editAppointment(appointment: Object, updateAppoinment: Object): Object { return; };

	/**
	  * Destroys the widget
	 */
	public destroy(): void { return; };

	/**
	  * Gets reference to the today UI button.
	 */
	public todayButton(): string { return; };

	/**
	  * Gets reference to the previous UI button.
	 */
	public previousButton(): string { return; };

	/**
	  * Gets reference to the date range UI button.
	 */
	public dateRangeButton(): string { return; };

	/**
	  * Gets reference to the next UI button.
	 */
	public nextButton(): string { return; };

	/**
	  * Gets reference to the jQuery calendar UI control.
	 */
	public getCalendar(): string { return; };
}