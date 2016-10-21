
	//1、 开发者自定义组件
	var myComponent1 = Vue.extend({
	  	template: '<div id="com1" style="border:1px solid blue" class="mt10 mb10 p10">A custom component-{{x}}：{{name}}+{{code}}</div>',
  		data : function(){
  			return {
	  			name:"iuap Component",
	  			code:"C1001",
	  			x:"自定义"
	  		}
		}
	});
	// 注册
	Vue.component('my-component1', myComponent1)


	//2、 开发者运行时动态添加自定义组件
	var my2 = document.createElement('my-component2')
	document.getElementById("mycomponents").appendChild(my2);
	// 注册
	Vue.component('my-component2', Vue.extend({
	  		template: '<div style="border:1px solid red" id="com2" class="mt10 mb10 p10">动态创建自定义组件:<div>姓名:{{name}}</div><div>编码:{{code}}</div></div>',
	  		data:function(){
	  			return { 
		  			name:"李四",
		  			code:"UF1002"
		  		}
		  	}
		})
	)

/*
	var my3 = document.createElement('my-component3')
	document.getElementById("mycomponents").appendChild(my3);
	// 注册
	Vue.component('my-component3', Vue.extend({
	  		template: '<div id="com3"  style="border:1px solid green" class="mt10 mb10 p10">component3 {{x}}:{{name}}-{{code}}</div>',
		
	  		el:function(){return "#mycomponents"}
		})
	)
*/
/*

	// 创建根实例
	new Vue({
	  	el: '#mycomponents',
	  	data:{
	  		name:"ppppp",
	  		code:"qqqqqqqq",
	  		x:"kkk"

	  	}
	})
*/




	


    


	workbench.createComponent("um-header", {title:"iuapmobile 3.0"});

	workbench.createComponent("um-footer", {
		data: [{title:"消息", iconfont:"ti-comments"},
			{title:"日程q", iconfont:"ti-notepad"},
			{title:"通讯录", iconfont:"ti-agenda"},
			{title:"设置", iconfont:"ti-user"}
		]}
	);
	workbench.createComponent("um-applayout", {
		data: [{title:"美食", img:"./img/mt_food.png"},
			{title:"电影", img:"./img/mt_mv.png"},
			{title:"酒店", img:"./img/mt_hotal.png"},
			{title:"KTV", img:"./img/mt_ktv.png"}
		]}
	);
	/*
	workbench.createComponent("um-APPManager", {
				data : [{label:"审批",icon:'ss.png'},{label:"新闻",icon:'xw.png'}],
				colum: "4"
	});
*/


	new Vue({
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
		    console.log('created is: ' + this.info)
		},
		beforeCompile: function () {
		    // `this` 指向 vm 实例
		    console.log('beforeCompile is: ' + this.info)
		},
		compiled: function () {
		    // `this` 指向 vm 实例
		    console.log('compiled is: ' + this.info)
		},ready: function () {
		    // `this` 指向 vm 实例
		    console.log('ready is: ' + this.info)
		},beforeDestroy: function () {
		    // `this` 指向 vm 实例
		    console.log('beforeDestroy is: ' + this.info)
		},destroy: function () {
		    // `this` 指向 vm 实例
		    console.log('destroy is: ' + this.info)
		}
	})


<<<<<<< HEAD
    


	workbench.createComponent("um-header", {title:"iuap mobile xxfff"});
	workbench.createComponent("um-APPManager",{
		el:"#mycomponents2",
		data:[{
			"label" : "建差",
			"img" : "img/mt_food.png",
			"url" : ""
		},
		{
			"label" : "手机",
			"img" : "img/mt_hotal.png",
			"url" : ""
		},
		{
			"label" : "电脑",
			"img" : "img/mt_ktv.png",
			"url" : ""
		},
		{
			"label" : "平板",
			"img" : "img/mt_money.png",
			"url" : ""
		},
		{
			"label" : "用友",
			"img" : "img/mt_mv.png",
			"url" : ""
		},
		{
			"label" : "网络",
			"img" : "img/mt_new.png",
			"url" : ""
		},
		{
			"label" : "科技",
			"img" : "img/mt_xiaochi.png",
			"url" : ""
		},
		{
			"label" : "苹果",
			"img" : "img/mt_you.png",
			"url" : ""
		}],
		colum : 4
	});
	
			
	workbench.createComponent("um-footer", {
		data: [{title:"xxx", iconfont:"ti-comments"},
			{title:"日程q", iconfont:"ti-notepad"},
			{title:"通讯录", iconfont:"ti-agenda"},
			{title:"我", iconfont:"ti-user"}
		]}
	);
	
=======

>>>>>>> 442a1086513e73b851cb782596779472089ac34c

/*
	new Vue({
		el: 'body',
		data: {
			currentView: 'home'
		},
	  	components: {
		    home: {
	  			template: '<div>A custom component HOME ++ {{name}}!</div>'
			},
		    contacts: {
			  template: '<div>A custom component Contacts ++ {{name}}!</div>'
			},
		    settings:{
			  template: '<div>A custom component Settings ++ {{name}}!</div>'
			}
	  	}
	})
*/




summerready = function(){
    // here is your code...	
    var y = $summer.offset($summer.byId('header')).h;
    var width = $summer.offset(document.getElementsByTagName("body")[0]).w;		
    var height = $summer.offset($summer.byId('main')).h;

    summer.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: true,
        rect: {
            x: 0,
            y: y,
            w: width,
            h: height
        }
    });
}