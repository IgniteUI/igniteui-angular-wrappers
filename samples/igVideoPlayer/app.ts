import { Component, NgModule } from '@angular/core';
import { IgVideoPlayerComponent } from "../../src/igniteui.angular2.js";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: `../igVideoPlayer/igVideoPlayerTemplate.html`
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

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgVideoPlayerComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);