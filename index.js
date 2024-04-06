var array = [];
function themSo(){
    var newNumber = document.querySelector("#newNumber").value *1;
    array.push(newNumber)
    document.getElementById("result").innerText = array
}
function tinhTongSoDuong(){
    var tongSoDuong= 0;
    for(var i = 0; i< array.length;i++){
        if(array[i]>0){
            tongSoDuong += array[i] 
        }
    }
    document.querySelector('#result__1').innerText = `tổng số dương là: ${tongSoDuong}`
}
function demSoDuong(){
    var soDuong= 0;
    for(var i = 0; i< array.length;i++){
        if(array[i]>0){
            soDuong++;
        }
    }
    document.querySelector('#result__2').innerText = `tổng số dương xuất hiện trong mảng là: ${soDuong}`
}
function timSoNhoNhat(){
    var soNhoNhat = array[0];
    for(var i = 0; i< array.length;i++){
        if(array[i]<soNhoNhat){
            soNhoNhat = array[i];
        }
    }
    document.querySelector('#result__3').innerText = `Số nhỏ nhất trong mảng là:  ${soNhoNhat}`
}
function timSoDuongNhoNhat(){
    var cacSoDuong = [];
    
    array.forEach(function(value){
       if(value>0){
        cacSoDuong.push(value)
       }
    })
    var soDuongNhoNhat = Math.min(...cacSoDuong)
    if(soDuongNhoNhat=="Infinity"){
        document.getElementById('result__4').innerText = `hàm không có số dương`
    } else{
        document.getElementById('result__4').innerText = `vậy số dương cần tìm là : ${soDuongNhoNhat}`
    }
}
function timSoChanCuoiCung(){
    var cacSoChan = [];
    array.forEach(function(value){
        if((value%2)==0){
         cacSoChan.push(value)
        }
     })
     if(cacSoChan == []){
        document.getElementById('result__5').innerText = `Hàm không có số chẵn`
     } else{
        document.getElementById('result__5').innerText = `Số chẵn cuối cùng là: ${cacSoChan[cacSoChan.length-1]}`
     }
   
}
function doiCho(){
    var slot1 = document.querySelector('.cover__input__ex__6 #input__1').value*1;
    var slot2 = document.querySelector('.cover__input__ex__6 #input__2').value*1;
    var bienTrungGian =0;
    bienTrungGian = array[slot1-1];
    array[slot1-1] = array[slot2-1];
    array[slot2-1] = bienTrungGian;
    document.getElementById('result__6').innerText =` hàm mới là ${array}`
}
function sapXep(){
    var newArray = [];
    document.getElementById("result__7").innerText = newArray; 
}
function timSoNguyenToDauTien(){

    var newArray = array.filter(function(value){
        var count = 0;
        for(var i =0 ; i <= value;i++){
            if((value%i)==0){
                count++;
            }
        }
        if(count ==2){
           return value;
        }
    })
    document.getElementById('result__8').innerText = newArray[0];
}
function demSoNguyen(){
    var count = 0;
    array.forEach(function(value){
        if(Number.isInteger(value)){
            count++;
        }
    })
    document.getElementById('result__9').innerText = `có ${count} số nguyên trong mảng`
}
function soSanh(){
    soAm = 0;
    soDuong = 0;
    array.forEach(function(value){
        if(value>0){
            soDuong++
        }
        if(value<0){
            soAm++
        }
    })
    if(soAm>soDuong){
        document.getElementById('result__10').innerText = ` vậy số âm nhiều hơn số dương `
    }else if(soAm<soDuong){
        document.getElementById('result__10').innerText = `vậy số dương nhiều hơn số âm`
    } else{
        document.getElementById('result__10').innerText = ` số dương bằng số âm`
    }
}