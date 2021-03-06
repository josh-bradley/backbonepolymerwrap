var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');

var AccountItemView = Marionette.View.extend({
    tagName: 'div',
    template: require('../templates/accountListItem.html')
});

var AccountListView = Marionette.CollectionView.extend({
    tagName: 'div',
    childView: AccountItemView,
    initialize: function(){
        var channel = Radio.channel('basic');

        channel.on('account:any', function(data){
            console.log(data.myData);
        });
    }
});

module.exports = AccountListView;