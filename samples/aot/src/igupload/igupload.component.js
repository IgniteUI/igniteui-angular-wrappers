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
var IgUploadComponent = /** @class */ (function (_super) {
    __extends(IgUploadComponent, _super);
    function IgUploadComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Return jquery object of fileupload container - html DOM element
     */
    IgUploadComponent.prototype.container = function () { return; };
    ;
    /**
     * Returns the current widget element
     */
    IgUploadComponent.prototype.widget = function () { return; };
    ;
    /**
     * Hide finished files
     */
    IgUploadComponent.prototype.clearAll = function () { return; };
    ;
    /**
     * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     *
     * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
     */
    IgUploadComponent.prototype.addDataField = function (formData, field) { return; };
    ;
    /**
     * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     *
     * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
     */
    IgUploadComponent.prototype.addDataFields = function (formData, fields) { return; };
    ;
    /**
     * Start uploading file as submitting form with the specified formNumber.
     *
     * @param formNumber    id of the upload form
     */
    IgUploadComponent.prototype.startUpload = function (formNumber) { return; };
    ;
    /**
     * Cancel upload for the specified file id
     * 			 formNumber - id of the file to be canceled
     *
     * @param formNumber    id of the form which should be cancelled
     */
    IgUploadComponent.prototype.cancelUpload = function (formNumber) { return; };
    ;
    /**
     * Destroy the widget
     */
    IgUploadComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the information about uploading files - all files uploaded/uploading/pending
     */
    IgUploadComponent.prototype.getFileInfoData = function () { return; };
    ;
    /**
     * Cancel all uploading and pending files
     */
    IgUploadComponent.prototype.cancelAll = function () { return; };
    ;
    /**
     * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
     *
     * @param fileIndex    unique identifier of the file
     */
    IgUploadComponent.prototype.getFileInfo = function (fileIndex) { return; };
    ;
    IgUploadComponent = __decorate([
        core_1.Component({
            selector: "ig-upload",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "autostartupload", "labelUploadButton", "labelAddButton", "labelClearAllButton", "labelSummaryTemplate", "labelSummaryProgressBarTemplate", "labelShowDetails", "labelHideDetails", "labelSummaryProgressButtonCancel", "labelSummaryProgressButtonContinue", "labelSummaryProgressButtonDone", "labelProgressBarFileNameContinue", "errorMessageMaxFileSizeExceeded", "errorMessageGetFileStatus", "errorMessageCancelUpload", "errorMessageNoSuchFile", "errorMessageOther", "errorMessageValidatingFileExtension", "errorMessageAJAXRequestFileSize", "errorMessageTryToRemoveNonExistingFile", "errorMessageTryToStartNonExistingFile", "errorMessageMaxUploadedFiles", "errorMessageMaxSimultaneousFiles", "errorMessageDropMultipleFilesWhenSingleModel", "uploadUrl", "progressUrl", "allowedExtensions", "showFileExtensionIcon", "css", "fileExtensionIcons", "mode", "multipleFiles", "maxUploadedFiles", "maxSimultaneousFilesUploads", "fileSizeMetric", "controlId", "fileSizeDecimalDisplay", "maxFileSize"],
            outputs: ["fileSelecting", "fileSelected", "fileUploading", "fileUploaded", "fileUploadAborted", "cancelAllClicked", "onError", "fileExtensionsValidating", "onXHRLoad", "onFormDataSubmit"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgUploadComponent);
    return IgUploadComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgUploadComponent = IgUploadComponent;
//# sourceMappingURL=igupload.component.js.map