// JS HOMEWORK 2 - SARA MADI

/*Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.*/

var person1 = {
    name: "Mohamed",
    height: 170
}
var person2 = {
    name: "Mohamed",
    height: 170
}
var person3 = {
    name: "Mohamed",
    height: 180
}

function equality(obj1, obj2) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
//testing
console.log("QuestionOne -first function- :");
console.log(equality(person1, person3));

// remark: it doesnt work if the object has an object inside - an array as a property for example
// we can use the method _.isEqual
// or we can add instructions to compare when properties are objects :

function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var i = 0; i < keys1.length; i++) {
        let val1 = obj1[keys1[i]];
        let val2 = obj2[keys1[i]];
        let isObjects = isObject(val1) && isObject(val2);
        if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}
//to test if a value is  an object
function isObject(object) {
    return object != null && typeof object === 'object';
}
//testing function 
var Student1 = {
    name: "Mohamed",
    age: 19,
    hobbies: ["painting", "music"]
}
var Student2 = {
    name: "Mohamed",
    age: 19,
    hobbies: ["painting", "music"]
}

console.log("\nQuestionOne -second function- :");
console.log(isEqual(Student1, Student2));

/*Write a JavaScript function to find the common elements from two arrays
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2"]  */

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
//difference

function difference(arr1, arr2) {
    let k = 0;
    let arr3 = [];
    if (arr1.length < arr2.length) {
        n = arr1.length;
    } else { n = arr2.length }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr1[i] === arr2[j]) {
                arr3[k] = arr1[i];
                k++;
            }

        }
    }
    removeDup(arr3);
    return arr3;
}
//testing

var arr1 = [1, 2, 3];
var arr2 = [2, 2, 1, 10];

var arrNew = difference(arr1, arr2);

console.log("\nQuestion two:");
for (var i = 0; i < arrNew.length; i++)
    console.log(arrNew[i] + " ");
