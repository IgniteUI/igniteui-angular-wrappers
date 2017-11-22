import { Component, Renderer, ElementRef, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-video-player",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","sources","width","height","posterUrl","preload","autoplay","autohide","volumeAutohideDelay","centerButtonHideDelay","loop","browserControls","fullscreen","volume","muted","title","showSeekTime","progressLabelFormat","bookmarks","relatedVideos","banners","commercials"],
	outputs: ["ended","playing","paused","buffering","progress","waiting","bookmarkHit","bookmarkClick","enterFullScreen","exitFullScreen","relatedVideoClick","bannerVisible","bannerHidden","bannerClick","browserNotSupported"]
})
export class IgVideoPlayerComponent extends IgControlBase<IgVideoPlayer> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns the element on which the widget was instantiated
	 */
	public widget(): void { return; } ;

	/**
 	 * Hide the add message if shown.
	 */
	public hideAdMessage(): void { return; } ;

	/**
 	 * Play a linked commercial for this video.
	 *
	 * @param commercial     Specify the linked commercial to play.
	 */
	public playCommercial(commercial: Object): void { return; } ;

	/**
 	 * Shows the ad banner, if there is such.
	 *
	 * @param index    Specify the index of the banner from the banners array.
	 */
	public showBanner(index: number): void { return; } ;

	/**
 	 * Hide the ad banner, if there is such.
	 *
	 * @param index    Specify the index of the banner from the banners array.
	 */
	public hideBanner(index: number): void { return; } ;

	/**
 	 * Resets the commercials, to be shown again.
	 */
	public resetCommercialsShow(): void { return; } ;

	/**
 	 * Toggle control play state. If video is playing it will pause, if video is paused it will play.
	 */
	public togglePlay(): void { return; } ;

	/**
 	 * Start playing current loaded video if any.
	 */
	public play(): void { return; } ;

	/**
 	 * Pause the currently playing video if any.
	 */
	public pause(): void { return; } ;

	/**
 	 * Gets/Sets the current time of the playing video.
	 *
	 * @param val     Specify the playback position in seconds to navigate to.
	 */
	public currentTime(val: number): number { return; } ;

	/**
 	 * Get a screenshot of the current video frame. It returns a canvas object that you can position and show on the page. This depends on the browser support for canvas.
	 *
	 * @param scaleFactor    Specify scale factor between 0 and 1.
	 */
	public screenshot(scaleFactor?: number): Object { return; } ;

	/**
 	 * Get whether the current browser supports video tag.
	 */
	public supportsVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports H.264 codec.
	 */
	public supportsH264BaselineVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports Theora codec.
	 */
	public supportsOggTheoraVideo(): boolean { return; } ;

	/**
 	 * Get whether the current browser supports WEBM codec.
	 */
	public supportsWebmVideo(): boolean { return; } ;

	/**
 	 * Returns whether the currently played video is paused.
	 */
	public paused(): boolean { return; } ;

	/**
 	 * Get whether the current played video has ended.
	 */
	public ended(): boolean { return; } ;

	/**
 	 * Get the current duration of the played video. It may be NaN if duration is still not loaded or the video is a live stream.
	 */
	public duration(): number { return; } ;

	/**
 	 * Get whether the player is seeking to find the new playback position specified.
	 */
	public seeking(): boolean { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;
 }

