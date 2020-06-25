import { Feature } from '../feature';
import { ElementRef, Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'append-rows-on-demand',
    inputs: ['type', 'chunkSize', 'recordCountKey', 'chunkSizeUrlKey', 'chunkIndexUrlKey', 'defaultChunkIndex', 'currentChunkIndex', 'loadTrigger', 'loadMoreDataButtonText'],
    outputs: ['rowsRequesting', 'rowsRequested']
})
export class IgGridAppendRowsOnDemandFeature extends Feature<IgGridAppendRowsOnDemand> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Destroys the append rows on demand widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Loads the next chunk of data.
     */
    /* istanbul ignore next */
    public nextChunk(): void { return; }
}
