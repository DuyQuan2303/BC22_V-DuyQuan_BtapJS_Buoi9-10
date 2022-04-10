// tạo đối tượng dsnv từ lớp đối tượng dsnv
var dsnv = new Danhsachnhanvien();
var validation = new Validation();
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function clearInput() {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;

  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value = "";
  getEle("gioLam").value = "";
}

function taoBang(arr) {
  var content = "";
  if (arr.length < -1) {
  }
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    content += `
          <tr>
              <td>${nhanVien.taiKhoan}</td>
              <td>${nhanVien.tenNV}</td>
              <td>${nhanVien.emailNV}</td>
              <td>${nhanVien.ngayLam}</td>
              <td>${nhanVien.chucVu}</td>
              <td>${nhanVien.tongLuong}</td>
              <td>${nhanVien.loaiNhanVien}</td>
              <td>
            <button class="btn btn-info" data-toggle="modal"
            data-target="#myModal" onclick="suaNV('${nhanVien.taiKhoan}')">
            <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" onclick="xoaNV('${nhanVien.taiKhoan}')">
            <i class="fa fa-trash"></i>
            </button>
            </td>

             
              
          </tr>
          `;
  }
  getEle("tableDanhSach").innerHTML = content;

  setLocalStorage();
}

function layThongTinNhanVien() {
  var _taiKhoan = getEle("tknv").value;
  var _tenNV = getEle("name").value;
  var _emailNV = getEle("email").value;
  var _passNV = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCoBan = getEle("luongCB").value * 1;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value * 1;

  // Check validation
  // Set flag
  var isValid = true;
  // Validation taiKhoan NV
  isValid &=
    validation.kiemTraRong(
      _taiKhoan,
      "tbTKNV",
      " tên tài khoản không được trống"
    ) &&
    validation.kiemTraDoDaiKyTu(
      _taiKhoan,
      "tbTKNV",
      "tài khoản có độ dài 4-6 ký tự",
      4,
      6
    );
  // Validation TenNv
  isValid &=
    validation.kiemTraRong(
      _tenNV,
      "tbTen",
      "ten nhân viên không được trống  "
    ) &&
    validation.kiemTraChuoiKyTu(_tenNV, "tbTen", "tên nhân viên phải là chữ ");
  // Validation emailNV
  isValid &=
    validation.kiemTraRong(_emailNV, "tbEmail", "email không được trống") &&
    validation.kiemTraEmail(_emailNV, "tbEmail", "email không đúng định dạng");
  //Validation pass
  isValid &=
    validation.kiemTraRong(_passNV, "tbMatKhau", "mật khẩu không được rỗng") &&
    validation.kiemTraPass(
      _passNV,
      "tbMatKhau",
      "mật khẩu từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt "
    );

  //Validation ngay lam
  isValid &= validation.kiemTraRong(
    _ngayLam,
    "tbNgay",
    "vui lòng điền ngày làm "
  );
  //validation luong
  isValid &=
    validation.kiemTraRong(
      _luongCoBan,
      "tbLuongCB",
      "vui lòng nhập tiền lương cơ bản"
    ) &&
    validation.kiemTraLuong(
      _luongCoBan,
      "tbLuongCB",
      "lương phải lớn hơn 1 000 000 và bé hơn 20 000 000"
    );
  // validation chuc vu
  isValid &= validation.kiemTraRong(
    _chucVu,
    "tbChucVu",
    "vui lòng chọn chức vụ của nhân viên "
  );
  //check gioLam
  isValid &=
    validation.kiemTraRong(_gioLam, "tbGiolam", "vui lòng nhập giờ làm ") &&
    validation.kiemTraGioLam(
      _gioLam,
      "tbGiolam",
      "giờ làm phải lớn hơn 80 và nhỏ hơn 200 "
    );
  //check form
  if (!isValid) return null;

  var nhanVien = new Nhanvien(
    _taiKhoan,
    _tenNV,
    _emailNV,
    _passNV,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  nhanVien.tinhTongLuong();
  nhanVien.timLoaiNV();
  return nhanVien;
}

getEle("btnThemNV").addEventListener("click", function () {
  // var content = "";
  var nhanVien = layThongTinNhanVien();
if(nhanVien){
  dsnv.themNV(nhanVien);

  taoBang(dsnv.arr);

  setLocalStorage();
  getLocalStorage();
}
});

//Xoa nhan vien
function xoaNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);

  taoBang(dsnv.arr);
  setLocalStorage();
  getLocalStorage();
}
// sua NV
function suaNV(taiKhoan) {
  var nhanVien = dsnv.suaNV(taiKhoan);
  console.log(nhanVien);

  // show
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;

  getEle("name").value = nhanVien.tenNV;
  getEle("email").value = nhanVien.emailNV;
  getEle("password").value = nhanVien.passNV;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCoBan;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;

  // getEle("btnCapNhatNV").style.display = "inline-block";
  // noen

  // clearInput();
  // => sau khi làm xong hàm này anh nhớ bỏ clear input
  //nữa là ok nhé
  setLocalStorage();
  getLocalStorage();
}

// Cap nhat nhan vien
getEle("btnCapNhat").addEventListener("click", function () {
  var nhanVien = layThongTinNhanVien();

  dsnv.capNhatNV(nhanVien);
  clearInput();

  setLocalStorage();
  getLocalStorage();
});

//Tim kiem nhan vien
getEle("searchName").addEventListener("keyup", function () {
  var keyWord = getEle("searchName").value;
  // console.log(keyWord);
  var mangTimKiem = dsnv.timKiemNV(keyWord);
  taoBang(mangTimKiem);
});

function setLocalStorage() {
  // chuyển data từ json sang string
  var dataString = JSON.stringify(dsnv.arr);

  // lưu về storage
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
  var data = localStorage.getItem("DSNV");
  // chuyen tu string ve json
  if (data) {
    var dataJSON = JSON.parse(data);
    // console.log(dataJSON);

    dsnv.arr = dataJSON;
    console.log(dsnv.arr);
    taoBang(dsnv.arr);
  }
}
