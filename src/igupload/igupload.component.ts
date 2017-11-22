import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";


@Component({
	selector: "ig-upload",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","autostartupload","labelUploadButton","labelAddButton","labelClearAllButton","labelSummaryTemplate","labelSummaryProgressBarTemplate","labelShowDetails","labelHideDetails","labelSummaryProgressButtonCancel","labelSummaryProgressButtonContinue","labelSummaryProgressButtonDone","labelProgressBarFileNameContinue","errorMessageMaxFileSizeExceeded","errorMessageGetFileStatus","errorMessageCancelUpload","errorMessageNoSuchFile","errorMessageOther","errorMessageValidatingFileExtension","errorMessageAJAXRequestFileSize","errorMessageTryToRemoveNonExistingFile","errorMessageTryToStartNonExistingFile","errorMessageMaxUploadedFiles","errorMessageMaxSimultaneousFiles","errorMessageDropMultipleFilesWhenSingleModel","uploadUrl","progressUrl","allowedExtensions","showFileExtensionIcon","css","fileExtensionIcons","mode","multipleFiles","maxUploadedFiles","maxSimultaneousFilesUploads","fileSizeMetric","controlId","fileSizeDecimalDisplay","maxFileSize"],
	outputs: ["fileSelecting","fileSelected","fileUploading","fileUploaded","fileUploadAborted","cancelAllClicked","onError","fileExtensionsValidating","onXHRLoad","onFormDataSubmit"]
})
export class IgUploadComponent extends IgControlBase<IgUpload> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Return jquery object of fileupload container - html DOM element
	 */
	public container(): void { return; } ;

	/**
 	 * Returns the current widget element
	 */
	public widget(): void { return; } ;

	/**
 	 * Hide finished files
	 */
	public clearAll(): void { return; } ;

	/**
 	 * Append additional data field to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 *
	 * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 * @param field    Data field that should be appended to the formData. The object has 2 properties - value and name. If the browser supports HTML5 the data field is appended to the formData object. Otherwise it is appended as input hidden field to the <form>
	 */
	public addDataField(formData: Object, field: Object): void { return; } ;

	/**
 	 * Append additional data fields to formData(before submitting it to the server). Usually this function is used in the handler of the event onFormDataSubmit. If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 *
	 * @param formData    If the browser supports HTML5 file API formData is instance of FormData, otherwise(like IE10 and older) formData is jQuery representation of the <form> that should be submitted to the server
	 * @param fields    Array of data fields that should be appended to the formData. Each data field is object with 2 properties - value and name. If the browser supports HTML5 these data fields are added to the formData. Otherwise each of these data field is appended as input hidden field to the <form>
	 */
	public addDataFields(formData: Object, fields: any[]): void { return; } ;

	/**
 	 * Start uploading file as submitting form with the specified formNumber.
	 *
	 * @param formNumber    id of the upload form
	 */
	public startUpload(formNumber: number): void { return; } ;

	/**
 	 * Cancel upload for the specified file id
	 * 			 formNumber - id of the file to be canceled
	 *
	 * @param formNumber    id of the form which should be cancelled
	 */
	public cancelUpload(formNumber: number): void { return; } ;

	/**
 	 * Destroy the widget
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the information about uploading files - all files uploaded/uploading/pending
	 */
	public getFileInfoData(): Object { return; } ;

	/**
 	 * Cancel all uploading and pending files
	 */
	public cancelAll(): void { return; } ;

	/**
 	 * Returns the information about the file by specified file identifier. It could be file which is uploading/uploaded or uploading is not started. If there isn"t file with the specified file id returns null
	 *
	 * @param fileIndex    unique identifier of the file
	 */
	public getFileInfo(fileIndex: number): Object { return; } ;
}