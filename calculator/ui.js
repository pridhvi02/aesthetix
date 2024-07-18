const display = document.getElementById('display');


getValue=(a)=>{
    if(a == '='){
        
        display.value = eval(display.value);
    }
    else if (a == 'C'){
        display.value = ' ';
    }
    // else if(a!='='){
    //     display.value +=a; 
    // }
    else{
        display.value+=a;
    }
    
};