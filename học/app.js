let sanpham = JSON.parse(localStorage.getItem("sanpham")) || [];
let editIndex = -1;

// Hiển thị
function render() {
    let table = document.getElementById("table");
    table.innerHTML = "";

    sanpham.forEach((sp, index) => {
        table.innerHTML += `
        <tr>
            <td>${sp.ten}</td>
            <td>${sp.gia}</td>
            <td>${sp.soluong}</td>
            <td>
                <button onclick="edit(${index})">Sửa</button>
                <button onclick="del(${index})">Xóa</button>
            </td>
        </tr>`;
    });
}

// Thêm
function add() {
    let ten = document.getElementById("ten").value;
    let gia = document.getElementById("gia").value;
    let soluong = document.getElementById("soluong").value;

    if (!ten || !gia || !soluong) {
        alert("Nhập đầy đủ!");
        return;
    }

    sanpham.push({ ten, gia, soluong });

    save();
    clearInput();
    render();
}

// Xóa
function del(index) {
    sanpham.splice(index, 1);
    save();
    render();
}

// Sửa (đưa dữ liệu lên input)
function edit(index) {
    let sp = sanpham[index];

    document.getElementById("ten").value = sp.ten;
    document.getElementById("gia").value = sp.gia;
    document.getElementById("soluong").value = sp.soluong;

    editIndex = index;
}

// Cập nhật
function update() {
    if (editIndex === -1) {
        alert("Chọn sản phẩm để sửa!");
        return;
    }

    let ten = document.getElementById("ten").value;
    let gia = document.getElementById("gia").value;
    let soluong = document.getElementById("soluong").value;

    sanpham[editIndex] = { ten, gia, soluong };

    save();
    clearInput();
    render();

    editIndex = -1;
}

// Lưu
function save() {
    localStorage.setItem("sanpham", JSON.stringify(sanpham));
}

// Xóa input
function clearInput() {
    document.getElementById("ten").value = "";
    document.getElementById("gia").value = "";
    document.getElementById("soluong").value = "";
}

// Chạy
render();