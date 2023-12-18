//DOM Selection
//document.getElementById()

// const judul = document.getElementById('judul')
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey'
// judul.innerHTML = 'Lutvi wahyudi'

//document.ElementByTagName() -> mengebalikan hmtlcolection
// const p = document.getElementsByTagName('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'green'
    
// }

//document.ElementByClassName()
// const p1 = document.getElementsByClassName('p1')

//document.querySelector()
// const p4 = document.querySelector('#b p')
// p4.style.color = 'red'
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'red'

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>lutvi wahyudi</em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'hello world'

// // const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('name', 'lutvi')

//element.classList.add()
//element.classList.remove()
//element.classList.toggle()
//element.classList.contains()
//element.classList.item()
//element.classList.replace()

//DOM manipulation
//menambahkan element di akhir 
// const pBaru = document.createElement('p')
// const teksPBaru = document.createTextNode('paragraf baru')
// //simpan tulisan kedalam paragraf
// pBaru.appendChild(teksPBaru)
// //simpan p baru diakhir section a
// const sectionA = document.getElementById('a')
// sectionA.appendChild(pBaru)

// //menambahkan element di pertengahan atau penyisipan
// const liBaru = document.createElement('li')
// const teksLiBaru = document.createTextNode('Item baru')

// liBaru.appendChild(teksLiBaru)

// const ul = document.querySelector('section#b ul')
// const li2 = ul.querySelector('li:nth-child(2)')

// ul.insertBefore(liBaru, li2)


//event handler 

const tUW = document.getElementById('warna')
tUW.onclick = function () {
    
    // document.body.style.backgroundColor = 'lightblue'
    document.body.classList.toggle('biru-muda')
}

const tAcakW = document.createElement('button')
const textAW = document.createTextNode('acak warna')
tAcakW.appendChild(textAW)
tAcakW.setAttribute('type', 'button')
tUW.after(tAcakW)

//membuat nilai warna random
tAcakW.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)

    //apa yang mau diubah kalau tombol diklik
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})


const sMerah = document.querySelector('input[name=merah]')
const sHijau = document.querySelector('input[name=hijau]')
const sBiru = document.querySelector('input[name=biru]')

sMerah.addEventListener('input', function () {
    //kalau di geser jalankan perintah dibawah ini
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})
sHijau.addEventListener('input', function () {
    //kalau di geser jalankan perintah dibawah ini
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})
sBiru.addEventListener('input', function () {
    //kalau di geser jalankan perintah dibawah ini
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})


