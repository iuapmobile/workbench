var workbench = {

	init : function(){
	
	},
	createComponent : function(type, settings){
		if(type == 'um-header'){
			// 定义
			var header = Vue.extend({
			  	template: '<div id="header" class="um-header">'
						+'<a href="#" class="um-back">返回</a>'
						+'<h3>{{aa}}</h3>'
						+'<a href="#" onclick="openwin()" class="um-header-right ti-plus f20"></a>'
						+'</div>',
				data: function(){
					return {
						aa : settings.title					
					}
				}
			});
			// 注册
			Vue.component('um-header', header);
		}else if(type == "um-footer"){
		    // 定义
			var footer = Vue.extend({
			  template: '<div class="um-footer">'
						+'<div class="um-tabbar-foot">'
							+'<a id="item0" href="#" class="um-footerbar-item">'
								+'<i class="' + settings.data[0].iconfont + ' f20"></i>'
								+'<div class="um-tabbar-item-text">{{first}}</div>'
							+'</a>'
							+'<a id="item1" href="#" class="um-footerbar-item"> '
								+'<i class="' + settings.data[1].iconfont + '  f20"></i>'
								+'<div class="um-tabbar-item-text">{{second}}</div> '
							+'</a>'
							+'<a id="item2" href="#" class="um-footerbar-item active">'
								+'<i class="' + settings.data[2].iconfont + '  f20"></i>'
								+'<div class="um-tabbar-item-text">{{third}}</div>'
							+'</a>'
							+'<a id="item3" href="#" class="um-footerbar-item">'
								+'<i class="' + settings.data[3].iconfont + '  f20"></i>'
								+'<div class="um-tabbar-item-text">{{forth}}</div>'
							+'</a>'
						+'</div>'
					+'</div>',
				data : function(){
					return {
						first: settings.data[0].title,
						second: settings.data[1].title,
						third: settings.data[2].title,
						forth: settings.data[3].title
					}
				}
			});
			// 注册
			Vue.component('um-footer', footer);
		}else if(type == 'um-APPManager'){
			var v = new APPManager(settings.el,settings);
			/*
			var app = Vue.extend({
			  	template: '<ul>'
				    +'<li v-for="todo in todos">'
				      +'{{ todo.text }}'
				    
				    +'</li>'
			  	+'</ul>',
			  	
				data: function(){
			  		return{
			    		info: 'Hello iuap mobile!',
			  	  		todos:[{text:"aa"},{text:"bb"},{text:"cc"},{text:"dd"}]
			  		}
			  	}
				
			});
			// 注册
			Vue.component('um-appmanager', app);
			*/
		}
	}
	
}