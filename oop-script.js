class Pruductlist{
    constructor(container = '.goods-list'){
        this.container = container
        this.goods = []
        this._fetchProducts()
        this.render()
    }

    sumofproducts(){
        let sum = 0
        this.goods.forEach(product => {
            sum += product.price
        })
        return sum
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
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
        this.title = product.title
        this.id = product.id
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
    addGood(){

    }
    removeGood(){

    }
    changeGood(){

    }
    render(){

    }
}

class CartProduct{
    render(){
        
    }
    
}