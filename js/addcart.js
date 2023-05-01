let carts = document.querySelectorAll('.add_cart');

let products = [
    {
        name: 'Red Devil AMD Radeon RX 7900 XT',
        tag: 'fp_card1',
        price: 969.99,
        inCart: 0
    },
    {
        name: 'Intel Core i7-8700',
        tag: 'fp_card2',
        price: 269.99,
        inCart: 0
    },
    {
        name: 'Corsair iCUE H150i',
        tag: 'fp_card3',
        price: 166.99,
        inCart: 0
    },
    {
        name: 'Asus ROG STRIX Z690-E',
        tag: 'fp_card4',
        price: 349.99,
        inCart: 0
    },
    {
        name: 'MSI MAG VAMPIRIC 100R',
        tag: 'card5',
        price: 62.99,
        inCart: 0
    },
    {
        name: 'AMD Ryzen 7 5700X',
        tag: 'card6',
        price: 185.99,
        inCart: 0
    },
    {
        name: 'Corsair TX550M',
        tag: 'card7',
        price: 65.99,
        inCart: 0
    },
    {
        name: 'MSI Radeon RX 6650 XT',
        tag: 'card8',
        price: 329.99,
        inCart: 0
    },
    {
        name: 'MSI MPG B550',
        tag: 'card9',
        price: 139.99,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart_inc span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart_inc span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart_inc span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products_cart");
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product_cart">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="../resources/${item.tag}.png">
                <span>${item.name}</span>
                <div class="price_cart">${item.price}</div>
                <div class="quantity_cart">
                <span>${item.inCart}</span>
                </div>
                <div class="total_cart">
                $${item.inCart * item.price}
                </div>
            </div>
            `
        });

        productContainer.innerHTML += ` 
         <div class="basketTotalContainer_cart">
         <h4 class = "basketTotalTitle_cart">
            Cart Total
        </h4>
        <h4 class="basketTotal">
            $${cartCost}
        </h4>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();