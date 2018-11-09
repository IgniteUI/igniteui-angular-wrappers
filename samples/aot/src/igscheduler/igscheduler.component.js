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
    IgSchedulerComponent.prototype.getAppointmentById = function (id) { return; };
    ;
    /**
      * Creates a new appointment and renders it to the scheduler
     *
     * @param appointment
     */
    IgSchedulerComponent.prototype.createAppointment = function (appointment) { return; };
    ;
    /**
      * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     */
    IgSchedulerComponent.prototype.deleteAppointment = function (appointment) { return; };
    ;
    /**
      * Deletes appointment from the appointment collection
     *
     * @param appointment	appointment
     * @param updateAppoinment	updateAppoinment
     */
    IgSchedulerComponent.prototype.editAppointment = function (appointment, updateAppoinment) { return; };
    ;
    /**
      * Destroys the widget
     */
    IgSchedulerComponent.prototype.destroy = function () { return; };
    ;
    /**
      * Gets reference to the today UI button.
     */
    IgSchedulerComponent.prototype.todayButton = function () { return; };
    ;
    /**
      * Gets reference to the previous UI button.
     */
    IgSchedulerComponent.prototype.previousButton = function () { return; };
    ;
    /**
      * Gets reference to the date range UI button.
     */
    IgSchedulerComponent.prototype.dateRangeButton = function () { return; };
    ;
    /**
      * Gets reference to the next UI button.
     */
    IgSchedulerComponent.prototype.nextButton = function () { return; };
    ;
    /**
      * Gets reference to the jQuery calendar UI control.
     */
    IgSchedulerComponent.prototype.getCalendar = function () { return; };
    ;
    IgSchedulerComponent = __decorate([
        core_1.Component({
            selector: "ig-scheduler",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "views", "viewMode", "selectedDate", "enableTodayButton", "width", "height", "agendaViewSettings", "monthViewSettings", "appointmentDialogSuppress"],
            outputs: ["agendaRangeChanging", "agendaRangeChanged", "daySelected", "monthChanging", "monthChanged", "rendering", "rendered", "viewChanging", "viewChanged", "appointmentDialogOpening", "appointmentDialogOpened", "appointmentDialogClosing", "appointmentDialogClosed", "appointmentCreating", "appointmentCreated", "appointmentDeleting", "appointmentDeleted", "appointmentEditing", "appointmentEdited"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgSchedulerComponent);
    return IgSchedulerComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgSchedulerComponent = IgSchedulerComponent;
//# sourceMappingURL=igscheduler.component.js.map