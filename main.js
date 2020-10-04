let binary = document.querySelector('.binary');
let decimal = document.querySelector('.decimal');

document.querySelector('.btn').addEventListener('click',binToDec);

function binToDec(e){
    e.preventDefault();
//     // Reverse string
//     const reversed = binary.value.split('').reverse();
//     let total = 0;

//     for (let i = 0; i < reversed.length; i++){
//         // Raise count to the power of 2
//         const power = Math.pow(2,i);
//         // Multiply result by digit
//         total = total + (reversed[i] * power);
//     }
//     decimal.value = total;
    decimal.value = ParseInt(binary.value,2);
}
