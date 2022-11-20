Vue.component('main-comp', {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
    template: `<div class="content">
    <div class="top-section">
      <div class="img-back-man">
        <img class="big-man" src="icons/man.png" alt="man" />
      </div>
      <div class="top-section-p">
        <div class="rect-icon-div">
          <img
            class="rect-icon"
            src="icons/Rectangle 16 copy.png"
            alt=""
          />
        </div>

        <p class="text-top">
          <span class="brand">THE BRAND</span> <br />
          <span class="luxe">OF LUXERIOUS</span
          ><span class="fashion"> FASHION</span>
        </p>
      </div>
    </div>

    <div class="categories container">
      <div class="top-cards flex">
        <a href="#" class="first card-top">
          <img class="c" src="icons/women.jpg" alt="women" />
          <p class="women-text">
            <span class="off">30% OFF</span><br />
            <span class="f-w">FOR WOMEN</span>
          </p>
        </a>
        <a href="#" class="second card-top">
          <img class="c" src="icons/man.jpg" alt="man" />
          <p class="man-text">
            <span class="off">HOT DEAL</span><br /><span class="f-w"
              >FOR MEN</span
            >
          </p>
        </a>
        <a href="#" class="third card-top">
          <img class="c" src="icons/kid.jpg" alt="kid" />
          <p class="kid-text">
            <span class="off">NEW ARRIVALS</span><br /><span class="f-w"
              >FOR KIDS</span
            >
          </p>
        </a>
      </div>
      <a href="#" class="forth card-top">
        <img class="c" src="icons/accesories.jpg" alt="" />
        <p class="acc-text">
          <span class="off">LUXIROUS & TRENDY</span><br /><span
            class="f-w"
            >ACCESORIES</span
          >
        </p>
      </a>
    </div>

    <section class="fetured-items">
      <div class="container flex-items">
        <p class="fetured-p">Fetured Items</p>
        <p class="small-fetured">
          Shop for items based on what we featured in this week
        </p>
        <product-list ref="products"></product-list>
        <a href="catalog.html" class="browse-button"
          >Browse All Product</a
        >
      </div>
    </section>
    <section class="benefits">
      <div class="container flex-ben">
        <div class="free flex-item-bottom">
          <img class="car" src="icons/car.png" alt="car" />
          <p class="bottom-text">Free Delivery</p>
          <p class="bottom-parag">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="sales flex-item-bottom">
          <img class="sale" src="icons/sale.png" alt="sale" />
          <p class="bottom-text">Sales & discounts</p>
          <p class="bottom-parag">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="assurance flex-item-bottom">
          <img class="crown" src="icons/crown.png" alt="crown" />
          <p class="bottom-text">Quality assurance</p>
          <p class="bottom-parag">
            Worldwide delivery on all. Authorit tively morph
            next-generation innov tion with extensive models.
          </p>
        </div>
      </div>
    </section>
  </div>`
})