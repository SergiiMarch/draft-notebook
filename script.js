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
// /////////////////////////////////////////////////////////////////////////////////////////////////
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(2);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// // firstTwoEls - масив із перших двох елементів
// // nonExtremeEls - масив з усіх елементів, крім першого та останнього
// // lastThreeEls - масив із трьох останніх елементів
///////////////////////////////////////////////////////////////////////////////////////////////////
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray).slice(0, maxLength);
//   console.log(newArray);
//   // Change code above this line
//   return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// // Напиши функцію makeArray(firstArray, secondArray, maxLength)
// // для створення нового масиву з усіма елементами двох вихідних firstArray і
// // secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// // Якщо кількість елементів нового масиву більша за maxLength,
// // функція повинна повернути копію масиву довжиною maxLength елементів.
// // В іншому випадку функція повинна повернути новий масив повністю.
//////////////////////////////////////////////////////////////////////////////////////////////////
// function calculateTotal(number) {
//   // Change code below this line
//   let sumNumber = 0;
//   // Change code above this line
//   for (let i = number; i > 0; i -= 1) {
//     console.log(i);
//     sumNumber += i;
//   }
//   return sumNumber;
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(24));
// // Напиши функцію calculateTotal(number),
// // яка приймає ціле число (параметр number)
// // і повертає суму всіх цілих чисел від одиниці і до цього числа.
// // Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
//////////////////////////////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // Напиши функцію calculateTotalPrice(order),
// // яка приймає один параметр order - масив чисел,
// // і обчислює загальну суму його елементів.
// // Загальна сума елементів повинна зберігатися у змінній total,
// //  яка повертається як результат роботи функції.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function findLongestWord(string) {
//   // Change code below this line
//   const newWord = string.split(" ");
//   let longWord = " ";
//   // Change code above this line
//   for (let i = 0; i < newWord.length; i += 1) {
//     if (newWord[i].length > longWord.length) {
//       longWord = newWord[i];
//     }
//     console.log(newWord[i]);
//   }
//   return longWord;
// }
// // Напиши функцію findLongestWord(string),
// // яка приймає довільний рядок, що складається тільки зі слів,
// // розділених пробілом (параметр string),
// // і повертає найдовше слово в цьому рядку.
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(14, 17));
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   // Change code below this line
//   const resArray = [];
//   // Change code above this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       resArray.push(numbers[i]);
//     }
//   }
//   return resArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// // Напиши функцію filterArray(numbers, value),
// //  яка приймає масив чисел (параметр numbers) і
// //  повертає новий масив, в якому будуть тільки ті
// //  елементи масиву numbers, які більші за значення параметра value (число).
//////////////////////////////////////////////////////////////////////////////////////////
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// // Напиши функцію getCommonElements(array1, array2),
// // яка отримує два масиви довільної довжини в параметри array1 і array2,
// //  і повертає новий масив, що складається з тих елементів,
// //   які присутні в обох вихідних масивах.
// //   у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//////////////////////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
//////////////////////////////////////////////////////////////////////////////////////////
// const a = 3 % 3;
// console.log(a);
// const b = 4 % 3;
// console.log(b);
// const c = 11 % 8;
// console.log(c);
// const d = 12 % 7;
// console.log(d);
// const e = 8 % 6;
// console.log(e);
// // Оголошена змінна a
// // Значення змінної a - це число 0
// // Оголошена змінна b
// // Значення змінної b - це число 1
// // Оголошена змінна c
// // Значення змінної c - це число 3
// // Оголошена змінна d
// // Значення змінної d - це число 5
// // Оголошена змінна e
// // Значення змінної e - це число 2
// console.log(a);
//////////////////////////////////////////////////////////////////////////////////////////
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArray = [];
//   // Change code above this line
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }
// // Напиши функцію getEvenNumbers(start, end),
// // яка повертає масив усіх парних чисел від start до end.
// // Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// console.log(getEvenNumbers(6, 12));
//////////////////////////////////////////////////////////////////////////////////////////
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(16, 35, 7));
// // Виконай рефакторинг функції
// // findNumber(start, end, divisor) таким чином, щоб вона:
// // повертала перше число від start до end, яке ділиться на divisor без остачі
// // не використала оператор break
// // не використала змінну number
//////////////////////////////////////////////////////////////////////////////////////////
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   // Change code above this line
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// // Напиши функцію includes(array, value),
// //  яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє,
// //   чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// // При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
//////////////////////////////////////////////////////////////////////////////////////////
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// // Доповни функцію makeMessage таким чином,
// // щоб вона очікувала другим параметром (параметр callback) колбек-функцію
// //  і повертала її виклик.
// //  Функція deliverPizza або makePizza буде передаватися як колбек
// //  і очікувати аргументом ім'я готової піци, що доставляється.
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
//////////////////////////////////////////////////////////////////////////////////////////
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
//////////////////////////////////////////////////////////////////////////////////////////
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
/////////////////////////////////////////////////////////////////////////////////////////
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// // Необхідно написати логіку обробки замовлення піци.
// //  Виконай рефакторинг методу order таким чином,
// //  щоб він приймав другим і третім параметром два колбеки onSuccess і onSuccess.
// // Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
// //  метод order повинен повертати результат виклику колбека onError,
// //   передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// // Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
// // метод order повинен повертати результат виклику колбека onSuccess,
// //  передаючи йому аргументом назву замовленої піци.
//////////////////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
/////////////////////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
//////////////////////////////////////////////////////////////////////////////////////////
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// function wave(str) {
//   const res = [];
//   for (let i = 0; i < str.length; i += 1) {
//     res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//   }
//   return res;
// }
// console.log(wave("hello"));
/////////////////////////////////////////////////////////////////////////////////////////
// const filter = function (value, test) {
//   const newArray = [];
//   for (const el of value) {
//     console.log(el);
//     const newArray2 = test(el);
//     if (newArray2) {
//       newArray.push(el);
//     }
//     console.log(newArray2);
//   }

//   return newArray;
// };

// const callback1 = function (el) {
//   return el > 5;
// };
// const callback2 = function (el) {
//   return el >= 6;
// };
// // const r1 = filter([1, 2, 3, 4, 5]);
// console.log(filter([1, 2, 3, 4, 5, 7, 9, 11], callback1));
// console.log(filter([1, 2, 3, 4, 5, 7, 9, 11, 33, 43, 21, 28], callback2));
///////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// console.log(calculateTotalPrice(5, 100));
///////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };
// console.dir(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
////////////////////////////////////////////////////////////////////////////////////////////////////
// const changeEven = (numbers, value) => {
//   // Change code below this line
//   let newArray = [...numbers];

//   newArray.forEach((el, index, arr) => {
//     console.log(numbers);

//     if (el % 2 === 0) {
//       arr[index] = el + value;
//     }
//   });
//   return newArray;
// };
// // Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10));
////////////////////////////////////////////////////////////////////////////////////////////////////
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(
//   (planet) => `Планета ${planet.toUpperCase()} має довжbну ${planet.length}`
// );
// console.log(planetsLengths);
//////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title.toUpperCase());
// console.log(titles);
// // Використовуючи метод map(),
// // зроби так, щоб у змінній titles вийшов масив назв книг
// //  (властивість title) з усіх об'єктів масиву books.
////////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
// // Використовуючи метод flatMap(),
// // зроби так, щоб у змінній genres вийшов масив усіх жанрів книг
// // (властивість genres) з масиву книг books.
///////////////////////////////////////////////////////////////////////////////////////////////////////
// // Change code below this line
// const getUserNames = (users) => users.map((user) => user.name);
// const getUserNames1 = (users) => users.map((user) => user.email);

// // Change code above this line
// // Доповни функцію getUserNames(users) таким чином,
// //  щоб вона повертала масив імен користувачів
// //  (властивість name) з масиву об'єктів в параметрі users.
// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// console.log(
//   getUserNames1([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
///////////////////////////////////////////////////////////////////////////////////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
//////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (value, index, array) => array.indexOf(value) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);
// // Доповни код таким чином,
// //  щоб у змінній allGenres був масив всіх жанрів книг
// //   (властивість genres) з масиву books,
// //   а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// const ratings = books.map((book) => book.rating);

// console.log(ratings);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// // У змінній topRatedBooks утворився масив книг,
// //  рейтинг яких (властивість rating)
// //   більший за або дорівнює значенню змінної MIN_RATING.
// // У змінній booksByAuthor утворився масив книг,
// // написаних автором з ім'ям (властивість author),
// // яке збігається зі значенням у змінній AUTHOR.
///////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };
// // Change code above this line
// // Доповни функцію getUsersWithEyeColor(users, color)
// // таким чином, щоб вона повертала масив користувачів,
// // у яких колір очей (властивість eyeColor) збігається
// // зі значенням параметра color.
// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],

//     "green"
//   )
// );
//////////////////////////////////////////////////////////////////////////////////////
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age > minAge && user.age < maxAge);
// };
// // Доповни функцію getUsersWithAge(users, minAge, maxAge)
// // таким чином, щоб вона повертала масив користувачів,
// // вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],

//     20,
//     30
//   )
// );
////////////////////////////////////////////////////////////////////////////////

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(
//   getUsersWithFriend(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],

//     "Briana Decker"
//   )
// );
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);

// // Change code above this line
// console.log(
//   getFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// // Доповни функцію getFriends(users) таким чином,
// //  щоб вона повертала масив друзів всіх користувачів
// //   (властивість friends).
// //    У декількох користувачів можуть бути однакові друзі,
// //     зроби так, щоб масив, що повертається, не містив повторень.
/////////////////////////////////////////////////////////////////////////////
// const getActiveUsers = (users) => users.filter((user) => !user.isActive);

// // Доповни функцію getActiveUsers(users) таким чином,
// //  щоб вона повертала масив активних користувачів,
// //   значення властивості isActive яких - true.
// console.log(
//   getActiveUsers([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// // Change code below this line
/////////////////////////////////////////////////////////////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// // У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// // У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// // У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// // У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// // У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// // У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
///////////////////////////////////////////////////////////////////////////////////////////////////
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, times) => (acc += times), 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// // Ігровому сервісу необхідний функціонал підрахунку середнього часу,
// //  проведеного в іграх. Доповни код таким чином,
// //   щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
// console.log(totalPlayTime);
///////////////////////////////////////////////////////////////////////////////////////////////////
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = [...players].reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// // Нашому сервісу необхідно розрахувати середній час,
// //  проведений в одній грі для кожного гравця,
// //  і отримати загальну суму цих значень часу.
// //  Розрахувати час для кожного з гравців можна,
// //  розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// console.log(totalAveragePlaytimePerGame);
//////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const calculateTotalBalance = (users) =>
//   [...users].reduce((acc, user) => acc + user.balance, 0);

// // Доповни функцію calculateTotalBalance(users) таким чином,
// //  щоб вона рахувала і повертала суму всіх коштів (властивість balance),
// //   які зберігають користувачі з масиву users.
// console.log(
//   calculateTotalBalance([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
////////////////////////////////////////////////////////////////////////////////////
// const getTotalFriendCount = (users) =>
//   users
//     // .flatMap((user) => user.friend)

//     .reduce((acc, user) => acc + user.friends.length, 0);

// console.log(
//   getTotalFriendCount([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

// // Доповни функцію getTotalFriendCount(users) таким чином,
// //  щоб вона рахувала і повертала загальну кількість друзів
// //   (властивість friends) усіх користувачів з масиву users.
//////////////////////////////////////////////////////////////////////////////////////////////////
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
//////////////////////////////////////////////////////////////////////////////////////////////////
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);
// // Онлайн бібіліотеці необхідно відображати книги,
// // відсортовані за автором, в алфавітному і зворотному алфавітному порядку.
// //  Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
// //   відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
// //   відсортована у зворотному алфавітному порядку.
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// // У змінній sortedByAuthorName вийшов масив книг,
// //  відсортований за ім'ям автора в алфавітному порядку.
// // У змінній sortedByReversedAuthorName вийшов масив книг,
// //  відсортований за ім'ям автора у зворотному алфавітному порядку.
// // У змінній sortedByAscendingRating вийшов масив книг,
// //  відсортований за зростанням рейтингу.
// // У змінній sortedByDescentingRating вийшов масив книг,
// //  відсортований за спаданням рейтингу.
/////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Change code above this line
// // Доповни функцію sortByAscendingBalance(users) таким чином,
// //  щоб вона повертала масив користувачів,
// //   відсортований за зростанням їх балансу (властивість balance).
// console.log(
//   sortByAscendingBalance([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
///////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);
// // Доповни код таким чином,
// // щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// //  рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
//////////////////////////////////////////////////////////////////////////////
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };
// console.log(
//   getNamesSortedByFriendCount([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: [
//         "Jacklyn Lucas",
//         "Linda Chapman",
//         "Adrian Cross",
//         "Solomon Fokes",
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
// // Доповни функцію getNamesSortedByFriendCount(users) таким чином,
// //  щоб вона повертала масив імен користувачів,
// //  відсортований за зростанням кількості їхніх друзів (властивість friends).
////////////////////////////////////////////////////////////////////////////////////////
// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friend, idx, arr) => arr.indexOf(friend) === idx)
//     .sort((a, b) => a.localeCompare(b));
// };

// // Доповни функцію getSortedFriends(users) таким чином,
// //  щоб вона повертала масив унікальних імен друзів (властивість friends),
// //   відсортований за алфавітом.
// console.table(
//   getSortedFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: [
//         "Jacklyn Lucas",
//         "Linda Chapman",
//         "Adrian Cross",
//         "Solomon Fokes",
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
////////////////////////////////////////////////////////////////////////
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, value) => acc + value.balance, 0);

// console.log(
//   getTotalBalanceByGender(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: [
//           "Jacklyn Lucas",
//           "Linda Chapman",
//           "Adrian Cross",
//           "Solomon Fokes",
//         ],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "female"
//   )
// );
// // Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// //  щоб вона повертала загальний баланс користувачів (властивість balance),
// //  стать яких (властивість gender) збігається зі значенням параметра gender.
////////////////////////////////////////////////////////////////////////////////////////////////////

// const items = (a) => {
//   return a >= 0 ? "Число додатнє" : "Чісло від'ємне";
// };
// console.log(items(4));

// // Дано число. Проверьте, отрицательное оно или нет.
// // Выведите об этом информацию в консоль.
/////////////////////////////////////////////////////////////////////////////////////////////////

// // Дана строка. Выведите в консоль длину этой строки.
// let myString = "Це рядок тексту.";
// let longString = myString.length;
// console.log(longString);
////////////////////////////////////////////////////////////////////////////////////////////////
// let myString = "Це рядок тексту.";
// // console.log(myString[myString.length - 1]);
// console.log(myString.slice(-1));

// // Дана строка. Выведите в консоль последний символ строки.
///////////////////////////////////////////////////////////////////////////////////////////////
// function number(b) {
//   return b % 2 === 0 ? "even" : "odd";
// }
// console.log(number(6));

// // Дано число. Проверьте, четное оно или нет.
///////////////////////////////////////////////////////////////////////////////////////////////

// function words(word1, word2) {
//   return word1[0] === word2[0];
// }

// console.log(words("winner", "write"));
// // Даны два слова. Проверьте, что первые буквы этих слов совпадают.
///////////////////////////////////////////////////////////////////////////////////////////////
// function words(name, letter) {
//   if (name[name.length - 1] === letter) {
//     return name[name.length - 2];
//   }
//   return name[name.length - 1];
// }

// console.log(words("Василь", "ь"));
// // Дано слово. Получите его последнюю букву.
// //  Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
///////////////////////////////////////////////////////////////////////////////////////////
// function numberOne(number) {
//   return Number(String(number)[0]);
// }
// console.log(numberOne(2345));

// // Дано число. Выведите в консоль первую цифру этого числа
////////////////////////////////////////////////////////////////////////////////////////
// function numberOne(number) {
//   return Number(String(number).slice(-1));
// }
// console.log(numberOne(2345443));
// // Дано число. Выведите в консоль последнюю цифру этого числа.
//////////////////////////////////////////////////////////////////////////////////////

// function numberSum(number) {
//   const numberString = String(number);
//   return Number(numberString[0]) + Number(numberString.slice(-1));
// }
// console.log(numberSum(43455442));
// // Дано число.
// // Выведите в консоль сумму первой и последней цифры этого числа.
/////////////////////////////////////////////////////////////////////////////////////
// const number = 23456333;
// const numberLength = String(number).length;
// console.log(numberLength);

// // Дано число. Выведите количество цифр в этом числе.
////////////////////////////////////////////////////////////////////////////////////
// function number(value1, value2) {
//   // return Number(String(value1)[0]) === Number(String(value2)[0]);
//   const numValue1 = parseInt(value1.toString()[0]);
//   const numValue2 = parseInt(value2.toString()[0]);
//   return numValue1 === numValue2;
// }
// console.log(number(413, 414));
// // Даны два числа.
// // Проверьте, что первые цифры этих чисел совпадают.
//////////////////////////////////////////////////////////////////////////////////
// function words(str) {
//   if (str.length > 1) {
//     return str[str.length - 2];
//   }
//   return str;
// }
// console.log(words("Helllo"));
// // Дана строка. Если в этой строке более одного символа,
// //  выведите в консоль предпоследний символ этой строки.
/////////////////////////////////////////////////////////////////////////////////////
// function number(a, b) {
//   return a % b === 0 ? `Число ${a} проходить` : `Не проходить`;
// }

// // Даны два целых числа.
// // Проверьте, что первое число без остатка делится на второе.
// console.log(number(4, 2));
///////////////////////////////////////////////////////////////////////////////////
// function number(a) {
//   let res = [];
//   for (let i = 0; i <= a; i += 1) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(number(100));
// Выведите в консоль все целые числа от 1 до 100.
////////////////////////////////////////////////////////////////////////////////
// function number(a) {
//   let res = [];
//   for (let i = a; i <= 0; i += 1) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(number(-100));
// Выведите в консоль все целые числа от -100 до 0.
////////////////////////////////////////////////////////////////////////////////
// function number(a) {
//   let res = [];
//   for (let i = 1; i <= a; i += 1) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(number(100));
// // Выведите в консоль все четные числа из промежутка от 1 до 100.
//////////////////////////////////////////////////////////////////////////////
// function number(a) {
//   let res = [];
//   for (let i = a; i >= 1; i -= 1) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(number(100));

// // Выведите в консоль все целые числа от 100 до 1.
////////////////////////////////////////////////////////////////////////////
// function number(a) {
//   let res = [];
//   for (let i = 1; i <= a; i += 1) {
//     if (i % 3 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(number(100));

// // Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
////////////////////////////////////////////////////////////////////////////
// function numberSumValue(a) {
//   let res = 0;
//   for (let i = 1; i <= a; i += 1) {
//     res += i;
//   }
//   return res;
// }
// console.log(numberSumValue(100));
// // Найдите сумму всех целых чисел от 1 до 100.
/////////////////////////////////////////////////////////////////////////////
// function numberSumValue(a) {
//   let res = 0;
//   for (let i = 1; i <= a; i += 1) {
//     if (i % 2 === 0) {
//       res += i;
//     }
//   }
//   return res;
// }
// console.log(numberSumValue(100));
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
/////////////////////////////////////////////////////////////////////////////
// function numberSumValue(a) {
//   let res = 0;
//   for (let i = 1; i <= a; i += 1) {
//     if (i % 2 !== 0) {
//       res += i;
//     }
//   }
//   return res;
// }
// console.log(numberSumValue(100));
// // Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
////////////////////////////////////////////////////////////////////////////////
// const numberEven = (a, b) => a % b;
// console.log(numberEven(5, 2));
// // Даны два целых числа. Найдите остаток от деления первого числа на второе.
////////////////////////////////////////////////////////////////////////////////
// function wordString(str) {
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     console.log(str[i]);
//   }
// }
// console.log(wordString("Hello"));
// // Дана некоторая строка.
// // Переберите и выведите в консоль по очереди все символы с конца строки.
//////////////////////////////////////////////////////////////////////////////
// const isIsogram = (str) =>
//   [...str.toLowerCase()].every((el, idx, arr) => arr.indexOf(el) === idx);

// //...

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("hElo"));
///////////////////////////////////////////////////////////////////////////////
// function sumArray(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   console.log(min);
//   console.log(max);
//   let sum = 0;
//   for (let el of arr) {
//     sum += el;
//   }
//   return sum - min - max;
// }
// console.log(sumArray([11, 2, 8, 1, 1, 2]));
///////////////////////////////////////////////////////////////////////

// function likes(names) {
//   let message = "";

//   if (names.length === 0) {
//     message = "no one likes this";
//   } else if (names.length === 1) {
//     message = `${names} likes this`;
//   } else if (names.length === 2) {
//     message = `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     message = `${names[0]}, ${names[1]} and ${
//       names.length - 2
//     } others like this`;
//   }

//   return message;
// }

// // Реалізуйте функцію, яка приймає масив,
// // що містить імена людей, яким подобається предмет.
// //  Він повинен повертати відображуваний текст,
// //   як показано в прикладах:
// // []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// // Примітка. Для 4 і більше імен число "and 2 others"просто збільшується.

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Alex", "Jacob"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob"]));
// console.log(
//   likes([
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Alex",
//     "Jacob",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Alex",
//     "Jacob",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Alex",
//     "Jacob",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Alex",
//     "Jacob",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Alex",
//     "Jacob",
//   ])
// );
/////////////////////////////////////////////////////////////////////////////////////
// function switchItUp(number) {
//   //Write your own Code!
//   switch (number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eight";
//     case 9:
//       return "Ninght";
//   }
// }
// console.log(switchItUp(5));
///////////////////////////////////////////////////////////////////////////////////////
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// // Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
// console.log(child.heritage);
////////////////////////////////////////////////////////////////////////////////////////
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// // Зміни код, побудувавши ланцюжок прототипів таким чином,
// //  щоб об'єкт ancestor був прототипом для parent,
// //  а той, своєю чергою, був прототипом для child.
// console.dir(ancestor);
// console.dir(parent);
// console.dir(child);
///////////////////////////////////////////////////////////////////////////////////////////
function findDifference(a, b) {
  //loading...
  let resA = a[0];
  let resB = b[0];
  for (let i = 1; i < a.length; i += 1) {
    resA *= a[i];
    console.log(resA);
  }
  for (let j = 1; j < b.length; j += 1) {
    resB *= b[j];
  }
  return resA > resB ? resA - resB : resB - resA;
}
console.log(findDifference([2, 2, 3], [5, 7, 4, 1]));
// У цій простій вправі ви створите програму,
//  яка прийматиме два списки цілих чисел aі b.
//   Кожен список складатиметься з 3 натуральних чисел вище 0,
//   що представляють розміри кубоїдів aі b.
//    Ви повинні знайти різницю об’ємів кубоїдів незалежно від того, який із них більший.
// Наприклад, якщо передані параметри — ([2, 2, 3], [5, 4, 1]), обсяг a— 12,
//  а обсяг b— 20. Таким чином, функція має повернути 8.
// Вашу функцію буде перевірено на готових прикладах, а також на випадкових.
// Якщо можете, спробуйте написати це в одному рядку коду.
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return this.price = newPrice
//   }
// }
// console.log(new Car("Audi", "Q3", 36000));
// // Додай класу Car метод constructor,
// // який приймає три параметри:
// // brand - марка автомобіля.
// // model - модель автомобіля.
// // price - ціна автомобіля.
// // Клас Car повинен створювати об'єкт з однойменними властивостями brand,
// //  model і price, значеннями яких повинні бути
// //   передані аргументи під час його виклику з оператором new.

// // Виконай рефакторинг класу Car таким чином,
// // щоб він приймав один параметр - об'єкт з властивостями brand,
// //  model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
//////////////////////////////////////////////////////////////////////////////////////////////////
// Change code above this line

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const idxItems = this.items.findIndex((item) => item === itemToRemove);
//     if (!!~idxItems) {
//       this.items.splice(idxItems, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // Напиши клас Storage, який буде створювати
// // об'єкти для управління складом товарів.
// // Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.
// // Оголоси наступні методи класу:
// // getItems() - повертає масив поточних товарів у
// // властивості items об'єкта, який викликає цей метод.
// // addItem(newItem) - приймає новий товар newItem і
// // додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// // removeItem(itemToRemove) - приймає товар itemToRemove
// // і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code above this line
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // Напиши клас StringBuilder, який приймає один параметр
// // initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.
// // Оголоси наступні методи класу:
// // getValue() - повертає поточне значення властивості value.
// // padEnd(str) - отримує параметр str (рядок)
// // і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// // padStart(str) - отримує параметр str (рядок)
// // і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// // padBoth(str) - отримує параметр str (рядок)
// //  і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// // Виконай рефакторинг класу Car таким чином,
// // щоб властивість brand була приватною,
// // і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// // getBrand() - повертає значення приватної властивості brand.
// // changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
// // Виконай рефакторинг класу Storage, зробивши властивість items приватною.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// //  в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }
// // Виконай рефакторинг класу Car.
// // Зроби властивості model і price приватними,
// // а також #brand. Стандартизуй публічний інтерфейс класу,
// // замінивши вже оголошені методи на гетери та сетери brand,
// // model і price, для взаємодії з приватними властивостями.

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// function numberArray(arr) {
//   return arr.reduce((sum, num) => sum + num ** 2, 0);
// }
// console.log(numberArray([1, 2, 3, 4, 5]));
// // Дан массив с числами.
// // Найдите сумму квадратов элементов этого массива.
//////////////////////////////////////////////////////////////////////////////
// function numberArray(arr) {
//   return arr.reduce((sum, num) => sum + Math.sqrt(num), 0);
// }
// console.log(numberArray([1, 2, 3, 4, 5]));
// // Дан массив с числами.
// //  Найдите сумму квадратных корней элементов этого массива.
/////////////////////////////////////////////////////////////////////////////
// // function numberArray(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i += 1) {
// //     if (arr[i] > 0) {
// //       sum += arr[i];
// //     }
// //   }
// //   return sum;
// // }
// const numberArray = (arr) =>
//   arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

// console.log(numberArray([1, -2, 3, 4, 5]));
// // Дан массив с числами.
// //  Найдите сумму положительных элементов этого массива.
/////////////////////////////////////////////////////////////////////////////////////////////
// function numberArray(arr) {
//   return arr.reduce((sum, num) => (num > 0 && num < 10 ? sum + num : sum), 0);
// }
// console.log(numberArray([11, 2, 3, 4, 15]));
// // Дан массив с числами.
// //  Найдите сумму тех элементов этого массива,
// //   которые больше нуля и меньше десяти.
///////////////////////////////////////////////////////////////////////////////////////////
// const stringArray = (str) => str.split("");

// console.log(stringArray("abcde"));
// // Получите массив букв этой строки.
///////////////////////////////////////////////////////////////////////////////////////////
// const stringArray = (str) => str.split("").map(Number);

// console.log(stringArray("12345"));
// // Получите массив цифр этого числа.
//////////////////////////////////////////////////////////////////////////////////////////

// Дано некоторое число:
// const numberArray = (num) => String(num).split("").reverse().map(Number);
// // function numberArray(num) {
// //   let newArr = [];
// //   let res = String(num).split("");
// //   for (let i = res.length - 1; i >= 0; i -= 1) {
// //     console.log(res[i]);
// //     newArr.push(res[i]);
// //   }
// //   return newArr;
// // }
// console.log(numberArray(12345));
// // 12345
// // Переверните его:

// // 54321
/////////////////////////////////////////////////////////////////////////////////////////////

// const numberSumArr = (num) =>
//   String(num)
//     .split("")
//     .map(Number)
//     .reduce((acc, el) => (acc += el), 0);
// console.log(numberSumArr(12345));
// // 12345
// // Найдите сумму цифр этого числа.
///////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 490
// // Виконай рефакторинг класу Car.
// //  Додай публічну статичну властивість MAX_PRICE зі значенням 50000
// //   - максимально допустима ціна автомобіля.
// // Додай сетеру price перевірку значення параметра newPrice,
// //  що передається. Якщо воно більше за MAX_PRICE,
// //  сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return this.#MAX_PRICE < price
//       ? "Error! Price exceeds the maximum"
//       : "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // Додай класу Car публічний статичний метод
// // checkPrice (price), що приймає ціну автомобіля.
// // Метод повинен порівняти значення параметра price і
// // приватної статичного властивості MAX_PRICE.
// // Якщо ціна автомобіля перевищує максимальну,
// // метод повинен повернути рядок "Error! Price exceeds the maximum".
// // В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }
// console.log(Admin.AccessLevel.SUPERUSER);
/////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// // Додай класу Admin метод constructor,
// //  який приймає один параметр - об'єкт налаштувань
// //   з двома властивостями email і accessLevel.
// //   Додай класу Admin публічну властивість accessLevel,
// //   значення якої буде передаватися під час виклику конструктора.
// // Щоб показати, як буде використовуватися клас Admin,
// //  ми додали ініціалізацію екземпляра під оголошенням класу.
////////////////////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   _email;

//   constructor(email) {
//     this._email = email;
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     this._email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// // Додай класу Admin наступні властивості і методи.
// // Публічну властивість blacklistedEmails для зберігання чорного списку
// // поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// // Публічний метод blacklist(email) для додавання пошти у чорний список.
// //  Метод повинен додавати значення параметра email в масив,
// //   що зберігається у властивості blacklistedEmails.
// // Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// //  Метод повинен перевіряти наявність значення параметра email в масиві,
// //   що зберігається у властивості blacklistedEmails, і повертати true або false.
// // Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// //  в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
///////////////////////////////////////////////////////////////////////////////////////////////////
// function numberArr(num) {
//   const res = [];
//   for (let i = 1; i <= num; i += 1) {
//     res.push(i);
//   }

//   return res;
// }
// console.log(numberArr(10));
// // Заполните массив целыми числами от 1 до 10.
////////////////////////////////////////////////////////////////////////////////////////////////////
// const newNam = function (num) {
//   const resArray = [];
//   for (let i = 1; i <= 100; i += 1) {
//     if (i % 2 === 0) {
//       resArray.push(i);
//     }
//   }
//   return resArray;
// };

// console.log(newNam(100));
// // Заполните массив четными числами из промежутка от 1 до 100.
///////////////////////////////////////////////////////////////////////////////////////////////////////
// function newArray(array) {
//   const res = [];
//   for (let i = 0; i < array.length; i += 1) {
//     let arr1 = array[i].toFixed(1);
//     res.push(parseFloat(arr1));
//   }
//   return res;
// }
// console.log(newArray([1.456, 2.125, 3.32, 4.1, 5.34]));
// // Дан массив с дробями:
// // [1.456, 2.125, 3.32, 4.1, 5.34]
// // Округлите эти дроби до одного знака в дробной части.

// варіант рішення задачі номер два
// const newArray1 = (arr) => arr.map((el) => parseFloat(el.toFixed(1)));
// console.log(newArray1([1.456, 2.125, 3.32, 4.1, 5.34]));
/////////////////////////////////////////////////////////////////////////////////////////////////////
// function rentalCarCost(d) {
//   // Your solution here
//   if (d < 0) {
//     return "Введіть додатнє число";
//   }
//   let sum = d * 40;
//   if (d >= 7) {
//     sum -= 50;
//   } else if (d >= 3) {
//     sum -= 20;
//   }
//   return sum;
// }
// console.log(rentalCarCost(7));
// // Після важкої роботи в офісі ви вирішили трохи відпочити у відпустці.
// // Тож ви забронюєте рейс для себе та вашої дівчини та спробуєте залишити весь безлад позаду.
// // Вам знадобиться орендований автомобіль, щоб пересуватися під час відпустки.
// // Менеджер автопрокату робить вам вигідні пропозиції.
// // Кожен день оренди автомобіля коштує 40 доларів.
// //  Якщо ви орендуєте автомобіль на 7 і більше днів,
// //  ви отримуєте знижку 50 доларів США.
// //  Крім того, якщо ви орендуєте автомобіль на 3 або більше днів, ви отримуєте 20 доларів США від загальної суми.
// // Напишіть код, який видає загальну суму за різні дні (d).
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function countPositivesSumNegatives(input) {
//   // your code here
//   if (!input || input.length === 0) {
//     return [];
//   }

//   let countPositives = 0;
//   let sumNegatives = 0;
//   for (let i = 0; i < input.length; i += 1) {
//     if (input[i] > 0) {
//       countPositives++;
//     } else {
//       sumNegatives += input[i];
//     }
//   }

//   return [countPositives, sumNegatives];
// }
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
// // Дано масив цілих чисел.
// // Повертає масив, де перший елемент — це кількість додатних чисел,
// //  а другий — сума від’ємних чисел. 0 не є ні позитивним, ні негативним.
// // Якщо введення є порожнім масивом або має значення null, повертає порожній масив.
// // приклад
// // Для введення [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]вам слід повернутися [10, -65].
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function findUniq(arr) {
//   // do magic
//   let res;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       res = arr[i];
//     }
//   }
//   return res;
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([2, 2, 2, 2, 2, 1]));
// // Є масив із кількома числами. Усі числа рівні, крім одного. Спробуйте знайти його!
// // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// // Гарантовано, що масив містить принаймні 3 числа.
// // Тести містять дуже великі масиви, тому подумайте про продуктивність.
// // Це перше ката в серії:
// // Знайдіть унікальне число (ця ката)
// // Знайдіть унікальний рядок
// // Знайдіть унікальне
////////////////////////////////////////////////////////////////////                        ////////////////////////////////////////////////////////////
// const array = [
//   "http://example.com",
//   "https://example.org",
//   "ftp://example.net",
//   "http://another.com",
// ];
// const arrayRes = [];
// for (const el of array) {
//   console.log(el);
//   if (el.startsWith("http://")) {
//     arrayRes.push(el);
//   }
// }
// console.log(arrayRes);
// // Дан массив со строками.
// //  Оставьте в этом массиве только те строки,
// //  которые начинаются на http://.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const array = ["index.html", "page.html", "style.css", "script.js"];
// const res = array.filter((el) => el.endsWith("html"));
// console.log(res);
// // Дан массив со строками.
// // Оставьте в этом массиве только те строки,
// //  которые заканчиваются на .html.
/////////////////////////////////////////////////////////////////////////////////////////////////////
// // function numberArray(arr) {
// //   const newArr = [];
// //   for (let i = 0; i < arr.length; i += 1) {
// //     newArr.push(arr[i] * (1 + 10 / 100));
// //   }
// //   return newArr;
// // }
// // ДРУГИЙ ВАРІАНТ=
// const numberArray = (arr) => arr.map((num) => num * 1.1);

// console.log(numberArray([1, 4, 10, 20, 100, 1345]));
// // Дан массив с числами.
// // Увеличьте каждое число из
// // массива на 10 процентоd
////////////////////////////////////////////////////////////////////////////
// function findUniq(arr) {
//   // do magic
//   const res = [...new Set(arr)]
//   return res;
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([2, 2, 2, 2, 2, 1]));
// відалення дублікату із масіву
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const numArray = (num) => String(num).split("").reverse().join("");

// console.log(numArray(12345));
// // 12345
// // Выведите в консоль все его символы с конца.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function arrNumEl(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     res.push(arr.slice(i, i + 2));
//   }
//   return res;
// }
// console.log(arrNumEl([1, 2, 3, 4, 5, 6,7]));
// // Дан некоторый массив,
// //  например, вот такой:

// // [1, 2, 3, 4, 5, 6]
// // По очереди выведите в консоль
// // подмассивы из двух элементов нашего массива:

// // [1, 2]
// // [3, 4]
// // [5, 6]
///////////////////////////////////////////////////////////////////////////////////////////////////
// // Даны два массива:
// // Слейте эти массивы в новый массив:

// // [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
/////////////////////////////////////////////////////////////////////////////////////////////////
// function firstString(str) {
//   return str.indexOf("0");
// }
// console.log(firstString("ghbdtn0"));
// // Дана некоторая строка. Найдите позицию первого нуля в строке.
///////////////////////////////////////////////////////////////////////////////////////////
// function arrElement(arr, d) {
//   return arr.filter((el) => el !== d);
// }
// console.log(arrElement(["str", 1, 3, "and", 7], "and"));
// // Дан массив. Удалите из него элементы с заданным значением.
///////////////////////////////////////////////////////////////////////////////////////////
// function sunArray(arr) {
//   const sum = Math.floor(arr.length / 2);
//   const sum1 = arr.slice(0, sum);
//   const res = sum1.reduce((acc, el) => (acc += el), 0);
//   return res;
// }
// console.log(sunArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// // Дан некоторый массив, например, вот такой:
// // [1, 2, 3, 4, 5, 6]
// // Найдите сумму первой половины элементов этого массива.
///////////////////////////////////////////////////////////////////////////////////////////////
Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
