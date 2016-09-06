var Backbone = require('backbone');
var TransferView = require('./views/TransferView');
var AccountListView = require('./views/AccountListView');
var MainView = require('./views/MainView');

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

window.MyBank = {}

// Saving this module to a globally accessible variable so Polymer elements can get access to it. 
window.MyBank.backboneRadio = require('backbone.radio');
