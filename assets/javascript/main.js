

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal =document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer=document.querySelector('.js-modal-container')
function showbuyticket(){
    modal.classList.add('open')

}
function hidebuyticket(){
    modal.classList.remove('open')

}
for( const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showbuyticket )
}
modalClose.addEventListener('click',hidebuyticket)
modal.addEventListener('click',hidebuyticket )
modalContainer.addEventListener('click',function (event){
    event.stopPropagation()

})