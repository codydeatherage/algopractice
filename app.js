document.body.style.backgroundColor= '#353b48';
let n = 10;
let arr = [1,2,3,4,5,6,7,8,9,10];

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);
function merge(arr, l, m , r){
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);
    
    for(let i = 0; i < n1; i++){
        L[i] = (arr[l + i]);
    }

    for(let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
    }

    i = 0; j = 0;

    let k = l;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }
        else{
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r){
    if(l < r){
        let m = Math.floor((l+r)/2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
/* function bubbleSort(arr){
    let newArr = [...arr];
    let allArr = [];
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(newArr[j] > newArr[j+1]){
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j+1] = temp;
                let newestArr = [...newArr];
                //allArr.push(newestArr);
            }        
        }
    }
    return allArr;
}
let bubbleSorted = bubbleSort(arr);
console.log(bubbleSorted); */




