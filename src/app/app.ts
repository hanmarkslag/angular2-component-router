import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, LocationStrategy, HashLocationStrategy, Route} from 'angular2/router';
import {Start} from './components/start/start';
import {About} from './components/about/about';
import {Leeg} from './components/leeg/leeg';

@Component({
    selector: 'welkom',
    templateUrl: './app/partials/welkom.html',
    directives: [Start, About, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/', component: Leeg, name: 'Leeg'}),
    new Route({path: '/leeg', component: Leeg, name: 'Leegte'}),
    new Route({path: '/start', component: Start, name: 'Start'}),
    new Route({path: '/about', component: About, name: 'About'})
])
class MyDemoApp {
}

// LocationStrategy` is responsible for representing and
// reading route state from the the browser's URL.
bootstrap(MyDemoApp,[ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);








//
//import {bootstrap, Component, View} from 'angular2/angular2';
//import {Start} from './components/start/start';
//import {About} from './components/about/about';
//
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
//import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
////import {RouteConfig, Router, Route, RouterOutlet, RouterLink, Location} from 'angular2/router';
//
//
//@Component({
//    selector: 'welkom'
//})
//@View({
//    templateUrl: './app/partials/welkom.html',
//    directives:[About, Start, ROUTER_DIRECTIVES]
//})
//@RouteConfig([
//    new Route({path: '/', component: Start, name: 'Start'}),
//    new Route({path: '/about', component: About, name: 'AboutThisSite'})
//])
//class AppComponent {
//
//    location: Location;
//
//    constructor(location: Location){
//        this.location = location;
//    }
//
//    getLinkStyle(path) {
//        return this.location.path().indexOf(path) > -1;
//    }
//
//}
//
//bootstrap(DemoPage, [ROUTER_PROVIDERS]);
