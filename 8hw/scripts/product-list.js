Vue.component('product-list', {
    data() {
        return {
            productsData: '../../server/catalog.json',
            catalogProducts: [],
            filtered: [],
            dict: ["card-img-top-1", "card-img-top-2", "card-img-top-3", "card-img-top-4", "card-img-top-5", "card-img-top-6"]
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i')
            this.filtered = this.catalogProducts.filter(el => regexp.test(el.title));
        },
        addLocalStorage(item){
            if(localStorage.getItem(item.id.toString()) == null){
                localStorage.setItem(item.id, JSON.stringify(Object.assign({quantity: 1}, item)))
                
            }else{
                let declaratedItem = JSON.parse(localStorage.getItem(item.id.toString()))
                declaratedItem.quantity++
                localStorage.setItem(item.id, JSON.stringify(declaratedItem))
            }
            this.$root.$refs.header.$refs.cart.cartAdd(localStorage.getItem(item.id.toString()))
            this.$root.$refs.header.$refs.cart.getTotalValue()
        }
    },
    mounted() {
        this.$root.fetchProducts(this.productsData)
            .then(data => {
                for(let item of data){
                    this.catalogProducts.push(item)
                    this.filtered.push(item)
                }
            })
    },
    template: `<div class="cards">
    <a
    href="#"
    class="card"
    v-for="item of filtered"
    :data-id="item.id"
    :data-name="item.title"
    :data-price="item.price">

            <div :class="dict[item.id-1]">
                <div class="card-opac">
                    <button class="buy-button flex" @click.prevent="addLocalStorage(item)">
                        <img src="icons/cart-add.svg" alt="" />
                        <p class="add-to-cart">Add to Cart</p>
                    </button>
                </div>
            </div>

            <div class="card-content">
                <p class="card-heading">{{item.title.toUpperCase()}}</p>
                <p class="card-info">
                    Known for her sculptural takes on traditional tailoring,
                    Australian arbiter of cool Kym Ellery teams up with Moda
                    Operandi.
                </p>
                <p class="card-price">\${{item.price}}</p>
            </div>
  </a>
  </div>`
})

