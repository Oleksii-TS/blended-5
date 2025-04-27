// Task-1

// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.

const button = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');
console.log(button);
console.log(input);

button.addEventListener("click", () => { console.log(input.value)})

// ________________________________________________________________________________________________________
// Task-2

// 1 - Отримай body елемент і виведи його в консоль
const bodyEl = document.body;
console.log(bodyEl);

// 2 - Отримай елемент id="title" і виведи його в консоль
const title = document.querySelector("#title");
console.log(title);

// 3 - Отримай елемент class="list" і виведи його в консоль
const list = document.querySelector(".list");
console.log(list);

// 4 - Отримай всі елементи з атрибутом data-topic і виведи їх в консоль
const dataTopicElements = document.querySelectorAll("[data-topic]");
console.log(dataTopicElements);

// 5 - Отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль
const firstDataTopicEl = dataTopicElements[0];
console.log(firstDataTopicEl);

// 6 - Отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль
const lastDataTopicEl = dataTopicElements[dataTopicElements.length - 1];
console.log(lastDataTopicEl);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headingsH3 = document.querySelectorAll("h3");
console.log(headingsH3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
headingsH3.forEach((heading) => {
  heading.classList.add("active");
});

// 10 - Знайти елемент li, який має атрибут data-topic="navigation" і вивести його в консоль
const liEl = document.querySelector('li[data-topic="navigation"]');
console.log(liEl);

// 11 - Додати для знайденого елемента стиль, щоб зробити backgroundColor жовтим
liEl.style.backgroundColor = "#fbec5d";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = liEl.querySelector("p");

paragraph.textContent = "Я змінив тут текст!";

//  18 — створити новий елемент вручну через createElement і додати його в кінець списку:
// const listEl = document.querySelector('.list');

// const newLi = document.createElement('li');

// const newH3 = document.createElement('h3');
// newH3.textContent = 'Властивість innerHTML';

// const newP = document.createElement('p');
// newP.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

// newLi.appendChild(newH3);
// newLi.appendChild(newP);

// listEl.appendChild(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()3
const listEl = document.querySelector('.list');

const template = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;

listEl.insertAdjacentHTML('beforeend', template);

// Завдання 2
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.createElement('div');
numberContainer.classList.add('number-container');

document.body.appendChild(numberContainer);

for (let i = 0; i < 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');

    const num = randomNumber();
    numberDiv.textContent = num;

    if (num % 2 === 0) {
        numberDiv.classList.add('even');
      } else {
        numberDiv.classList.add('odd');
      }

      numberContainer.appendChild(numberDiv);
    }

// Завдання 3

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".

const usernameInput = document.querySelector(".js-username-input");
const spanEl = document.querySelector(".js-username-output");
const formEl = document.querySelector(".js-contact-form");

usernameInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;

  if (inputValue.length > 6) {
    usernameInput.classList.add("success");
    usernameInput.classList.remove("error");
  } else {
    usernameInput.classList.add("error");
    usernameInput.classList.remove("success");
  }

  if (inputValue === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputValue;
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

usernameInput.addEventListener("focus", () => {
  const value = usernameInput.value.trim();

  if (value === "") {
    usernameInput.style.outline = "3px solid red";
  } else {
    usernameInput.style.outline = "3px solid green";
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

usernameInput.addEventListener("blur", () => {
  const value = usernameInput.value.trim();

  if (value === "") {
    usernameInput.style.outline = "3px solid red";
  } else {
    usernameInput.style.outline = "3px solid lime";
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. 
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = usernameInput.value.trim();
  const checkboxElem = document.querySelector(".js-policy-checkbox");

  if (checkboxElem.checked && value !== "") {
    const userData = { userName: value };
    console.log(userData);
  } else {
    alert("Заповніть всі поля");
  }  

  usernameInput.value = "";
  checkboxElem.checked = false;
  spanEl.textContent = "Anonymous";
});


// Завдання 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// Знаходимо елементи
const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

// Функція для зменшення розміру
decreaseBtn.addEventListener('click', () => {
    
    
  let currentSize = parseInt(window.getComputedStyle(box).width); // Отримуємо поточний розмір квадрата
  console.log(currentSize);
  if (currentSize > 50) { // Перевіряємо, чи не буде квадрат занадто малим
    box.style.width = currentSize - 20 + 'px'; // Зменшуємо ширину
    box.style.height = currentSize - 20 + 'px'; // Зменшуємо висоту
  }
});

// Функція для збільшення розміру
increaseBtn.addEventListener('click', () => {
  let currentSize = parseInt(window.getComputedStyle(box).width); // Отримуємо поточний розмір квадрата
  box.style.width = currentSize + 20 + 'px'; // Збільшуємо ширину
  box.style.height = currentSize + 20 + 'px'; // Збільшуємо висоту
});