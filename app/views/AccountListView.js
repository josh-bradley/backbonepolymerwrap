var Marionette = require('backbone.marionette');

var AccountListView = Marionette.View.extend({
    el:'#accounts',
    template: require('../templates/accountlist.html')
});

module.exports = AccountListView;