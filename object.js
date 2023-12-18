// var mhs1 = {
//     nama : "lutvi",
//     nim : '190170110',
//     email : 'lutvi.190170110@gmail.com',
//     jurusan : 'Teknik Informatika'
// }

// var mhs2 = {
//     nama : "randi",
//     nim : '190170120',
//     email : 'randi.190170110@gmail.com',
//     jurusan : 'Teknik Informatika'
// }

//function deklarasi
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//     var mhs = {}
//     mhs.nama = nama
//     mhs.nim = nim
//     mhs.email = email
//     mhs.jurusan = jurusan
//     return mhs
// }

// var mhs3 = buatObjectMahasiswa('lutvi', '190170110', 'lutvi.190170110@gmail.com', 'teknik informatika')

//constructor
function mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama
    this.nim = nim
    this.email = email
    this.jurusan = jurusan
}

var mhs4 = new mahasiswa('lutvi', '190170110', 'lutvi@gmail.com', 'teknik informatika')