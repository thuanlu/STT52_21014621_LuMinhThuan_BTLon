$(document).ready(function () {
    $("#tai_khoan, #mat_khau, #nhap_lai_mat_khau").val("");

    //kiem tra ten dang nhap: so đien thoai hoac email
    var taiKhoan = $("#tai_khoan");
    var tbTaiKhoan = $("#tb_tai_khoan");

    var icon_check_yes = $("#icon_check_yes");
    var icon_check_no = $("#icon_check_no");

    icon_check_yes.css("display", "none");
    icon_check_no.css("display", "none");
    function checkDangNhap() {
        var inputEmail = /^[a-z]{1}\w{1,}@gmail\.com$/;
        var inputSDT = /^0[2-9]{1}\d{8}$/;

        if (taiKhoan.val() == "") {
            tbTaiKhoan.html("Vui lòng nhập dữ liệu vào");
            icon_check_yes.css("display", "none");
            icon_check_no.css("display", "block");
            icon_check_no.css("color", "red");
            return false;
        }

        if (!inputEmail.test(taiKhoan.val()) && !inputSDT.test(taiKhoan.val())) {
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

    //kiem tra mat khau
    var matKhau = $("#mat_khau");
    var tbMatKhau = $("#tb_mat_khau");
    var icon_check_yes_mk = $("#icon_check_yes_mk");
    var icon_check_no_mk = $("#icon_check_no_mk");

    icon_check_yes_mk.css("display", "none");
    icon_check_no_mk.css("display", "none");
    function checkMatKhau() {
        var inputMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
        //mật khẩu phải có ít nhất 1 chữ Hoa, 1 chữ thường 1 số, 1 kí tự đặc biệt và độ dài 8 kí tự trở lên
        if (matKhau.val() == "") {
            tbMatKhau.html("Vui lòng nhập mật khẩu vào");
            icon_check_yes_mk.css("display", "none");
            icon_check_no_mk.css("display", "block");
            icon_check_no_mk.css("color", "red");
            return false;
        }
        if (!inputMatKhau.test(matKhau.val())) {
            tbMatKhau.html("Mật khẩu không thỏa yêu cầu!");
            icon_check_yes_mk.css("display", "none");
            icon_check_no_mk.css("display", "block");
            icon_check_no_mk.css("color", "red");
            return false;
        }

        icon_check_no_mk.css("display", "none");
        icon_check_yes_mk.css("display", "block");
        icon_check_yes_mk.css("color", "green");
        tbMatKhau.html(" ");
        return true;
    }
    matKhau.blur(checkMatKhau);

    //kiem tra mat khau nhap lai
    var checkMK = $("#nhap_lai_mat_khau");
    var tbCheckMK = $("#tb_check_mk");
    var iconCheckLaiMK_Yes = $("#icon_check_lai_mk_yes");
    var iconCheckLaiMK_No = $("#icon_check_lai_mk_no");

    iconCheckLaiMK_Yes.css("display", "none");
    iconCheckLaiMK_No.css("display", "none");

    function checkLaiMK() {
        if (checkMK.val() == "") {
            tbCheckMK.html("Vui lòng nhập lại mật khẩu");
            iconCheckLaiMK_Yes.css("display", "none");
            iconCheckLaiMK_No.css("display", "block");
            iconCheckLaiMK_No.css("color", "red");
            return false;
        }

        if (matKhau.val() == checkMK.val()) {
            iconCheckLaiMK_No.css("display", "none");
            iconCheckLaiMK_Yes.css("display", "block");
            iconCheckLaiMK_Yes.css("color", "green");
            tbCheckMK.html(" ");
            return true;
        }
        else {
            tbCheckMK.html("Mật khẩu nhập lại không chính xác");
            iconCheckLaiMK_Yes.css("display", "none");
            iconCheckLaiMK_No.css("display", "block");
            iconCheckLaiMK_No.css("color", "red");
            return false;
        }
    }
    checkMK.blur(checkLaiMK);

    //Kiểm tra họ tên
    var hoTen = $("#hoTen");
    var tbHoTen = $("#tb_ho_ten");
    var inputHoTen = /^([A-Z]{1}[a-z]{0,6}(\s([A-Z]{1}[a-z]{0,6})){0,6})$/;
    var icon_check_yes_4 = $("#icon_check_yes4");
    var icon_check_no_4 = $("#icon_check_no4");

    icon_check_yes_4.css("display", "none");
    icon_check_no_4.css("display", "none");
    function checkHoTen() {
        if (hoTen.val() == "") {
            tbHoTen.html("Vui lòng nhập họ tên vào");
            icon_check_yes_4.css("display", "none");
            icon_check_no_4.css("display", "block");
            icon_check_no_4.css("color", "red");
            return false;
        }
        if (!inputHoTen.test(hoTen.val())) {
            tbHoTen.html("Vui lòng nhập đúng họ tên vào");
            icon_check_yes_4.css("display", "none");
            icon_check_no_4.css("display", "block");
            icon_check_no_4.css("color", "red");
            return false;
        }
        tbHoTen.html("");
        icon_check_no_4.css("display", "none");
        icon_check_yes_4.css("display", "block");
        icon_check_yes_4.css("color", "green");
        return true;
    }
    hoTen.blur(checkHoTen);

    //Kiểm tra ngày sinh
    // var ngaySinh = $("#ngaySinh");
    // var tbNgaySinh = $("#tb_ngay_sinh");
    // var icon_check_yes_5 = $("#icon_check_yes5");
    // var icon_check_no_5 = $("#icon_check_no5");

    // icon_check_yes_5.css("display", "none");
    // icon_check_no_5.css("display", "none");
    // function checkNgaySinh() {
    //     if (ngaySinh.val() == "") {
    //         tbNgaySinh.html("Vui lòng chọn ngày sinh");
    //         icon_check_yes_5.css("display", "none");
    //         icon_check_no_5.css("display", "block");
    //         icon_check_no_5.css("color", "red");
    //         return false;
    //     }
    //     var day = new Date(ngaySinh.val());
    //     var today = new Date();
    //     var age = today.getFullYear() - day.getFullYear();
    //     var month = today.getMonth() - day.getMonth();
    //     if (month < 0 || (month == 0 && today.getDate() < day.getDate())) {
    //         age--;
    //     }
    //     if (age < 16) {
    //         tbNgaySinh.html("Bạn chưa đủ 16 tuổi");
    //         icon_check_yes_5.css("display", "none");
    //         icon_check_no_5.css("display", "block");
    //         icon_check_no_5.css("color", "red");
    //         return false;
    //     }
    //     tbNgaySinh.html("");
    //     icon_check_no_5.css("display", "none");
    //     icon_check_yes_5.css("display", "block");
    //     icon_check_yes_5.css("color", "green");
    //     return true;
    // }
    // ngaySinh.blur(checkNgaySinh);

    //Kiểm tra địa chỉ
    var diaChi = $("#diaChi");
    var tbDiaChi = $("#tb_dia_chi");
    var icon_check_yes_5 = $("#icon_check_yes5");
    var icon_check_no_5 = $("#icon_check_no5");
    var inputDiaChi = /^[A-Z0-9]+[/a-z0-9]{0,}(\s([A-Z0-9]{1}[a-z0-9]{0,}))*$/;

    icon_check_yes_5.css("display", "none");
    icon_check_no_5.css("display", "none");
    function checkDiaChi() {
        if (diaChi.val() == "") {
            tbDiaChi.html("Vui lòng nhập địa chỉ vào");
            icon_check_yes_5.css("display", "none");
            icon_check_no_5.css("display", "block");
            icon_check_no_5.css("color", "red");
            return false;
        }
        if (!inputDiaChi.test(diaChi.val())) {
            tbDiaChi.html("Vui lòng nhập đúng địa chỉ");
            icon_check_yes_5.css("display", "none");
            icon_check_no_5.css("display", "block");
            icon_check_no_5.css("color", "red");
            return false;
        }
        tbDiaChi.html("");
        icon_check_no_5.css("display", "none");
        icon_check_yes_5.css("display", "block");
        icon_check_yes_5.css("color", "green");
        return true;
    }
    diaChi.blur(checkDiaChi);

    //Kiểm tra rỗng
    function checkEmpty(){
        var TaiKhoan = $("#tai_khoan").val();
        var MatKhau = $("#mat_khau").val();
        var CheckMK = $("#nhap_lai_mat_khau").val();
        var HoTen = $("#hoTen").val();
        var DiaChi = $("#diaChi").val();
        var gioiTinh = $('[name="gt"]:radio:checked').val();
        return TaiKhoan !== "" && MatKhau !== "" && CheckMK !== ""
                && HoTen != "" && DiaChi !== "" && gioiTinh !== undefined;
    }
    // checkEmpty();

    //thay doi mau nen nut submit khi dư lieu khong rong
    function cssBackGround() {
        if (checkEmpty()) {
            $("#submit_dang_ky").css("background-color", "gray");
            $("#submit_dang_ky").css("color", "black");
        }
        else {
            $("#submit_dang_ky").css("background-color", "");
        }
    }
    // cssBackGround();

    $("#tai_khoan, #mat_khau, #nhap_lai_mat_khau, #hoTen, #ngaySinh, #diaChi, [name='gt']").on("input change", function () {
        cssBackGround();
    });

    $("#submit_dang_ky").click(function (event) {
        var gioiTinh = $('[name="gt"]:radio:checked').val();
        event.preventDefault(); //loai bo hanh vi mac dinh: khi nhan vao subit thi load trang
        var ThongTinTaiKhoan = $("#tai_khoan").val();
        var ThongTinMatKhau = $("#mat_khau").val();
        var CheckMK = $("#nhap_lai_mat_khau").val();
        if (checkEmpty()) {
            alert("Chúc mừng bạn đã đăng ký tài khoản thành công!\n"
                + "Thông tin bạn đã đăng ký:\n"
                + "Tài khoản: " + ThongTinTaiKhoan + "\n"
                + "Mật khẩu: " + ThongTinMatKhau + "\n"
                + "Họ tên: " + hoTen.val() + "\n"
                + "Địa chỉ: " + diaChi.val() + "\n"
                + "Giới tinh: " + gioiTinh);
            window.location.reload(); //load lai trang khi du lieu nhap dung
            localStorage.setItem(ThongTinTaiKhoan, ThongTinMatKhau);
            return true;
        }
    });
});