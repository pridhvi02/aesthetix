operation=(sign)=>{
    var qnt = document.getElementById('Quantity').innerHTML
    console.log("running");
    console.log(document.getElementById('subTotal').innerHTML);
    switch (sign)
     {
        
        case '+': 
                 document.getElementById('Quantity').innerHTML= Number(qnt) + 1;
                 document.getElementById('Total').innerHTML = (document.getElementById('subTotal').innerHTML) * (document.getElementById('Quantity').innerHTML)
                 document.getElementById('FullTotal').innerHTML = Number(document.getElementById('Total').innerHTML) + Number(document.getElementById('tax').innerHTML)
                 break;
        
        case '-': 
                document.getElementById('Quantity').innerHTML= Number(qnt) - 1;
                document.getElementById('FullTotal').innerHTML = (document.getElementById('subTotal').innerHTML) * (document.getElementById('Quantity').innerHTML)
                document.getElementById('FullTotal').innerHTML = Number(document.getElementById('Total').innerHTML) - Number(document.getElementById('tax').innerHTML)
                
                 break;

        default: console.log(value)

                  

            
          
    }

} 