const cartItems = [
    {   productName : 'trousers',
        quantity: 2,
        bought: true,
        price: 250,
        sum: function () {
            return this.price * this.quantity;
        }
    },
    {   productName : 'shorts',
        quantity: 3,
        bought: false,
        price: 150,
        sum: function () {
            return this.price * this.quantity;
        }
        },
    {   productName : 't-shirt',
        quantity: 5,
        bought: true,
        price: 200,
        sum: function () {
            return this.price * this.quantity;
        }
        },
    {   productName : 'socks',
        quantity: 9,
        bought: false,
        price: 50,
        sum: function () {
            return this.price * this.quantity;
        }
        },
    {   productName : 'jacket',
        quantity: 1,
        bought: true,
        price: 550,
        sum: function () {
            return this.price * this.quantity;
        }
        },
];

function showProducts(products) {
    products.sort(function (a) {
        return a.bought ? 1 : -1;
    })

    let text = "<ul>";
    for (let i = 0; i < products.length; i++) {
        text += "<li> <span>" + products[i].productName + "</span>"+ "(" + (products[i].bought ? 'куплено': 'не куплено') + ")</li>";
    }
    text += "</ul>";
    document.getElementById("list-one").innerHTML = text;
    addListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    showProducts(cartItems);
});

function addListeners() {
    let productsNodes = document.querySelectorAll('span');
    productsNodes.forEach(function (node) {
        node.addEventListener('click', function (e) {
            const productName = e.target.innerText;
            const products = cartItems.filter(product => product.productName === productName);
            if (products.length) {
                document.getElementById('list-one').innerHTML = '';
                products[0].bought = true;
                showProducts(cartItems);
            }
        });
    } );
}
