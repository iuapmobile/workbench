summerready = function() {
	// here is your code...
	var y = $summer.offset($summer.byId('header')).h;
	//var width = $summer.offset(document.getElementsByTagName("body")[0]).w;
	//var height = $summer.offset($summer.byId('main')).h;

	summer.openFrame({
		name : 'main',
		url : 'html/main.html',
		bounces : true,
		rect : {
			x : 0,
			y : y,
			w : 'auto',
			h : 'auto'
		}
	});
}

	// 开发者自定义组件
	var myComponent1 = Vue.extend({
	  	template: '<div id="com1" style="border:1px solid blue" class="mt10 mb10 p10">A custom component1{{x}}：{{name}}+{{code}}</div>',
  		data : function(){
  			return {
	  			name:"组件1",
	  			code:"iuap Component 1001",
	  			x:"bbb"
	  		}
		}
	});
	// 注册
	Vue.component('my-component1', myComponent1)


	// 开发者运行时动态添加自定义组件
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


	var my3 = document.createElement('my-component3')
	document.getElementById("mycomponents").appendChild(my3);
	// 注册
	Vue.component('my-component3', Vue.extend({
	  		template: '<div id="com3"  style="border:1px solid green" class="mt10 mb10 p10">component3 {{x}}:{{name}}-{{code}}</div>',
		
	  		el:function(){return "#mycomponents"}
		})
	)

	// 创建根实例
	new Vue({
	  	el: '#mycomponents',
	  	data:{
	  		name:"ppppp",
	  		code:"qqqqqqqq",
	  		x:"kkk"

	  	}
	})





	new Vue({
	  	el: '#app',
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


    


	workbench.createComponent("um-header", {title:"iuap mobile xxfff"});



	workbench.createComponent("um-footer", {
		data: [{title:"xxx", iconfont:"ti-comments"},
			{title:"日程q", iconfont:"ti-notepad"},
			{title:"通讯录", iconfont:"ti-agenda"},
			{title:"我", iconfont:"ti-user"}
		]}
	);
	/*
	workbench.createComponent("um-APPManager", {
				data : [{label:"审批",icon:'ss.png'},{label:"新闻",icon:'xw.png'}],
				colum: "4"
	});
*/





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