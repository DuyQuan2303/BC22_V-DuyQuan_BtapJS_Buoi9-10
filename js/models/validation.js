function Validation() {
  this.kiemTraRong = function (value, errorID, mess) {
    if (value === "") {
      // Loi
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }

    //Dung
    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };

  this.kiemTraDoDaiKyTu = function (value, errorID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return false;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return true;
  };

  this.kiemTraChuoiKyTu = function (value, errorID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, errorID, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/;
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraPass = function (value, errorID, mess) {
    var letter =
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,10})";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraLuong = function (value, errorID, mess) {
    // var luong = 0;
    if (value >= 1000000 && value <= 20000000) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraGioLam= function(value, errorID, mess){
    if (value >= 80 && value <= 200) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  }
}
