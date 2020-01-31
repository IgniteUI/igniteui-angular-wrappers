import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-video-player",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "sources", "width", "height", "posterUrl", "preload", "autoplay", "autohide", "volumeAutohideDelay", "centerButtonHideDelay", "loop", "browserControls", "fullscreen", "volume", "muted", "title", "showSeekTime", "progressLabelFormat", "bookmarks", "relatedVideos", "banners", "commercials"],
    outputs: ["ended", "playing", "paused", "buffering", "progress", "waiting", "bookmarkHit", "bookmarkClick", "enterFullScreen", "exitFullScreen", "relatedVideoClick", "bannerVisible", "bannerHidden", "bannerClick", "browserNotSupported"]
})
export class IgVideoPlayerComponent extends IgControlBase<IgVideoPlayer> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }

    /**
     * Returns the element on which the widget was instantiated
     */
    /* istanbul ignore next */
    public widget(): void { return; };

    /**
     * Hide the add message if shown.
     */
    /* istanbul ignore next */
    public hideAdMessage(): void { return; };

    /**
     * Play a linked commercial for this video.
     *
     * @param commercial     Specify the linked commercial to play.
     */
    /* istanbul ignore next */
    public playCommercial(commercial: Object): void { return; };

    /**
     * Shows the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    /* istanbul ignore next */
    public showBanner(index: number): void { return; };

    /**
     * Hide the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    /* istanbul ignore next */
    public hideBanner(index: number): void { return; };

    /**
     * Resets the commercials, to be shown again.
     */
    /* istanbul ignore next */
    public resetCommercialsShow(): void { return; };

    /**
     * Toggle control play state. If video is playing it will pause, if video is paused it will play.
     */
    /* istanbul ignore next */
    public togglePlay(): void { return; };

    /**
     * Start playing current loaded video if any.
     */
    /* istanbul ignore next */
    public play(): void { return; };

    /**
     * Pause the currently playing video if any.
     */
    /* istanbul ignore next */
    public pause(): void { return; };

    /**
     * Gets/Sets the current time of the playing video.
     *
     * @param val     Specify the playback position in seconds to navigate to.
     */
    /* istanbul ignore next */
    public currentTime(val: number): number { return; };

    /**
     * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
     *
     * @param scaleFactor    Specify scale factor between 0 and 1.
     */
    /* istanbul ignore next */
    public screenshot(scaleFactor?: number): Object { return; };

    /**
     * Get whether the current browser supports video tag.
     */
    /* istanbul ignore next */
    public supportsVideo(): boolean { return; };

    /**
     * Get whether the current browser supports H.264 codec.
     */
    /* istanbul ignore next */
    public supportsH264BaselineVideo(): boolean { return; };

    /**
     * Get whether the current browser supports Theora codec.
     */
    /* istanbul ignore next */
    public supportsOggTheoraVideo(): boolean { return; };

    /**
     * Get whether the current browser supports WEBM codec.
     */
    /* istanbul ignore next */
    public supportsWebmVideo(): boolean { return; };

    /**
     * Returns whether the currently played video is paused.
     */
    /* istanbul ignore next */
    public paused(): boolean { return; };

    /**
     * Get whether the current played video has ended.
     */
    /* istanbul ignore next */
    public ended(): boolean { return; };

    /**
     * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
     */
    /* istanbul ignore next */
    public duration(): number { return; };

    /**
     * Get whether the player is seeking to find the new playback position specified.
     */
    /* istanbul ignore next */
    public seeking(): boolean { return; };

    /**
     * Destroys the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; };
}

