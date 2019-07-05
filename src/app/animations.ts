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

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
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