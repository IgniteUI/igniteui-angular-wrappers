// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import {Component, ViewChild, TemplateRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Infragistics from '../../../dist/npm/igniteui.angular2';


export function main() {
	describe('Infragistics Angular2 TextEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgTextEditorComponent, TestIgTextEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-text-editor></ig-text-editor></div>';
			TestBed.overrideComponent(TestIgTextEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgTextEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTextEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-text-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>', field, event;
			TestBed.overrideComponent(TestIgTextEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgTextEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("displayValue")).toBe("test_value");
					fixture.debugElement.componentInstance.val = "changed_test_value";
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("displayValue")).toBe("changed_test_value");
						// on key change:
						field = $(fixture.debugElement.nativeElement).find("#editor1 input.ui-igedit-input");
						field.trigger("focus");
						window.typeInInput("2", field);
						expect(fixture.debugElement.componentInstance.val).toBe("changed_test_value2");
						window.typeInInput("2", field);
						expect(fixture.debugElement.componentInstance.val).toBe("changed_test_value22");
						field.val("changed_again_test_value").trigger("paste").trigger("blur");
						$(fixture.debugElement.nativeElement).find("#editor1")[0].dispatchEvent(new Event("blur"));
						fixture.detectChanges();
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe("changed_again_test_value");
							expect($(fixture.debugElement.nativeElement).find("ig-text-editor").hasClass("ng-touched")).toBe(true);
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});

		it('should allow changing options', (done) => {
			var template = '<div><ig-text-editor [(options)]="opts" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
			TestBed.overrideComponent(TestIgTextEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgTextEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					fixture.debugElement.componentInstance.opts.disabled = false;
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("option", "disabled")).toBe(false);
						expect($(fixture.debugElement.nativeElement).find("#editor1 input.ui-igedit-input")[0].hasAttribute("disabled")).toBe(false);
						done();
					}, 1);
				}, 1);
			});
		});

		it('should allow creating text editor in multiline mode', (done) => {
			var template = '<div><ig-text-editor [textMode]="\'multiline\'" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
			TestBed.overrideComponent(TestIgTextEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgTextEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("option", "textMode")).toBe("multiline");
					expect($(fixture.debugElement.nativeElement).find("#editor1 textarea.ui-igedit-input").length).toBe(1);
					expect($(fixture.debugElement.nativeElement).find("#editor1 textarea.ui-igedit-input").val()).toBe("test_value");
					done();
				}, 1);
			});
		});

		it('should allow creating text editor in normal mode', (done) => {
			var template = '<div><ig-text-editor [textMode]="\'text\'" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
			TestBed.overrideComponent(TestIgTextEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgTextEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igTextEditor("option", "textMode")).toBe("text");
					expect($(fixture.debugElement.nativeElement).find("#editor1 input.ui-igedit-input").length).toBe(1);
					expect($(fixture.debugElement.nativeElement).find("#editor1 input.ui-igedit-input").val()).toBe("test_value");
					done();
				}, 1);
			});
		});
	});

	describe('Infragistics Angular2 NumericEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgNumericEditorComponent, TestIgNumericEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-numeric-editor></ig-numeric-editor></div>';
			TestBed.overrideComponent(TestIgNumericEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgNumericEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNumericEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-numeric-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-numeric-editor></div>';
			TestBed.overrideComponent(TestIgNumericEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgNumericEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igNumericEditor("displayValue")).toBe("42");
					fixture.debugElement.componentInstance.val = 1;
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igNumericEditor("displayValue")).toBe("1");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(154).trigger("paste").trigger("blur");
						$(fixture.debugElement.nativeElement).find("#editor1")[0].dispatchEvent(new Event("blur"));
						fixture.detectChanges();
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe(154);
							expect($(fixture.debugElement.nativeElement).find("ig-numeric-editor").hasClass("ng-touched")).toBe(true);
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});


	describe('Infragistics Angular2 PercentEditor', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgPercentEditorComponent, TestIgPercentEditorComponent]
			});
		});
		
		it('should initialize correctly', (done) => {
			var template = '<div><ig-percent-editor></ig-percent-editor></div>';
			TestBed.overrideComponent(TestIgPercentEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgPercentEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPercentEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-percent-editor [(ngModel)]="val" [widgetId]="editorId"></ig-percent-editor></div>';
			TestBed.overrideComponent(TestIgPercentEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgPercentEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igPercentEditor("displayValue")).toBe("40.00%");
					fixture.debugElement.componentInstance.val = 0.1;
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igPercentEditor("displayValue")).toBe("10.00%");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(100).trigger("paste").trigger("blur");
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe(1);
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});

	describe('Infragistics Angular2 MaskEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgMaskEditorComponent, TestIgMaskEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-mask-editor></ig-mask-editor></div>';
			TestBed.overrideComponent(TestIgMaskEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgMaskEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgMaskEditorComponent)
					.toBe(true);
					done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-mask-editor [(ngModel)]="val" [widgetId]="editorId"></ig-mask-editor></div>';
			TestBed.overrideComponent(TestIgMaskEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgMaskEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igMaskEditor("displayValue")).toBe("test");
					fixture.debugElement.componentInstance.val = "changed";
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igMaskEditor("displayValue")).toBe("changed");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("test again").trigger("paste").trigger("blur");
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe("test again");
							done();
						}, 100);
					}, 1);
				}, 1);
			})
		});
	});

	describe('Infragistics Angular2 DatePicker', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgDatePickerComponent, TestIgDatePickerComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-date-picker></ig-date-picker></div>';
			TestBed.overrideComponent(TestIgDatePickerComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgDatePickerComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDatePickerComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-date-picker [(ngModel)]="val" [widgetId]="editorId"></ig-date-picker></div>';
			TestBed.overrideComponent(TestIgDatePickerComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgDatePickerComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDatePicker("displayValue")).toBe("4/20/2016");
					fixture.debugElement.componentInstance.val = new Date("3/15/2016");
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igDatePicker("displayValue")).toBe("3/15/2016");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("03/03/2016").trigger("paste").trigger("blur");
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date("03/03/2016").getTime());
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});

	describe('Infragistics Angular2 DateEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgDateEditorComponent, TestIgDateEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-date-editor></ig-date-editor></div>';
			TestBed.overrideComponent(TestIgDateEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgDateEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDateEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-date-editor [(ngModel)]="val" [widgetId]="editorId"></ig-date-editor></div>';
			TestBed.overrideComponent(TestIgDateEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgDateEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igDateEditor("displayValue")).toBe("4/20/2016");
					fixture.debugElement.componentInstance.val = new Date("3/15/2016");
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igDateEditor("displayValue")).toBe("3/15/2016");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val("03/03/2016").trigger("paste").trigger("blur");
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date("03/03/2016").getTime());
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});

	describe('Infragistics Angular2 CurrencyEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgCurrencyEditorComponent, TestIgCurrencyEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-currency-editor></ig-currency-editor></div>';
			TestBed.overrideComponent(TestIgCurrencyEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgCurrencyEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgCurrencyEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-currency-editor [(ngModel)]="val" [widgetId]="editorId"></ig-currency-editor></div>';
			TestBed.overrideComponent(TestIgCurrencyEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgCurrencyEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCurrencyEditor("displayValue")).toBe("$42.00");
					fixture.debugElement.componentInstance.val = 1;
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igCurrencyEditor("displayValue")).toBe("$1.00");
						$(fixture.debugElement.nativeElement).find("#editor1").trigger("focus").val(154).trigger("paste").trigger("blur");
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe(154);
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});

	describe('Infragistics Angular2 CheckboxEditor', () => {

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule],
				declarations: [Infragistics.IgCheckboxEditorComponent, TestIgCheckboxEditorComponent]
			});
		});

		it('should initialize correctly', (done) => {
			var template = '<div><ig-checkbox-editor></ig-checkbox-editor></div>';
			TestBed.overrideComponent(TestIgCheckboxEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgCheckboxEditorComponent);
				fixture.detectChanges();
				expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgCheckboxEditorComponent)
					.toBe(true);
				done();
			});
		});

		it('should allow setting value with ngModel', (done) => {
			var template = '<div><ig-checkbox-editor [(ngModel)]="val" [widgetId]="editorId"></ig-checkbox-editor></div>';
			TestBed.overrideComponent(TestIgCheckboxEditorComponent, {
				set: {
					template: template
				}
			});
			TestBed.compileComponents().then(() => {
				let fixture = TestBed.createComponent(TestIgCheckboxEditorComponent);
				fixture.detectChanges();
				setTimeout(() => {
					expect($(fixture.debugElement.nativeElement).find("#editor1").igCheckboxEditor("value")).toBe(true);
					fixture.debugElement.componentInstance.val = false;
					fixture.detectChanges();
					setTimeout(() => {
						expect($(fixture.debugElement.nativeElement).find("#editor1").igCheckboxEditor("value")).toBe(false);
						$(fixture.debugElement.nativeElement).find("#editor1").click();
						setTimeout(() => {
							expect(fixture.debugElement.componentInstance.val).toBe(true);
							done();
						}, 100);
					}, 1);
				}, 1);
			});
		});
	});
}

@Component({
	selector: 'test-text-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgTextEditorComponent {
	private opts: IgTextEditor;
	private val:string;
	private editorId:string;
	private cdi: number = 0;
	@ViewChild(Infragistics.IgTextEditorComponent) public viewChild: Infragistics.IgTextEditorComponent;

	constructor() {
		this.val = "test_value";
		this.editorId = "editor1";
		this.opts = {
			disabled: true
		};
	}
}

@Component({
	selector: 'test-numeric-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgNumericEditorComponent {
	private val:number;
	private editorId:string;
	private cdi: number = 0;
	@ViewChild(Infragistics.IgNumericEditorComponent) public viewChild: Infragistics.IgNumericEditorComponent;

	constructor() {
		this.val = 42;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-percent-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgPercentEditorComponent {
	private val:number;
	private editorId:string;
	@ViewChild(Infragistics.IgPercentEditorComponent) public viewChild: Infragistics.IgPercentEditorComponent;

	constructor() {
		this.val = 0.4;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-mask-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgMaskEditorComponent {
	private val:string;
	private editorId:string;
	@ViewChild(Infragistics.IgMaskEditorComponent) public viewChild: Infragistics.IgMaskEditorComponent;

	constructor() {
		this.val = "test";
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-date-picker-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgDatePickerComponent {
	private val: Date;
	private editorId:string;
	@ViewChild(Infragistics.IgDatePickerComponent) public viewChild: Infragistics.IgDatePickerComponent;

	constructor() {
		this.val = new Date("4/20/2016");
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-date-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgDateEditorComponent {
	private val: Date;
	private editorId:string;
	@ViewChild(Infragistics.IgDateEditorComponent) public viewChild: Infragistics.IgDateEditorComponent;

	constructor() {
		this.val = new Date("4/20/2016");
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-currency-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgCurrencyEditorComponent {
	private val: number;
	private editorId:string;
	@ViewChild(Infragistics.IgCurrencyEditorComponent) public viewChild: Infragistics.IgCurrencyEditorComponent;

	constructor() {
		this.val = 42;
		this.editorId = "editor1";
	}
}

@Component({
	selector: 'test-checkbox-editor-cmp',
	template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestIgCheckboxEditorComponent {
	private val: boolean;
	private editorId:string;
	@ViewChild(Infragistics.IgCheckboxEditorComponent) public viewChild: Infragistics.IgCheckboxEditorComponent;

	constructor() {
		this.val = true;
		this.editorId = "editor1";
	}
}

interface MyWindow extends Window {
	typeInInput(characters: String, element: JQuery): void;
}
declare var window: MyWindow;

window.typeInInput = function(characters: String, element: JQuery) {
		var keyDown = jQuery.Event("keydown"),
			keyPress = jQuery.Event("keypress"),
			keyUp = jQuery.Event("keyup"),
			value: string = element.val(), selectionStart;

		characters.split('').forEach(function (ch) {
			selectionStart = (element[0] as HTMLInputElement).selectionStart;
			keyDown.keyCode = keyUp.keyCode = keyPress.keyCode = ch.charCodeAt(0);
			keyDown.charCode = keyUp.charCode = keyPress.charCode = ch.charCodeAt(0);
			element.trigger(keyDown);
			element.trigger(keyPress);
			value = value.substring(0, selectionStart) + ch + value.substring(selectionStart + 1);
			element.val(value);
			(element[0] as HTMLInputElement).selectionStart++;
			element.trigger(keyUp);
		});
	};