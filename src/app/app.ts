import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, LocationStrategy, HashLocationStrategy, Route} from 'angular2/router';

import {About} from './components/about/about';
import {Accounts} from './components/accounts/accounts';
import {Contact} from './components/contact/contact';

import {Start} from './components/start/start';
import {Leeg} from './components/leeg/leeg';

@Component({
    selector: 'welkom',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/', component: Start, name: 'Start'}),
    new Route({path: '/about', component: About, name: 'About'}),
    new Route({path: '/accounts', component: Accounts, name: 'Accounts'}),
    new Route({path: '/contact', component: Contact, name: 'Contact'})
])
class MyDemoApp {
}

// LocationStrategy` is responsible for representing and
// reading route state from the the browser's URL.
bootstrap(MyDemoApp,[ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
