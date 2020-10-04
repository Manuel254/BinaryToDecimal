let binary = document.querySelector('.binary');
let decimal = document.querySelector('.decimal');

document.querySelector('.btn').addEventListener('click',binToDec);

function binToDec(e){
    e.preventDefault();
    decimal.value = parseInt(binary.value,2);
}
