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
var IgVideoPlayerComponent = /** @class */ (function (_super) {
    __extends(IgVideoPlayerComponent, _super);
    function IgVideoPlayerComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns the element on which the widget was instantiated
     */
    /**
         * Returns the element on which the widget was instantiated
         */
    IgVideoPlayerComponent.prototype.widget = /**
         * Returns the element on which the widget was instantiated
         */
    function () { return; };
    ;
    /**
     * Hide the add message if shown.
     */
    /**
         * Hide the add message if shown.
         */
    IgVideoPlayerComponent.prototype.hideAdMessage = /**
         * Hide the add message if shown.
         */
    function () { return; };
    ;
    /**
     * Play a linked commercial for this video.
     *
     * @param commercial     Specify the linked commercial to play.
     */
    /**
         * Play a linked commercial for this video.
         *
         * @param commercial     Specify the linked commercial to play.
         */
    IgVideoPlayerComponent.prototype.playCommercial = /**
         * Play a linked commercial for this video.
         *
         * @param commercial     Specify the linked commercial to play.
         */
    function (commercial) { return; };
    ;
    /**
     * Shows the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    /**
         * Shows the ad banner, if there is such.
         *
         * @param index    Specify the index of the banner from the banners array.
         */
    IgVideoPlayerComponent.prototype.showBanner = /**
         * Shows the ad banner, if there is such.
         *
         * @param index    Specify the index of the banner from the banners array.
         */
    function (index) { return; };
    ;
    /**
     * Hide the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    /**
         * Hide the ad banner, if there is such.
         *
         * @param index    Specify the index of the banner from the banners array.
         */
    IgVideoPlayerComponent.prototype.hideBanner = /**
         * Hide the ad banner, if there is such.
         *
         * @param index    Specify the index of the banner from the banners array.
         */
    function (index) { return; };
    ;
    /**
     * Resets the commercials, to be shown again.
     */
    /**
         * Resets the commercials, to be shown again.
         */
    IgVideoPlayerComponent.prototype.resetCommercialsShow = /**
         * Resets the commercials, to be shown again.
         */
    function () { return; };
    ;
    /**
     * Toggle control play state. If video is playing it will pause, if video is paused it will play.
     */
    /**
         * Toggle control play state. If video is playing it will pause, if video is paused it will play.
         */
    IgVideoPlayerComponent.prototype.togglePlay = /**
         * Toggle control play state. If video is playing it will pause, if video is paused it will play.
         */
    function () { return; };
    ;
    /**
     * Start playing current loaded video if any.
     */
    /**
         * Start playing current loaded video if any.
         */
    IgVideoPlayerComponent.prototype.play = /**
         * Start playing current loaded video if any.
         */
    function () { return; };
    ;
    /**
     * Pause the currently playing video if any.
     */
    /**
         * Pause the currently playing video if any.
         */
    IgVideoPlayerComponent.prototype.pause = /**
         * Pause the currently playing video if any.
         */
    function () { return; };
    ;
    /**
     * Gets/Sets the current time of the playing video.
     *
     * @param val     Specify the playback position in seconds to navigate to.
     */
    /**
         * Gets/Sets the current time of the playing video.
         *
         * @param val     Specify the playback position in seconds to navigate to.
         */
    IgVideoPlayerComponent.prototype.currentTime = /**
         * Gets/Sets the current time of the playing video.
         *
         * @param val     Specify the playback position in seconds to navigate to.
         */
    function (val) { return; };
    ;
    /**
     * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
     *
     * @param scaleFactor    Specify scale factor between 0 and 1.
     */
    /**
         * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
         *
         * @param scaleFactor    Specify scale factor between 0 and 1.
         */
    IgVideoPlayerComponent.prototype.screenshot = /**
         * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
         *
         * @param scaleFactor    Specify scale factor between 0 and 1.
         */
    function (scaleFactor) { return; };
    ;
    /**
     * Get whether the current browser supports video tag.
     */
    /**
         * Get whether the current browser supports video tag.
         */
    IgVideoPlayerComponent.prototype.supportsVideo = /**
         * Get whether the current browser supports video tag.
         */
    function () { return; };
    ;
    /**
     * Get whether the current browser supports H.264 codec.
     */
    /**
         * Get whether the current browser supports H.264 codec.
         */
    IgVideoPlayerComponent.prototype.supportsH264BaselineVideo = /**
         * Get whether the current browser supports H.264 codec.
         */
    function () { return; };
    ;
    /**
     * Get whether the current browser supports Theora codec.
     */
    /**
         * Get whether the current browser supports Theora codec.
         */
    IgVideoPlayerComponent.prototype.supportsOggTheoraVideo = /**
         * Get whether the current browser supports Theora codec.
         */
    function () { return; };
    ;
    /**
     * Get whether the current browser supports WEBM codec.
     */
    /**
         * Get whether the current browser supports WEBM codec.
         */
    IgVideoPlayerComponent.prototype.supportsWebmVideo = /**
         * Get whether the current browser supports WEBM codec.
         */
    function () { return; };
    ;
    /**
     * Returns whether the currently played video is paused.
     */
    /**
         * Returns whether the currently played video is paused.
         */
    IgVideoPlayerComponent.prototype.paused = /**
         * Returns whether the currently played video is paused.
         */
    function () { return; };
    ;
    /**
     * Get whether the current played video has ended.
     */
    /**
         * Get whether the current played video has ended.
         */
    IgVideoPlayerComponent.prototype.ended = /**
         * Get whether the current played video has ended.
         */
    function () { return; };
    ;
    /**
     * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
     */
    /**
         * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
         */
    IgVideoPlayerComponent.prototype.duration = /**
         * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
         */
    function () { return; };
    ;
    /**
     * Get whether the player is seeking to find the new playback position specified.
     */
    /**
         * Get whether the player is seeking to find the new playback position specified.
         */
    IgVideoPlayerComponent.prototype.seeking = /**
         * Get whether the player is seeking to find the new playback position specified.
         */
    function () { return; };
    ;
    /**
     * Destroys the widget.
     */
    /**
         * Destroys the widget.
         */
    IgVideoPlayerComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    IgVideoPlayerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-video-player",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "sources", "width", "height", "posterUrl", "preload", "autoplay", "autohide", "volumeAutohideDelay", "centerButtonHideDelay", "loop", "browserControls", "fullscreen", "volume", "muted", "title", "showSeekTime", "progressLabelFormat", "bookmarks", "relatedVideos", "banners", "commercials"],
                    outputs: ["ended", "playing", "paused", "buffering", "progress", "waiting", "bookmarkHit", "bookmarkClick", "enterFullScreen", "exitFullScreen", "relatedVideoClick", "bannerVisible", "bannerHidden", "bannerClick", "browserNotSupported"]
                },] },
    ];
    /** @nocollapse */
    IgVideoPlayerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgVideoPlayerComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgVideoPlayerComponent = IgVideoPlayerComponent;
//# sourceMappingURL=igvideoplayer.component.js.map