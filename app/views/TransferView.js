var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');

var TransferView = Marionette.View.extend({
    template: require('../templates/transferMoney.html'),

    ui: {
        form: 'form',
        info: '.info-box'
    },

    triggers: {
        "submit @ui.form": 'transferMoney'
    },

    onTransferMoney: function(){
        var channel = Radio.channel('basic');
        channel.trigger('account:any', { myData: 'hello world'});
        this.ui.info.text('the money has been transferred.')
    }
});

module.exports =  TransferView;