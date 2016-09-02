var Marionette = require('backbone.marionette');

var TransferView = Marionette.View.extend({
    el: '#transfer',

    template: require('../templates/layout.html'),

    ui: {
        form: 'form',
        info: '.info-box'
    },

    triggers: {
        "submit @ui.form": 'transferMoney'
    },

    onTransferMoney: function(){
        this.ui.info.text('the money has been transferred.')
    }
});

module.exports =  TransferView;