let searchBar = () => {
    var searchValue = document.getElementById("search_bar");
    var products = document.getElementsByClassName("card_name");

    for (var i = 0; i < products.length; i++) {
        products[i].parentNode.parentNode.style.display = "grid";
        if (!(products[i].innerHTML.toLowerCase().includes(searchValue.value.toLowerCase()))) {
            products[i].parentNode.parentNode.style.display = "none";
        }
    }
}

let priceFilter = () => {
    var rangePrice = document.getElementById("range_price");
    var price = document.getElementsByClassName("card_price");
    var realTime = document.getElementById("real_price");
    realTime.innerHTML = rangePrice.value + "$";

    for (var i = 0; i < price.length; i++) {
        price[i].parentNode.parentNode.style.display = "grid";
        if (!(parseFloat(price[i].innerHTML) <= parseFloat(rangePrice.value))) {
            price[i].parentNode.parentNode.style.display = "none";
        }
    }


}