#Ignite UI components for Angular 2

Use the `igniteui.angular2.js` to taka advantage from the [Ignite UI](http://igniteui.com) controls in [Angular 2](https://angular.io/) applications. [Work with the running samples here](http://igniteui.github.io/igniteui-angular2).

#Requirements

- [jQuery](http://www.jquery.com) v1.9.1 and later
- [jQuery UI](http://www.jqueryui.com) v1.9.0 and later
- [AngularJS 2](https://angular.io/) v2.0 beta and later
- [Ignite UI](http://www.igniteui.com) 15.2 and later

#Getting Started

## Initializing controls
In an Angular 2 application, Ignite UI controls support markup initialization which is done by using custom tags.

### Custom tags
Each control implements a custom tag component where the tag name is formed by splitting each capital letter in the control name with the `-` symbol.

**Note**: It is recommended to use closing tags (`</ig-combo>`) over the self-closing tags (`<ig-combo/>`), because the latter are known to make issues on some browsers (depending on the used document mode).

#### Examples:

|  Control Name   |          Tag          |
|-----------------|-----------------------|
| igCombo         | `<ig-combo>`          |
| igGrid          | `<ig-grid>`           |
| igDataChart     | `<ig-data-chart>`     |
| igDialog        | `<ig-dialog>`         |
| igDateEditor    | `<ig-date-editor>`    |
| igEditor        | `<ig-editor>`         |
| igMaskEditor    | `<ig-mask-editor>`    |
| igNumericEditor | `<ig-numeric-editor>` |
| igPercentEditor | `<ig-percent-editor>` |
| igTextEditor    | `<ig-text-editor>`    |
| igDatePicker    | `<ig-date-picker>`    |
| igTree          | `<ig-tree>`           |
| igMap           | `<ig-map>`            |
| igUpload        | `<ig-upload>`         |
| igVideoPlayer   | `<ig-video-player>`   |

### Configuring Control Options

There are two mandatory attributes that need to be set to an Ignite UI control custom tag:
  `options` - points to a property on the application component class containing the control's configuration.
  `widgetId` - the control requires an id to be assigned to it.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id'></ig-grid>`,
        directives: [IgGridComponent]
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                dataSource: this.data,
                width: "100%",
                height: "400px",
                autoGenerateColumns: true
            };
        }
    }

In this example `options` attribute points to `gridOptions` property on the application compoment class and `widgetId` points to the `id` property.

### Configuring Top Level Control Options

All top level options are allowed to be set as attributes of an Ignite UI control custom tag. In this case `options` attribute is not mandatory,
but it is allowed. And if both - `options` and top-level attributes are combined, top-level attributes will override `options`,
when there are overlapping properties. Also changing top-level attribute will apply the change to the widget, only if the option is settable.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid
            [widgetId]='id'
            [width]='w'
            [autoCommit]='true'
            [dataSource]='data'
            [height]='h'
            [autoGenerateColumns]='true'
            >
        </ig-grid>`,
        directives: [IgGridComponent]
    })
    export class AppComponent {
        private id: string;
        private data: any;
        private w: string;
        private h: string;
        private pKey: string;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.w = '100%';
            this.h = '400px';
            this.pKey = 'ProductID';
        }
    }

### Handling events

Binding to control events is achieved by assigning attributes where the name of the attribute is the name of the control's event name surrounded by parenthesis and the value is the name of the event handler.

#### Examples:

|            Event            |                     Markup                      |
|-----------------------------|-------------------------------------------------|
|igGrid.events.dataBind       | `<ig-grid (dataBind)="dataBindHandler">`        |
|igCombo.events.textChanged   | `<ig-combo (textChanged)="textChangedHandler">` |
|igDateEditor.events.keypress | `<ig-date-editor (keypress)="keypressHandler">` |

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id' 
            (dataBind)="dataBindHandler($event)"></ig-grid>`,
        directives: [IgGridComponent]
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;
        private dataBindHandler: any;
        
        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                dataSource: this.data,
                width: "100%",
                height: "400px",
                autoGenerateColumns: true
            };
        }
        
        dataBindHandler(event, ui) {
            // event handler code    
        }
    }

Binding to igGrid* feature events is done in the control's configuration code.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id'></ig-grid>`,
        directives: [IgGridComponent]
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                dataSource: this.data,
                width: "100%",
                height: "400px",
                autoGenerateColumns: true,
                features: [
                    {
                        name: "Filtering",
                        dataFiltered: function (evt, ui) {
                            // event handler code
                        }
                        
                    }
                ]
            };
        }
    }

In this example igGridFiltering `dataFiltered` event is handled in the application component class.

## Two-way Data Binding
The following controls currently support two-way data binding:

1. igGrid
2. igTreeGrid
3. igHierarchicalGrid
4. igCombo
5. igEditors
6. igTree

---------------------------------------

##What is Ignite UI?
[![Ignite UI Logo](http://infragistics-blogs.github.io/github-assets/logos/igniteui.png)](http://www.igniteui.com)

[Ignite UI](http://igniteui.com/) is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.  Too many to list here - check out [the site](http://igniteui.com/) for more info and to [download](https://igniteui.com/download) a trial.

Ignite UI is not just another library created in someone's free time. It is commercial-ready, extremely well-tested, tuned for top performance, designed for good UX, and backed by [Infragistics](http://www.infragistics.com/), an experience-focused company with a track record of over 24 years of experience in providing enterprise-ready, high-performance user interface tools for web, windows and mobile environments.

[![Infragistics Logo](http://infragistics-blogs.github.io/github-assets/logos/infragistics.png)](http://infragistics.com)
