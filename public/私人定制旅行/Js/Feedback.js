$(function () {
    //验证邮箱
    function CheckMail(mail) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(mail)) return true;
        else return false;
    }
    //验证手机
    function CheckPhone(phone) {

        var filter = /^1[3,5,7,8]\d{9}$/;
        if (filter.test(phone)) return true;
        else return false;
    }

    //验证电话
    function CheckTel(tel) {
        var filter = /^((0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))[-]?[1-9]\d{6,7}))$/;
        if (filter.test(tel)) return true;
        else return false;
    }


    $("#form1").submit(function () {
        var phone = $("#dzphone").val();
        var email = $("#mail").val();
        if ($("#dzname").val() == '') {
            alert("联系人不能为空！");
            $('#dzname').focus();
            return false;
        }
        if (!(/^1[358]\d{9}$/gi).test($("#dzphone").val())) {
            alert("手机号码格式不正确！");
            $("#dzphone").focus();
            return false;
        }

        if (!(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test($("#dzemail").val())) {
           alert("请输入正确的邮箱");
            $("#dzemail").focus();
            return false;
        }

//        if ($("#dzemail").val() == '') {
//            alert("邮箱不能为空！");
//            $('#dzemail').focus();
//            return false;
//        }
//        if ($("#dzaddress").val() == '') {
//            alert("配送地址不能为空！");
//            $('#dzaddress').focus();
//            return false;
//        }


        $.ajax({
            type: "get",
            dataType: "text",
            url: "/ashx/Feedback.ashx",
            data: $("#form1").serialize(),
            success: function (data, textStatus) {

                if (data == 0) {
                    alert("添加成功!");
                    window.location.href = "/custom/index.html";
                }
                else {
                    alert("添加失败，请刷新页面后重试!");
                }
            },
            error: function () {
                alert("添加失败!");
            }
        })
        return false;
    })
})