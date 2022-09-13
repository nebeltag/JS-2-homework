const products = [
    { id: 1, title: 'Notebook', price: 2000, imgUrl: `https://picsum.photos/id/0/367/267` },
    { id: 2, title: 'Mouse', price: 20, imgUrl: `https://picsum.photos/id/0/367/267` },
    { id: 3, title: 'Keyboard', price: 200, imgUrl: `https://picsum.photos/id/0/367/267` },
    { id: 4, title: 'Gamepad', price: 50, imgUrl: `https://picsum.photos/id/0/367/267` },
    { id: 5, title: 'TV', price: 1500, imgUrl: `https://picsum.photos/id/0/367/267` },
    { id: 6, title: 'PC', price: 2500, imgUrl: `https://picsum.photos/id/0/367/267` },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (x) => {
    return `<div class="product-item">
                <h3>Код товара: ${x.id}</h3>
                <h3>Наименование товара: ${x.title}</h3>
                <img src="${x.imgUrl}" alt="">
                <p>Цена товара: ${x.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(product => renderProduct(product)).join("");
};

renderPage(products);