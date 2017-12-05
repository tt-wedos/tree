window.onload = function(){
	//获取oOuter
	var oOuter = document.getElementById("outer");
	//设置鼠标移上计时器暂停，移走继续事件
	oOuter.onmouseover = function(){
		clearInterval(timer);
	}
	oOuter.onmouseout = function(){
		autoChange();
	}
	
	//获取imgList
	var imgList = document.getElementById("imgList");
	//获取页面中所有的img标签
	var imgArr = document.getElementsByTagName("img");
	//设置imgList的宽度
	imgList.style.width = 520*imgArr.length+"px";
	
	/*设置导航按钮居中*/
	//获取navDiv
	var navDiv = document.getElementById("navDiv");
	//获取outer
	var outer = document.getElementById("outer");
	//设置navDiv的left值
	navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
	
	//默认显示图片的索引
	var index = 0;
	//获取所有的a
	var allSpan = navDiv.getElementsByTagName("span");
	//设置默认选中的效果
	allSpan[index].style.backgroundColor = "black";
	
	//为navDiv中所有的span都绑定单击响应事件
	for(let i=0; i<allSpan.length ; i++){	//let ES6语法
		
		//为span绑定单击响应函数
		allSpan[i].onclick = function(){
			
			//关闭自动切换的定时器
			clearInterval(timer);
			//获取点击span的索引,并将其设置为index
			index = i;
			
			//导航部分在span样式跟随改变
			setSpan();
			
			//使用move函数来切换图片
			move(imgList , "left" , -520*index , 80 , function(){});
			
		};
	}
	//获取两个button按钮节点
	var btn = document.getElementsByTagName("button");
	//为两个button按钮绑定单击响应事件
	for(let i=0; i<btn.length; i++){
		btn[i].onclick = function(){
			//关闭自动切换的定时器
			clearInterval(timer);
			//判断左右按钮，改变index值
			if(i==0){
				index==0?index=4:index--;
			}else{
				index==4||index==5?index=0:index++;
			}
			
			//导航部分在span样式跟随改变
			setSpan();
			
			if(i==0 && index==4){
				console.log(1)
				move(imgList , "left" , -520*index , 1000 , function(){});
			}else if(i==1 && index==0){
				move(imgList , "left" , -520*index , 1000 , function(){});
			}else{
				//使用move函数来切换图片
				move(imgList , "left" , -520*index , 80 , function(){});
			}
			
		};
	}
	
	//开启自动切换图片
	autoChange();
	
	//导航部分span的样式变化
	function setSpan(ii){
		
		//判断当前索引是否是最后一张图片
		if(index >= imgArr.length - 1){
			//则将index设置为0
			index = 0;
			
			//此时显示的最后一张图片，而最后一张图片和第一张是一摸一样
			//通过CSS将最后一张切换成第一张
			imgList.style.left = 0;
		}
		
		//遍历所有a，并将它们的背景颜色设置为红色
		for(var i=0 ; i<allSpan.length ; i++){
			allSpan[i].style.backgroundColor = "";
		}
		
		//将选中的a设置为黑色
		allSpan[index].style.backgroundColor = "black";
	};
	
	//定义一个自动切换的定时器的标识
	var timer;
	//创建一个函数，用来开启自动切换图片，定时器
	function autoChange(){
		
		//开启一个定时器，用来定时去切换图片
		timer = setInterval(function(){
			
			//使索引自增
			index++;
			
			//判断index的值
			index %= imgArr.length;
			
			//执行动画，切换图片
			move(imgList , "left" , -520*index , 30 , function(){
				//修改导航按钮
				setSpan();
			});
			
		},3000);
		
	}
	
	
};