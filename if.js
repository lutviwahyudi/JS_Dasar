var noAngkot = 1
var angkotBeroperasi = 6
var jmlAngkot = 10

for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    
    if (noAngkot <= angkotBeroperasi) {
        
        console.log('angkot nomer' + noAngkot + 'sedang beroperasi dengan baik')
    }
    else if (noAngkot === 8) {
        console.log('angkot nomer' + noAngkot + 'sedang lembur')
    }
    else{
        console.log('angkot nomer' + noAngkot + 'sedang tidak beroperasi')
    }
    
}