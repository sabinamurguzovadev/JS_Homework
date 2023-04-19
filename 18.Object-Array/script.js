
// task1
// Create a function called 'secretName()' that takes in an array of names and returns the first letter of name
// let names1 = ["Adam", "Sarah", "Malcolm"];
// let names2 = ["Harry", "Newt", "Luna", "Cho"];
// let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];

// function secretName(names) {
//     let secret = '';
//     for (let i = 0; i < names.length; i++) {
//       secret += names[i][0];
//     }
//     return secret;
//   }
// console.log(secretName(names1)); 
// console.log(secretName(names2));
// console.log(secretName(names3));

// task2

// 2.1 Show users who is studying at 'UNEC' and surname starts 'r'.
// const users = [
//     { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
//     { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
//     { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
//     { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
//     { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
//     { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
// ]

// const universityName = users.filter(user => user.uni === 'UNEC' && user.surname.charAt(0).toLowerCase() === 'r');
// console.log(universityName);

// / 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// const userAge = users.filter(item => item.age === '22' && item.name.charAt(0).toLowerCase() === 'a');
// console.log(userAge);


// 2.4
// const sortAgeUsers = users.sort((a, b) => a.age - b.age);

// console.log(sortAgeUsers);

// task 4
// const arr4 = [
//         {
//             product: 'Lenova',
//             price: 1900,
//         },
//         {
//             product: 'HP',
//             price: 1300,
//         },
//         {
//             product: 'Acer',
//             price: 1600,
//         },
//     ]
// const halfPrice = arr4.map(item => ({ ...item, price: item.price / 2 }));

// console.log(halfPrice);


// task 5
// let num1 = 246
// let num2 = 102
// let num3 = 152
// function reverseNum(num) {
//     const reverse = Number(num.toString().split("").reverse().join(""));
//     return Number(`${num}${reverse}`);
//   } 
//   console.log(reverseNum(num1)); 
//   console.log(reverseNum(num2)); 
//   console.log(reverseNum(num3)); 
  
