var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Radio = require('backbone.radio');

var TransferView = Marionette.View.extend({
    el: '#placeholder',

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

var initTransfer = function() {

    Polymer({
        is: 'transfer-money',

        ready: function () {
            // console.log('couldnt take one more step');

            var accounts = [
                { name: 'Everyday', amount: 18.22},
                { name: 'Savings', amount: 222.33},
                { name: 'Mortgage', amount: 988.45 }
            ];

            var view = new TransferView({
                model: new Backbone.Model({
                    fromAccounts: accounts,
                    toAccounts: accounts
                })
            });

            view.render();
        }
    });
};

module.exports =  initTransfer;