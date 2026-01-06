let meja = 500000;
let kursi = 200000;
let lemari = 1000000;


function totalPrice(item1, item2, item3){
    let total_price = item1 + item2 + item3;

    if(total_price > 500000){
        total_price = total_price * 0.9;
    }

    return total_price;
}

console.log(totalPrice(meja, kursi, lemari));