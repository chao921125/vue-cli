// 左侧菜单自动延伸

function height(){
		 height = (document.documentElement.scrollHeight - 73) + 'px';
		 $('.left').css('height',height);
		}
		$(window).load(height).resize(height).scroll(height);

// 拉宽全部
function width(){
		width = (document.documentElement.scrollWidth - 222) + 'px';
		$('.TB').css('width',width);
		}
		$(window).load(width).resize(width).scroll(width);