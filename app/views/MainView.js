var Marionette = require('backbone.marionette');

var MainView = Marionette.View.extend({
    el: '#app-hook',

    regions: {
        accountList: '#accountsList',
        transfer: '#transferMoney'
    },

    template: require('../templates/main.html'),

    events: {
        load: 'loadEvent'
    },

    loadEvent: function(){
        console.log("the thing has loaded");
    }
});

module.exports = MainView;