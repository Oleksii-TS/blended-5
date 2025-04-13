// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap(item => item.values);

// console.log(allValues);

// ________________________________________________________________________________________________________

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(number => number * number);

// console.log(squares);

// ________________________________________________________________________________________________________

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const hasUnder20 = people.some(person => person.age < 20);

// console.log(hasUnder20);

// ________________________________________________________________________________________________________

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const allEven = numbers.every(number => number % 2 === 0);

// console.log(allEven);

// ________________________________________________________________________________________________________

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOdd = numbers.find(number => number % 2 !== 0);

// console.log(firstOdd);

// ________________________________________________________________________________________________________

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedArray);

// ________________________________________________________________________________________________________

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sorted = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sorted);

// const words = [
//     "сонце",
//     "їжак",
//     "яблуко",
//     "іграшка",
//     "єнот",
//     "гора",
//     "світло",
//     "ґудзик",
//     "олень",
//     "зірка"
// ];

// const sorted2 = words.toSorted((a, b) => a.localeCompare(b));
// const sorted3 = words.toSorted();

// console.log(sorted2);
// console.log(sorted3);

// ________________________________________________________________________________________________________

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const over20 = user.filter(person => person.age > 20);

// console.log(over20);

// ________________________________________________________________________________________________________

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);;

// console.log(sum);

// ________________________________________________________________________________________________________

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//     { name: 'Milk', price: 20 },
//     { name: 'Bread', price: 10 },
//     { name: 'Eggs', price: 15 },
//   ];

//   const total = products
//   .filter(product => product.price > 10)
//   .reduce((sum, product) => sum + product.price, 0);

// console.log(total);

// ________________________________________________________________________________________________________

// Зібрати в allTopics масив всіх предметів всіх курсів.
// Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// Відсортуйте за алфавітом

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap(course => course.topics)
//   .filter((course, index, arr) => arr.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(allTopics);

// ________________________________________________________________________________________________________

// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//     { title: 'Post 1', likes: 20, category: 'Tech' },
//     { title: 'Post 2', likes: 45, category: 'Fashion' },
//     { title: 'Post 3', likes: 12, category: 'Tech' },
//     { title: 'Post 4', likes: 30, category: 'Fitness' },
//     { title: 'Post 5', likes: 15, category: 'Fashion' },
//     { title: 'Post 6', likes: 50, category: 'Tech' }
//   ];

//   const totalLikesFashion = posts
//   .filter(post => post.category === 'Fashion')
//   .reduce((sum, post) => sum + post.likes, 0);

// console.log(totalLikesFashion);

// ________________________________________________________________________________________________________

// Маємо масив об'єктів, який представляє список замовлень:
// Поверніть список товарів з усіх виконаних замовлень.
// Відсортуйте за алфавітом

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const completedProducts = orders
//   .filter(order => order.status === 'completed')
//   .flatMap(order => order.products)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(completedProducts);

// ________________________________________________________________________________________________________

// Напиши клас Rectangle який створює об'єкт
// з ​​властивостями height, width
// і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rect = new Rectangle(40, 5);
// console.log(rect.calculateArea());

// ________________________________________________________________________________________________________

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("Oleksii", "Oleksii@gmail.com");

// console.log(client.login);
// console.log(client.email);

// client.login = "Oleksii_TS";
// client.email = "Oleksii_TS@gmail.com";

// console.log(client.login);
// console.log(client.email);

// ________________________________________________________________________________________________________

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//   static MAX_PRICE = 40000;
//   #price;

//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }


// const phone = new Phone(25999);
// console.log(phone.price);

// phone.price = 37500;
// console.log(phone.price);

// phone.price = 45000;
// console.log(phone.price);

// ________________________________________________________________________________________________________