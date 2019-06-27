import { Component } from '@angular/core';
import { slideInAnimation, billboardAnimation, headerAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        slideInAnimation,
        billboardAnimation,
        headerAnimation
    ]
})
export class AppComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    isHomePage(outlet: RouterOutlet) {
        return this.prepareRoute(outlet) === 'HomePage';
    }
}
