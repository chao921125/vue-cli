function codeimg11() {
    document.getElementById("yanzhengma_").src = "/Tools/VerifyCodeImage.ashx?r=" + Math.random();
}
$(function () {


    $('#fmSubmit').submit(function () {

        var name = $('#txtName').val();
        var pwd = $('#txtPwd').val();
        var code = $("#txtCode").val();
        if ($.trim(name) == '') {
            alert('请输入用户名！');
            $('#txtName').focus();
            return false;
        }
        if (name.length < 3) {
            alert('用户名不能少于3位数')
            $('#txtName').focus();
            return false;
        }
        //标准的
        if ($.trim($('#txtPwd').val()) == '') {
            alert('请输入密码！');
            $('#txtPwd').focus();
            return false;
        }
        if ($.trim($('#txtCode').val()) == '') {
            alert('请输入验证码！');
            $('#txtCode').focus();
            return false;
        }
        $.ajax({
            type: 'post',
            url: '/ashx/Login.ashx',
            data: { UserName: name, PassWord: pwd, TxtCode: code },
            //                data: $('#fmLogin').serialize(),
            success: function (data) {
                alert(data);
                if (data == "登录成功") {
                    if (window.location.pathname == "/login.html") {
                        window.location = "/index.html";
                    } else {
                        window.location.reload();
                    }
                    // window.location = "/userinfo.html";
                } else {
                    codeimg11();
                }
                //  location.reload();
            },
            error: function () {
                alert("登录失败!");
            }
        });

        return false;
    });
});
