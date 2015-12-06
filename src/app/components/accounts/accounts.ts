import {Component, NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'accounts',
    templateUrl: './app/components/accounts/accounts.html',
    directives: [ROUTER_DIRECTIVES, NgFor]
})
export class Accounts {

    accounts = [
        {
            name: "Mr. Jones",
            number: "NL99 INGB 01 2345 6789",
            balance: "€ 14.500,00"
        },
        {
            name: "Mr. Jones e/o Mrs. Jones",
            number: "NL99 INGB 01 5432 9876",
            balance: "€ 27.250,00"
        }]
}