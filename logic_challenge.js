// konstanta untuk diskon total harga
const MINIMUM_SPENDING_FOR_DISCOUNT = 500000;
const DISCOUNT_RATE = 0.1;

/** 
    array untuk setiap harga yang dibeli
    @param {Array} item_prices 
*/


// fungsi untuk menghitung total harga dan juga untuk pemberian diskon

function calculateTotalPayment (item_prices){
    // variabel untuk menyimpan total harga
    let total_payment = 0;


    //menjumlahkan setiap harga
    for(let price of item_prices){
        total_payment += price;
    }

    //mengecek apakah dapat diskon, jika iya diberikan harga diskon
    if(total_payment > MINIMUM_SPENDING_FOR_DISCOUNT){
        total_payment -= total_payment * DISCOUNT_RATE;
    }

    return total_payment;



}

// variabel untuk menyimpan setiap harga "contoh"
let item_prices = [200000, 500000, 1000000];


//mencoba program diatas, melihat hasil di console, dengan memanggil fungsi

console.log(calculateTotalPayment(item_prices));




