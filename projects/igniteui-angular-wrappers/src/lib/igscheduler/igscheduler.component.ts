import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-scheduler',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'views', 'viewMode', 'selectedDate', 'enableTodayButton', 'width', 'height', 'agendaViewSettings', 'monthViewSettings', 'appointmentDialogSuppress'],
    outputs: ['agendaRangeChanging', 'agendaRangeChanged', 'daySelected', 'monthChanging', 'monthChanged', 'rendering', 'rendered', 'viewChanging', 'viewChanged', 'appointmentDialogOpening', 'appointmentDialogOpened', 'appointmentDialogClosing', 'appointmentDialogClosed', 'appointmentCreating', 'appointmentCreated', 'appointmentDeleting', 'appointmentDeleted', 'appointmentEditing', 'appointmentEdited'],
    standalone: false
})
export class IgSchedulerComponent extends IgControlBase<IgScheduler> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }

    /**
     * Gets reference to appointment by id
     *
     * @param id id
     */
    /* istanbul ignore next */
    public getAppointmentById(id: object): object { return; }

    /**
     * Creates a new appointment and renders it to the scheduler
     *
     * @param appointment appointment
     */
    /* istanbul ignore next */
    public createAppointment(appointment: object): object { return; }

    /**
     * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     */
    /* istanbul ignore next */
    public deleteAppointment(appointment: object): object { return; }

    /**
     * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     * @param updateAppoinment	updateAppoinment
     */
    /* istanbul ignore next */
    public editAppointment(appointment: object, updateAppoinment: object): object { return; }

    /**
     * Destroys the widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Gets reference to the today UI button.
     */
    /* istanbul ignore next */
    public todayButton(): string { return; }

    /**
     * Gets reference to the previous UI button.
     */
    /* istanbul ignore next */
    public previousButton(): string { return; }

    /**
     * Gets reference to the date range UI button.
     */
    /* istanbul ignore next */
    public dateRangeButton(): string { return; }

    /**
     * Gets reference to the next UI button.
     */
    /* istanbul ignore next */
    public nextButton(): string { return; }

    /**
     * Gets reference to the jQuery calendar UI control.
     */
    /* istanbul ignore next */
    public getCalendar(): string { return; }
}
