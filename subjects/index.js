const items = ['Apple', 'Banana', 'Cherry', 'Strawberry'];

function displayFruits() {
    let fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = items[i];

        let buyButton = document.createElement('button');
        buyButton.type = 'button';
        buyButton.className = 'btn btn-dark';
        buyButton.textContent = 'BUY';

        (function (index) {
            buyButton.addEventListener('click', function () {
                // Call a function to handle the purchase
                handlePurchase(items[index]);
            });
        })(i);

        listItem.appendChild(buyButton);
        fruitList.appendChild(listItem);
    }
}

function handlePurchase(item) {
    // Display the purchased item in the "MY ITEMS" section
    let myItemList = document.getElementById('myItemList');
    let purchasedItem = document.createElement('li');
    purchasedItem.textContent = item;
    myItemList.appendChild(purchasedItem);
}