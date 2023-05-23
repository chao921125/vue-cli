$(function () {
    $.ajax({
        url: '/ashx/ShowUsers.ashx',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data) {
            if (data.msg == "已登录") {
                $(".login a").eq(0).attr("href", "javascript:;");
                $(".login a").eq(0).html(data.username);
                $(".login a").eq(1).attr("href", "/Exit.html");
                $(".login a").eq(1).html("退出");
            }
        }
    });
});