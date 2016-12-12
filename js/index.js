   /*底部导航栏与4个内容区域切换*/
	$(function(){
		/*
		$('.um-footerbar>a').click(function(){
			debugger;
				$(this).addClass('active').siblings('.active').removeClass('active');
				var tar=$(this).attr('data-tar');
				$(tar).addClass('active').siblings('.active').removeClass('active');	
		});	
   */
	});	
	workbench.createComponent("um-header", {placeholder:"搜订单/商品"});
	workbench.createComponent("um-header-text", {
		data: [
			{title: "消息",bgc:'rgba(246, 246, 246, 1)'}, 
		]
    });
	workbench.createComponent("um-banner", {
		data: [
			{content: "./img/g1.jpg"}, 
			{content: "./img/g2.jpg"}, 
			{content: "./img/g3.jpg"}
		]
    });
    /*
    var emmJson = {"deviceid":"D8YDU15A31007455868753026659495","os":"web","userid":"dzk"};
	var s = $summer.jsonToStr(emmJson);
	var param = {data: s};
	$.get("http://172.20.7.98:8080/mobem/app/getapplist",param,function(data){
		//获取应用列表后的处理
		var d = ($summer.strToJson(data)).data.apps.remove(0);
		for (var i =0;i<d.length;i++){
			d[i].img = d[i].webiconurl;
			d[i].label = d[i].title;
			d[i].url = d[i].weburl;
		}
		workbench.createComponent("um-APPManager",{
			el:"#uappmanager",
			data:d,
			colum:4
		});
	});
	*/

	workbench.createComponent("um-appmanager",{
		el:"#uappmanager",
		data:[{
			"mark":"xbj",
			"label" : "询报价",
			"img" : "img/xbj.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{	
			"mark":"ztb",
			"label" : "招投标",
			"img" : "img/ztb.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{
			"mark":"cs",
			"label" : "超市",
			"img" : "img/cs.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{
			"mark":"jj",
			"label" : "在线竞价",
			"img" : "img/jj.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{
			"mark":"zr",
			"label" : "供应商准入",
			"img" : "img/zr.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{
			"mark":"sh",
			"label" : "收获",
			"img" : "img/sh.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		},
		{
			"mark":"dz",
			"label" : "对账",
			"img" : "img/dz.png",
			"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
		}]
	});
	
	workbench.createComponent("um-footer-custom", {
		index: 0,
		data: [{title:"首页",target:'#home',icon:"img/home-25.png",iconActive:"img/home-25-active.png",styleObject:{paddingTop:'3.5px',color: 'rgba(241, 90, 74, 1)'}, onclick:'' },
			{title:"消息", target:'#message',icon:"img/msg-25.png",iconActive:"img/msg-25-active.png", styleObject:{paddingTop:'3.5px',color: 'rgba(241, 90, 74, 1)'}, onclick:'' },
			{title:"商品", target:'#goods',icon:"img/goods-25.png",iconActive:"img/goods-25-active.png",styleObject:{paddingTop:'3.5px',color: 'rgba(241, 90, 74, 1)'}, onclick:''},
			{title:"我的", target:'#mine',icon:"img/mine-25.png",iconActive:"img/mine-25-active.png", styleObject:{paddingTop:'3.5px',color: 'rgba(241, 90, 74, 1)'}, onclick:''}
		]}
	);
	workbench.createComponent("um-layout-text", {
		data: [{title:"待定标", text:"12","url":'http://www.baidu.com'},
			{title:"待收货", text:"3","url":'http://www.baidu.com'},
			{title:"待确认对账", text:"3","url":'http://www.baidu.com'},
			{title:"待发布", text:"5","url":'http://www.baidu.com'},
			{title:"待审批", text:"1","url":'http://www.baidu.com'}
			 
		]}
	);
	//点击更多
	workbench.createComponent("um-application",{
		data:[
			{
				"title":"应用",
				"arr":[
					{
						"label" : "询报价",
						"img" : "img/xbj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "招投标",
						"img" : "img/ztb.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "超市",
						"img" : "img/cs.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "在线竞价",
						"img" : "img/jj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "供应商准入",
						"img" : "img/zr.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "收获",
						"img" : "img/sh.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "对账",
						"img" : "img/dz.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					}
				]
			},
			{
				"title":"对账",
				"arr":[
					{
						"label" : "询报价",
						"img" : "img/xbj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "招投标",
						"img" : "img/ztb.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "超市",
						"img" : "img/cs.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "在线竞价",
						"img" : "img/jj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "供应商准入",
						"img" : "img/zr.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "收获",
						"img" : "img/sh.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "对账",
						"img" : "img/dz.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					}
				]
			},
			{
				"title":"采购需求",
				"arr":[
					{
						"label" : "询报价",
						"img" : "img/xbj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "招投标",
						"img" : "img/ztb.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "超市",
						"img" : "img/cs.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "在线竞价",
						"img" : "img/jj.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "供应商准入",
						"img" : "img/zr.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "收获",
						"img" : "img/sh.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					},
					{
						"label" : "对账",
						"img" : "img/dz.png",
						"url" : "http://uapma.yonyou.com:8443/weixin/summerShow_web/index.html"
					}
				]
			},
		]
	});
	workbench.createComponent("um-items",{
		data:[
			{
				"img": "img/goods/7.png",
				"text":"数码电器",
				"url":""
			},
			{
				"img": "img/goods/1.png",
				"text":"办公用品",
				"url":""
			},
			{
				"img": "img/goods/3.png",
				"text":"机器设备",
				"url":""
			},
			{
				"img": "img/goods/4.png",
				"text":"五金工具",
				"url":""
			},
			{
				"img": "img/goods/2.png",
				"text":"电工电气",
				"url":""
			},
			{
				"img": "img/goods/5.png",
				"text":"精细化工",
				"url":""
			},
			{
				"img": "img/goods/6.png",
				"text":"冶金矿产",
				"url":""
			}
		],
		more:
			{
				"img": "img/goods/8.png",
				"text":"所有分类",
				"url":""
			}
	});
	workbench.createComponent("um-classify",{
		data:[
			{
				"img": "img/goods/7.png",
				"text":"数码电器",
				"url":""
			},
			{
				"img": "img/goods/1.png",
				"text":"办公用品",
				"url":""
			},
			{
				"img": "img/goods/3.png",
				"text":"机器设备",
				"url":""
			},
			{
				"img": "img/goods/4.png",
				"text":"五金工具",
				"url":""
			},
			{
				"img": "img/goods/2.png",
				"text":"电工电气",
				"url":""
			},
			{
				"img": "img/goods/5.png",
				"text":"精细化工",
				"url":""
			},
			{
				"img": "img/goods/6.png",
				"text":"冶金矿产",
				"url":""
			},
			{
				"img": "img/goods/8.png",
				"text":"所有分类",
				"url":""
			}
		],
		title:"推荐商品"			
	});
	workbench.createComponent("um-message", {
		data: [{
        			"sender" : "询报价",
        			"img" : "./img/org1.png",
        			"msgNum" : '3',
        			"lastMsg" : "收到2份#关于“毕节吧电脑采购询价”",
					"url":'http://www.baidu.com'
        			 
        		},{
        			"sender" : "订单",
        			"img" : "./img/org2.png",
        			"msgNum" : '',
        			"lastMsg" : "您的订单已经安排发货",
					"url":'http://www.hao123.com'
        		 
        		},{
        			"sender" : "对账",
        			"img" : "./img/org3.png",
        			"msgNum" : '2',
        			"lastMsg" : "金立集团发来一封对账单",
					"url":'http://www.sina.com.cn/'
        		 
        		},{
        			"sender" : "公告",
        			"img" : "./img/org4.png",
        			"msgNum" : '',
        			"lastMsg" : "系统维护通知",
					"url":'http://www.baidu.com'
        		},{
        			"sender" : "询报价",
        			"img" : "./img/org1.png",
        			"msgNum" : '3',
        			"lastMsg" : "收到2份#关于“毕节吧电脑采购询价”",
					"url":'http://www.baidu.com'
        			 
        		},{
        			"sender" : "订单",
        			"img" : "./img/org2.png",
        			"msgNum" : '',
        			"lastMsg" : "您的订单已经安排发货",
					"url":'http://www.hao123.com'
        		 
        		},{
        			"sender" : "对账",
        			"img" : "./img/org3.png",
        			"msgNum" : '2',
        			"lastMsg" : "金立集团发来一封对账单",
					"url":'http://www.sina.com.cn/'
        		 
        		},{
        			"sender" : "公告",
        			"img" : "./img/org4.png",
        			"msgNum" : '',
        			"lastMsg" : "系统维护通知",
					"url":'http://www.baidu.com'
        		},{
        			"sender" : "询报价",
        			"img" : "./img/org1.png",
        			"msgNum" : '3',
        			"lastMsg" : "收到2份#关于“毕节吧电脑采购询价”",
					"url":'http://www.baidu.com'
        			 
        		},{
        			"sender" : "订单",
        			"img" : "./img/org2.png",
        			"msgNum" : '',
        			"lastMsg" : "您的订单已经安排发货",
					"url":'http://www.hao123.com'
        		 
        		},{
        			"sender" : "对账",
        			"img" : "./img/org3.png",
        			"msgNum" : '2',
        			"lastMsg" : "金立集团发来一封对账单",
					"url":'http://www.sina.com.cn/'
        		 
        		},{
        			"sender" : "公告",
        			"img" : "./img/org4.png",
        			"msgNum" : '',
        			"lastMsg" : "系统维护通知",
					"url":'http://www.baidu.com'
        		}                        
		]}
	);
var rootVue = new Vue({
  	el: '#body0',
  	data: {
    	info: 'Hello iuap mobile!',
  	  	todos:[{text:"aa"},{text:"bb"},{text:"cc"},{text:"dd"}]
  	},
  	methods: {
 		add: function () {
  			this.info +=' new';
  			this.todos.push({text: (new Date()).toLocaleString()}); 
		},
		remove: function () {
  			this.info = this.info.substring(0,this.info.length-4) ;
  			this.todos.pop(); 
		},
		removeTodo: function (index) {
  			this.todos.splice(index, 1)
		}
	},
	created: function () {
	    // `this` 指向 vm 实例
	   // console.log('created is: ' + this.info)
	},
	beforeCompile: function () {
	    // `this` 指向 vm 实例
	   // console.log('beforeCompile is: ' + this.info)
	},
	compiled: function () {
	    // `this` 指向 vm 实例
	    //console.log('compiled is: ' + this.info)
	},ready: function () {
	    // `this` 指向 vm 实例
	   // console.log('ready is: ' + this.info)
	},beforeDestroy: function () {
	    // `this` 指向 vm 实例
	   // console.log('beforeDestroy is: ' + this.info)
	},destroy: function () {
	    // `this` 指向 vm 实例
	   // console.log('destroy is: ' + this.info)
	}
})
 
 