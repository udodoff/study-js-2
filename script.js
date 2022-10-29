const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (product, img = 'https://img.freepik.com/free-photo/man-in-black-sweater-and-black-bucket-hat-youth-apparel-shoot_53876-102294.jpg?w=360&t=st=1666799529~exp=1666800129~hmac=0ca0b6f6203ef4024dcf8c145973e80c68091f8dd03c166417edf15cae3985c4') =>  `<div class="goods-item">
        <img class="item-photo" src="${img}">
         <h3 class="heading">${product.title}</h3>
        <p class="parag">$${product.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(product => renderGoodsItem(product));
    document.querySelector('.goods-list').innerHTML = goodsList.join(" ");
}
    
renderGoodsList(goods);       