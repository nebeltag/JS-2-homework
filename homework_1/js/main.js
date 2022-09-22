"use strict"
class basket {

}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
            { id: 5, title: 'TV', price: 1500 },
            { id: 6, title: 'PC', price: 2500 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSum() {
        let sum = 0;

        this.goods.forEach(element => {
            sum += element.price;
        });

        return sum;
    }


    // Вариант 2
    // getSum() {

    //     let sum = this.goods.reduce((acc, current) => acc + current.price, 0);
    //     return sum;
    // }

}

class ProductItem {
    constructor(product, img = 'https://picsum.photos/id/0/367/267') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.getSum();

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    render() {

    }
}

class BasketItem {
    render() {

    }
}


// const products = [
//     { id: 1, title: 'Notebook', price: 2000 },
//     { id: 2, title: 'Mouse', price: 20 },
//     { id: 3, title: 'Keyboard', price: 200 },
//     { id: 4, title: 'Gamepad', price: 50 },
//     { id: 5, title: 'TV', price: 1500 },
//     { id: 6, title: 'PC', price: 2500 },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (product, imgUrl = `https://picsum.photos/id/0/367/267`) => {
//     return `<div class="product-item">
//                 <h3>Код товара: ${product.id}</h3>
//                 <h3>Наименование товара: ${product.title}</h3>
//                 <img src="${imgUrl}" alt="">
//                 <p>Цена товара: ${product.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products')
//         .innerHTML = list.map(product => renderProduct(product)).join("");
// };

// renderPage(products);