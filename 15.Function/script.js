// task 1

// function getFirstValue(array) {
//     return array[0]

// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]) );
// console.log(getFirstValue([-500, 0, 50]) );

// task 2
// function getLastItem(array) {
//     return array[array.length -1]

// }
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// task 3


// const findIndex= function   (array, str)  {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == str) {

//             return i
//         }


//     }
//     return -1


// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// task4
// function addition(num1,num2) {
//     return num1 + num2

// }
// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));


// task 5

// const lessThan100 = (a, b) => (a + b) < 100

// console.log(lessThan100(22, 15));
// console.log(lessThan100(22, 15));
// console.log(lessThan100(3, 77));

// task 6
// function volumeOfBox(sizes) {
//     return sizes.width * sizes.length * sizes.height
    
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) 
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 })) 
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 })) 


// task 7
// function points(twoPointers, threePointers) {
//     return (2*twoPointers) + (3*threePointers)
    
// }
// console.log(points(1, 1));
// console.log(points(7, 5));
// console.log(points(38, 8));


// task 8
function fillInfo(arr) {
    for (let obj of arr){
        obj.name='Sabina'
        obj.surname='Murguzova'
        obj.city='Ganja'

    }
    return arr
   
    
}
const arr5 = [
    
     

    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    
   
]

console.log(fillInfo(arr5));


