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

    var sides = "";
    priceCost += foodPrice;

    for (var i = 0; i < selectSide.options.length; i++) {
        if (selectSide.options[i].selected) {
            priceCost += price[selectSide.options[i].value];
            sides += selectSide.options[i];
        }
    }

    cost.innerText = getOrder() + '\nPrice: ' + priceCost + ' €';
}

function getOrder() {
    const foodSelect = document.getElementById("food");
    const quantitySelect = document.getElementById("FQ");
    const sideSelect = document.getElementById("side");

    const selectedFood = foodSelect.value !== "-1" ? foodSelect.options[foodSelect.selectedIndex].text : null;
    const quantity = quantitySelect.value;
    const selectedSides = Array.from(sideSelect.selectedOptions).map(option => option.text);

    if (!selectedFood) {
        alert("Please select a main food item.");
        return;
    }

    let orderSummary = `Order Summary:\nMain: ${selectedFood}`;
    
    if (selectedFood && foodSelect.value == "chicken") {
        orderSummary += `\nQuantity: ${quantity}`;
    }

    if (selectedSides.length > 0) {
        orderSummary += `\nSides: ${selectedSides.join(", ")}`;
    }

    return orderSummary;
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
    // Get form fields
    const foodSelect = document.getElementById("food");
    const quantityDiv = document.getElementById("Quantity");
    const sideSelect = document.getElementById("side");

    // Validate main food selection
    if (foodSelect.value === "-1") {
        alert("Please select a main food item.");
        event.preventDefault(); // Prevent form submission
        return;
    }
});