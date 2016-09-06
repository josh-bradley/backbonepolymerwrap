var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');

var TransferView = Marionette.View.extend({
    template: require('../templates/transferMoney.html'),

    ui: {
        form: 'form',
        info: '.info-box',
        fromAccount: '#fromAccount',
        toAccount: '#toAccount',
        amount: '#amount'
    },

    triggers: {
        "submit @ui.form": 'transferMoney'
    },

    onTransferMoney: function(){
        var channel = Radio.channel('basic');
        channel.trigger('account:transfer', {
            fromAccount: this.ui.fromAccount.val(),
            toAccount: this.ui.toAccount.val(),
            amount: this.ui.amount.val()
        });
        this.ui.info.text('the money has been transferred.')
    }
});

module.exports =  TransferView;