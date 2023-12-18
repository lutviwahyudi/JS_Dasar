// const close = document.querySelector('.close')
// const card = document.querySelector('.card')

// close.addEventListener('click', function () {
//     card.style.display = 'none'
// })

//dom traversal
// const close = document.querySelectorAll('.close')

// close.forEach(function (close) {
//     close.addEventListener('click', function(event) {
//         event.target.parentElement.style.display = 'none'
//         event.stopPropagation()
//     })
// })

// const card = document.querySelectorAll('.card')
// card.forEach(function(card) {
//     card.addEventListener('click', function(event) {
//         alert('halo index ke - ' + card)
//     })
// })


//melakukan event bumbling pada container
const container = document.querySelector('.container')
container.addEventListener('click', function () {
   if (event.target.className == 'close') {
    event.target.parentElement.style.display = 'none'
   } 
})