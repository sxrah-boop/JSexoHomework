//JS HOMEWORK- MADI Sara

// delete a specific elem from an array
function removeElem(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;

            return arr;
        }
    }
}
// remove duplicates from sorted array

function removeDup(arr) {

    if (arr.length == 0 || arr.length == 1) {
        console.log("No duplicates!");
    }
    else {

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    for (let k = j; k < arr.length - 1; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.length--;

                    j--;
                }
            }
        }
    }
    return arr;
}
// testing function two

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var arrNew = removeDup(arr);

// Print updated array
for (var i = 0; i < arrNew.length; i++)
    console.log(arrNew[i] + " ");

//testing function one
var arrSecNew = removeElem(arrNew, 5);
for (var i = 0; i < arrSecNew.length; i++)
    console.log(arrSecNew[i] + " ");
    
//selection sorting of array
function sorting(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

    }

    return arr;
}
