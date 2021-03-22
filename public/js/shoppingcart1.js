//add remove item button
const removeCartItemButtons = document.getElementsByClassName('btn-clear');
console.log(removeCartItemButtons)
for (let i = 0; i < removeCartItemButtons.length; i++ ) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", function(event) {
        const buttonClicked = event.target;
        console.log('###############31')
        console.log(buttonClicked)
        buttonClicked.parentElement.parentElement.remove();
        let amountTd = buttonClicked.parentElement.parentElement.children[4].children[0];
        console.log('$$$$$$$$$$$$$$#########300000')
        console.log(amountTd)
        let amountValue = amountTd.value;
        let total = document.getElementById('total').value;
        total -= amountValue;
        document.getElementById("total").value = total;
    })
}


//add increase items button
const addCartItemButton = document.getElementsByClassName('add-btn');
console.log('##########5')
console.log(addCartItemButton)
for (let i = 0; i < addCartItemButton.length; i++) {
    var addButton = addCartItemButton[i];
    console.log('#################7')
    console.log(addButton)
    addButton.addEventListener("click", addItem)
}




//increase items function
function addItem() {
    let quantityElement = this.parentElement.children[1];
    let quantity = parseInt(quantityElement.value);
    quantity += 1;
    this.parentElement.children[1].value = quantity;
    let priceElement = this.parentElement.parentElement.children[3].children[0];
    let price = parseInt(priceElement.value);
    let amountElement = this.parentElement.parentElement.children[4].children[0];
    let amount = amountElement.value;
    amount =  price * quantity;
    this.parentElement.parentElement.children[4].children[0].value = amount;
    let total = parseInt(document.getElementById("total").value);
    total += price ;
    document.getElementById("total").value = total;
}


//decrease items function
function minusItem(element) {
     let quantityElement = element.children[1];
     let quantity = parseInt(quantityElement.value);
     if(quantity === 0) {
         return;
     }
     quantity -= 1;
     element.children[1].value = quantity;
    let priceElement = element.parentElement.children[3].children[0];
    let price = parseInt(priceElement.value);
    let amountElement = element.parentElement.children[4].children[0];
    let amount = amountElement.value;
    amount =  price * quantity;
    element.parentElement.children[4].children[0].value = amount;
    let total = parseInt(document.getElementById("total").value);
    total -= price ;
    document.getElementById("total").value = total;
}









