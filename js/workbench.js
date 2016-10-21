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
								+'<i class=" {{first.iconfont}}  f20"></i>'
								+'<div class="um-tabbar-item-text">{{first.title}}</div>'
							+'</a>'
							+'<a id="item1" href="#" class="um-footerbar-item"> '
								+'<i class=" {{second.iconfont}}  f20"></i>'
								+'<div class="um-tabbar-item-text">{{second.title}}</div>'
							+'</a>'
							+'<a id="item2" href="#" class="um-footerbar-item active">'
								+'<i class=" {{third.iconfont}}  f20"></i>'
								+'<div class="um-tabbar-item-text">{{third.title}}</div>'
							+'</a>'
							+'<a id="item3" href="#" class="um-footerbar-item">'
								+'<i class=" {{forth.iconfont}}  f20"></i>'
								+'<div class="um-tabbar-item-text">{{forth.title}}</div>'
							+'</a>'
						+'</div>'
					+'</div>',
				data : function(){
					return {
						first: settings.data[0],
						second: settings.data[1],
						third: settings.data[2],
						forth: settings.data[3]
					}
				}
			});
			// 注册
			Vue.component('um-footer', footer);
		}else if(type == 'um-APPManager'){
			var v = new APPManager(settings.el,settings);
			
		}else if (type == "um-banner"){
			var islider = new iSlider({
    			type: 'pic',
    			data: settings.data,
    			dom: document.getElementById("iSlider-wrapper"),
    			isLooping: true,
    			animateType: 'default',
    			isAutoplay: true,
    			animateTime: 800
    		});
    		islider.addDot();
		}else if(type='um-applayout'){
			var AppLayout = Vue.extend({
				template: '<div class="um-grid">'
							+'<div class="um-grid-row tc">'
								 +'<div >'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[0].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{one}}</div>'
									+'</a>'
								+'</div>' 
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[0].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{two}}</div>'
									+'</a>'
								+'</div>'
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[0].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{three}}</div>'
									+'</a>'
								+'</div>'
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[0].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{four}}</div>'
									+'</a>'
								+'</div>'
							+'</div>'							 
                       +'</div>',
				data: function(){
			  		return{
			    		 one:settings.data[0].title,
						 two:settings.data[1].title,
						 three:settings.data[2].title,
						 four:settings.data[3].title,
			  		}
			  	}
			});
			// 注册
			Vue.component('um-applayout', AppLayout);
		}
	}
	
}