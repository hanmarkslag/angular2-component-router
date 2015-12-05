import {Component, NgFor} from 'angular2/angular2';

@Component({
    selector: 'accounts',
    templateUrl: './app/components/accounts/accounts.html',
    directives: [NgFor]
})
export class Accounts {

    accounts: Object;

    constructor() {

        this.accounts = [
            {
                name: "Mr. Jones",
                number: "NL99 INGB 01 2345 6789",
                balance: "€ 14.500,00"
            },
            {
                name: "Mr. Jones e/o Mrs Jones",
                number: "NL99 INGB 01 5432 9876",
                balance: "€ 27.250,00"
            }]
    }
}