var Backbone = require('backbone');
var TransferView = require('./views/TransferView');
var initTransferMoney = require('./views/TransferViewP');
var AccountListView = require('./views/AccountListView');
var MainView = require('./views/MainView');

setTimeout(initTransferMoney, 1000);

var accounts = [
    { name: 'Everyday', amount: 18.22},
    { name: 'Savings', amount: 222.33},
    { name: 'Mortgage', amount: 988.45 }
];

var transferView = new TransferView({
    model: new Backbone.Model({
        fromAccounts: accounts,
        toAccounts: accounts
    })
});

var accountList = new AccountListView({
   collection: new Backbone.Collection(accounts)
});

var main = new MainView();

main.render();

main.showChildView('accountList', accountList);
main.showChildView('transfer', transferView);