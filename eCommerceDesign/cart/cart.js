operation = (sign) => {
    var qnt = document.getElementById('Quantity').innerHTML;
    var subTotal = Number(document.getElementById('subTotal').innerHTML);
    var tax = Number(document.getElementById('tax').innerHTML);

    switch (sign) {
        case '+':
            document.getElementById('Quantity').innerHTML = Number(qnt) + 1;
            document.getElementById('Total').innerHTML = subTotal * (Number(qnt) + 1);
            document.getElementById('FullTotal').innerHTML = Number(document.getElementById('Total').innerHTML) + tax;
            break;

        case '-':
            if (Number(qnt) > 1) { // Prevent quantity from going below 1
                document.getElementById('Quantity').innerHTML = Number(qnt) - 1;
                document.getElementById('Total').innerHTML = subTotal * (Number(qnt) - 1);
                document.getElementById('FullTotal').innerHTML = Number(document.getElementById('Total').innerHTML) + tax;
            }
            break;

        default:
            console.log(value);
    }
};
