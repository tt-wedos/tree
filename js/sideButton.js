(function(){
	var sbl = document.getElementById('sideButtonL');//获取div的DOM对象 
	var sbr = document.getElementById("sideButtonR")
	sbl.onmouseover = function(){ //鼠标移入方法 
		startMove(100,this); 
	}; 
	sbl.onmouseout = function(){ //鼠标移出方法 
		startMove(40,this); 
	};
	sbr.onmouseover = function(){ //鼠标移入方法 
		startMove(100,this); 
	}; 
	sbr.onmouseout = function(){ //鼠标移出方法 
		startMove(40,this); 
	};
	

	var timer = null;//时间对象 
	var alpha = 40;//透明度初始值  
	function startMove(target,Div) { 
		clearInterval(timer);//清空时间对象 
		timer = setInterval(function(){ //开启计时器
		var speed = 0; //速度正负决定透明度在增加还是减少
		if(alpha < target) { 
			speed =5; 
		}else { 
			speed = -5; 
		} 
		if(alpha == target) { 
			clearInterval(timer); 
		}else { 
			alpha +=speed; //透明度值增加效果 
			Div.style.filter = 'alpha(opacity:'+alpha+')'; //设置IE透明度， 考虑兼容
			Div.style.opacity = alpha / 100; ///设置其他浏览器 
		} 
		},40); 
	}
})();
 