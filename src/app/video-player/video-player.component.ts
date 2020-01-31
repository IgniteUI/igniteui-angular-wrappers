import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

    public options: any;
    constructor() {
        this.options = {
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
