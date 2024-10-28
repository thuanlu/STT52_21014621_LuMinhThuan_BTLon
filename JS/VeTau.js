document.addEventListener("DOMContentLoaded", function() {
    // Tìm tất cả các nút "Chọn" trong phần "Vé Tàu Đề Xuất"
    const selectButtons = document.querySelectorAll(".select-ticket");

    // Duyệt qua tất cả các nút và thêm sự kiện click
    selectButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

            // Tìm phần tử "ticket-card" chứa nút được nhấn
            const ticketCard = button.closest(".ticket-card");

            // Lấy thông tin từ thuộc tính data của "ticket-card"
            const departure = ticketCard.getAttribute("data-departure");
            const destination = ticketCard.getAttribute("data-destination");
            const date = ticketCard.getAttribute("data-date");
            const time = ticketCard.getAttribute("data-time");

            // Điền thông tin vào form đặt vé
            document.getElementById('departure').value = departure;
            document.getElementById('destination').value = destination;
            document.getElementById('date').value = date;
            document.getElementById('time').value = time;
        });
    });

    // Xử lý form đặt vé tàu
    const form = document.querySelector(".ticket-booking-form form");
    const cartItems = [];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const departure = document.getElementById("departure").value.trim();
        const destination = document.getElementById("destination").value.trim();
        const date = document.getElementById("date").value;
        const returnTime = document.getElementById("time").value;
        const passenger = parseInt(document.getElementById("passenger").value);
        const seatClass = document.getElementById("class").value;

        let errorMessage = "";

        // Kiểm tra nơi đi và nơi đến
        if (departure === "") {
            errorMessage += "Nơi đi không được để trống.\n";
        }

        if (destination === "") {
            errorMessage += "Nơi đến không được để trống.\n";
        }

        if (departure && destination && departure === destination) {
            errorMessage += "Nơi đi và nơi đến không được trùng nhau.\n";
        }

        // Kiểm tra ngày đi
        if (date === "") {
            errorMessage += "Ngày đi không được để trống.\n";
        } else {
            const today = new Date();
            const selectedDate = new Date(date);
            const todayAtMidnight = new Date(today);
            todayAtMidnight.setHours(0, 0, 0, 0);

            if (selectedDate < todayAtMidnight) {
                errorMessage += "Ngày đi phải là ngày hiện tại hoặc trong tương lai.\n";
            }
        }

        // Kiểm tra số lượng hành khách
        if (isNaN(passenger) || passenger <= 0) {
            errorMessage += "Số lượng hành khách phải lớn hơn 0.\n";
        }

        // Hiển thị thông báo lỗi nếu có
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        // Hiển thị thông báo đặt vé thành công
        alert("Đặt vé thành công!");

        // Lưu thông tin vé đặt vào giỏ hàng
        const ticket = {
            departure,
            destination,
            date,
            returnTime,
            passenger,
            seatClass
        };

        cartItems.push(ticket);
        updateCart();
    });

    // Cập nhật giỏ hàng
    function updateCart() {
        const cartElement = document.getElementById("cart");
        cartElement.innerHTML = "";

        if (cartItems.length === 0) {
            cartElement.innerHTML = "<p>Giỏ hàng trống</p>";
            return;
        }

        const ul = document.createElement("ul");
        ul.className = "cart-items";

        cartItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.className = "cart-item";
            li.innerHTML = `
                <span>${item.departure} - ${item.destination} (${item.date})</span>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})"> Xóa</button>
            `;
            ul.appendChild(li);
        });

        cartElement.appendChild(ul);
    }

    // Xóa vé khỏi giỏ hàng
    window.removeFromCart = function(index) {
        cartItems.splice(index, 1);
        updateCart();
    };
});
