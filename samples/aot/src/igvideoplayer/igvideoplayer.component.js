"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    IgVideoPlayerComponent.prototype.widget = function () { return; };
    ;
    /**
     * Hide the add message if shown.
     */
    IgVideoPlayerComponent.prototype.hideAdMessage = function () { return; };
    ;
    /**
     * Play a linked commercial for this video.
     *
     * @param commercial     Specify the linked commercial to play.
     */
    IgVideoPlayerComponent.prototype.playCommercial = function (commercial) { return; };
    ;
    /**
     * Shows the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    IgVideoPlayerComponent.prototype.showBanner = function (index) { return; };
    ;
    /**
     * Hide the ad banner, if there is such.
     *
     * @param index    Specify the index of the banner from the banners array.
     */
    IgVideoPlayerComponent.prototype.hideBanner = function (index) { return; };
    ;
    /**
     * Resets the commercials, to be shown again.
     */
    IgVideoPlayerComponent.prototype.resetCommercialsShow = function () { return; };
    ;
    /**
     * Toggle control play state. If video is playing it will pause, if video is paused it will play.
     */
    IgVideoPlayerComponent.prototype.togglePlay = function () { return; };
    ;
    /**
     * Start playing current loaded video if any.
     */
    IgVideoPlayerComponent.prototype.play = function () { return; };
    ;
    /**
     * Pause the currently playing video if any.
     */
    IgVideoPlayerComponent.prototype.pause = function () { return; };
    ;
    /**
     * Gets/Sets the current time of the playing video.
     *
     * @param val     Specify the playback position in seconds to navigate to.
     */
    IgVideoPlayerComponent.prototype.currentTime = function (val) { return; };
    ;
    /**
     * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
     *
     * @param scaleFactor    Specify scale factor between 0 and 1.
     */
    IgVideoPlayerComponent.prototype.screenshot = function (scaleFactor) { return; };
    ;
    /**
     * Get whether the current browser supports video tag.
     */
    IgVideoPlayerComponent.prototype.supportsVideo = function () { return; };
    ;
    /**
     * Get whether the current browser supports H.264 codec.
     */
    IgVideoPlayerComponent.prototype.supportsH264BaselineVideo = function () { return; };
    ;
    /**
     * Get whether the current browser supports Theora codec.
     */
    IgVideoPlayerComponent.prototype.supportsOggTheoraVideo = function () { return; };
    ;
    /**
     * Get whether the current browser supports WEBM codec.
     */
    IgVideoPlayerComponent.prototype.supportsWebmVideo = function () { return; };
    ;
    /**
     * Returns whether the currently played video is paused.
     */
    IgVideoPlayerComponent.prototype.paused = function () { return; };
    ;
    /**
     * Get whether the current played video has ended.
     */
    IgVideoPlayerComponent.prototype.ended = function () { return; };
    ;
    /**
     * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
     */
    IgVideoPlayerComponent.prototype.duration = function () { return; };
    ;
    /**
     * Get whether the player is seeking to find the new playback position specified.
     */
    IgVideoPlayerComponent.prototype.seeking = function () { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgVideoPlayerComponent.prototype.destroy = function () { return; };
    ;
    IgVideoPlayerComponent = __decorate([
        core_1.Component({
            selector: "ig-video-player",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "sources", "width", "height", "posterUrl", "preload", "autoplay", "autohide", "volumeAutohideDelay", "centerButtonHideDelay", "loop", "browserControls", "fullscreen", "volume", "muted", "title", "showSeekTime", "progressLabelFormat", "bookmarks", "relatedVideos", "banners", "commercials"],
            outputs: ["ended", "playing", "paused", "buffering", "progress", "waiting", "bookmarkHit", "bookmarkClick", "enterFullScreen", "exitFullScreen", "relatedVideoClick", "bannerVisible", "bannerHidden", "bannerClick", "browserNotSupported"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgVideoPlayerComponent);
    return IgVideoPlayerComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgVideoPlayerComponent = IgVideoPlayerComponent;
//# sourceMappingURL=igvideoplayer.component.js.map