
var workbench = {

	init : function(){
	
	},
	createComponent : function(type, settings){
		if(type == 'um-header'){
			// 定义
			var header = Vue.extend({
				template:'<div class="um-header-fixed">'
    						+'<a class="fl um-scan">'
    						+'<img src="img/scan.png" alt="" />'
    						+'<div class="f12">扫一扫</div>'
    						+'</a>'
           					+' <div class="um-input-group">'
	         				+'<span class="t-search"></span>'
	         				+'<input type="search" class="form-control" :placeholder="aa">'
	         				+'<span class="t-camera"></span>'
           				    +'</div>'
    						+'</div>',
				data: function(){
					return {
						aa : settings.placeholder					
					}
				}
			});
			// 注册
			Vue.component('um-header', header);
		}else if(type=='um-header-text'){
			var headertext = Vue.extend({
			  	template: '<div   class="um-header-fixed" style="background:'+settings.data[0].bgc+'">'
						+'<p>{{title}}</p>'
						+'</div>',
				data: function(){
					return {
						title : settings.data[0].title,				
					}
				}
			});
			// 注册
			Vue.component('um-header-text', headertext);
		}else if (type == "um-banner"){
			var slider = Vue.extend({
				template : '<div class="um-row">'
					      +'<div id="iSlider-wrapper" class="iSlider-wrapper"></div>'
					      +'</div>',
			    mounted : function(){
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
			    }
			});
			// 注册
			Vue.component('um-banner', slider);
			
		}else if(type == 'um-appmanager'){
			var APPManager = Vue.extend({
				template : '<div id="uappmanager"></div>',
				
				mounted : function(){
					//alert(111)
					//alert(el)
					$(settings.el).APPManager(settings);
				}
			});
			// 注册
			Vue.component('um-appmanager', APPManager);
			//$(settings.el).APPManager(settings);
			//var v = new APPManager(settings.el,settings);
		}else if(type == 'um-application'){
			//$(settings.el).APPManager(settings);
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
		}else if(type == "um-footer-custom"){
		    // 定义
			var footerCustom = Vue.extend({
                 template: '<div class="um-footer">'
                    +'<div class="um-footerbar" >'
                        +'<a v-for="x in footerbars" href="#" :class="x.item" :data-tar="x.tar" v-on:click="onFooterItemClick">'
                            +'<div :class="x.iconfont" :style="x.styleObject"></div>'
                            +'<div class="f14 lh1">{{x.title}}</div>'
                        +'</a>'
                    +'</div>'
                +'</div>',
				data : function(){
					return {
						footerbar_item: 'um-footerbar-item',
						footerbars:[]
					}
				},
				beforeCreate: function(){
				},
				created: function(){
					for(var i=0,len=settings.data.length;i<len;i++){
						this.footerbars.push({
							item: settings.index == i ? this.footerbar_item + " active" : this.footerbar_item,
							title: settings.data[i].title,
							icon: settings.data[i].icon,
							iconActive: settings.data[i].iconActive,
							tar: settings.data[i].target,
							styleObject: {
							    height: '22px',
							  	backgroundPosition: 'center center',
							  	backgroundRepeat:'no-repeat', 
							  	backgroundSize:'22px 22px',

							    backgroundImage: 'url(' + (settings.index == i ? settings.data[i].iconActive : settings.data[i].icon) + ')'
							},
							iconfont:"mb5"
						});
					}
				},
				methods:{
					onFooterItemClick: function(args){
						//debugger;
						var srcElement = args.currentTarget;
						var i = this.activeIdx(srcElement);

						for(var j=0,len=this.footerbars.length;j<len;j++){
							this.footerbars[j].item = this.footerbars[j].item.replace(/active/g, '');
							this.footerbars[j].styleObject.backgroundImage = 'url(' + this.footerbars[j].icon + ')';
							
							document.querySelector(this.footerbars[j].tar).className = document.querySelector(this.footerbars[j].tar).className.replace(/active/g, '');
						}
						this.footerbars[i].item +=' active'; 
						this.footerbars[i].styleObject.backgroundImage = 'url(' + this.footerbars[i].iconActive + ')';
						

						document.querySelector(this.footerbars[i].tar).className +=" active";

						return true;
					},
					activeIdx: function(srcElement){
						var list = srcElement.parentElement.children;
						for(var i=0,len=list.length;i<len;i++){
							if(list[i] == srcElement)
								return i;
						}
						return -1;
					}
				}
			});
			// 注册
			Vue.component('um-footer-custom', footerCustom);
		}else if(type=='um-applayout'){
			var AppLayout = Vue.extend({
				template: '<div class="um-grid">'
							+'<div class="um-grid-row tc">'
								 +'<div >'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[0].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div class="f12 mt5">{{one}}</div>'
									+'</a>'
								+'</div>' 
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[1].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{two}}</div>'
									+'</a>'
								+'</div>'
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[2].img+'" width=40 class="um-img-responsive" alt="">'
										+'<div  class="f12 mt5">{{three}}</div>'
									+'</a>'
								+'</div>'
								+'<div>'
									+'<a href="#" class="um-circle um-black">'
										+'<img src="'+settings.data[3].img+'" width=40 class="um-img-responsive" alt="">'
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
			Vue.component('um-applayout',AppLayout);
		}else if(type=='um-layout-text'){
			 
			var AppText = Vue.extend({
				template: '<div class="ncontent" >'
							+'<div class="alist fl um-grid" v-for="list in lists">'
								+'<a :href="list.url">'
									+'<div class="title tc">{{list.text}}</div>'
									+'<div class="f12 mt5 tc">{{list.title}}</div>'
								+'</a>'
							+'</div>'
							+'<div class="alist fl um-grid nphoto">'
								+'<a href="#toDo">'
									+'<img src="img/add.png" style="width:20px">'
								+'</a>'
							+'</div>'
						 +'</div>',							 
				data: function(){
			  		return{
			    		 lists:settings.data
			  		}
			  	}
			});
			// 注册
			Vue.component('um-layout-text',AppText);
		}else if(type=="um-items"){
			var Appitems = Vue.extend({
				template:'<div class="um-items">'
						 +'<ul class="clearfix">'
						 +'<li v-for="list in gridlist">'
	                         +'<a :href="list.url" class="um-circle um-grey">'
	                         	+'<img v-bind:src="list.img" width=40 class="um-img-responsive" alt="">'
	                         	+'<div class="f12 mt5">{{list.text}}</div>'
	                         +'</a>'
                         +'</li>'
                         +'<li>'
	                         +'<a :href="more.url" class="um-circle um-grey">'
	                         	+'<img v-bind:src="more.img" width=40 class="um-img-responsive" alt="">'
	                         	+'<div class="f12 mt5">{{more.text}}</div>'
	                         +'</a>'
                         +'</li>'
                         +'</ul>'
                         +'</div>',
                data: function(){
                	return{
			    		 gridlist:settings.data,
			    		 more:settings.more
			  		}
                }       
			});
			// 注册
			Vue.component('um-items',Appitems);
		}else if(type=="um-classify"){
			var Appclassify = Vue.extend({
				template:'<div class="um-classify">'
						 +'<div class="t"><span class="f14 um-grey">{{classifytit}}</span></div>'
						 +'<ul>'
						 +'<li v-for="list in classifylist">'
	                         +'<a :href="list.url" class="um-circle um-grey">'
	                         	+'<img v-bind:src="list.img" width=40 class="um-img-responsive" alt="">'
	                         	+'<div class="f14 mt5">{{list.text}}</div>'
	                         +'</a>'
                         +'</li>'
                         +'</ul>'
                         +'</div>',
                data: function(){
                	return{
			    		 classifylist:settings.data,
			    		 classifytit: settings.title
			  		}
                }       
			});
			// 注册
			Vue.component('um-classify',Appclassify);
		}else if(type=='um-message'){
			var Appmessage = Vue.extend({
				template: '<div class="um-listview-wrap" id="listview">'
                     	+'<ul class="um-list um-no-active"  >'
                     		+'<li class="um-listview-row" v-for="list in lists">'
                     			+'<a :href="list.url" class="um-list-item um-swipe-action um-no-icon">'
                     				+'<div class="um-swipe-btns">'
                     					+'<span class="um-swipe-btn um-delete">删除</span>'
                     				+'</div>'
                     				+'<div class="um-list-item-media msg-info">'
                     					+'<img  v-bind:src="list.img" width=50>'
                     					+'<span class="um-badge">{{list.msgNum}}</span>'
                     				+'</div>'
                     				+'<div class="um-list-item-inner ml5">'
                     					+'<div class="um-list-item-body">'
                     						+'<h4 class="um-media-heading fb f16 um-text-overflow tl" >{{list.sender}}</h4>'
                     						+'<p class="um-gray f14 um-text-overflow tl">{{list.lastMsg}}</p>'
                     					+'</div>'
                     				+'</div>' 
                     			+'</a>'
                     		+'</li>'
                     	+'</ul>'
                    +'</div>',
				data: function(){
			  		return {lists:settings.data}
			  	}
			});
			// 注册
			Vue.component('um-message',Appmessage);
		}
	}
	
}