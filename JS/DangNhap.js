$(document).ready(function(){
    function checkEmpty(){
        var txtTaiKhoan = $("#tai_khoan").val();
        var txtMatKhau = $("#mat_khau").val();

        return txtTaiKhoan !== "" && txtMatKhau !== "";
    }

    function cssBackGround(){ //thay đôi màu nền nút đăng nhập 
        if (checkEmpty()) { // nếu thông tin không rỗng thì nút đăng nhập đổi màu, ngược lại thì không đổi màu
            $("#submit_dang_nhap").css("background-color", "gray");
            $("#submit_dang_nhap").css("color", "black");
        }
        else {
            $("#submit_dang_nhap").css("background-color", "");
        }
    }
    cssBackGround();

    $("#tai_khoan, #mat_khau").on("input", function () { //khi nhập tài khoản và mật khẩu vào ô input 
                                                        //thì hàm cssBackGround() sẽ được thực hiện
        cssBackGround();
    });

    //kiểm tra thông tin đăng nhập
    var taiKhoan = $("#tai_khoan");
    var tbTaiKhoan = $("#tb_tai_khoan");
     
    var icon_check_yes = $("#icon_check_yes");
    var icon_check_no = $("#icon_check_no");

    icon_check_yes.css("display", "none");
    icon_check_no.css("display", "none");
    function checkDangNhap(){ 
       var inputEmail = /^[a-z]{1}\w{1,}@gmail\.com$/;
       var inputSDT = /^0[2-9]{1}\d{8}$/;

       if (taiKhoan.val() == ""){
           tbTaiKhoan.html("Vui lòng nhập dữ liệu vào");
           icon_check_yes.css("display", "none");
           icon_check_no.css("display", "block");
           icon_check_no.css("color", "red");
           return false;
       }

       if (!inputEmail.test(taiKhoan.val()) && !inputSDT.test(taiKhoan.val())){
           tbTaiKhoan.html("Vui lòng nhập email hoặc số điện thoại");
           icon_check_yes.css("display", "none");
           icon_check_no.css("display", "block");
           icon_check_no.css("color", "red");
           return false;
       }
       icon_check_no.css("display", "none");
       icon_check_yes.css("display", "block");
       icon_check_yes.css("color", "green");
       tbTaiKhoan.html(" ");
       return true;
   }
   taiKhoan.blur(checkDangNhap);

   //kiểm tra thông tin mật khẩu
   var matKhau = $("#mat_khau");
   var tbMatKhau = $("#tb_mat_khau");
   var icon_check_yes_mk = $("#icon_check_yes_mk");
   var icon_check_no_mk = $("#icon_check_no_mk");

   icon_check_yes_mk.css("display", "none");
   icon_check_no_mk.css("display", "none");
   function checkMatKhau(){ 
       if (matKhau.val() == ""){
           tbMatKhau.html("Vui lòng nhập mật khẩu vào");
           icon_check_yes_mk.css("display", "none");
           icon_check_no_mk.css("display", "block");
           icon_check_no_mk.css("color", "red");
           return false;
       }

       icon_check_no_mk.css("display", "none");
       icon_check_yes_mk.css("display", "block");
       icon_check_yes_mk.css("color", "green");
       tbMatKhau.html("");
       return true;
   }
   matKhau.blur(checkMatKhau);

    $("#submit_dang_nhap").click(function(event) {
        event.preventDefault(); 

        var taiKhoan1 = $("#tai_khoan").val();
        var matKhau1 = $("#mat_khau").val();

        // Kiểm tra thông tin đăng nhập từ localStorage
        var storedPassword = localStorage.getItem(taiKhoan1);

        if (storedPassword == matKhau1) {
            alert('Đăng nhập thành công!');
            // Chuyển hướng đến trang chính sau khi đăng nhập thành công
            window.location.href = '../HTML_HOME/home.html';
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    });


});