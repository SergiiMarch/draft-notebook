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
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this lin
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowTomorrow);
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);
///////////////////////////////////////////////
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
//////////////////////////////////////////
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
///////////////////////////////////////////////////////////////
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newmakeTask = {
//     completed,
//     category: "General",
//     priority: "Normal",
//     ...data,
//   };

//   // Change code above this line
//   return newmakeTask;
// }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// Функція повинна створити і повернути новий об'єкт завдання
// , не змінюючи напряму параметр data. У новому об'єкті повинна
//  бути властивість completed, значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text,
// а інші дві, category і priority, можуть бути відсутніми.
// Тоді, в новому об'єкті завдання,
// у властивостях category і priority повинні бути значення за замовчуванням,
// що зберігаються в однойменних локальних змінних.
/////////////////////////////////////////////////////////////////
// Change code below this line
// function add(...args) {
//   console.log(args);
//   // Change code above this line
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// // Використовуючи операцію rest,
// // доповни код функції add() таким чином,
// //  щоб вона приймала будь-яку кількість аргументів,
// //   рахувала і повертала їх суму.
// console.log(add(15, 27));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));
////////////////////////////////////////////////////////////////////////
// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   console.log(total);
//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів,
// які більші за задане число.
//  Це число повинно бути першим параметром функції.
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
////////////////////////////////////////////////////////////////////////////
// Change code below this line
// function findMatches(arg, ...arg1) {
//   const matches = []; // Don't change this line
//   console.log(arg1);
//   for (const el of arg) {
//     console.log(el);
//     if (arg1.includes(el)) {
//       matches.push(el);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// // Функція findMatches() приймає довільну кількість аргументів.
// //  Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// // Доповни код функції таким чином, щоб вона повертала новий масив matches,
// // в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// // Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2],
// // тому що тільки вони є в масиві першого аргументу.

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
////////////////////////////////////////////////////////////////////////////////////////
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// Додай об'єкту bookShelf ще два методи,
// які поки що будуть повертати просто рядки за аналогією
// з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>",
// де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
///////////////////////////////////////////////////////////////////////////////////////////////
