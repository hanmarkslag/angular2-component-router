import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'txdetailss',
    templateUrl: './app/components/txdetails/txdetails.html'
})
export class TxDetails {

    id: string;
    transaction: Object;

    constructor(params: RouteParams) {

        this.id = params.get('id');

        this.transaction = {
            id: "1e26r",
            date: "04-12-2015",
            creditor: "Albert Heijn",
            debtor: "NL99 INGB 01 2345 6789",
            amount: "€ 107,80"
        }
    }
}