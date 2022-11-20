
const app = new Vue({
    el: '#app',
    data: {
        userSearch: ''
    },
    methods: {
        fetchProducts(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        
    },
    mounted() {
        
    },
})







// const cartLinkEl = document.querySelector('.cart-link')
// const basketEl = document.querySelector('.basket')
// const buttonEl = document.querySelector('.cards')
// const totalPriceEl = basketEl.querySelector('.basketTotalValue')
// const counterProdEl = document.querySelector('.circle-red')
// const basketTotalEl = document.querySelector('.basketTotal')
// cartLinkEl.addEventListener('mouseover', event => {
//     basketEl.classList.remove('hidden')
//     if(event.target.closest('.basket')){
//         event.preventDefault()
//     }
// })
// cartLinkEl.addEventListener('mouseout', event => {
//     basketEl.classList.add('hidden')
// })
// cartLinkEl.addEventListener('click', event => {
//     if(event.target.closest('.basket')){
//         event.preventDefault()
//     }
// })
// buttonEl.addEventListener('click', event => {
//     if(!event.target.closest('.buy-button')){
//         return
//     }
//     event.preventDefault()
//     const cardEl = event.target.closest('.card')
//     const id = +cardEl.dataset.id
//     const name = cardEl.dataset.name
//     const price = +cardEl.dataset.price
//     addToCart(id, name, price)
// })
// const basket = {

// }


// function addToCart(id, name, price){
//     if(!(id in basket)){
//         basket[id] = {id, name, price, count: 0}
//     }
//     basket[id].count++
    
//     counterProdEl.textContent = totalCount()
//     totalPriceEl.textContent = totalPrice().toFixed(2)
//     const basketRowEl = basketEl.querySelector(`.basketRow[data-productId="${id}"]`)
//     if(!basketRowEl){
//         renderProduct(id)
//         return
//     }
//     basketRowEl.querySelector('.productCount').textContent = basket[id].count
//     basketRowEl.querySelector('.productTotalRow').textContent = basket[id].count * basket[id].price
// }
// function totalCount(){
//     return Object.values(basket).reduce((acc, product) => acc + product.count, 0)
// }
// function totalPrice(){
//     return Object.values(basket).reduce((acc, product) => acc + product.count * product.price, 0)
// }
// function renderProduct(id){
//     const row = `
//     <div class="basketRow" data-productId="${id}">
//         <div>${basket[id].name}</div>
//         <div>
//             <span class="productCount">${basket[id].count}</span> шт.
//         </div>
//         <div>$${basket[id].price}</div>
//         <div>
//             $<span class="productTotalRow">${basket[id].price * basket[id].count}</span>
//         </div>
//     </div>`
//     basketTotalEl.insertAdjacentHTML('beforebegin', row)
// }