define(function(require, exports, module) {
    var $ = require('./jquery');
    var data = require('./data'); 
    $('.author').html(data.Message.author);
    $('.blog').find("a").attr('href', data.Message.blog);	
});