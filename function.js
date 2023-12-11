// jenis 1
// function jumlahTotalDuaKubus() {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
    
// }

// console.log(jumlahTotalDuaKubus(8, 3));
// console.log(jumlahTotalDuaKubus(10, 15));

//jenis 2
// function tambah(a, b) {
//     return a + b;
    
// }

// var a = parseInt(prompt("masukan nilai 1 : "))
// var b = parseInt(prompt("masukan nilai 2 : "))
// console.log(tambah(a*2, b*2));

// jenis 3
// function tambah(a,b) {
//     return a + b
// }

// function kali(a,b) {
//     return a * b    
// }

// var hasil = kali(tambah(2,3), kali(2,3))
// console.log(hasil) 

//jenis 4
function tambah() {

    var hasil = 0
    for (var i = 0; i < arguments.length;  i++ ){
         hasil += arguments[i]
    }      
    return hasil
}

var hasil = tambah(1,2,10)
console.log(hasil)