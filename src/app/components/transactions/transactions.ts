import {Component, NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteParams, RouteConfig, Route} from 'angular2/router';

import {Start} from '../start/start';
import {TxDetails} from '../txdetails/txdetails';

@Component({
    selector: 'transactions',
    templateUrl: './app/components/transactions/transactions.html',
    directives: [NgFor, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/', component: Start, name: 'Start'}),
    new Route({path: '/details', component: TxDetails, name: 'TxDetails'}),
])
export class Transactions {

    iban: string;
    transactions: Object;

    constructor(params: RouteParams) {

        this.iban = params.get('iban');

        this.transactions = [
            {
                id: "1e26r",
                date: "04-12-2015",
                creditor: "Albert Heijn",
                debtor: "NL99 INGB 01 2345 6789",
                amount: "€ 107,80"
            },
            {
                id: "2t67b",
                date: "05-12-2015",
                creditor: "House of Pain",
                debtor: "NL99 INGB 01 2345 6789",
                amount: "€ 260,00"
            },
            {
                id: "3u87c",
                date: "05-12-2015",
                creditor: "Dr. Tomson",
                debtor: "NL99 INGB 01 2345 6789",
                amount: "€ 19,50"
            }]
    }

}
