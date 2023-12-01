var item = prompt('masukan nama makanan / minuman : \n (cth : nasi, susu, daging, burger, softdrink)')

// switch (item) {
//     case 'nasi':
//         alert('makanan / minuman SEHAT!!')
//         break;
//     case 'susu':
//         alert('makanan / minuman SEHAT!!')
//         break;
//     case 'daging':
//         alert('makanan / minuman SEHAT!!')
//         break;
//     case 'burger':
//         alert('makanan / minuman tidak SEHAT!!')
//         break;
//     case 'softdrink':
//         alert('makanan / minuman tidak SEHAT!!')
//         break;

//     default:
//         alert('bukan makanan / minuman')
//         break;
// }
switch (item) {
    case 'nasi':
    case 'susu':
    case 'daging':
        alert('makanan / minuman SEHAT!!')
        break;
    case 'burger':
    case 'softdrink':
        alert('makanan / minuman tidak SEHAT!!')
        break;
    default:
        alert('bukan makanan / minuman')
        break;
}