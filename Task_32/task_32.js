let arr = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 1){
        console.log(`${arr[i]}st`)
    }
    else if(arr[i] === 2){
        console.log(`${arr[i]}nd`)
    }
    else if(arr[i] === 3){
        console.log(`${arr[i]}rd`)
    }
    else{
        console.log(`${arr[i]}th`)
    }
}