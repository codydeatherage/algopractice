document.body.style.backgroundColor= '#353b48';
let n = 10;
let arr = [1,2,3,4,5,6,7,8,9,10];

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);

//Select element we want to attach things to
const contentBody = document.querySelector('#content');

//create new div for our first array
let topDiv = document.createElement('div');
topDiv.classList.add('row');
contentBody.appendChild(topDiv);

//create a block for each array index and apppend to topDiv
/* for(let i = 0; i < arr.length; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('block');
    newDiv.innerText = arr[i];
    topDiv.appendChild(newDiv);
} */

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
let leftCuts = [];
let rightCuts = [];
function mergeSort(arr, l, r){
    if(l < r){
        let m = Math.floor((l+r)/2);
        for(let i = l; i <= r; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            newDiv.innerText = arr[i];
            topDiv.appendChild(newDiv);
        }

        leftCuts.push(arr.slice(l, m+1));
        rightCuts.push(arr.slice(m+1, r+1));
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}
console.log('LeftCuts? ', leftCuts);
console.log('RightCuts?', rightCuts);



mergeSort(arr, 0, arr.length - 1);
/* function highlightMid(m){ */
/*     const allBlocks = document.querySelectorAll('.block');
    const allBlocksArr = Array.from(allBlocks);
    for(let i = 0;i < allBlocksArr.length; i++){
        console.log(allBlocksArr[i].innerText);
    } */

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




