const leftPinDisplay = document.getElementById('leftPinDisplay');

const pinGenBtn = document.getElementById('pinGenBtn');

function verifyPin(){
    const pin1 = document.getElementById('leftPinDisplay').value;
    const pin2 = document.getElementById('rightPinDisplay').value;
    const success = document.getElementById('s');
    const failure = document.getElementById('f');

    if(pin1 == pin2){
        success.style.display = 'block';
    }else{
        failure.style.display = 'block';
    }
}

pinGenBtn.addEventListener('click', function(event){
    leftPinDisplay.value = Math.ceil(1000 + Math.random()*9000);
})



document.getElementById('numpad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const rightPinDisplay = document.getElementById('rightPinDisplay');
    const oldNumber = rightPinDisplay.value;
    const newNumber = oldNumber + number;
    rightPinDisplay.value = newNumber;
    
})

document.getElementById('submitBtn').addEventListener('click', function(event){
    verifyPin();
})

// console.log(document.getElementById('rightPinDisplay').value);