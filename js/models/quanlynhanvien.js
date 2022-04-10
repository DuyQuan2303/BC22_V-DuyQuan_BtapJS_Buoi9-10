function Danhsachnhanvien() {
  this.arr = [];

  // thêm nhân viên
  this.themNV = function (nv) {
    this.arr.push(nv);
  };
  // Tìm vị trí nhân viên
  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  // Xoa nhan vien
  this.xoaNV = function (taiKhoan) {
    
    var index = this.timViTriNV(taiKhoan);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

    // Sửa nhân viên
    this.suaNV = function (taiKhoan) {
      var index = this.timViTriNV(taiKhoan);
  
      if (index !== -1) {
       
        var nhanVien = this.arr[index];
        return nhanVien;
      }
      return null;
    };
     // Cập nhật nhân viên
  this.capNhatNV = function (nhanVien) {
    var index = this.timViTriNV(nhanVien.taiKhoan);

    if (index !== -1) {
      this.arr[index] = nhanVien;
      return nhanVien;
    }
    return null;
  };
  // Tim kiem NV
  this.timKiemNV = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.tenNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        mangTimKiem.push(nhanVien);
      }
    }
    return mangTimKiem;
  };

}

