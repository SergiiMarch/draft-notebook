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
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const indexBook = this.books.indexOf(oldName);
//     this.books.splice(indexBook, 1, newName);
//     // Change code above this line
//     // this.books.push(newBook);
//     return this.books;
//   },
// };
// Доповни метод updateBook(oldName, newName) таким чином,
//  щоб він змінював назву книги з oldName на newName у властивості books.
//   Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
//    і splice() для того, щоб замінити цей елемент.
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
/////////////////////////////////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
//////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//     return this.potions;
//   },
// };

// Доповни метод addPotion(potionName) таким чином,
// щоб він додавав зілля potionName
//  в кінець масиву зілля у властивості potions.
// console.log(atTheOldToad.addPotion("Invisibility"));
//////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexPotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotion, 1);
//     // Change code above this line
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
///////////////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexName = this.potions.indexOf(oldName);
//     this.potions.splice(indexName, 1, newName);
//     // Change code above this line
//     return this.potions;
//   },
// };
// Доповни метод updatePotionName(oldName, newName) таким чином,
//  щоб він оновлював назву зілля з oldName на newName
//  в масиві зілля у властивості potions.
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//////////////////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i].name);
//       console.log(newPotion.name);
//       if (this.potions[i].name === newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return `Potion ${potionName} has been removed from your inventory!`;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return this.potions;
//   },
// };

// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
// getPotions() - метод для отримання всього зілля.
//  Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки,
// якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-
// зілля з назвою oldName на newName в масиві potions.
// console.log(atTheOldToad.addPotion({ name: "jtone skin", price: 520 }));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.potions);
// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
///////////////////////////////////////////////////////////////////////////////////
// function problem(x) {
//   //your code here
//   if (typeof x === "string") {
//     return "Error";
//   } else {
//     return x * 6 + 6;
//   }
// }
// console.log(problem("ty"));
////////////////////////////////////////////////////////////////////

// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// // Change code below this line
// console.log(productName);
// console.log(pricePerItem);
//////////////////////////////////////////////////////////
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// // Change code below this line
// console.log(message);
///////////////////////////////////////////////////////////////////////
// Магазин з продажу ремонтних дроїдів готовий до відкриття,
// залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);
/////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Функція add повинна вміти додавати три числа і виводити результат у консоль.
//  Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// // Доповни код функції таким чином, щоб у змінну message записувався рядок
// // "You picked <product name>, price per item is <product price> credits",
// // де <product name> і <product price> - це значення параметрів name і price.
// // Використовуй синтаксис шаблонних рядків.
// console.log(makeMessage("Radar", 6150));
////////////////////////////////////////////////////////////////////////////////////////////////
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//   const message = `"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`;

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));
//////////////////////////////////////////////////////////
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// // Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// //  і повертає повідомлення про результат.
// //   Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// // available - загальна кількість товарів на складі
// // ordered - одиниць товару в замовленні
// // Використовуючи розгалуження, доповни код функції таким чином, що:

// // Якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
// //  у змінну message записується рядок "Not enough goods in stock!".
// // В іншому випадку записується рядок "Order is processed, our manager will contact you.".
///////////////////////////////////////////////////////////////////////////////////////////////////
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   // Change code above this line
//   if (customerCredits >= totalPrice) {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   } else {
//     message = "Insufficient funds!";
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(5000, 10, 8000));
// // pricePerDroid - ціна одного дроїда
// // orderedQuantity - кіл-сть замовлених дроїдів
// // customerCredits - сума коштів на рахунку клієнта
// // Доповни її наступним функціоналом:

// // Оголоси змінну totalPrice для зберігання загальної суми замовлення
// //  і присвой їй вираз розрахунку цієї суми.
// // Додай перевірку, чи зможе клієнт оплатити замовлення:
// // якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// //  запиши у змінну message рядок "Insufficient funds!";
// // в іншому випадку, відніми суму покупки з рахунку клієнта і
// //  запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered < available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     ("The order is accepted, our manager will contact you");
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// // available - доступна кількість товарів на складі
// // ordered - одиниць товару в замовленні
// // Використовуючи розгалуження, доповни код функції таким чином, що:

// // Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0,
// // у змінну message присвоюється рядок "There are no products in the order!".
// // Якщо товарів у замовленні більше, ніж доступно товарів на складі,
// // то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// // В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Напишіть функцію, щоб розділити рядок і перетворити його на масив слів.
// function stringToArray(string) {
//   // code code code
//   return string.split(" ");
// }
// console.log(stringToArray("hellow my world"));
/////////////////////////////////////////////////////////////////////////////////////////////
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(1300));
// console.log(getDiscount(20000));
// console.log(getDiscount(5000));
// // Використовуючи розгалуження і логічні оператори, доповни код функції.

// // Якщо витрачено від 50000 (включно) або більше кредитів
// // - знижка 10% (золотий партнер)
// // Якщо витрачено від 20000 (включно) до 50000 кредитів
// //  - знижка 5% (срібний партнер)
// // Якщо витрачено від 5000 (включно) до 20000 кредитів
// //  - знижка 2% (бронзовий партнер)
// // Якщо витрачено менше 5000 кредитів
// // - знижка 0 (базовий партнер)
// // Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.
/////////////////////////////////////////////////////////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));

// // Використовуючи тернарний оператор, доповни функцію таким чином, що:
// // Якщо значення password і ADMIN_PASSWORD збігаються,
// //  присвой змінній message рядок "Access is allowed".
// // В іншому випадку, присвой message рядок "Access denied, wrong password!".
//////////////////////////////////////////////////////////////////////////////////////////
// // Функція getSubscriptionPrice(type) отримує рядок з типом передплати
// // користувача (параметр type),
// // перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну,
// // що зберігається у змінній price.
// // Якщо значення параметра type - це рядок:
// // "starter" - ціна передплати 0 кредитів.
// // "professional" - ціна передплати 20 кредитів.
// // "organization" - ціна передплати 50 кредитів.
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
//////////////////////////////////////////////////////////////////////////////////////////////////////
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// // Якщо значення параметра password:
// // дорівнює null, значить користувач скасував операцію
// //  і в message записується рядок "Canceled by user!".
// // збігається зі значенням ADMIN_PASSWORD,
// // у змінну message присвоюється рядок "Welcome!".
// // не задовольняє жодну з попередніх умов,
// // у змінну message записується рядок "Access denied, wrong password!".
// // Зроби рефакторинг коду, замінивши інструкцію if..else на switch,
// //  і не забудь про блок default (аналог else).
//////////////////////////////////////////////////////////////////////////////////////////////////////
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//       break;
//   }
//   // Change code above this line
//   return message;
// }
// // console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// // Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
// //  де замість <country> і <price>, необхідно підставити відповідні значення.
// // Список країн і вартість доставки:
// // China - 100 кредитів
// // Chile - 250 кредитів
// // Australia - 170 кредитів
// // Jamaica - 120 кредитів
// // Зі списку видно, що доставка можлива не скрізь.
// // Якщо зазначена країна відсутня у списку,
// // то функція повинна повернути рядок "Sorry, there is no delivery to your country"
//////////////////////////////////////////////////////////////////////////////////////////
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// // Change code above this line
// // courseTopicLength - довжина рядка.
// // firstElement - перший символ рядка.
// // lastElement - останній символ рядка.
//////////////////////////////////////////////////////////////////////////////////////////
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// // string - оригінальний рядок
// // length - кількість символів з початку рядка для підрядка
// // Присвой змінній substring вираз створення підрядка
// //  довжиною length символів (від початку) з рядка string.
////////////////////////////////////////////////////////////////////////////////////////
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length === maxLength) {
//     result = message;
//   } else {
//     result = message.slice(message, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }
// // console.log(formatMessage("Curabitur ligula sapien", 16));
// // console.log(formatMessage("Curabitur ligula sapien", 23));
// // console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// // console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// // Доповни код функції таким чином, що якщо довжина рядка:
// // не перевищує maxLength, функція повертає його в початковому вигляді.
// // більша за maxLength, то функція обрізає рядок до maxLength символів
// //  і додає в кінець три крапки "...", після чого повертає скорочену версію.
/////////////////////////////////////////////////////////////////////////////////////////
// function checkForSpam(message) {
//   let result =
//     message.toLowerCase().includes("sale") ||
//     message.toLowerCase().includes("spam");

//   return result;
// }
// console.log(checkForSpam("Trust me, this is not a spam message"));
// // Функція checkForSpam(message) приймає рядок (параметр message),
// // перевіряє його на вміст заборонених слів spam і sale,
// // і повертає результат перевірки. Слова в рядку параметра message можуть бути
// // у довільному регістрі, наприклад SPAM або sAlE.
// // Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// // Якщо в рядку відсутні заборонені слова, функція повертає буль false.
///////////////////////////////////////////////////////////////////////////////////
// function abbrevName(name) {
//   // code away
//   return name
//     .split(" ")
//     .map((name) => name[0].toUpperCase())
//     .join(".");
// }
// console.log(abbrevName("Sam Harris"));
//////////////////////////////////////////////////////////////////////////////////////
// const mouthSize = (animal) =>
//   animal.toLowerCase() === "aligator" ? "small" : "wide";
// // code here

// console.log(mouthSize("aligator"));
/////////////////////////////////////////////////////////////////////////////////////
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// // available - доступна кількість товарів на складі
// // ordered - кількість одиниць товару в замовленні
// // Виконай рефакторинг коду функції checkStorage,
// //  використовуючи патерн «раннє повернення».
/////////////////////////////////////////////////////////////////////////////////////
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line
// // lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// // lastElement	Значення останнього елемента масиву
// console.log(lastElementIndex);
// console.log(lastElement);
/////////////////////////////////////////////////////////////////////////////////////////
// function getExtremeElements(array) {
//   // Change code below this line
//   const res = [array[0], array[array.length - 1]];

//   return res;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
/////////////////////////////////////////////////////////////////////////////////////////
// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);
//   // Change code below this line

//   // Change code above this line
//   return words;
// }
// // Доповни код функції splitMessage(message, delimiter) таким чином,
// //  щоб вона повертала у змінній words результат поділу рядка
// //  message за роздільником delimiter - масив рядків.
// console.log(splitMessage("Mango hurries to the train", " "));
//////////////////////////////////////////////////////////////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const messageWord = message.split(" ").length * pricePerWord;
//   // Change code above this line
//   console.log(messageWord);
//   return messageWord;
// }
// // Сервісу гравірування прикрас потрібна функція,
// // яка б автоматично рахувала ціну гравірування,
// // залежно від кількості слів і ціни за слово.
// // Оголошена функція calculateEngravingPrice(message, pricePerWord).
// //  Ця функція приймає рядок, що складається зі слів,
// //  розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// // Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
/////////////////////////////////////////////////////////////////////////////////////////

// першій варіант----- const slugify = (title) => title.toLowerCase().split(" ").join("-");

// другій варіант-----------
// function slugify(title) {
//   // Change code below this line
//   const titleWords = title.toLowerCase().split(" ").join("-");

//   // Change code above this line
//   return titleWords;
// }

// // Напиши функцію slugify(title),
// // яка приймає заголовок статті,
// // параметр title, і повертає slug, створений з цього рядка.
// // Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// // Усі символи slug повинні бути у нижньому регістрі
// // Всі слова slug повинні бути розділені тире
// console.log(slugify("Arrays for begginers"));
/////////////////////////////////////////////////////////////////////////////////////////////////
