import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import { IgVideoPlayerComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap}    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `<ig-video-player widgetId="videoplayer"
     [(options)]="options"></ig-video-player>`,
	directives: [IgVideoPlayerComponent]
})
export class AppComponent {
    protected options: any;
	constructor() {
        this.options={        
        width: "700px",
        height: "400px",
        sources: [
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4",
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm",
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv"
        ]
         };
	}
}
bootstrap(AppComponent);