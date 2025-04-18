// eslint-disable-next-line max-len
// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/Angular/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Infragistics from '../../public-api';

declare const $: any;

describe('Infragistics Angular TextEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgTextEditorComponent, TestIgTextEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-text-editor></ig-text-editor></div>';
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTextEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow invoking validator() API method for the IgTextEditorComponent', (done) => {
        const template = '<div><ig-text-editor [validatorOptions]="validatorOpts" [(ngModel)]="val" [widgetId]="editorId"></ig-text-editor></div>';
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            const validator = fixture.componentInstance.viewChild.validator();
            expect(validator instanceof $.ui.igValidator).toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-text-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
        let field;
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igTextEditor('displayValue')).toBe('test_value');
                fixture.debugElement.componentInstance.val = 'changed_test_value';
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igTextEditor('displayValue')).toBe('changed_test_value');
                    // on key change:
                    field = $(fixture.debugElement.nativeElement).find('#editor1 input.ui-igedit-input');
                    window.typeInInput('2', field);
                    expect(fixture.debugElement.componentInstance.val).toBe('changed_test_value2');
                    window.typeInInput('2', field);
                    expect(fixture.debugElement.componentInstance.val).toBe('changed_test_value22');
                    field.focus().trigger('focus').val('changed_again_test_value').blur().trigger('blur');
                    fixture.detectChanges();
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe('changed_again_test_value');
                        expect($(fixture.debugElement.nativeElement).find('ig-text-editor').hasClass('ng-touched')).toBe(true);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });

    it('should allow changing options', (done) => {
        const template = '<div><ig-text-editor [(options)]="opts" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                fixture.debugElement.componentInstance.opts.disabled = false;
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igTextEditor('option', 'disabled')).toBe(false);
                    expect($(fixture.debugElement.nativeElement).find('#editor1 input.ui-igedit-input')[0].hasAttribute('disabled'))
                      .toBe(false);
                    done();
                }, 1);
            }, 1);
        });
    });

    it('should allow creating text editor in multiline mode', (done) => {
        const template = '<div><ig-text-editor [textMode]="\'multiline\'" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igTextEditor('option', 'textMode')).toBe('multiline');
                expect($(fixture.debugElement.nativeElement).find('#editor1 textarea.ui-igedit-input').length).toBe(1);
                expect($(fixture.debugElement.nativeElement).find('#editor1 textarea.ui-igedit-input').val()).toBe('test_value');
                done();
            }, 1);
        });
    });

    it('should allow creating text editor in normal mode', (done) => {
        const template = '<div><ig-text-editor [textMode]="\'text\'" [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-text-editor></div>';
        TestBed.overrideComponent(TestIgTextEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTextEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igTextEditor('option', 'textMode')).toBe('text');
                expect($(fixture.debugElement.nativeElement).find('#editor1 input.ui-igedit-input').length).toBe(1);
                expect($(fixture.debugElement.nativeElement).find('#editor1 input.ui-igedit-input').val()).toBe('test_value');
                done();
            }, 1);
        });
    });
});

describe('Infragistics Angular NumericEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgNumericEditorComponent, TestIgNumericEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-numeric-editor></ig-numeric-editor></div>';
        TestBed.overrideComponent(TestIgNumericEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgNumericEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgNumericEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-numeric-editor [(ngModel)]="val" [widgetId]="editorId" [changeDetectionInterval]="cdi"></ig-numeric-editor></div>';
        TestBed.overrideComponent(TestIgNumericEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgNumericEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igNumericEditor('displayValue')).toBe('42');
                fixture.debugElement.componentInstance.val = 1;
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igNumericEditor('displayValue')).toBe('1');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val(154).blur().trigger('blur');
                    fixture.detectChanges();
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe(154);
                        expect($(fixture.debugElement.nativeElement).find('ig-numeric-editor').hasClass('ng-touched')).toBe(true);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});


describe('Infragistics Angular PercentEditor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgPercentEditorComponent, TestIgPercentEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-percent-editor></ig-percent-editor></div>';
        TestBed.overrideComponent(TestIgPercentEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgPercentEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgPercentEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-percent-editor [(ngModel)]="val" [widgetId]="editorId"></ig-percent-editor></div>';
        TestBed.overrideComponent(TestIgPercentEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgPercentEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igPercentEditor('displayValue')).toBe('40.00%');
                fixture.debugElement.componentInstance.val = 0.1;
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igPercentEditor('displayValue')).toBe('10.00%');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val(100).blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe(1);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular MaskEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgMaskEditorComponent, TestIgMaskEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-mask-editor></ig-mask-editor></div>';
        TestBed.overrideComponent(TestIgMaskEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgMaskEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgMaskEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-mask-editor [(ngModel)]="val" [widgetId]="editorId"></ig-mask-editor></div>';
        TestBed.overrideComponent(TestIgMaskEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgMaskEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igMaskEditor('displayValue')).toBe('test');
                fixture.debugElement.componentInstance.val = 'changed';
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igMaskEditor('displayValue')).toBe('changed');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val('test again')
                      .blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe('test again');
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular DatePicker', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgDatePickerComponent, TestIgDatePickerComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-date-picker></ig-date-picker></div>';
        TestBed.overrideComponent(TestIgDatePickerComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgDatePickerComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDatePickerComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-date-picker [(ngModel)]="val" [widgetId]="editorId"></ig-date-picker></div>';
        TestBed.overrideComponent(TestIgDatePickerComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgDatePickerComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igDatePicker('displayValue')).toBe('4/20/2016');
                fixture.debugElement.componentInstance.val = new Date('3/15/2016');
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igDatePicker('displayValue')).toBe('3/15/2016');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val('03/03/2016')
                      .blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date('03/03/2016').getTime());
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular DateEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgDateEditorComponent, TestIgDateEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-date-editor></ig-date-editor></div>';
        TestBed.overrideComponent(TestIgDateEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgDateEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgDateEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-date-editor [(ngModel)]="val" [widgetId]="editorId"></ig-date-editor></div>';
        TestBed.overrideComponent(TestIgDateEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgDateEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igDateEditor('displayValue')).toBe('4/20/2016');
                fixture.debugElement.componentInstance.val = new Date('3/15/2016');
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igDateEditor('displayValue')).toBe('3/15/2016');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val('03/03/2016')
                      .blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val.getTime()).toBe(new Date('03/03/2016').getTime());
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular CurrencyEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgCurrencyEditorComponent, TestIgCurrencyEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-currency-editor></ig-currency-editor></div>';
        TestBed.overrideComponent(TestIgCurrencyEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgCurrencyEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgCurrencyEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-currency-editor [(ngModel)]="val" [widgetId]="editorId"></ig-currency-editor></div>';
        TestBed.overrideComponent(TestIgCurrencyEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgCurrencyEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igCurrencyEditor('displayValue')).toBe('$42.00');
                fixture.debugElement.componentInstance.val = 1;
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igCurrencyEditor('displayValue')).toBe('$1.00');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val(154).blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe(154);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular CheckboxEditor', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgCheckboxEditorComponent, TestIgCheckboxEditorComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-checkbox-editor></ig-checkbox-editor></div>';
        TestBed.overrideComponent(TestIgCheckboxEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgCheckboxEditorComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgCheckboxEditorComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-checkbox-editor [(ngModel)]="val" [widgetId]="editorId"></ig-checkbox-editor></div>';
        TestBed.overrideComponent(TestIgCheckboxEditorComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgCheckboxEditorComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igCheckboxEditor('value')).toBe(true);
                fixture.debugElement.componentInstance.val = false;
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igCheckboxEditor('value')).toBe(false);
                    $(fixture.debugElement.nativeElement).find('#editor1').click();
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val).toBe(true);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

describe('Infragistics Angular TimePicker', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Infragistics.IgTimePickerComponent, TestIgTimePickerComponent]
        });
    });

    it('should initialize correctly', (done) => {
        const template = '<div><ig-time-picker></ig-time-picker></div>';
        TestBed.overrideComponent(TestIgTimePickerComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTimePickerComponent);
            fixture.detectChanges();
            expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgTimePickerComponent)
                .toBe(true);
            done();
        });
    });

    it('should allow setting value with ngModel', (done) => {
        const template = '<div><ig-time-picker [(ngModel)]="val" [widgetId]="editorId" [options]="{isLimitedToListValues:false}"></ig-time-picker></div>';
        TestBed.overrideComponent(TestIgTimePickerComponent, {
            set: {
                template
            }
        });
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestIgTimePickerComponent);
            fixture.detectChanges();
            setTimeout(() => {
                expect($(fixture.debugElement.nativeElement).find('#editor1').igTimePicker('displayValue')).toBe('12:36 AM');
                fixture.debugElement.componentInstance.val = '05:50 AM';
                fixture.detectChanges();
                setTimeout(() => {
                    expect($(fixture.debugElement.nativeElement).find('#editor1').igTimePicker('displayValue')).toBe('5:50 AM');
                    $(fixture.debugElement.nativeElement).find('#editor1').focus().trigger('focus').val('06:00 AM').blur().trigger('blur');
                    setTimeout(() => {
                        expect(fixture.debugElement.componentInstance.val.getHours()).toBe(6);
                        expect(fixture.debugElement.componentInstance.val.getMinutes()).toBe(0);
                        done();
                    }, 100);
                }, 1);
            }, 1);
        });
    });
});

@Component({
    selector: 'test-text-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgTextEditorComponent {
    private opts: IgTextEditor;
    private val: string;
    private editorId: string;
    private cdi = 0;
    private validatorOpts: IgValidator;
    @ViewChild(Infragistics.IgTextEditorComponent, { static: true })
    public viewChild: Infragistics.IgTextEditorComponent;

    constructor() {
        this.val = 'test_value';
        this.editorId = 'editor1';
        this.opts = {
            disabled: true
        };

        this.validatorOpts = {
            successMessage: 'Success',
            required: true,
            onchange: true,
            notificationOptions: { mode: 'popover' }
        };
    }
}

@Component({
    selector: 'test-numeric-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgNumericEditorComponent {
    private val: number;
    private editorId: string;
    private cdi = 0;
    @ViewChild(Infragistics.IgNumericEditorComponent, { static: true })
    public viewChild: Infragistics.IgNumericEditorComponent;

    constructor() {
        this.val = 42;
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-percent-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgPercentEditorComponent {
    private val: number;
    private editorId: string;
    @ViewChild(Infragistics.IgPercentEditorComponent, { static: true }) public viewChild: Infragistics.IgPercentEditorComponent;

    constructor() {
        this.val = 0.4;
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-mask-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgMaskEditorComponent {
    private val: string;
    private editorId: string;
    @ViewChild(Infragistics.IgMaskEditorComponent, { static: true }) public viewChild: Infragistics.IgMaskEditorComponent;

    constructor() {
        this.val = 'test';
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-date-picker-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgDatePickerComponent {
    private val: Date;
    private editorId: string;
    @ViewChild(Infragistics.IgDatePickerComponent, { static: true }) public viewChild: Infragistics.IgDatePickerComponent;

    constructor() {
        this.val = new Date('4/20/2016');
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-time-picker-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgTimePickerComponent {
    private val: string;
    private editorId: string;
    @ViewChild(Infragistics.IgTimePickerComponent, { static: true }) public viewChild: Infragistics.IgTimePickerComponent;

    constructor() {
        this.val = '12:36 AM';
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-date-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgDateEditorComponent {
    private val: Date;
    private editorId: string;
    @ViewChild(Infragistics.IgDateEditorComponent, { static: true }) public viewChild: Infragistics.IgDateEditorComponent;

    constructor() {
        this.val = new Date('4/20/2016');
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-currency-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgCurrencyEditorComponent {
    private val: number;
    private editorId: string;
    @ViewChild(Infragistics.IgCurrencyEditorComponent, { static: true }) public viewChild: Infragistics.IgCurrencyEditorComponent;

    constructor() {
        this.val = 42;
        this.editorId = 'editor1';
    }
}

@Component({
    selector: 'test-checkbox-editor-cmp',
    template: '<div></div>' // "Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    ,
    standalone: false
})
class TestIgCheckboxEditorComponent {
    private val: boolean;
    private editorId: string;
    @ViewChild(Infragistics.IgCheckboxEditorComponent, { static: true }) public viewChild: Infragistics.IgCheckboxEditorComponent;

    constructor() {
        this.val = true;
        this.editorId = 'editor1';
    }
}

interface MyWindow extends Window {
    typeInInput(characters: string, element: JQuery): void;
}
declare var window: MyWindow;

window.typeInInput = (characters: string, element: JQuery) => {
    const keyDown = jQuery.Event('keydown');
    const keyPress = jQuery.Event('keypress');
    const keyUp = jQuery.Event('keyup');
    let value: string = element.val() as string;
    let selectionStart;

    characters.split('').forEach(ch => {
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
