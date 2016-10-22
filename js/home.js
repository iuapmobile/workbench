

function showTabPage(args){
	if(args.el.getAttribute("data-target")=='.user' ){
		$("#headerh3")[0].innerHTML = "首页";
		$("#header").show(0);
	}else if(args.el.getAttribute("data-target")=='.application'){
		$("#headerh3")[0].innerHTML = "消息";
		$("#header").show(0);
	}else{
		$("#header").hide(0);
	}

}