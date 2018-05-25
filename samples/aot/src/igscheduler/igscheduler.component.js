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
var IgSchedulerComponent = /** @class */ (function (_super) {
    __extends(IgSchedulerComponent, _super);
    function IgSchedulerComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Gets reference to appointment by id
     *
     * @param id
     */
    /**
         * Gets reference to appointment by id
         *
         * @param id
         */
    IgSchedulerComponent.prototype.getAppointmentById = /**
         * Gets reference to appointment by id
         *
         * @param id
         */
    function (id) { return; };
    ;
    /**
      * Creates a new appointment and renders it to the scheduler
     *
     * @param appointment
     */
    /**
          * Creates a new appointment and renders it to the scheduler
         *
         * @param appointment
         */
    IgSchedulerComponent.prototype.createAppointment = /**
          * Creates a new appointment and renders it to the scheduler
         *
         * @param appointment
         */
    function (appointment) { return; };
    ;
    /**
      * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     */
    /**
          * Deletes appointment from the appointment collection
         *
         * @param appointment	appointment
         */
    IgSchedulerComponent.prototype.deleteAppointment = /**
          * Deletes appointment from the appointment collection
         *
         * @param appointment	appointment
         */
    function (appointment) { return; };
    ;
    /**
      * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     * @param updateAppoinment	updateAppoinment
     */
    /**
          * Deletes appointment from the appointment collection
         *
         * @param appointment	appointment
         * @param updateAppoinment	updateAppoinment
         */
    IgSchedulerComponent.prototype.editAppointment = /**
          * Deletes appointment from the appointment collection
         *
         * @param appointment	appointment
         * @param updateAppoinment	updateAppoinment
         */
    function (appointment, updateAppoinment) { return; };
    ;
    /**
      * Destroys the widget
     */
    /**
          * Destroys the widget
         */
    IgSchedulerComponent.prototype.destroy = /**
          * Destroys the widget
         */
    function () { return; };
    ;
    /**
      * Gets reference to the today UI button.
     */
    /**
          * Gets reference to the today UI button.
         */
    IgSchedulerComponent.prototype.todayButton = /**
          * Gets reference to the today UI button.
         */
    function () { return; };
    ;
    /**
      * Gets reference to the previous UI button.
     */
    /**
          * Gets reference to the previous UI button.
         */
    IgSchedulerComponent.prototype.previousButton = /**
          * Gets reference to the previous UI button.
         */
    function () { return; };
    ;
    /**
      * Gets reference to the date range UI button.
     */
    /**
          * Gets reference to the date range UI button.
         */
    IgSchedulerComponent.prototype.dateRangeButton = /**
          * Gets reference to the date range UI button.
         */
    function () { return; };
    ;
    /**
      * Gets reference to the next UI button.
     */
    /**
          * Gets reference to the next UI button.
         */
    IgSchedulerComponent.prototype.nextButton = /**
          * Gets reference to the next UI button.
         */
    function () { return; };
    ;
    /**
      * Gets reference to the jQuery calendar UI control.
     */
    /**
          * Gets reference to the jQuery calendar UI control.
         */
    IgSchedulerComponent.prototype.getCalendar = /**
          * Gets reference to the jQuery calendar UI control.
         */
    function () { return; };
    ;
    IgSchedulerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-scheduler",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "views", "viewMode", "selectedDate", "enableTodayButton", "width", "height", "agendaViewSettings", "monthViewSettings", "appointmentDialogSuppress"],
                    outputs: ["agendaRangeChanging", "agendaRangeChanged", "daySelected", "monthChanging", "monthChanged", "rendering", "rendered", "viewChanging", "viewChanged", "appointmentDialogOpening", "appointmentDialogOpened", "appointmentDialogClosing", "appointmentDialogClosed", "appointmentCreating", "appointmentCreated", "appointmentDeleting", "appointmentDeleted", "appointmentEditing", "appointmentEdited"]
                },] },
    ];
    /** @nocollapse */
    IgSchedulerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgSchedulerComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgSchedulerComponent = IgSchedulerComponent;
//# sourceMappingURL=igscheduler.component.js.map