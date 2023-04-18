// task 1
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
function getUpper(item) {
  arr1.map(item);
}


// task 2
let text = "We are MERN-Stack developers";
// 2.1
// console.log(text.replace('MERN-Stack','Front-end Developer'));
// 2.2
// console.log(text.replaceAll('e' ,'a'));

// 2.3
// console.log(text.concat("in Microsoft!"));

// 2.4
// const newArray = []
// text.split('').map((item,index)=> item.toLowerCase()=== 'r' ? newArray.push(index) : newArray)
// console.log(newArray);

// 2.5
// console.log(text.indexOf("r".toLocaleUpperCase(),2));
// 2.6

// task 3


// const arr3 = [
//   {
//     region: 'Yasamal',
//     area: 170,
//   },

//   {
//     region: 'Nizami',
//     area: 20,
//   },

//   {
//     region: 'Nesimi',
//     area: 10,
//   },

//   {
//     region: 'Sebail',
//     area: 30,
//   },
//   {
//     region: 'Xetai',
//     area: 30,
//   },

// ]

// const calArr = ()=>{
//   let total = 0
//   arr3.forEach((region)=>{
//     if(region.region==='Yasamal')
//   })
// }




// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
// const sortArr = arr4.slice().sort(function (a,b){
//   return a-b
// })
// console.log(sortArr);



// task 5
// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
// function allResult(arr){
//   let result = []
//   for(let i=0; i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       result = result.concat(allResult(arr[i]))

//     }
//     else{
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// const itemAll =allResult(arr5);

// console.log(itemAll);















// task 6
// const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
// colors.sort ((a,b)=>{
//   if(a.length !== b.length){
//     return a.length-b.length
//   }
//   else{
//     return a.localeCompare(b)
//   }
// })
// console.log(colors);




