var Backbone = require('backbone');
var TransferView = require('./views/TransferView');
var AccountListView = require('./views/AccountListView')


var main = new TransferView({
    model: new Backbone.Model({
        fromAccounts: [
            { Name: 'Everyday', Amount: 153.90 },
            { Name: 'Other', Amount: 568.92},
            { Name: 'Some Account', Amount: 43.56}
        ],
        toAccounts: [
            { Name: 'Mortgage', Amount: 5113.90 },
            { Name: 'Savings', Amount: 8.92}
        ]
    })
});

var accountList = new AccountListView({
   model: new Backbone.Model({})
});

accountList.render();
main.render();