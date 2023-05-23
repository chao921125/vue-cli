$(function () {
    //邮箱注册
    $("#btnEmail").click(function () {

        var code = $("#txtcode").val();
        var name = $("#txtEmail").val();
        if (!(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test($("#txtEmail").val())) {
            alert("请输入正确的邮箱");
            $("#txtEmail").focus();
            return false;
        }
        var pwd = $.trim($("#txtpwd").val());
        if (pwd.length < 6) {
            alert("密码不能少于6位");
            $("#txtpwd").focus();
            return false;
        }
        if (pwd != $.trim($("#txtpwd2").val())) {
            alert("两次密码不一致");
            $("#txtpwd2").focus();
            return false;
        }
        if ($("#txtcode").val() == '') {
            alert("验证码不能为空");
            $("#txtcode").focus();
            return false;
        }
        if ($(".send_email").attr("yanzheng") == 0) {
            alert("请点击发送验证码到邮箱");
            return false;
        }
        if ($("#CheckboxGroup1").attr("checked") == undefined) {
            alert("您必须同意《网站条款及隐私条款》");
            return false;
        }

        $.ajax({
            type: 'post',
            url: '/ashx/Register.ashx?action=email',
            data: { UserName: name, PassWord: pwd, Code: code },
            success: function (data) {
                alert(data);
                if (data == "注册成功") {
                    location.href = '/login.html';
                }

                //location.reload();
            },
            error: function () {
                alert("注册失败!");
            }
        });
        return false;
    });
    $(".send_email").click(function () {
        var name = $("#txtEmail").val();
        if (!(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test($("#txtEmail").val())) {
            alert("请输入正确的邮箱");
            $("#txtEmail").focus();
            return false;
        }
        $(".send_email").attr("yanzheng", "1");
        $.ajax({
            type: 'post',
            url: '/ashx/Register.ashx?action=sendemail',
            data: { UserName: name },
            //局部事件
            beforeSend: function () {
                $("#fasongzhong").show();
                $(".send_email").hide();
            },
            success: function (data) {
                if (data == "该邮箱已被注册") {
                    alert("该邮箱已被注册");
                    $("#fasongzhong").hide();
                    $(".send_email").show();
                }
                else if (data == "发送成功") {

                    var time_ = 60;
                    //var time_ = 10;
                    var mytime = window.setInterval(function () {
                        $(".send_email").hide();
                        $("#fasongzhong").show();
                        time_ = time_ - 1;
                        //alert(time_);
                        if (time_ >= 0) {
                            $("#fasongzhong").html("还剩" + time_ + "秒,可重新发送!");

                        } else {
                        //清空计时器
                            clearInterval(mytime);
                            $("#fasongzhong").html("还剩60秒,可重新发送!");
                            $(".send_email").show().html("重新发送");
                            $(".send_email").attr("yanzheng", "0");
                            $("#fasongzhong").hide();
                        }
                    }, 1000);

                    //                    if (time_ > 0) {
                    //                        $(".send_email").removeClass("send_email");
                    //                    }
                    //                    else {

                    //                    }

                }

            },
            error: function () {
                alert("发送邮件失败")
            }
        });
    });
    //手机注册
    $("#btnPhone1").click(function () {
        var code = $("#txtpcode").val();
        var name = $("#txtphone").val();
        if (!(/^1[358]\d{9}$/gi).test($("#txtphone").val())) {
            alert("请输入手机号码");
            $("#txtphone").focus();
            return false;
        }
        var pwd = $.trim($("#txtppwd").val());
        if (pwd.length < 6) {
            alert("密码不能少于6位");
            $("#txtppwd").focus();
            return false;
        }
        if (pwd != $.trim($("#txtppwd2").val())) {
            alert("两次密码不一致");
            $("#txtppwd2").focus();
            return false;
        }
        if (code == '') {
            alert("验证码不能为空");
            $("#txtpcode").focus();
            return false;
        }

        if ($("#CheckboxGroup0").attr("checked") == undefined) {
            alert("您必须同意《网站条款及隐私条款》");
            return false;
        }
        $.ajax({
            type: 'post',
            url: '/ashx/Register.ashx?action=phone',
            data: { UserName: name, PassWord: pwd, Code: code },
            success: function (data) {
                alert(data);
                location.href = '/login.html';
                //location.reload();
            },
            error: function () {
                alert("添加失败!");
            }
        });
        return false;
    });


});





//$(function () {
//    //注册
//    $(".login_btn").click(function () {
//        $t = $(this).closest("ul");
//        var obj = {};
//        obj.pwd = $(".pwd", $t).val();
//        obj.pwd2 = $(".pwd2", $t).val();
//        obj.username = $(".addr", $t).val();
//        obj.code = $(".code", $t).val();
//        obj.type = $t.attr("_type");

//        if (obj.type == "email") {
//            //邮箱注册
//            if (!CheckMail(obj.username)) {
//                $.alert("请输入正确邮箱地址");
//                return false;
//            }
//        } else {
//            //手机注册
//            if (!CheckPhone(obj.username)) {
//                $.alert("请输入正确的手机号码");
//                return false;
//            }
//        }

//        if (obj.pwd.length < 6) {
//            $.alert("密码不可小于6位");
//            return false;
//        }

//        if (obj.pwd2 != obj.pwd) {
//            $.alert("确认密码与密码不一致");
//            return false;
//        }


//        if (obj.code.length < 1) {
//            $.alert("请输入验证码");
//            return false;
//        }
//        if (!$(".tongyi", $t).attr("checked")) {
//            $.alert("您必须同意《网站条款及隐私条款》");
//            return false;
//        }
//        $.load();
//        $.ajax({
//            url: "/ajax/common.ashx?action=reg",
//            data: obj,
//            type: "post",
//            dataType: "json", //返回json格式的数据
//            success: function (d) {
//                if (d.msg == 1) {
//                    $.alert(d.msbox);
//                    window.setTimeout(function () {
//                        window.location.href = "/login.html";
//                    }, 2000);
//                } else {
//                    //注册失败
//                    $.alert(d.msbox);
//                }
//            },
//            error: function () {
//                $.alert("注册失败,请稍等重试");
//            }
//        });

//        return false;

//    });

//    $(".addr").blur(function () {
//        var type = $(this).parents("ul").attr("_type");
//        var value = $(this).val();

//        if (type == "email" && value != '输入邮箱地址') {
//            if (value.length < 1) {
//                $.alert("邮箱输入错误");
//                return;
//            }

//            //邮箱注册
//            if (!CheckMail(value)) {
//                $.alert("请输入正确邮箱地址");
//                return;
//            }
//        } else if (type == "phone" && value != '输入手机号') {
//            if (value.length < 1) {
//                $.alert("手机输入错误");
//                return;
//            }

//            //手机注册
//            if (!CheckPhone(value)) {
//                $.alert("请输入正确的手机号码");
//                return;
//            }
//        }

//        $.ajax({
//            url: "/ajax/common.ashx?action=regcheck",
//            data: { type: type, value: value },
//            type: "post",
//            dataType: "json", //返回json格式的数据
//            success: function (d) {
//                if (d.msg == 0) {
//                    $.alert(d.msbox);
//                    window.location = "/login.html";
//                }
//            },
//            error: function () {
//                $.alert("注册失败,请稍等重试!");
//            }
//        });

//    })

//    $(".send_email").send_timer({  //发送邮箱验证
//        strat: function () {
//            return CheckMail($(".addr", $(".send_email").closest("ul")).val())
//        },
//        click_f: function () {
//            $.load();
//            $.ajax({
//                url: "/ajax/common.ashx?action=send_email&email=" + $(".addr", $(".send_email").closest("ul")).val(),
//                type: "post",
//                dataType: "json", //返回json格式的数据
//                success: function (d) {
//                    $.alert(d.msbox);
//                },
//                error: function () {
//                    $.alert("发送失败,请稍等重试");
//                }
//            });
//        },
//        time_f: function (time) {
//            $(".send_email").html("还剩" + time + "秒,可重新发送!");
//        },
//        end: function () {
//            $(".send_email").html("重新发送");
//        }
//    });


//    $(".send_tel").send_timer({  //发送短信验证
//        strat: function () {
//            return CheckPhone($(".addr", $(".send_tel").closest("ul")).val())
//        },
//        click_f: function () {
//            $.load();
//            $.ajax({
//                url: "/ajax/common.ashx?action=send_tel&tel=" + $(".addr", $(".send_tel").closest("ul")).val(),
//                type: "post",
//                dataType: "json", //返回json格式的数据
//                success: function (d) {
//                    $.alert(d.msbox);
//                },
//                error: function () {
//                    $.alert("发送失败,请稍等重试");
//                }
//            });

//        },
//        time_f: function (time) {
//            $(".send_tel").html("还剩" + time + "秒,可重新发送!");
//        },
//        end: function () {
//            $(".send_tel").html("重新发送");
//        }
//    });


//});


