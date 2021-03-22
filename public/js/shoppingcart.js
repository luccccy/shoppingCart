//get buttons;
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let quantity = document.getElementById('quantity').value;
const price = document.getElementById('price').value;



console.log(price);
console.log('###########3')

quantity = Number(quantity);


//add button listener
button1.addEventListener('click', addItems);

button2.addEventListener('click', minusItems);


function addItems() {
    quantity += 1;
    document.getElementById('quantity').value = quantity;
    calAmount();
    totalPrice();
}

function minusItems() {
    quantity -= 1;
    document.getElementById('quantity').value = quantity;
    calAmount();
    totalPrice();
}


function calAmount() {
    // document.getElementById('amount').value = "";
    console.log('#########');
    console.log(quantity);
    console.log('#########1');
    console.log(price);
    console.log('#########2');

    document.getElementById('amount').value = quantity * price;
}

function totalPrice() {
    const amount = document.getElementById('amount').value;
    document.getElementById('total').value = amount;
}

