import {Component, NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, CanActivate, OnActivate} from 'angular2/router';

@Component({
    selector: 'accounts',
    templateUrl: './app/components/accounts/accounts.html',
    directives: [ROUTER_DIRECTIVES, NgFor]
})

//@CanActivate((next) => {
//    return AccountService.getAccounts()
//        .then((accounts) => {
//            next.params.accounts = accounts;
//            return true;
//        });
//})

//export class Accounts implements OnActivate {
export class Accounts {

    accounts:Object;

    constructor() {
        var self = this;
        AccountService.getAccounts().then((accounts) => {
            self.accounts = accounts
        });
    }

    //onActivate(next) {
    //    this.accounts = next.params.accounts;
    //}
}

var AccountService = {
    getAccounts: () => {
        return new Promise((resolve, reject) => {
            //setTimeout(() => {
                resolve([
                    {
                        name: "Mr. Janes",
                        number: "NL99 INGB 01 2345 6789",
                        balance: "€ 14.500,00"
                    },
                    {
                        name: "Mr. Jones e/o Mrs. Jones",
                        number: "NL99 INGB 01 5432 9876",
                        balance: "€ 27.250,00"
                    }]);
            //}, 2000)
        });
        //reject();
    }
};
