



function getUpdatedValue(product,price,productPrice,isAddition){
    const inputVal = document.getElementById(product+'-input');
    let inputValNum=parseInt (inputVal.value);
    if(isAddition){
        inputValNum= inputValNum+1;
    }

    else if(inputValNum>0){
       inputValNum= inputValNum-1
    }

    inputVal.value = inputValNum;


    const finalPrice = document.getElementById(productPrice);
    const totalPrice = price*inputValNum;

    console.log(totalPrice);

    finalPrice.innerText =totalPrice;

    getTotal();

    
}


function getInputValue(pro){
    const productText = document.getElementById(pro);
    const productNum = parseInt(productText.value);

    return productNum;
}

function getTotal(){

    const mobileAmount = getInputValue('mobile-input')*1219;

    console.log(mobileAmount);

    const caseAmount = getInputValue('case-input')*59;

    const subtotal = mobileAmount + caseAmount;
    const tax = subtotal/10;
    const total = subtotal + tax;

    document.getElementById('sub-total').innerText= subtotal;
    document.getElementById('tax-amount').innerText= tax;
    document.getElementById('total').innerText= total;
}

document.getElementById('mobile-plus').addEventListener('click',function(){
    // const inputVal = document.getElementById('input-value');
    // const inputValText= inputVal.value;

    // inputVal.value= parseInt(inputValText)+1;

    getUpdatedValue('mobile',1219,'mobile-price',true);
});

document.getElementById('mobile-minus').addEventListener('click', function(){
    
    getUpdatedValue('mobile',1219,'mobile-price',false);
});


// case value update


document.getElementById('case-plus').addEventListener('click', function(){
    getUpdatedValue('case',59,'case-price',true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    getUpdatedValue('case',59,'case-price',false);
});

