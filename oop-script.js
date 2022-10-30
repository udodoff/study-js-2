class Pruductlist{
    constructor(container = '.goods-list'){
        this.container = container
        this.goods = []
        this._fetchProducts()
            .then(data => {
                this.goods = data
                this.render()
                console.log(this.goods);
            })
    }

    sumofproducts(){
        let sum = 0
        this.goods.forEach(product => {
            sum += product.price
        })
        return sum
    }

    _fetchProducts(){
        const info = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
        return fetch(info)
                .then(result => result.json())
                .catch(error => console.log(error))
    }

    render(){
        const block = document.querySelector(this.container)
        for(let product of this.goods){
            const item = new PruductItem(product)
            block.insertAdjacentHTML('beforeend', item.render())
        }
    }
}
class PruductItem{
    constructor(product, img = 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2148883473.jpg?w=740&t=st=1667023371~exp=1667023971~hmac=6cd8fdd7fe1103654b3c195acb84685d7a8287b84c499942f85a6da0b0bb9bd2'){
        this.title = product.product_name
        this.id = product.id_product
        this.price = product.price
        this.img = img
    }
    render(){
        return `<div class="goods-item">
                    <img class="item-photo" src="${this.img}">
                    <h3 class="heading">${this.title}</h3>
                    <p class="parag">$${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}
let list = new Pruductlist()


class Cart{
    constructor(basketContainer = '.basket'){
        this.basketContainer = basketContainer
        this.basketGoods = []
        this._fetchBasketProducts()
            .then(result => {
                this.basketGoods = result.contents
                this.render()
            })
    }
    _fetchBasketProducts(){
        const basketItems = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
        return fetch(basketItems)
                 .then(items => items.json())
                 .catch(error => console.log(error))
    }
    addGood(){

    }
    removeGood(){

    }
    changeGood(){

    }
    render(){
        const block = document.querySelector(this.basketContainer)
        this.basketGoods.forEach(item => {
            let basketPruduct = new CartProduct(item)
            block.insertAdjacentHTML("beforeend", basketPruduct.render())
        })
    }
}

class CartProduct{
    constructor(productBasket, img = 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2148883473.jpg?w=740&t=st=1667023371~exp=1667023971~hmac=6cd8fdd7fe1103654b3c195acb84685d7a8287b84c499942f85a6da0b0bb9bd2'){
        this.title = productBasket.product_name
        this.id = productBasket.id_product
        this.quantity = productBasket.quantity
        this.price = productBasket.price
        this.img = img
    }
    render(){
        return `<div class="basket-item">
                    <img class="item-basket-photo" src="${this.img}">
                    <div class="item-description">
                        <h3 class="basket-heading">${this.title}</h3>
                        <p class="basket-quantity">${this.quantity} шт</p>
                        <p class="basket-parag">$${this.price}</p>
                    </div>
                </div>`
    }
}
let cart = new Cart()
const cartBlockEl = document.querySelector('.basket')
console.log(cartBlockEl);
document.querySelector('.cart-button').addEventListener('click', event => {
    cartBlockEl.classList.toggle('none')
})