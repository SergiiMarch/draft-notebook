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
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this linegit
// // Перебери масив об'єктів colors,
// //  використовуючи цикл for...of.
// //  Додай у масив hexColors значення властивостей hex,
// //   а в масив rgbColors -
// //   значення властивостей rgb з усіх об'єктів масиву colors.
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
/////////////////////////////////////////////////////////////////////////////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     console.log(product);
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// Напиши функцію getProductPrice(productName),
// яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям (властивість name)
// в масиві products і повертає його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
//////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];
//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       values.push(product[propName]);
//     }

//     // console.log(product.propName);
//   }
//   return values;
// }

// Напиши функцію getAllPropValues(propName),
//  яка приймає один параметр propName -
//  ім'я (ключ) властивості.
//   Функція повинна повернути масив всіх значень властивості
//   з таким ім'ям з кожного об'єкта в масиві products.
//   Якщо в об'єктах відсутні властивості з таким ім'ям,
//    функція повинна повернути порожній масив.
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
/////////////////////////////////////////////////////////////////////////////////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let sum = 0;
//   for (const product of products) {
//     console.log(product.name);
//     if (productName === product.name) {
//       sum = product.price * product.quantity;
//     }
//   }
//   return sum;
// }
// // Напиши функцію calculateTotalPrice(productName),
// //  яка приймає один параметр productName - назва товару.
// //   Функція повинна повернути загальну
// //   вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Droid"));
// console.log(String.raw`Hello\nworld`);

///////////////////////////////////////////////////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//////////////////////////////////////////////////////////////////////////////////
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(highToday);
console.log(lowTomorrow);
