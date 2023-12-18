//membuat object angkot
function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    //ada penumpang yang naik
     this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }
}

var angkot1 = new Angkot('lutvi', ['kukusan', 'margonda'], [], 0)