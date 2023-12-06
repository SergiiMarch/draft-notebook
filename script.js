// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// console.log(apartment);
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(keys);
// }

// console.log(values);
// Перебери об'єкт apartment,
// використовуючи метод Object.keys()
// і цикл for...of.
// Запиши у змінну keys масив ключів
// власних властивостей об'єкта apartment,
//  додай в масив values всі значення його властивостей
//////////////////////////////////////////////////////////////////////////
// function countProps(object) {
//   // Change code below this line

//   const keys = Object.keys(object);
//   let propCount = keys.length;
//   //   for (const key of keys) {
//   //     propCount += 1;
//   //   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// Виконай рефакторинг функції countProps(object),
//  використовуючи метод Object.keys() і,
//  можливо, але не обов'язково, цикл for...of.
////////////////////////////////////////////////////////////////////////////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//  а у змінну values - масив всіх значень його властивостей.
//  Використовуй методи Object.keys() і Object.values().
////////////////////////////////////////////////////////////////////////////

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ Andrii Voronin: 100, Polina Malyar: 150, Victor Bomk: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/////////////////////////////////////////////////////////////////////////////
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this linegit
