function NguoiDungService(){

    this.layDanhSachNguoiDung = function(){
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            type: 'GET',
        })
    };

    //Them nguoi dung
    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
            type: 'POST',
            data: nguoiDung
        })
        .done(function(data){
            console.log(data);
            if(data === "tai khoan da ton tai !"){
                alert(data)
            } else {
                location.reload();
            }
        })
        .fail(function(err){
            console.log(err);
        })
    }

    //Xoa nguoi dung
    this.xoaNguoiDung = function(taiKhoan){
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: 'DELETE',
            data: nguoiDung,
        })
        .done(function(data){
            console.log(data);
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.layThongTinNguoiDung = function(taiKhoan){
        /**
            1. Lay DSND tu LocalStogate
            2. Duyet mang bang find => return ve nguoi dung tim thay
         */
        localStorage.getItem('DSND').findIndex(function(item){
            return item.taiKhoan === taiKhoan;
        })
        
    }

    this.capNhatNguoiDung = function(nguoiDung){
        var user = JSON.stringify(nguoiDung);
        $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatNguoiDung',
            type: 'PUT',
            data: user,
            contentType: 'application/json',
            dataType: 'json'
        })
        .done(function(data){
            console.log(data);
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }
}
