// JavaScript Document
jQuery(function($){
	var Chat=Backbone.Model.extend({
		urlRoot:"",
		defaults:{
			username:"",
			content:"",
			date:""
		},
		clear:function(){
			this.destroy();
		}
	});
	var ChatList = Backbone.Collection.extend({
		url:'chat.php',
		model:Chat
	});
	var ChatView = Backbone.View.extend({	
		tagName:'li',	
		template:_.template($('#item-template').html()),
		events:{
			'click #destroy' : 'clear'
		},	
		initialize:function(){
			_.bindAll(this,'render','remove');
			this.model.bind('change', this.render);
			this.model.bind('destroy', this.remove);
		},	
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},
		clear: function(){
			this.model.clear();
		}
	});
	var chatList=new ChatList;
	var AppView = Backbone.View.extend({
		el:$('.main'),	
		events: {
			"click #send": "say"
		},	
		initialize: function() {
			_.bindAll(this,'addOne','addAll');
			this.nickname = this.$('#nickname');
			this.textarea = this.$("#content");
	
			chatList.bind('add', this.addOne);
			chatList.bind('reset', this.addAll);
			chatList.fetch();
			setInterval(function() {
				chatList.fetch({add: true});
			}, 10000);
		},	
		addOne: function(chat) {
			//页面所有的数据都来源于server端，如果不是server端的数据，不应添加到页面上
			if(!chat.isNew()) {  
				var view = new ChatView({model:chat});
				this.$(".chat_list").append(view.render().el);
				$('#screen').scrollTop($(".chat_list").height() + 200);
			}
		},	
		addAll: function() {
			chatList.each(this.addOne);
		},	
		say: function() {
			chatList.create(this.newAttributes());
			//为了满足IE和FF以及chrome
			this.textarea.text('');
			this.textarea.val('');
			this.textarea.html('');	
		},
		newAttributes: function() {	
			var content = this.textarea.val();
			if (content == '') {
				content = this.textarea.text();
			}	
			return {
			  content: content,
			  username: this.nickname.val(),
			  date:$("#nowdate").html() 
			};
		}
	});
	
	var appView = new AppView;
});