// function swapNumbers(m,n){
//     var temp = m;
//     m = n;
//     n = temp;
//     console.log(m,n);
// }swapNumbers(3,4);

// function swapNumbers(m,n){
//     m = m + n; // 5+8 = 13
//     n = m - n; // 13 - 8 = 5
//     m = m - n; // 13 - 5 = 8
//     console.log(m,n);
// }swapNumbers(5,8);

// function swapNumbers(m,n){
//     m = m * n; //5 * 8 = 40
//     n = m / n; // 40/8 = 5
//     m = m / n; // 40/5 = 8
//     console.log(m,n);
// }swapNumbers(5,8);

// function swapNumbers(m,n){
//     m = m ^ n; // 13 => 1101
//     n = m ^ n; // 5 => 101
//     m = m ^ n; // 8 => 1000
//     console.log(m,n);
// }swapNumbers(5,8);

// function swapNumbers(m,n){
//     m = ~(m ^ n); // 13 => 1101 => 0010
//     n = ~(m ^ n); // 5 => 101 => 010
//     m = ~(m ^ n); // 8 => 1000 => 0001
//     console.log(m,n);
// }swapNumbers(55,8);


function swap(num1, num2) {
    num1 = ~(num1 ^ num2);   
    num2 = ~(num1 ^ num2);   
    num1 = ~(num1 ^ num2);    
    console.log(num1, num2); 

}
// swap(3, 5);   // *Uncomment to call swap()*