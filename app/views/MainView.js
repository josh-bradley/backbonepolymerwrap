var Marionette = require('backbone.marionette');

var MainView = Marionette.View.extend({
    el: '#app-hook',

    regions: {
        accountList: '#accountsList',
        transfer: '#transferMoney'
    },

    template: require('../templates/main.html')
});

module.exports = MainView;