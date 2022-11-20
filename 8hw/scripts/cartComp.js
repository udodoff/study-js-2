Vue.component('cart-comp',{
    data() {
        return {
            isShow: false,
            cart: [],
            
        }
    },
    methods: {
        cartAdd(item){
          let find = this.cart.find(el => el.id==item.id)
          if(find){
            item.quantity++
          }else{
            this.cart.push(JSON.parse(item))
          }
          console.log(this.cart);
        },
        cartRemove(item){
          if(item.quantity > 1){
            item.quantity--
          }else{
            this.cart.splice(this.cart.indexOf(item), 1)
          }
        },
        getTotalPrice(){
          let total = 0
          this.cart.forEach(el => {
            total += el.price * el.quantity
          });
          console.log(total);
          return total
        },
        getTotalValue(){
          let total = 0
          this.cart.forEach(el => {
            total += el.quantity
          })
          localStorage.setItem("total", total.toString())
        }

    },
    mounted() {
        
    },
    template: `<div class="cart-link" href="cart.html">
    <div class="circle-red">${localStorage.getItem("total")}</div>
    <img class="cart" src="icons/cart.svg" alt="cart" @click.prevent="isShow = !isShow" />
    <div class="basket" v-show="isShow">
      <div v-for="item in cart" class="basketRow basketHeader">
        <div>Название товара:<br/>{{item.title}}</div>
        <div>Количество: <br/> {{item.quantity}}</div>
        <div>Цена за шт: <br/>{{item.price}}$</div>
        <div>Итого <br/>{{item.price*item.quantity}}</div>
        <button class="delete-btn" @click.prevent="cartRemove(item)">Удалить</button>
      </div>

      <div class="basketTotal">
        Товаров в корзине на сумму: $<span class="basketTotalValue"
          >{{getTotalPrice()}}</span
        >
      </div>
    </div>
  </div>`
})
