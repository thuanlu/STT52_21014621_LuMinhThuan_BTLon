$(document).ready(function(){
    // var txtTinh = document.getElementById("tinh").value;
    // var address = "Hồ Chí Minh";
    $("#xacNhan").click(function(){
        var selectedOption = $("#tinh").children("option:selected").text();
        // var iconHTML = ' <i class="fa-solid fa-caret-down"></i>';
        $("#li_address").html("<br>" + selectedOption + "&nbsp");
        $("#li_address2").html("<br>" + selectedOption + "&nbsp");

        $("#tinh, #quan, #phuong").val("");
    })
    
})

