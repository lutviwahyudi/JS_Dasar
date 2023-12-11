var penumpang = []

var tambahPenumpang = function (namaPenumpang, penumpang) {
    
    //jika angkot masih kosong, tambah penumpang
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang)
        return penumpang;

    }

    else{
        //jika angkot ada penumpang dan ada kursi yang kosong, maka tambah penumpang
        // dikursi itu
        for (var i = 0; i < penumpang.length; i++) {
            
            if (penumpang[i] == undefined) {

                penumpang[i] = namaPenumpang
                return penumpang
                
            }
            //jika nama penumpang yang naik sudah ada didalam angkot
            // maka berikan peringatan
            else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + " sudah ada diangkot")

                return namaPenumpang
            }
            // jika ada penumpang yang naik , penumpang akan duduk sesuai urutan
            else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang)
    
                return penumpang
            }
        }
    }

}

var hapusPenumpang = function(namaPenumpang) {
    //jika angkot kosong, tampilkan pesan angkot tidak ada penumpang
    if (penumpang.length == 0) {
        console.log("angkot belum ada penumpang")
        return penumpang;
    }
    else{
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined
    
            }
            else if(i == penumpang.length - 1){
                console.log(namaPenumpang + "tidak ada dalam angkot")
                return penumpang;
            }
        }
    }
    return penumpang;
}
