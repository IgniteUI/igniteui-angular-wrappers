import {
    trigger,
    style,
    transition,
    query,
    animateChild,
    group,
    animate,
    state
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> SamplePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

export const billboardAnimation =
    trigger('shrinkAnimation', [
        // ...
        state('open', style({
            'min-height': '600px',
            opacity: 1
        })),
        state('closed', style({
            'min-height': '100px',
            opacity: 0.5
        })),
        transition('* => *', [
            animate('1s')
        ]),
    ]);

export const headerAnimation =
    trigger('appearAnimation', [
        state('open', style({
            display: 'block'
        })),
        state('closed', style({
            display: 'none'
        })),
        transition('* => *', [
            animate('1s')
        ]),
    ]);