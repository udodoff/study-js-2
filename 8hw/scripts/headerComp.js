Vue.component('header-comp', {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
    template: `<header class="navbar">
    <nav class="container flex nav-flex">
      <div class="logo flex">
        <a href="index.html"
          ><img class="logo-img" src="icons/logo.svg" alt="logo"
        /></a>
        <a href="#"><img src="icons/search.svg" alt="search" /></a>
      </div>
      <filter-comp></filter-comp>
      <div class="nav-icons flex">
        <div class="menu-icon">
          <img class="menu" src="icons/menu-icon.svg" alt="menu" />

          <div class="mega-box">
            <div class="item">
              <h3 class="menu-heading">Man</h3>
              <a class="mega-link" href="#">Accessories</a>
              <a class="mega-link" href="#">Bags</a>
              <a class="mega-link" href="#">Denim</a>
              <a class="mega-link" href="#">T-Shirts</a>
            </div>
            <div class="item">
              <h3 class="menu-heading">Woman</h3>
              <a class="mega-link" href="#">Accessories</a>
              <a class="mega-link" href="#">Jackets & Coats</a>
              <a class="mega-link" href="#">Polos</a>
              <a class="mega-link" href="#">T-Shirts</a>
              <a class="mega-link" href="#">Shirts</a>
            </div>
            <div class="item">
              <h3 class="menu-heading">Kids</h3>
              <a class="mega-link" href="#">Accessories</a>
              <a class="mega-link" href="#">Jackets & Coats</a>
              <a class="mega-link" href="#">Polos</a>
              <a class="mega-link" href="#">T-Shirts</a>
              <a class="mega-link" href="#">Shirts</a>
              <a class="mega-link" href="#">Bags</a>
            </div>
          </div>
        </div>
        <a class="reg-link" href="registration.html"
          ><img class="cabinet" src="icons/cabinet.svg" alt="cabinet"
        /></a>
        <cart-comp ref="cart"></cart-comp>
      </div>
    </nav>
  </header>`
})
