$(function () {
    //2015-1-23登录
    $("#fc_down_1").click(function () {
        var login_name = $(".login a").eq(0).html();
        // alert(login_name)
        if (login_name == "登录") {
            //1-22特别行程详情弹出登录
            var w_hei = $(window).height();
            $(".tanchu_login").css("height", w_hei)
                $(".tanchu_login").fadeIn();
                var div_hei = $(".special_login").height();
                $(".special_login").css("margin-top", (w_hei - div_hei) / 2);
            $(".special_login_bt em").click(function () {
                $(".tanchu_login").fadeOut();
            });
        } else {
           window.open("/Tools/fileDownload.ashx?file=" + $("#fc_down_1 a").attr("file"));
        }
    });

    $("#fc_down_2").click(function () {
        var login_name = $(".login a").eq(0).html();
        // alert(login_name)
        if (login_name == "登录") {
            //1-22特别行程详情弹出登录
            
            var w_hei = $(window).height();
            $(".tanchu_login").css("height", w_hei)

           // $(".tour_info_bt p span").click(function () {
                $(".tanchu_login").fadeIn();
                var div_hei = $(".special_login").height();
                $(".special_login").css("margin-top", (w_hei - div_hei) / 2);
           // });
            $(".special_login_bt em").click(function () {
                $(".tanchu_login").fadeOut();
            });
            
        } else {
            window.open("/Tools/fileDownload.ashx?file=" + $("#fc_down_2 a").attr("file"));
        }
    });
});