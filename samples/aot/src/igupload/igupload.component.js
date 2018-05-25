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
var IgUploadComponent = /** @class */ (function (_super) {
    __extends(IgUploadComponent, _super);
    function IgUploadComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Return jquery object of fileupload container - html DOM element
     */
    /**
         * Return jquery object of fileupload container - html DOM element
         */
    IgUploadComponent.prototype.container = /**
         * Return jquery object of fileupload container - html DOM element
         */
    function () { return; };
    ;
    /**
     * Returns the current widget element
     */
    /**
         * Returns the current widget element
         */
    IgUploadComponent.prototype.widget = /**
         * Returns the current widget element
         */
    function () { return; };
    ;
    /**
     * Hide finished files
     */
    /**
         * Hide finished files
         */
    IgUploadComponent.prototype.clearAll = /**
         * Hide finished files
         */
    function () { return; };
    ;
    /**
     * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     *
     * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
     */
    /**
         * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         *
         * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
         */
    IgUploadComponent.prototype.addDataField = /**
         * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         *
         * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
         */
    function (formData, field) { return; };
    ;
    /**
     * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     *
     * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
     * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
     */
    /**
         * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         *
         * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
         */
    IgUploadComponent.prototype.addDataFields = /**
         * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         *
         * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
         * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
         */
    function (formData, fields) { return; };
    ;
    /**
     * Start uploading file as submitting form with the specified formNumber.
     *
     * @param formNumber    id of the upload form
     */
    /**
         * Start uploading file as submitting form with the specified formNumber.
         *
         * @param formNumber    id of the upload form
         */
    IgUploadComponent.prototype.startUpload = /**
         * Start uploading file as submitting form with the specified formNumber.
         *
         * @param formNumber    id of the upload form
         */
    function (formNumber) { return; };
    ;
    /**
     * Cancel upload for the specified file id
     * 			 formNumber - id of the file to be canceled
     *
     * @param formNumber    id of the form which should be cancelled
     */
    /**
         * Cancel upload for the specified file id
         * 			 formNumber - id of the file to be canceled
         *
         * @param formNumber    id of the form which should be cancelled
         */
    IgUploadComponent.prototype.cancelUpload = /**
         * Cancel upload for the specified file id
         * 			 formNumber - id of the file to be canceled
         *
         * @param formNumber    id of the form which should be cancelled
         */
    function (formNumber) { return; };
    ;
    /**
     * Destroy the widget
     */
    /**
         * Destroy the widget
         */
    IgUploadComponent.prototype.destroy = /**
         * Destroy the widget
         */
    function () { return; };
    ;
    /**
     * Returns the information about uploading files - all files uploaded/uploading/pending
     */
    /**
         * Returns the information about uploading files - all files uploaded/uploading/pending
         */
    IgUploadComponent.prototype.getFileInfoData = /**
         * Returns the information about uploading files - all files uploaded/uploading/pending
         */
    function () { return; };
    ;
    /**
     * Cancel all uploading and pending files
     */
    /**
         * Cancel all uploading and pending files
         */
    IgUploadComponent.prototype.cancelAll = /**
         * Cancel all uploading and pending files
         */
    function () { return; };
    ;
    /**
     * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
     *
     * @param fileIndex    unique identifier of the file
     */
    /**
         * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
         *
         * @param fileIndex    unique identifier of the file
         */
    IgUploadComponent.prototype.getFileInfo = /**
         * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
         *
         * @param fileIndex    unique identifier of the file
         */
    function (fileIndex) { return; };
    ;
    IgUploadComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-upload",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "autostartupload", "labelUploadButton", "labelAddButton", "labelClearAllButton", "labelSummaryTemplate", "labelSummaryProgressBarTemplate", "labelShowDetails", "labelHideDetails", "labelSummaryProgressButtonCancel", "labelSummaryProgressButtonContinue", "labelSummaryProgressButtonDone", "labelProgressBarFileNameContinue", "errorMessageMaxFileSizeExceeded", "errorMessageGetFileStatus", "errorMessageCancelUpload", "errorMessageNoSuchFile", "errorMessageOther", "errorMessageValidatingFileExtension", "errorMessageAJAXRequestFileSize", "errorMessageTryToRemoveNonExistingFile", "errorMessageTryToStartNonExistingFile", "errorMessageMaxUploadedFiles", "errorMessageMaxSimultaneousFiles", "errorMessageDropMultipleFilesWhenSingleModel", "uploadUrl", "progressUrl", "allowedExtensions", "showFileExtensionIcon", "css", "fileExtensionIcons", "mode", "multipleFiles", "maxUploadedFiles", "maxSimultaneousFilesUploads", "fileSizeMetric", "controlId", "fileSizeDecimalDisplay", "maxFileSize"],
                    outputs: ["fileSelecting", "fileSelected", "fileUploading", "fileUploaded", "fileUploadAborted", "cancelAllClicked", "onError", "fileExtensionsValidating", "onXHRLoad", "onFormDataSubmit"]
                },] },
    ];
    /** @nocollapse */
    IgUploadComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgUploadComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgUploadComponent = IgUploadComponent;
//# sourceMappingURL=igupload.component.js.map