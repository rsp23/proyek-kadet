
//fungsi untuk mencari harga di dalam array harga yang sudah urut dari kecil ke besar
function searchPrice(prices, targetPrice){

    //inisiasi index array awal dan akhir
    let leftIndex = 0;
    let rightIndex = prices.length - 1;

    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + Math.floor((rightIndex - leftIndex) / 2)));


        if(prices[mid] === targetPrice){
            return mid;
        }

        if(prices[mid] < targetPrice){
            leftIndex = mid + 1;

        }else{
            rightIndex = mid -1;
        }

        
    }

    return -1;
}


let prices = [5, 10, 20, 50, 100, 300, 500, 1000, 2000, 2500, 4000, 10000, 15000];

let targetPrice = 500;

console.log(searchPrice(prices, targetPrice));