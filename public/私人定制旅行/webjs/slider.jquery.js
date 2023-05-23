/*


/*
	20140116
	增加公司提示
*/

// 动画插件 避免太生硬

jQuery.extend( jQuery.easing,
{
	fx:function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
});
;(function($){
	
	$.fn.slide = function(config){
		
		// 多个共存
		if(this.length > 1){
			this.each(function(){
				$(this).slide(config);
			});	
			return;
		}
			
		var defaultSet = {
				auto		:	3,				// 每次动画间的间隔
				speed		:	600,			// 每次动画持续的事件 时间越短越快
				paused		:	true,			// 鼠标进入后是否停止动画的播放。(新增加)
				pager		:	undefined,		// 列表形式的按钮
				showNumber  :	true,			// 列表按钮上是否显示编号
				prev		:	undefined,		// 左按钮
				next		:	undefined,		// 右按钮
				listButton	:	undefined,		// 指定按钮,
				company		:	false,			// 右键点击 提示 深圳网络建设：静态模板
				animateType :	'fx',		// 动画类型 支持Jquery动画插件
				effects		:	'fade',			// 动画类型 fade(淡化),up(向上滚动),left(向左滚动)
				paused		:	true,			// 鼠标移入后暂停
				events		:	'click',		// 触发列表按钮的事件
				oChange		:	$.noop			// 每一次切换完毕后自动调用该函数 两个参数 oChange(前一帧的索引,当前帧的索引)	
			},
			
			// 合并参数
			set = $.extend(defaultSet , config),
			i = 0,
			images = this.children(),
			rollElement = this,
			length = images.length,
			width = images.width(),
			height = images.height(),
			timer = null,
			
			
			// 初始化 
			init = function(){
				//动画参数解析

				if(!isNaN(set.effects)){
					switch (set.effects){
					case 1:
						set.effects = 'left';
						break;
					case 2:
						set.effects = 'up';
						break;
					default:
						set.effects = 'fade';
						break;
					}
				}
				
				if(set.effects == 'fade'){ //渐隐式的
					images.css({position:'absolute'}).eq(0).css({zIndex : 2}).siblings().css({zIndex : 0});
				}else{//滚动式
					images.eq(0).clone().appendTo(images.parent('ul')); // 拷贝一份，用做无缝滚动
				}
			
				if(set.effects == 'up'){
	
					rollElement.children('li').css({float:'none'}); // 避免CSS中设置了float:left,
					rollElement.css({position : 'absolute', top : -i*height});
				}
	
				if(set.effects == 'left'){
			
					rollElement.children('li').css({float:'left'});
					rollElement.css({position : 'absolute', left : -i*width , width : (length+1) * width});
					
				}
				
				if(set.listButton){
					$(set.listButton).bind(set.events,function(){
						var next = $(set.listButton).index(this);
						if(next > length - 1) return;
						slide(next);
					});
				}
	
				if(set.pager){  // 初始化列表按钮
					$(set.pager).append(appendListButton());
					$(set.pager).children().bind(set.events,function(){
						var next = $(this).index();
						slide(next);
					});	
					//列表按钮被点击
				}

				//指定列表按钮

	
				// 左右按钮初始化
				if(set.prev || set.next){
					$(set.prev).add(set.next).click(function(e){
						if(rollElement.is(':animated')){return;} // 动画没执行完 点击无效 (避免过快动画闪烁问题)
						var next = nextIndex() ;
						set.prev = $.trim(set.prev);
						if($(e.target).hasClass(set.prev.substr(1))){
							next = prevIndex();
						}
						slide(next);
					});
				}
				//是否自动播放
				if(set.auto > 0){
					start();
					// 鼠标进入后停止动画
					if(set.paused){ //　判断是否需要在鼠标进入后停止动画
						$(this).add($(set.pager)).add($(set.prev)).add($(set.next)).add($(set.listButton)).hover(function(){	
								pause();
							},function(){
								start();
						});
					}
				}
				
				//深圳网络建设
				if(set.company){
					companyShow.call(this);
				}

			},
			
			nextIndex = function(){
				return i+1 == length ? 0 : i+1;
			},
			
			prevIndex = function(){
				return i - 1 < 0 ? length - 1 : i-1;
			},
			
			fade = function(next){
				images.eq(next).css({zIndex : 1});
				images.eq(i).stop(true,true).animate({opacity : 0},set.speed,set.animateType,function(){
					images.eq(next).css({zIndex : 2});
					$(this).css({zIndex : 0, opacity : 1});
				});
			},
			
			up = function(next){
				if( i==length-1 && next == 0){
					rollElement.stop(true,true).animate({top : -(i+1) * height},set.speed,set.animateType,function(){
						rollElement.css({top : 0});
					});
				}else if(i==0 && next==length-1){
					rollElement.stop(true,true).css({top : -length * height}).animate({top : -next * height},set.speed,set.animateType);
				}else{
					rollElement.stop(true,true).animate({top : -next * height},set.speed,set.animateType);
				}	
	
			},
	
			left = function(next){
				if( i==length-1 && next == 0){
					rollElement.stop(true,true).animate({left : -(i+1) * width},set.speed,set.animateType,function(){
						rollElement.css({left : 0});
					});
				}else if(i==0 && next==length-1){
					rollElement.css({left : -length * width}).animate({left : -next * width},set.speed,set.animateType);
				}else{
					rollElement.stop(true,true).animate({left : -next * width},set.speed,set.animateType);
				}
			},
			
			// 路由
			slide = function(next){	
				//当前按钮被点击，不进行操作
				if(next == i){return;}
	
				if(set.pager){
					$(set.listButton).find('li').eq(next).addClass('cur').siblings().removeClass('cur');	
				}
				
				if(set.listButton){
					$(set.listButton).eq(next).addClass('cur').siblings().removeClass('cur');
				}
				
				if(set.effects == 'fade'){
					fade(next);
				}else if(set.effects == 'up'){
					up(next);
				}else if(set.effects == 'left'){
					left(next);
				}
				
				//回调 执行完毕后 i应该是前一帧 next是当前帧
				set.oChange.call(this,i,next);
	
				i = next;  // 切换完成后更改当前索引值
				
				if(set.pager){
					$(set.pager).children().eq(i).addClass('cur').siblings().removeClass('cur');
				}
			},
			
			//生成列表形式按钮的HTML
			appendListButton = function(){
				var li = '';
				for(var j=0; j<length; j++){
					var num = set.showNumber ?  j+1 : '';
					if( i == j) {
						li += '<a class="cur" href="javascript:;">'+num+'</a>';	
					}else{
						li += '<a  href="javascript:;">'+num+'</a>';	
					}	
				}
				return li;
			},
	
			start = function(){
				pause();
				timer = setInterval(function(){
						slide(nextIndex());
				},set.auto*3000);
			},
			
			companyShow  = function(){
				var company = $('<a class="smf-copyright" href="#" target="_blank">深圳网络建设：静态模板</a>');
				company.css({
					background:'#658fbd',
					position:'absolute',
					left:0,
					top:0,
					padding:"10px 15px",
					zIndex : 9999,
					color:'#fff',
					display:'none'	
				});
				
				$('body').append(company);
				
				this.bind('contextmenu',function(e){
					company.css({
						left : e.pageX,
						top : e.pageY	
					});
					company.fadeIn(200);
					
					setTimeout(function(){
						company.fadeOut();	
					},2000);
					
					e.preventDefault();	
				});
						
			},
			
			
			pause = function(){
				clearInterval(timer);
			};
			
			init.call(this); // 初始化	
		}
})(jQuery);
