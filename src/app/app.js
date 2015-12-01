var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var start_1 = require('./components/start/start');
var about_1 = require('./components/about/about');
var leeg_1 = require('./components/leeg/leeg');
var MyDemoApp = (function () {
    function MyDemoApp() {
    }
    MyDemoApp = __decorate([
        angular2_1.Component({
            selector: 'welkom',
            templateUrl: './app/partials/welkom.html',
            directives: [start_1.Start, about_1.About, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: leeg_1.Leeg, name: 'Leeg' }),
            new router_1.Route({ path: '/leeg', component: leeg_1.Leeg, name: 'Leegte' }),
            new router_1.Route({ path: '/start', component: start_1.Start, name: 'Start' }),
            new router_1.Route({ path: '/about', component: about_1.About, name: 'About' })
        ]), 
        __metadata('design:paramtypes', [])
    ], MyDemoApp);
    return MyDemoApp;
})();
// LocationStrategy` is responsible for representing and
// reading route state from the the browser's URL.
angular2_1.bootstrap(MyDemoApp, [router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
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
//# sourceMappingURL=app.js.map