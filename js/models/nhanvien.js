function Nhanvien(
  _taiKhoan,
  _tenNV,
  _emailNV,
  _passNV,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.tenNV = _tenNV;
  this.emailNV = _emailNV;
  this.passNV = _passNV;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNhanVien = ""


//   Tinh tong luong
  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCoBan * 3 * this.gioLam;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = this.luongCoBan * 2 * this.gioLam;
    }else if (this.chucVu === "Nhân viên"){
        this.tongLuong = this.luongCoBan * this.gioLam
    }
  };
// Tinh loai nhan vien 
this.timLoaiNV = function (){
    if (this.gioLam >=192){
        this.loaiNhanVien = "Nhân viên xuất sắc";
    }else if(this.gioLam >= 176 && this.gioLam < 192){
        this.loaiNhanVien = "nhân viên giỏi";
    }else if(this.gioLam >= 160 && this.gioLam < 176){
        this.loaiNhanVien = "nhân viên khá";
    }else if( this.gioLam <160){
        this.loaiNhanVien = "nhân viên trung bình";
    }
}
}
