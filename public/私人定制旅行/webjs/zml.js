// JavaScript Document
//首页切换
$(function(){
		//1-12
	function fnTab(){
		$(".footer_list ul li").hover(function () {
			var img = $(this).find("img");
			var rel = img.attr("rel");
			var src = img.attr("src");
		
			img.attr("src", rel)
			img.attr("rel", src)
		}, function () {
			var img = $(this).find("img");
			var rel = img.attr("rel");
			var src = img.attr("src");
		
			img.attr("src", rel)
			img.attr("rel", src)
		})	
	}
	fnTab();
	
	$(".line_bt span").eq(0).addClass("cur")
	$(".line_bt span em").eq(0).show();
	$(".line_con").eq(0).show()
	$(".line_bt span").click(function(){
		var index=$(this).index();
		$(".line_con").hide().eq(index).show();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).children("em").show().parent().siblings().children("em").hide();
		});
		
	//about
	$(".about_list dl:nth-child(2n-1)").addClass("cur")

	$(".about_list dl:nth-child(2n-1)").each(function(){
		var _dt=$(this).children("dt")
		var _dd=$(this).children("dd")
		_dd.after(_dt)
		});
		
	//微信
	$(".top_menu ul li.last_li").hover(function(){
		$(this).children("em").show()
	},function(){
		$(this).children("em").hide()
	})
		
	//注册
	$(".reg_list").eq(0).show();
	$(".reg_bt span").eq(0).addClass("cur")
	$(".reg_bt span").click(function(){
		var index=$(this).index();
		$(".reg_list").hide().eq(index).show();
		$(this).addClass("cur").siblings().removeClass("cur")
		})
		
	//招聘
	$(".job_con dl dd").eq(0).show();
	$(".job_con dl").eq(0).addClass("cur")
	$(".job_con dl dt").click(function(){
		$(this).siblings("dd").show().parent().siblings().children("dd").hide();
		$(this).addClass("cur").parent().siblings().children("dt").removeClass("cur")
		})
		
		
    //精彩旅游--瀑布刘
	var h=$(window).height();
	$(window).load(function(){
		var hei22=$("body").height();
		$(".tanchu_tour").css("height",hei22);
	});
	
	
	//var img_w=$(".tour_list ul li").find("img.zml_img").outerWidth();
	var img_h=$(".tour_list ul li").find("img.zml_img").outerHeight();
	//var div_h=$(".tc_con").height();
	
    var k=0; //当前切换的是第几张图片
	var ImgCount = $(".tour_list ul li").index(); //当前有多少可以切换的图片
	var TempImg = new Image(); //创建一个图片在内存中 ，用于获取图片的实际宽高
	var object = new Object();
	var TempDiv = document.createElement("TempDiv")

	$(".tour_list ul li img").click(function(){
		$(window).scrollTop(0);
     	k = $(".tour_list ul li").index($(this)); //获取当前是第几个点击的对象
		var imgu = $(this).attr("src");
		TempImg.src = imgu;
		$(".tanchu_tour").fadeIn();
		var div_h=$(".tc_con").outerHeight();

		$(".tc_list").css("width",TempImg.width+50);
		$(".tc_list").css("height",TempImg.height+50+div_h);		
		$(".tc_list img").attr("src",imgu);	
		$(".tc_list").css("margin-top",Math.abs((h-TempImg.height-div_h)/2));
		
		$(".tc_con p").text($(this).siblings(".list_con").children("p").text());
		$(".tc_con").children("h3").not("span").text($(this).siblings(".list_con").children("p").attr("txttitle"));
		$(".tc_con").children("h3").find("span").text($(this).siblings(".list_con").children("em").text());
		
			
		
	});  
	$(".tc_list em").click(function(){
		$(".tanchu_tour").fadeOut()
	});
		
	//左右点击切换
	$(".tc_list img").click(function(e){
		var div_h=$(this).siblings(".tc_con").outerHeight();
		var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left); //计算相对于当前点击元素的时候的相对坐标
		//var relativeY = (e.pageY - offset.top);
		//将图片从中间分开 
		var fg = ($(this).width()/2);  
		//alert(relativeX+","+fg);
		if(relativeX<fg){ 
			if(k<=0){return false;} //k=(ImgCount+1);
			k--; 
		} //如果是左半边
		if(relativeX>fg){ 
			if(k>(ImgCount-1)){ return false;} //k=-1;
			k++; 
		} //如果是右半边
		//alert(k+","+ImgCount);

		//alert($(".tour_list ul li img").eq(k).attr("src"))
		var imgu = $(".tour_list ul li").eq(k).find("img").attr("src");
		TempImg.src = imgu;
		$(this).attr("src",imgu);
		$(this).siblings(".tc_con").children("p").text($(".tour_list ul li").eq(k).children(".list_con").find("p").text());
		$(this).siblings(".tc_con").children("h3").find("span").text($(".tour_list ul li").eq(k).children(".list_con").children("em").text());
		$(this).siblings(".tc_con").children("h3").text($(".tour_list ul li").eq(k).children(".list_con").children("p").attr("txttitle"));
		//$(".tc_con").children("h3").not("span").text($(this).siblings(".list_con").children("p").attr("txttitle"));
		
		//alert(div_h)
		$(".tc_list").css("width",TempImg.width+50);
		$(".tc_list").css("height",TempImg.height+50+div_h);
		$(".tc_list").css("margin-top",Math.abs((h-TempImg.height-div_h)/2));		
	});
	
    //特别行程详细页
	var hei=$(window).height();
	dlheightArray=[];
	
	$(window).load(function(){
		var v_hei=$(".tour_inforight").height();
		$(".tour_infoleft").css("height",v_hei-100);
		
		$(".tour_inforight dl").each(function(index) {
			dlheightArray.push($(this).outerHeight(true));//把高度添加到数组
		});
		$(".tour_infoleft ul li").each(function(index){
			//console.log(dlheightArray)
			$(this).css({"height":dlheightArray[index]});
		})
	})
	
	
	//alert(scrolls);
	//var liTop=[];
	//var liTop22=[];
	//var dlLength=$(".tour_inforight dl").length;
	//$(".tour_inforight dl").each(function(index) {
//		if(index>dlLength-2)
//		{
//			return false;
//		}
//		else
//		{
//			
//			var tour=$(".tour_inforight dl:eq('"+index+"')").position().top;
//			var tourNext=$(".tour_inforight dl").eq(index+1).position().top;
//			var liHeight=tourNext-tour;
//			liTop.push(liHeight)
//		}
//		
//    });
	//console.log(liTop)
	

	//$(window).scroll(function(){
//		var s_top=$(window).scrollTop();
//		for(var i in scrolls){//for(var i=0;i<scrolls.length;i++)
//			if(s_top<scrolls[i]){
//				if(i==0)
//				$(".tour_infoleft ul li").eq(i).addClass("cur").siblings().removeClass("cur");
//				else
//				$(".tour_infoleft ul li").eq(i-1).addClass("cur").siblings().removeClass("cur");
//				return false;
//			}
//		}
//	})
	
	
	//window.onscroll=function(){
//		var s_top=$(window).scrollTop();
//		if(s_top>=300){
//			if(v_hei<$(".tour_infoleft").height()){
//				$(".tour_infoleft ul").css("position","relation")
//			}else{
//				$(".tour_infoleft ul").css({"position":"fixed","top":"0px"});
//			}
//		}else{
//			$(".tour_infoleft ul").css({"position":"relative"})
//		}
//		
//	}
	$(".tour_infoleft ul li").click(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur")
		$("html,body").stop(true).animate({ scrollTop:$(".tour_inforight dl").eq(index).offset().top },500)
	})
	
	//滚动头部代码
	$(window).scroll(function(){
			if($(window).scrollTop()>300){
				//$(".scroll_top>span").css("top",$(window).scrollTop());
				$(".scroll_top").fadeIn();
			}else{
				$(".scroll_top").fadeOut();	
			}	
		});
		$(".scroll_top>span").click(function(){
			$("html,body").animate({scrollTop:$("body").offset().top},800)
		})
	//特别行程推荐
	var dd_h=$(".list_line dl dd").outerHeight();
	$(".list_line dl dt").css("height",dd_h)
	
	$(".list_line dl dd").each(function(){
		var _this=$(this);
		var h=$(".country_list",_this).outerHeight();
		if(h<85){
			$(this).find("em").hide();	
		}
	})
	
	$(".list_line dl dd em").click(function(){
		var dd_h=$(this).parent().outerHeight();
		$(this).parent().siblings("dt").css("height",dd_h)
		var obj=$.trim($(this).text());
		if(obj=="更多"){
			$(this).parents("dl").addClass("cur").siblings().removeClass("cur");
			$(this).addClass("cur");
			$(this).text("收起")
		}else{
			$(this).parents("dl").removeClass("cur");
			$(this).addClass("cur");
			$(this).text("更多")
		}
	})
	
})

var index_js=function(){
	$(".traval_left dl dd").eq(0).show();
	$(".traval_left dl dt ul li").eq(0).addClass("cur")
	$(".traval_left dl dt ul li").click(function(){
		var index=$(".traval_left dl dt ul li").index(this);
		$(".traval_left dl dd").hide().eq(index).show();
		$(this).addClass("cur").siblings().removeClass("cur")
	})
	
	//$(".traval_left dl dd ul li").hover(function(){
	//	$(this).children(".li_txt").fadeIn();
	//},function(){
	//	$(this).children(".li_txt").hide();
	//})
		
	$(".traval_right ul li:nth-child(2n)").addClass("cur")
	$(".traval_right ul li:gt(1)").addClass("cur2")
	//$(".traval_right ul li:gt(1)").hover(function(){
//		$(this).children(".tra_good").fadeIn()
//	},function(){
//		$(this).children(".tra_good").hide()
//	})
	
	//机票预定
	$(".fly_con").eq(0).show();
	$(".fly_type label").click(function(){
		var index=$(".fly_type label").index(this);
		$(".fly_con").hide().eq(index).show();
})


}


//1-6

	
$(function(){
	$(".traval_left dl dd").each(function(){
		var _this=$(this);
		_this.children("ul").find("li").eq(2).addClass("cur");
		_this.children("ul").children("li").eq(0).find(".li_txt").show();
	})	
})

//1-12
$(function () {
    $(".reg_tanchu").hide();
    var tc_hei = $(".tanchu_con").height();
    $(".reg_tanchu").css("height", $(window).height());
    $(".reg_tanchu").css("padding-top", ($(window).height() - tc_hei) / 2);

    $(".reg_left ul li p a").click(function () {
        $(".reg_tanchu").fadeIn();
    })
    $(".tanchu_con h3 em").click(function () {
        $(".reg_tanchu").fadeOut();
    });

});

function IndexJsImgMax() {
    $(".traval_left img").each(function (i) {
        if (i > 0) {
            $(this).attr("_maximgs", "");
        } else {
            $(this).attr("_maximg","");
        }
    });
    var bool = false;
    var curthis, max_w = 0, max_h = 0, Imgwidth = 2,_h;
    $("img").load(function () {
        bool = true;
    });

    var setm = setInterval(function () {
        if (bool) {
            clearInterval(setm);
            var eachs = function (obj) {
                obj.each(function () {
                    $(this).parent().css({ "display": "block", "overflow": "hidden", "width": $(this).width(), "height": $(this).height() });
                    $(this).css({ "position": "relative" });

                });
            }
            var hho = function (obj, h, w,imgs) {
                obj.parents("li").hover(function (e) {
                    curthis = $(this).find(imgs);
                    max_w = -(w / 2);
                    max_h = -(h / 2);
                    curthis.parents("li").find(".li_txt").fadeIn();
                    curthis.stop().animate({ "width": w + "px", "height": h + "px", "top": "50%", "left": "50%", "margin-top": max_h + "px", "margin-left": max_w + "px" }, 900);
                }, function (e) {
                    curthis.parents("li").find(".li_txt").fadeOut();
                    curthis.stop().animate({ "width": curthis.parent().width(), "height": curthis.parent().height(), "top": "50%", "left": "50%", "margin-top": -(curthis.parent().height() / 2), "margin-left": -(curthis.parent().width() / 2) }, 900);
                });
            }
            eachs($("img[_maximg]"));
            eachs($("img[_maximgs]"));
            eachs($("img[_maximgss]"));

            hho($("img[_maximg]"), 349, 600, "img[_maximg]");
            hho($("img[_maximgs]"), 330, 500, "img[_maximgs]");
            hho($("img[_maximgss]"), 308, 350, "img[_maximgss]");
        }
    }, 200);
    
}