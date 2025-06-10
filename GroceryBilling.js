let groceryItems = [];

function addItem() {
    const itemTitle = document.getElementById("itemTitle").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (itemTitle && quantity && price) {
        const item = {
            product: itemTitle,
            quantity: parseInt(quantity),
            price: parseFloat(price)
        };
        groceryItems.push(item);
        displayItems();
        calculateTotalPrice();
        clearInputs();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayItems() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    groceryItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.product} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`;
        itemList.appendChild(listItem);
    });
}

function calculateTotalPrice() {
    const totalPrice = groceryItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

function clearInputs() {
    document.getElementById("itemTitle").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}