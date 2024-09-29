let price = {};
price["pepsi"] = 1.25;
price["corn"] = 1.8;
price["gravy"] = 1.5;
price["chicken"] = 1.50;
price["6piece"] = 8.1;
price["10piece"] = 12.75;

document.getElementById('food').addEventListener('change', function () {
    var inputField = document.getElementById('Quantity');
    if (this.value == 'chicken') {
        inputField.style.display = 'block';
    } else {
        inputField.style.display = 'none';
    }
    updatePrice();
});

document.getElementById("side").addEventListener('change', function () {
    updatePrice();
});

document.getElementById("FQ").addEventListener('change', function () {
    updatePrice();
});

function updatePrice() {
    var cost = document.getElementById('cost');
    var selectFood = document.getElementById("food");
    var selectSide = document.getElementById("side");
    var Quantity = document.getElementById("FQ");

    if (selectFood.value == -1) {
        cost.innerText = 'Please select a Food';
        return;
    }

    var priceCost = 0;
    var foodPrice = price[selectFood.value] ?? 0;
    if (selectFood.value == 'chicken') {
        foodPrice *= document.getElementById("FQ").value;
    }

    priceCost += foodPrice;

    for (var i = 0; i < selectSide.options.length; i++) {
        if (selectSide.options[i].selected) {
            priceCost += price[selectSide.options[i].value]
        }
    }

    cost.innerText = 'Price: ' + priceCost + ' €';
}