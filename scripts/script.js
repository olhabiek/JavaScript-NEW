// number | 12
// string | "Hello"
// boolean | true || false
// null
// undefined
// object
// bigint
// symbol

// 0
// " "
// undefined
// null
// NaN
// false

//==========================================================

// Home_6_1

//Объявите две переменные firstName и lastName и присвойте им ваши имя и фамилию. С помощью конкатенации строк создайте третью переменную greeting, содержащую приветствие в формате "Привет, Имя Фамилия!". Выведите переменную greeting в консоль.

// let firstName = "Ольга";
// let lastName = "Бехтир";
// let greeting = "Привет, " + firstName + " " + lastName + "!";
// console.log(greeting);

//Создайте переменную sentencePart1 и присвойте ей начало предложения (например, "Я люблю"). Создайте переменную sentencePart2 и присвойте ей завершение предложения (например, "программирование"). С помощью конкатенации строк создайте переменную completeSentence, объединяющую обе части предложения. Выведите переменную completeSentence в консоль.

// let sentencePart1 = "Я люблю";
// let sentencePart2 = "программирование";
// let completeSentence = sentencePart1 + " " + sentencePart2;
// console.log(completeSentence);

//=========================================================

// let number = 7;
// if (number > 0) {
//   console.log("число положительное");
// } else if (number === 0) {
//   console.log("число равно нулю");
// } else {
//   console.log("число отрицательное");
// }

//==========================================================

// let myNumber = 7;
// switch (myNumber) {
//   case 1:
//     console.log("this is 1");
//     break;
//   case 2:
//     console.log("this is 2");
//     break;
//   case 3:
//     console.log("this is 3");
//     break;
//   case 4:
//     console.log("this is 4");
//     break;
//   default:
//     console.log("end");
// }

// let myNumber = 17;
// switch (myNumber) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("autumn");
//     break;
//   default:
//     console.log("The number is not correct!");
// }

//==========================================================

// 4 === 4 ? console.log("Hello") : console.log("End");

// let ratio = 1 === 1 ? "100%" : "50%";
// console.log(ratio);

//==========================================================

// for (let i = 10; i >= 1; i = i - 1) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * 3 = ${i * 3}`);
// }

// for (let i = 2; i <= 8; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//==========================================================

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//==========================================================

// Home_6_2

//Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число) и выводить оценку в виде буквенного символа по следующей шкале:
// 90 и выше: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Меньше 60: 'F'

// let points = 10;
// if (points < 60) {
//   console.log("Оценка студента F");
// } else if (points < 70) {
//   console.log("Оценка студента D");
// } else if (points < 80) {
//   console.log("Оценка студента C");
// } else if (points < 90) {
//   console.log("Оценка студента B");
// } else {
//   console.log("Оценка студента A");
// }

// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее). Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

// let dayOfWeek = 7;

// switch (dayOfWeek) {
//   case 1:
//     console.log("Понедельник");
//     break;
//   case 2:
//     console.log("Вторник");
//     break;
//   case 3:
//     console.log("Среда");
//     break;
//   case 4:
//     console.log("Четверг");
//     break;
//   case 5:
//     console.log("Пятница");
//     break;
//   case 6:
//     console.log("Суббота");
//     break;
//   case 7:
//     console.log("Воскресенье");
//     break;
//   default:
//     console.log("Вы ввели некорректное число!");
//     break;
// }

//==========================================================

// for (let i = 0; i < 10; i++) {
//   if (i > 5) {
//     console.log(i);
//   }
// }

//==========================================================

// let h = 4;
// console.log(h); // присвоение значения 4
// let b = h++;    // присвоение b значения изначальной h (b=h), при этом сама h меняется на h+1

// console.log(b);
// console.log(h);

// let h = 72;
// console.log(h); // присвоение значения 72
// let b = ++h;    // происходит перезапись переменной h (h=h+1) и присваивает её в b

// console.log(b);
// console.log(h);

//==========================================================

// let i = 0;

// // while (i < 10) {
// //   i > 4 ? console.log("hello") : console.log("exit");
// //   i++;
// // }

// // for (let i = 0; i < 10; i++) {
// //   i > 4 ? console.log("hello") : console.log("exit");
// // }

// // do {
// //   if (i > 4) {
// //     console.log("hello");
// //   } else {
// //     console.log("exit");
// //   }
// //   i++;
// // } while (i < 10);

//==========================================================

// for (let i = 0; i < 20; i++) {
//   console.log(i);
//   if (i === 11) {
//     break;
//   }
// }

//==========================================================

// for (let i = 0; i < 20; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//==========================================================

// const listOfNumbers = [56, 119, 78, 36];

// // const listOfStrings = ["hello", "a", "!", "greeting", "google"];
// // const names = ["Mike", "Bob", "Anna", "Greg"];
// // const emptyArray = [];
// // const mixedArray = ["abc", 5, -9, 0, null, false, false, false, true];
// // const two2DArray = [[], [], []];

// let firstElementOfArray = listOfNumbers[0] * 1000;
// console.log(firstElementOfArray);
// console.log(listOfNumbers.length);

//==========================================================

// const listOfNumber = [4, 2, 3, 6, 1, 0, 5];

// for (let i = 0; i < listOfNumber.length; i++) {}

//==========================================================

// 1. Вывести числа от 1 до 5, прервать цикл, если текущее число равно 3.

// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   number++;
//   if (number >= 3) {
//     break;
//   }
// }

// for (let number = 1; number <= 5; number++) {
//   if (number === 3) {
//     break;
//   }
//   console.log(number);
// }

//==========================================================

// 2. Вывести только нечетные числа от 1 до 6, используя continue.

// for (let number = 1; number <= 6; number++) {
//   if (number % 2 === 0) {
//     continue;
//   }
//   console.log(number);
// }

//==========================================================

// 3. Вывести числа от 1 до 10, прервать цикл, если текущее число больше 7.

// for (let number = 1; number <= 10; number++) {
//   if (number <= 7) {
//     console.log(number);
//   } else {
//     break;
//   }
// }

//==========================================================

// 4. Вывести числа от 1 до 5, пропустить вывод числа 3 с использованием continue

// for (let number = 1; number <= 5; number++) {
//   if (number === 3) {
//     continue;
//   }
//   console.log(number);
// }

//==========================================================

// 1. Создайте массив с вашими любимыми цветами и выведите его в консоль.

// const colors = ["red", "blue", "green", "yellow"];
// console.log(colors)

//==========================================================

// 2. Создайте массив чисел и выведите каждый элемент в консоль.

// const numbers = [1, 5, 7, -9];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//==========================================================

// 3. Создайте массив чисел и выведите только четные числа.

// const numbers = [1, 2, 8, 25, -8];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

//==========================================================

// 4. Создайте массив чисел и найдите их сумму.

// const numbers = [1, 5, 7, -8, 9];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

//==========================================================

// 5. Создайте массив строк и выведите их в обратном порядке.

// const words = ["one", "two", "three", "four", "five"];
// for (let i = words.length - 1; i >= 0; i--) {
//   console.log(words[i]);
// }

//==========================================================

// Home_7

// 1. Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).

// const numbers = [1, 7, 17, 0, -5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 2. Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).

// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 8 && arr[i] < 20) {
//     console.log(arr[i]);
//   }
// }

// 3. Создайте массив чисел и найдите минимальное значение.

// const arr = [4, 2, -8, 6, 12, 5, 21, -24, 20, 22, 8, 7, 6, 9];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] - min < 0) {
//     min = arr[i];
//   }
// }
// console.log(min);

// 4. *Создайте массив чисел и обновите значение элемента по индексу.

// const arr = [4, 2, -8, 6, 12, 5, 21, -24, 20, 22, 8, 7, 6, 9];

// arr[8] = 1111111;
// console.log(arr);

// 5. * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

// const words = ["one", "two", "three", "four", "five"];
// let maxWord = words[0];
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length - maxWord.length > 0) {
//     maxWord = words[i];
//   }
// }
// console.log(maxWord);

//===========================================================

// const userData = {
//   name: "Alice",
//   age: 36,
//   isAdmin: true,
// };

// userData.city = "Berlin"; // добавление свойства в объект
// delete userData.age; // удаление свойства из объекта

// console.log(userData);
// console.log(userData.age);

//===========================================================

// 1. Создайте объект с именем person, содержащий свойства name и age. Присвойте значения этим свойствам и выведите их в консоль.

// const person = {
//   name: "Oleg",
//   age: 18,
// };

// console.log(person.name);
// console.log(person.age);

// 2. У вас есть объект book с свойством title. Измените значение свойства title и выведите обновленное значение в консоль

// const book = {
//   title: "Parfumer",
// };

// book.title = "New Title";
// console.log(book.title);

// 3. Создайте объект car с свойствами brand, model и year. Выведите в консоль информацию о машине в формате "Год выпуска [year] марки [brand], модель [model]".

// const car = {
//   brand: "BMW",
//   model: "X4",
//   year: 2024,
// };

// console.log(`Год выпуска ${car.year} марки ${car.brand}, модель ${car.model}`);

// 4. Создайте объект dog с начальными свойствами name и age. Затем добавьте свойство breed и выведите обновленный объект в консоль.

// const dog = {
//   name: "Bonita",
//   age: 4,
// };

// dog.breed = "York";
// console.log(dog);

// 5. У вас есть объект computer с различными свойствами. Удалите одно из свойств и выведите обновленный объект в консоль.

// const computer = {
//   name: "Olha",
//   processor: "13th Gen Intel(R) Core(TM) i7-1360P 2.20 GHz",
//   RAM: "16.0 ГБ (доступно: 15.6 ГБ)",
//   systemType: "64-разрядная операционная система, процессор x64",
// };

// delete computer.name;
// console.log(computer);

//===========================================================

//Создайте объект fruit с несколькими свойствами (например, name, color, taste). Используйте цикл for...in, чтобы вывести все свойства и их значения в консоль.

// const fruit = {
//   name: "Apple",
//   color: "Red",
//   taste: "Sweet",
// };

// for (let key in fruit) {
//   console.log(key + " : " + fruit[key]);
// }

//==========================================================

// 1. Создание вложенного объекта: Создайте объект student с основными свойствами, такими как name и age, а также вложенным объектом grades, представляющим оценки по предметам. Присвойте значения оценкам и выведите всю информацию в консоль.

// const student = {
//   name: "Nadiia",
//   age: 17,
//   grades: {
//     mathematics: 1,
//     physics: 1,
//     chemistry: 2,
//   },
// };

// for (let key1 in student) {
//   if (key1 !== "grades") {
//     console.log(key1 + " : " + student[key1]);
//   }
// }
// for (let key2 in student.grades) {
//   console.log(key2 + " : " + student.grades[key2]);
// }

// 2. Изменение вложенного свойства: У вас есть объект car с вложенным объектом engine, содержащим свойства horsepower и fuelType. Измените значение horsepower и выведите обновленную информацию в консоль.

// const car = {
//   engine: {
//     horsepower: 100,
//     fuelType: "Diesel",
//   },
// };

// car.engine.horsepower = 130;
// for (let key in car.engine) {
//   console.log(key + " : " + car.engine[key]);
// }

// 3. Итерация по вложенным объектам: Создайте объект playlist с вложенным объектом songs, представляющим список песен. Используйте цикл for...in, чтобы вывести названия всех песен и их продолжительность в консоль.

// const playlist = {
//   songs: {
//     song1: {
//       title: "Song One",
//       duration: "4:00",
//     },
//     song2: {
//       title: "Song Two",
//       duration: "4:30",
//     },
//     song3: {
//       title: "Song Three",
//       duration: "5:10",
//     },
//   },
// };

// for (let key in playlist.songs) {
//   console.log(
//     "Title: " +
//       playlist.songs[key].title +
//       ", duration - " +
//       playlist.songs[key].duration
//   );
// }

// 4. Добавление вложенного объекта: У вас есть объект book с основными свойствами, такими как title и author. Добавьте вложенный объект details, содержащий свойства pages и publicationYear. Выведите обновленную информацию в консоль.

// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
// };

// book.details = {
//   pages: 400,
//   publicationYear: 2024,
// };
// console.log(book);

// 5. Удаление вложенного свойства: Создайте объект computer с вложенным объектом specs, представляющим технические характеристики. Удалите свойство ram из вложенного объекта и выведите обновленную информацию.

// const computer = {
//   specs: {
//     processor: "Intel Core i7",
//     ram: "16GB",
//     storage: "512GB SSD",
//     graphics: "Intel Iris Xe",
//     operatingSystem: "Windows 11",
//   },
// };

// delete computer.specs.ram;

// console.log(computer);

// 6. Объект в массиве: Создайте массив students, где каждый элемент массива - объект, представляющий студента с именем, возрастом и вложенным объектом grades. Выведите средний балл студентов в консоль.

// let students = [
//   {
//     name: "Alice",
//     age: 20,
//     grades: {
//       math: 90,
//       english: 85,
//       science: 95,
//     },
//   },
//   {
//     name: "Bob",
//     age: 22,
//     grades: {
//       math: 75,
//       english: 80,
//       science: 70,
//     },
//   },
//   {
//     name: "Charlie",
//     age: 21,
//     grades: {
//       math: 85,
//       english: 90,
//       science: 88,
//     },
//   },
// ];

// // Сумма всех оценок
// let totalScore = 0;

// // Общее количество предметов
// let totalSubjects = 0;

// // Проходим по каждому студенту в массиве
// for (let student of students) {
//   // Получаем объект оценок для текущего студента
//   let grades = student.grades;

//   // Суммируем оценки по всем предметам
//   for (let subject in grades) {
//     totalScore += grades[subject];
//     totalSubjects++;
//   }
// }

// // Вычисляем средний балл
// let averageScore = totalScore / totalSubjects;

// console.log("Средний балл студентов:", averageScore);

//==========================================================

// Home_7_1

// 1. Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

// const person = {
//   name: "Nadiia",
//   age: 17,
// };

// console.log("Имя: " + person.name);
// console.log("Возраст: " + person.age);

// 2. Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

// const books = [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   console.log("Название: " + books[i].title + ", автор: " + books[i].author);
// }

// 3. Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.

// const rectangle = { a: 10, b: 35 };

// rectangle.s = rectangle.a * rectangle.b;
// rectangle.p = (rectangle.a + rectangle.b) * 2;

// console.log(rectangle);

// 4. Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

// const fruits = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
//   { name: "Cherry", color: "Red" },
//   { name: "Grape", color: "Purple" },
//   { name: "Strawberry", color: "Red" },
// ];

// console.log("Красные фрукты:");
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].color === "Red") {
//     console.log(fruits[i].name);
//   }
// }

// 5. Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

// const playlist = {
//   songs: [
//     {
//       title: "Song 1",
//       artist: "Artist 1",
//       duration: "3:45",
//     },
//     {
//       title: "Song 2",
//       artist: "Artist 2",
//       duration: "4:20",
//     },
//     {
//       title: "Song 3",
//       artist: "Artist 3",
//       duration: "2:50",
//     },
//   ],
// };

// for (let i = 0; i < playlist.songs.length; i++) {
//   console.log("Название песни: " + playlist.songs[i].title);
//   console.log("Исполнитель: " + playlist.songs[i].artist);
//   console.log("Продолжительность: " + playlist.songs[i].duration);
//   console.log("=======================================");
// }

//=Функции=================================================

// function greet() {
//   console.log("Привет, мир!");
// }
// greet();

//=========================================================

// function square(a) {
//   console.log(a ** 2);
// }

// square(5);

//=========================================================

// function isEven(a) {
//   if (a % 2 === 0) {
//     console.log("Число четное");
//   }
//   console.log("Число нечетное");
// }
// isEven(4);

//=========================================================

// function concatenation(string1, string2) {
//   console.log(string1 + string2);
// }
// concatenation("Hello", " world!");

//=Методы==================================================

// const userData = {
//   name: "Alice",
//   age: 26,
//   friends: ["Mike", "Bob", "Alex"],
//   greeting: function () {
//     console.log("hello Alice");
//   },
//   sum: function (a, b, c) {
//     console.log(a + b + c);
//   },
// };
// userData.greeting();
// userData.sum(5, 10, 7);

//=========================================================

// 1. Создайте объект person с двумя свойствами: name и age. Задайте им значения и выведите объект в консоль.

// const person = {
//   name: "Nadiia",
//   age: 17,
// };
// console.log("Имя: " + person.name);
// console.log("Возраст: " + person.age);

// 2. Напишите функцию multiply, которая принимает два числа в качестве аргументов и возвращает их произведение. Вызовите функцию и выведите результат в консоль.

// function multiply(number1, number2) {
//   return number1 * number2;
// }
// console.log(multiply(2, 5));

// 3. Перепишите функцию multiply из предыдущей задачи с использованием стрелочной функции.

// const multiply = (number1, number2) => {
//   return number1 * number2;
// };
// console.log(multiply(2, 5));

// 4. Добавьте метод greet в объект person, который выводит приветствие с именем человека. Вызовите метод и выведите результат в консоль.

// const userData = {
//   name: "Mike",
//   age: 45,
//   greet: function (userName) {
//     console.log("Hello, " + userName + "!");
//   },
// };

// userData.greet(userData.name);

// 5. Создайте объект car с свойством speed и методом drive, который выводит текущую скорость автомобиля. Используйте ключевое слово this для доступа к свойству speed.

// const car = {
//   speed: 140,
//   drive: function (speed) {
//     console.log("Текущая скорость автомобиля: " + speed + " км/ч");
//   },
// };

// car.drive(car.speed);

// 6. Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую операцию. Выведите результаты операций в консоль.

// 1 вариант

// const calculator = {
//   add: function (a, b) {
//     console.log("Сумма двух чисел: " + a + b);
//   },
//   substract: function (a, b) {
//     console.log("Разность двух чисел: " + (a - b));
//   },
//   multiply: function (a, b) {
//     console.log("Произведение двух чисел: " + a * b);
//   },
//   divide: function (a, b) {
//     console.log("Частное двух чисел: " + a / b);
//   },
// };

// calculator.add(10, 2);
// calculator.substract(10, 2);
// calculator.multiply(10, 2);
// calculator.divide(10, 2);

// 2 вариант

// const calculator = {
//   mixCalc: function (num1, num2, operator) {
//     if (operator === "+") {
//       console.log(num1 + num2);
//     } else if (operator === "-") {
//       console.log(num1 - num2);
//     } else if (operator === "*") {
//       console.log(num1 * num2);
//     } else if (operator === "/") {
//       console.log(num1 / num2);
//     } else {
//       console.log("invalid operator");
//     }
//   },
// };

// calculator.mixCalc(10, 5, "+");

// 3 вариант

// const calculator = {
//   mixCalc: (num1, num2, operator) => {
//     switch (operator) {
//       case "+":
//         console.log(num1 + num2);
//         break;
//       case "-":
//         console.log(num1 - num2);
//         break;
//       case "*":
//         console.log(num1 * num2);
//         break;
//       case "/":
//         console.log(num1 / num2);
//         break;
//       default:
//         console.log("Invalid operator");
//     }
//   },
// };

// calculator.mixCalc(1, 2, "*");

// 4 вариант

// const calculator = {
//   mixCalc: (num1, num2, operator) => {
//     operator === "+"
//       ? console.log(num1 + num2)
//       : operator === "-"
//       ? console.log(num1 - num2)
//       : operator === "*"
//       ? console.log(num1 * num2)
//       : console.log(num1 / num2);
//   },
// };

// calculator.mixCalc(1, 2, "-");

// 7. Напишите функцию, которая подсчитывает количество элементов с определенным значением в массиве.

// const arr = [1, 5, 2, 2, 2, 0];

// function countElements(listOfNumbers, number) {
//   let count = 0;
//   for (let i = 0; i < listOfNumbers.length; i++) {
//     if (listOfNumbers[i] === number) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
// }

// countElements(arr, 2);

// 8. Напишите функцию, которая проверяет, есть ли заданный ключ в объекте.

// 9.Напишите программу, которая создает таблицу умножения от 1 до 10.

//=========================================================

// 1. Создайте объект user с методом sayHello, который принимает имя пользователя и возвращает приветствие.

// const user = {
//   sayHello: function (name) {
//     return `Hello, ${name}`;
//   },
// };
// console.log(user.sayHello("Nadiia"));

// 2. Создайте объект calculator с методом add, который принимает два числа и возвращает их сумму.

// const calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
// };
// console.log(calculator.add(3, 4));

//=========================================================

// Home_8

// 1.Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

// function sum(num1, num2 = 5) {
//   return num1 + num2;
// }

// console.log(sum(2));

// 2. Создайте массив numbers с несколькими числами. Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.

// const numbers = [1, 0, 5, 4, -8];

// function calculateSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(calculateSum(numbers));

// 3. Создайте массив students с объектами студентов (имя, возраст, курс). Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

// const students = [
//   { name: "Olha", age: 49, course: "WebDevelopment" },
//   { name: "Nadiia", age: 17, course: "WebDesign" },
//   { name: "Oleh", age: 54, course: "Python" },
// ];

// function displayStudentInfo(student) {
//   console.log(
//     "Имя студента: " +
//       student.name +
//       ", возраст: " +
//       student.age +
//       ", курс: " +
//       student.course
//   );
// }
// displayStudentInfo(students[1]);

// const numbers = [4, 5, 2, 1, 1, 23, 3, 0, 1, 2, 1];
// const element = 1;
// let counter = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 1) {
//     counter = counter + 1;
//   }
// }
// console.log(`У нас ${counter} вхождения ${element}`);

// const numbers = [4, 12, 1, 2, 1, 3, 6, 3, 3, 3, 4];
// const searchNumber = 3;
// const numbers2 = [4, 5, 0, 1, 2, 0, 0, 1, 6];
// const searchNumber2 = 0;
// const numbers3 = [9, 2, 1, 2, 3, 6, 54, 4, 4, 4, 1, 2];
// const searchNumber3 = 4;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === searchNumber) {
//     count++;
//   }
// }
// let count2 = 0;
// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] === searchNumber2) {
//     count2++;
//   }
// }
// let count3 = 0;
// for (let i = 0; i < numbers3.length; i++) {
//   if (numbers3[i] === searchNumber3) {
//     count3++;
//   }
// }
// console.log(count, count2, count3);

// function quantityElements(params) {}

//=========================================================

// Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.

// const listOfNumbers = [1, 5, 6, 8, -12, 555];

// // for (let i = 0; i < listOfNumbers.length; i++) {
// //   console.log(listOfNumbers[i]);
// // }

// function getThoughList(list) {
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }

// getThoughList(listOfNumbers);

//=========================================================

// Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.

// const listOfStrings = ["red", "blue", "green", "yellow"];
// const element = "red";

// function searchWordInArray(list, string) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === string) {
//       return "We found this element";
//     }
//   }
//   return "We didn't find this word";
// }

// const result = searchWordInArray(listOfStrings, element);
// console.log(result);

//=========================================================

// Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.

// const numbers = [1, 8, 7, -5, 99];

// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// const result = sum(numbers);
// console.log(result);

// const numbers = [1, 8, 7, -5, 99];

// const sumOfElements = (list) => {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum = sum + list[i];
//   }
//   return sum;
// };
// const result = sumOfElements(numbers);
// console.log(result);

// Напишите функцию, которая находит максимальный элемент в массиве чисел.

// const numbers = [1, 8, 7, -5, 99];

// function findMaxElement(array) {
//   let maxElement = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (maxElement < array[i]) {
//       maxElement = array[i];
//     }
//   }
//   return maxElement;
// }
// const result = findMaxElement(numbers);
// console.log(result);

//=========================================================

// 1. Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.

// let array = [];
// for (let i = 1; i <= 10; i++) {
//   array.push(i);
// }
// console.log(array);

// 2. Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.

// const numbers = [0, 7, 9, -5, 77];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 3. Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.

// let strings = ["Olha", "Nadiia", "Liubov", "Oleh", "Alex"];

// let search = "Nadiia";

// let i = 0;

// do {
//   if (strings[i] === search) {
//     console.log(`В массиве есть строка ${search}`);
//     break;
//   }
//   i++;
// } while (i < strings.length);

// 4. Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).

// let numbers = [0, 7, 9, -5, 77];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// 5. Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.

// let numbers = [0, 7, 9, -5, 77];

// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 5) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);

// 6. У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.

// const students = [
//   { name: "Анна", grades: [85, 90, 92] },
//   { name: "Иван", grades: [88, 75, 96] },
//   { name: "Мария", grades: [78, 82, 94] },
// ];

// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function createStudentAverage(student) {
//   return {
//     name: student.name,
//     averageGrade: calculateAverage(student.grades),
//   };
// }

// const studentsWithAverages = [];

// for (let i = 0; i < students.length; i++) {
//   const studentAverage = createStudentAverage(students[i]);
//   studentsWithAverages.push(studentAverage);
// }

// console.log(studentsWithAverages);

// 7. Напишите функцию, которая вычисляет факториал числа.

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// const result = factorial(5);
// console.log(result);

// 8. Напишите функцию, которая переворачивает строку.

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// const result = reverseString("hello");
// console.log(result);

//=========================================================

// 1. Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.

// const numbers = [0, 7, 9, -5, 77];

// const sum = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// };

// const result = sum(numbers);
// console.log(result);

// 2. Напишите функцию, которая находит максимальный элемент в массиве чисел.

// const numbers = [0, 7, 9, -5, 77];

// function maxElement(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const result = maxElement(numbers);
// console.log(result);

// 3. Напишите функцию, которая удваивает каждый элемент в массиве чисел.

// const numbers = [0, 7, 9, -5, 77];

// function doubleNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
//   }
// }
// doubleNumbers(numbers);
// console.log(numbers);

// 4. Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.

// const numbers = [0, 7, 9, -5, 77];

// function containsElement(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       return true;
//     }
//   }
//   return false;
// }

// const result = containsElement(numbers, 3);
// console.log(result);

// 5. Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.

// const keys = ["name", "age", "course"];
// const values = ["Nadiia", 17, "Web-design"];

// function object(keys, values) {
//   const result = {};
//   for (let i = 0; i < keys.length; i++) {
//     result[keys[i]] = values[i];
//   }
//   return result;
// }

// const student = object(keys, values);
// console.log(student);

// 6. Напишите функцию, которая вычисляет среднее значение чисел в массиве.

// const numbers = [0, 7, 9, -5, 77];

// function calculateAverageValue(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }
// let result = calculateAverageValue(numbers);
// console.log(result);

// 7. Напишите функцию, которая сортирует массив чисел по возрастанию.

// const numbers = [0, 7, 9, -5, 77];

// function sortNumbers(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }
// sortNumbers(numbers);
// console.log(numbers);

// 8. Напишите функцию, которая создает новый объект, включая только указанные свойства.

// function pickProperties(obj, properties) {
//   const result = {};
//   for (let i = 0; i < properties.length; i++) {
//     const currentProperty = properties[i];
//     if (obj.hasOwnProperty(currentProperty)) {
//       result[currentProperty] = obj[currentProperty];
//     }
//   }
//   return result;
// }

// const person = { name: "Alice", age: 30, city: "London" };
// const selectedProperties = pickProperties(person, ["name", "city"]);
// console.log(selectedProperties);

//=========================================================

// Home_8_1

// 1. Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

// const numbers = [1, 7, 9, -5, 77];

// function multiplyingNumbers(arr) {
//   let multiplication = 1;
//   for (let i = 0; i < arr.length; i++) {
//     multiplication = multiplication * arr[i];
//   }
//   return multiplication;
// }
// let result = multiplyingNumbers(numbers);
// console.log(result);

// 2. Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

// const numbers = [1, 7, 9, -5, 77];

// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//   sum = sum + numbers[i];
//   i++;
// }
// console.log(sum);

//=========================================================

// const listOfParagraphs = document.querySelectorAll(".info");
// // console.dir(listOfParagraphs[2].textContent);
// for (let i = 0; i < listOfParagraphs.length; i++) {
//   listOfParagraphs[i].textContent = "hello";
// }

// const heading = document.querySelector(".heading");
// heading.textContent = "hello world";

// const usernameInput = document.querySelector(".username");

// const url =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdziZ25YPqQwmvDZmiA3hqDuboA1rAKBJxiSYzZdlIbfDWceX-FV61gHORVKV-2gyzfk&usqp=CAU";
// const htmlImage = document.querySelector(".myImage");
// if (1 === 2) {
//   htmlImage.setAttribute("src", url);
//   htmlImage.setAttribute("alt", "hello image");
// } else {
//   console.log("end");
// }
// console.log(htmlImage);

//добавление элемента======================================
// const body = document.querySelector("body");

// const myInfo = document.createElement("p");
// myInfo.textContent = "This is first par!";
// myInfo.setAttribute("id", "text");

// console.log(myInfo);

// body.append(myInfo);

// const title = document.createElement("h1");
// title.textContent = "Title";

// console.log(title);

// body.append(title);

//добавление элемента к дочернему==========================

// const block = document.querySelector("#block");
// const myInfo = document.createElement("p");

// myInfo.textContent = "This is first par!";
// myInfo.setAttribute("id", "text");

// block.append(myInfo);

//=========================================================

// 1.

// const bodyContainer = document.querySelector("body");
// const myButton = document.createElement("button");
// const container = document.createElement("div");

// myButton.textContent = "Нажми меня";
// container.setAttribute("id", "myDiv");

// container.append(myButton);

// bodyContainer.append(container);

//=========================================================

// 1. Создайте HTML-страницу с элементом <p> и установите ему уникальный идентификатор. Используйте getElementById, чтобы вывести этот элемент в консоль.

// const result = document.getElementById("paragraph");

// console.log(result);

// 2. Создайте HTML-страницу с несколькими элементами <p>. Используйте querySelector, чтобы выбрать и вывести в консоль эелемент с тегом <p>.

// const result = document.querySelector("p");

// console.log(result);

// 3. Создайте HTML-страницу с несколькими элементами <p>. Используйте getElementsByTagName, чтобы выбрать и вывести в консоль эти элементы с помощью цикла for.

// function displayParagraphs() {
//   let paragraphs = document.getElementsByTagName("p");

//   for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i]);
//   }
// }

// displayParagraphs();

// 4. Создайте HTML-страницу с элементом <p>. Используя querySelector, найдите этот элемент и измените его текст на "Привет, мир!".

// const changeElement = document.querySelector("p");

// changeElement.innerText = "Привет, мир!";

// console.log(changeElement);

// 5. Создайте HTML-страницу с изображением <img>. Используя setAttribute, измените атрибут src изображения на другой URL.".

// const changeAttribute = document.querySelector("img");

// changeAttribute.setAttribute(
//   "src",
//   "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg?w=1060&t=st=1716329885~exp=1716330485~hmac=d4da9f0cf5d11508db10821320d9f260d3b810e8348572dece8305cd196a0b3a"
// );

// 6. Создайте HTML-страницу с элементом <span>. С использованием textContent или innerText, измените содержимое элемента на текущую дату.

// const changeAttribute = document.querySelector("span");

// changeAttribute.innerText = "22.05.2024";

// console.log(changeAttribute);

// 7. Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

// const changeText = document.querySelector("div");

// changeText.innerHTML = "Это <em>курсивный</em> текст";

//=========================================================

// Home_9

// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

// const changeText = document.querySelector("div");

// changeText.innerHTML = "Это <em>курсивный</em> текст";

//=========================================================

// Создание элемента div

// const element = document.createElement("div");
// console.log(element);

// Создание элемента p и добавление к элементу div

// const pElem = document.createElement("p");
// pElem.innerText = "Созданный элемент";
// document.getElementById("element").append(pElem);

// Использование appendChild()

// const pElem = document.createElement("p");
// pElem.innerText = "Созданный элемент";
// document.getElementById("element").appendChild(pElem);

// Создание нового элемента заголовка 1 уровня и установление его текстового содержимого

// let newHeader = document.createElement('h1');
// newHeader.textContent = 'Добро пожаловать на мою страницу!';
// document.body.appendChild(newHeader);

// Создание кнопки с текстом 'Нажми меня' и добавление к элементу с идентификатором 'myDiv'

// let newButton = document.createElement('button');
// newButton.textContent = 'Нажми меня';
// document.getElementById('myDiv').appendChild(newButton);

//=========================================================

// 1. Создайте кнопку с текстом "Нажми меня" и добавьте её на вашу веб-страницу внутри элемента с идентификатором "myDiv".

// let newButton = document.createElement("button");
// newButton.textContent = "Нажми меня";
// document.getElementById("myDiv").appendChild(newButton);

// 2. Создайте список (например, ul) и добавьте в него три элемента списка (li) с текстом "Пункт 1", "Пункт 2", "Пункт 3". Затем добавьте этот список на вашу веб-страницу (Делаем с преподавателем). Можно попробовать использовать циклы.
// Код выполняется после загрузки DOM благодаря атрибуту defer в теге <script>

// let body = document.body;

// let ulElement = document.createElement("ul");

// let listItemsText = ["Пункт 1", "Пункт 2", "Пункт 3"];

// for (let i = 0; i < listItemsText.length; i++) {
//   let liElement = document.createElement("li");
//   liElement.textContent = listItemsText[i];
//   ulElement.appendChild(liElement);
// }

// body.appendChild(ulElement);

// 3. Создайте новый элемент изображения (img) и установите ему атрибут src с ссылкой на изображение. Далее добавьте это изображение на вашу веб-страницу. Изображение может быть любым.

// let body = document.body;

// let newElement = document.createElement("img");
// newElement.src =
//   "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg?w=1060&t=st=1716329885~exp=1716330485~hmac=d4da9f0cf5d11508db10821320d9f260d3b810e8348572dece8305cd196a0b3a";

// body.appendChild(newElement);

// 4. Создайте новый элемент абзаца (p) с текстом "Этот текст добавлен перед остальными" и добавьте его перед всеми существующими элементами внутри элемента с идентификатором "contentContainer"

// let contentContainer = document.getElementById("contentContainer");

// let newParagraph = document.createElement("p");
// newParagraph.textContent = "Этот текст добавлен перед остальными";

// contentContainer.insertBefore(newParagraph, contentContainer.firstChild);

//=========================================================

// 1. Используя метод insertAdjacentHTML, создайте новый заголовок второго уровня (h2) с текстом "Дополнительный заголовок" и вставьте его перед существующим заголовком первого уровня (h1) внутри элемента с идентификатором "headerContainer"

// let headerContainer = document.getElementById("headerContainer");

// let newHeadingHTML = "<h2>Дополнительный заголовок</h2>";

// headerContainer.insertAdjacentHTML("beforebegin", newHeadingHTML);

// 2. Создайте форму с использованием HTML, включающую поля для ввода имени и электронной почты, а также кнопку "Отправить". Используя JavaScript, создайте новый элемент <label> с текстом "Выберите страну" и выпадающим списком <select>, содержащим несколько вариантов стран (например, Япония, США, Китай). Добавьте этот элемент в конец вашей формы.

//=========================================================

// const info = document.querySelector(".info");
// const body = document.querySelector("body");

// const newInfoElement = info.cloneNode();
// newInfoElement.textContent = "Cloned P Node";

// body.append(newInfoElement);

//=========================================================

// const container = document.querySelector(".container");
// container.innerHTML = "<h1>hello html</h1>";

//=========================================================

// const clickBtn = document.querySelector(".clickBtn");
// const body = document.querySelector("body");

// clickBtn.addEventListener("click", () => {
//   console.log("clicked button");
// });

// clickBtn.addEventListener("mouseover", () => {
//   console.log("mouseover button");
// });

//=========================================================

// 1. У вас есть изображение. Под изображением есть второе изображение с id "copied-image". При загрузке страницы проверьте, существует ли второе изображение с id "copied-image". Если второго изображения нет, создайте копию первого изображения и добавьте ее под оригиналом с id "copied-image".

// let originalImage = document.querySelector("img"); // Находим первое изображение
// let copiedImage = document.getElementById("copied-image"); // Проверяем наличие изображения с id "copied-image"

// // Если изображения с id "copied-image" нет, создаем его
// if (!copiedImage) {
//   copiedImage = originalImage.cloneNode(true); // Клонируем первое изображение
//   copiedImage.id = "copied-image"; // Устанавливаем id для клонированного изображения
//   originalImage.parentNode.insertBefore(copiedImage, originalImage.nextSibling); // Вставляем клонированное изображение после оригинала
// }

// 2. У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, удалите последний элемент списка.

// let list = document.getElementById('myList');
// let listItems = list.getElementsByTagName('li');

// // Проверяем длину списка и удаляем последний элемент, если длина больше 3
// if (listItems.length > 3) {
//     list.removeChild(listItems[listItems.length - 1]);
// }

// 3. У вас есть блок с несколькими дочерними элементами. При загрузке страницы проверьте условие (например, наличие определенного класса у дочернего элемента). Если условие выполняется, создайте новый элемент и замените дочерний элемент с этим классом новым элементом.

// let parentBlock = document.getElementById("parentBlock");
// let targetElement = parentBlock.querySelector(".target");

// // Проверяем наличие элемента с классом 'target'
// if (targetElement) {
//   // Создаем новый элемент
//   let newElement = document.createElement("p");
//   newElement.textContent = "Это новый элемент, заменяющий старый";

//   // Заменяем старый элемент новым
//   parentBlock.replaceChild(newElement, targetElement);
// }

// 4. У вас есть кнопка. При каждом клике на кнопку увеличивайте счётчик и выводите текущее значение счетчика.

// // Инициализация счетчика
// let counter = 0;

// // Получаем элементы кнопки и счетчика
// const button = document.getElementById('clickButton');
// const counterDisplay = document.getElementById('counter');

// // Добавляем обработчик события для кнопки
// button.addEventListener('click', function() {
//     // Увеличиваем счетчик
//     counter++;
//     // Обновляем отображение счетчика
//     counterDisplay.textContent = 'Счетчик: ' + counter;
// });

// 5. У вас есть абзац текста. При клике клике на абзац, измените его текст
// Получаем элемент абзаца

// const paragraph = document.getElementById('textParagraph');

// // Добавляем обработчик события для клика на абзац
// paragraph.addEventListener('click', function() {
//     // Изменяем текст абзаца
//     paragraph.textContent = 'Текст изменен после клика!';
// });

// 6. У вас есть элемент, например, <p>. При клике на элементе, измените его текст. При следующем клике восстановите исходный текст. Задачу решить двумя способами: c помощью атрибута onclick и с помощью addEventListener

// 1 способ

// function toggleText(element) {
//   const originalText = 'Кликните на этот текст, чтобы изменить его.';
//   const newText = 'Текст изменен после клика!';

//   if (element.textContent === originalText) {
//       element.textContent = newText;
//   } else {
//       element.textContent = originalText;
//   }
// }

// 2 способ
// Получаем элемент абзаца

// const paragraph = document.getElementById('textParagraph');
// const originalText = 'Кликните на этот текст, чтобы изменить его.';
// const newText = 'Текст изменен после клика!';

// // Добавляем обработчик события для клика на абзац
// paragraph.addEventListener('click', function() {
//     if (paragraph.textContent === originalText) {
//         paragraph.textContent = newText;
//     } else {
//         paragraph.textContent = originalText;
//     }
// });

//=========================================================

// 1. У вас есть абзац текста. При двойном клике на абзац, измените его текст.

// // Получаем элемент абзаца
// const paragraph = document.getElementById('textParagraph');

// // Добавляем обработчик события для двойного клика на абзац
// paragraph.addEventListener('dblclick', function() {
//     // Изменяем текст абзаца
//     paragraph.textContent = 'Текст изменен после двойного клика!';
// });

// 2. У вас есть поле ввода. При вводе текста в поле отправляйте его содержимое на сервер (это просто симуляция отправки данных, на самом деле данных никуда не отправляется).

// // Получаем элемент поля ввода
// const inputField = document.getElementById('textInput');

// // Добавляем обработчик события для ввода текста
// inputField.addEventListener('input', function() {
//     // Получаем текущее значение поля ввода
//     const inputValue = inputField.value;

//     // "Отправляем" данные на сервер (в данном случае, просто выводим в консоль)
//     console.log('Отправка данных на сервер:', inputValue);
// });

// 3. У вас есть выпадающий список (<select>). При выборе опции изменяйте текст под списком.

// // Получаем элементы выпадающего списка и параграфа
// const selectElement = document.getElementById('mySelect');
// const displayText = document.getElementById('displayText');

// // Добавляем обработчик события для изменения выбора в списке
// selectElement.addEventListener('change', function() {
//     // Получаем выбранный текст опции
//     const selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

//     // Изменяем текст в элементе <p>
//     displayText.textContent = `Вы выбрали: ${selectedOptionText}`;
// });

// 4. У вас есть текстовое поле. При фокусировке на поле меняйте его фоновый цвет.

// // Получаем ссылку на текстовое поле
// const inputField = document.getElementById('myInput');

// // Добавляем обработчик события для фокусировки на текстовом поле
// inputField.addEventListener('focus', function() {
//     // Изменяем фоновый цвет поля при фокусировке
//     inputField.style.backgroundColor = 'lightblue';
// });

// // Добавляем обработчик события для потери фокуса текстовым полем
// inputField.addEventListener('blur', function() {
//     // Возвращаем исходный фоновый цвет поля при потере фокуса
//     inputField.style.backgroundColor = '';
// });

//=========================================================

// Home_9_1

// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

// const list = document.getElementById("myList");

// if (list.children.length > 0) {
//   const newItem = document.createElement("li");
//   newItem.textContent = "Новый элемент";
//   list.replaceChild(newItem, list.lastElementChild);
// }

//=====================!!!!!!!!!!!!!!!=====================

// const text = document.querySelector("p");

// text.addEventListener("click", () => {
//   text.innerHTML = "feed cat";
// });

//=========================================================

// const userNameInput = document.querySelector(".username");
// const addBtn = document.querySelector("button");
// const body = document.querySelector("body");

// addBtn.addEventListener("click", () => {
//   const newText = document.createElement("p");
//   newText.textContent = userNameInput.value;
//   body.append(newText);

//   userNameInput.value = "";
// });

//=========================================================

// const addBtn = document.querySelector("button");

// addBtn.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// addBtn.style.color = "red";
// addBtn.style.width = "450px";

//=========================================================

// const addBtn = document.querySelector("button");

// addBtn.addEventListener("click", () => {
//   addBtn.setAttribute("class", "red");
// });

// addBtn.addEventListener("dblclick", () => {
//   addBtn.setAttribute("class", "blue");
// });

//=========================================================

// У вас есть блок текста и несколько кнопок. При клике на каждую кнопку, удалите класс "highlight" у блока текста, если он присутствует.

// const text = document.querySelector("p");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// function removeClassHighLight() {
//   text.classList.remove("highlight");
// }

// btn1.addEventListener("click", removeClassHighLight);
// btn2.addEventListener("click", removeClassHighLight);
// btn3.addEventListener("click", removeClassHighLight);

//=====================replace=============================

// const myText = document.querySelector(".info");
// myText.classList.replace("docs", "render");

// console.log(myText);

//=========================================================

// 1. У вас есть HTML-страница с кнопкой и блоком текста. Напишите JavaScript код, который будет выполнять следующие действия:
//● При клике на кнопку, добавьте класс "highlight" к блоку текста, если у него его еще нет. Если класс уже есть, удалите его.
//● Если у блока текста есть класс "highlight", измените цвет фона на светло-желтый, а если класс отсутствует, верните исходный цвет фона.

// const text = document.querySelector(".text");
// const toggleClassBtn = document.querySelector(".toggle");

// toggleClassBtn.addEventListener("click", () => {
//   text.classList.toggle("highlight");
// });

//=========================================================

// 2. Создайте страницу, содержащую пустой список (<ul>) и кнопку "Добавить элемент". При каждом клике на кнопку, добавьте новый элемент списка (<li>) с уникальным текстом (например, "Элемент 1", "Элемент 2" и так далее). Текст может быть случайным.

// const listOfRandomElements = document.querySelector(".listOfRandomElements");
// const addBtn = document.querySelector(".add");

// let i = 0;

// addBtn.addEventListener("click", () => {
//   const liElement = document.createElement("li");
//   liElement.textContent = "Element " + i;
//   listOfRandomElements.append(liElement);
//   i++;
// });

//=========================================================

// 3. На странице есть кнопка и элемент заголовка (<h1>). При каждом клике на кнопку, измените текст заголовка на "Новый текст {номер клика}".

// const addBtn = document.querySelector(".add");
// const title = document.querySelector(".title");

// let i = 0;

// addBtn.addEventListener("click", () => {
//   title.textContent = "Новый текст " + i;
//   i++;
// });

//=========================================================

// 4.На странице есть список (<ul>) с несколькими элементами (<li>) и кнопка "Удалить последний элемент". При каждом клике на кнопку, удалите последний элемент из списка.

// const list = document.querySelector("ul");
// const removeBtn = document.querySelector("button");

// removeBtn.addEventListener("click", () => {
//   list.removeChild(list.lastElementChild);
// });

//=========================================================

// 5. На странице есть кнопка "Сменить цвет фона" и блок (<div>) с текстом. При каждом клике на кнопку, измените цвет фона блока на случайный цвет.

// const changeColorBtn = document.querySelector("button");
// const textBlock = document.querySelector("div");

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// function changeBackgroundColor() {
//   textBlock.style.backgroundColor = getRandomColor();
// }

// changeColorBtn.addEventListener("click", changeBackgroundColor);

//=========================================================

// 6. На странице есть кнопка "Кликни меня" и блок текста, который отображает текущее количество кликов. При каждом клике на кнопку, увеличивайте счетчик и обновляйте текст блока.

// const clickBtn = document.querySelector("button");
// const text = document.querySelector("p");

// let i = 0;
// clickBtn.addEventListener("click", () => {
//   i++;
//   text.textContent = "Количество кликов " + i;
// });

//=========================================================

// 7. Создайте простой калькулятор с полем ввода для чисел и кнопками операций (сложение, вычитание, умножение, деление) и кнопкой "Вычислить". При вводе чисел и выборе операции, при нажатии на "Вычислить" отобразите результат операции.

// const resultBtn = document.querySelector(".resultBtn");
// const actionBtn = document.querySelector(".actionBtn");
// const inputNumber = document.querySelector("input");
// const inputValue = inputNumber.value;

// let result = 2;
// result = result + inputValue;

// console.log(inputValue);

// // actionBtn.addEventListener("click", () => {
// //   if (actionBtn.textContent === "+") {
// //     result = result + inputValue;
// //   }
// // });

// resultBtn.addEventListener("click", () => {});

//=========================================================

// 1. У вас есть кнопка. При каждом клике на кнопку увеличивайте счётчик и выводите текущее значение счетчика.

// const btn = document.querySelector("button");
// const text = document.querySelector("p");

// let i = 0;

// btn.addEventListener("click", () => {
//   i++;
//   text.textContent = "Кнопка нажата " + i + " раз";
// });

// 2. У вас есть абзац текста. При клике на абзац, измените его текст

// const text = document.querySelector("p");

// text.addEventListener("click", () => {
//   text.textContent = "Ничего не видно!!!";
// });

// 3. У вас есть элемент, например, <p>. При клике на элементе, измените его текст. При следующем клике восстановите исходный текст.

// 4. У вас есть абзац текста. При двойном клике на абзац, измените его текст.

// const text = document.querySelector("p");

// text.addEventListener("dblclick", () => {
//   text.textContent = "Ничего не видно!!!";
// });

//=========================================================

// 1. У вас есть элемент. При клике на кнопку измените его ширину на 100px с использованием setAttribute.

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   btn.setAttribute("style", "width: 100px");
// });

// 2.У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.

// const btn = document.querySelector("button");
// const text = document.querySelector("p");

// btn.addEventListener("click", () => {
//   text.style.cssText = "color: violet; background-color: blue";
// });

// 3. У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.

// const btn = document.querySelector("button");
// const text = document.querySelector("p");

// btn.addEventListener("click", () => {
//   text.style.color = "violet";
// });

// 4. У вас есть элемент, например, <div id="styledElement"></div>. При клике на кнопку, динамически добавьте следующие стили к этому элементу:
// ● Ширина: 150 пикселей,
// ● Высота: 150 пикселей,
// ● Фон: светло-розовый.

// const btn = document.querySelector("button");
// const block = document.querySelector("#styledElement");

// btn.addEventListener("click", () => {
//   block.style.width = "150px";
//   block.style.height = "150px";
//   block.style.backgroundColor = "lightpink";
// });

// 5. У вас есть пустая HTML-страница. При загрузке страницы через JS создайте элемент div с id "dynamicElement". При клике на кнопку, добавьте следующие стили к этому элементу:
// ● Ширина: 200 пикселей,
// ● Высота: 200 пикселей,
// ● Фон: голубой.
// Добавьте текст "Динамический элемент" внутри этого элемента.

// const btn = document.querySelector("button");
// const block = document.createElement("div");
// block.id = "dynamicElement";
// document.body.appendChild(block);

// btn.addEventListener("click", () => {
//   block.style.width = "200px";
//   block.style.height = "200px";
//   block.style.backgroundColor = "lightblue";
//   block.textContent = "Динамический элемент";
// });

//=========================================================

// 1. У вас есть несколько кнопок и блок текста. При клике на каждую кнопку, добавьте класс "active" к блоку текста. Если у блока уже есть этот класс, оставьте его без изменений.

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const text = document.querySelector("p");

// function addClass() {
//   text.classList.add("active");
// }

// btn1.addEventListener("click", addClass);
// btn2.addEventListener("click", addClass);
// btn3.addEventListener("click", addClass);

// 2. У вас есть блок текста и несколько кнопок. При клике на каждую кнопку, удалите класс "highlight" у блока текста, если он присутствует.

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// function removeClassHighLight() {
//   text.classList.remove("highlight");
// }

// btn1.addEventListener("click", removeClassHighLight);
// btn2.addEventListener("click", removeClassHighLight);
// btn3.addEventListener("click", removeClassHighLight);

//=========================================================

// Home_10

// 1. У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

// const block = document.querySelector("div");

// block.addEventListener("mouseover", () => {
//   block.classList.add("red");
// });

// block.addEventListener("mouseout", () => {
//   block.classList.remove("red");
// });

// 2. У вас есть блок с id "colorBlock" и кнопка с id "colorButton". При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

// const colorBlock = document.querySelector("#colorBlock");
// const changeColorBtn = document.querySelector("#colorButton");

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// function changeColorBlock() {
//   colorBlock.style.backgroundColor = getRandomColor();
// }

// changeColorBtn.addEventListener("click", changeColorBlock);

//===================Summary session=======================

// const checkSymbolInAString = (checkString, searchSymbol) => {
//   for (let i = 0; i < checkString.length; i++) {
//     if (checkString[i] === searchSymbol) {
//       return "we found this element";
//     }
//   }
//   return "we didn't find element";
// };

// const result = checkSymbolInAString("hello", "l");

// console.log(result);

//=========================================================

// const wordInput = document.querySelector(".word");
// const symbolInput = document.querySelector(".symbol");
// const checkBtn = document.querySelector("button");
// const resultText = document.querySelector(".result");

// const checkSymbolInAString = (checkString, searchSymbol) => {
//   for (let i = 0; i < checkString.length; i++) {
//     if (checkString[i] === searchSymbol) {
//       return "we found this element";
//     }
//   }
//   return "we didn't find element";
// };

// checkBtn.addEventListener("click", () => {
//   const result = checkSymbolInAString(wordInput.value, symbolInput.value);
//   resultText.textContent = result;
// });

//===================valodation============================

// const userNameInput = document.querySelector(".username");
// const statusMessage = document.querySelector(".status");

// userNameInput.addEventListener("input", () => {
//   if (userNameInput.value.length < 3) {
//     statusMessage.textContent = "User Name should be more than 3 symbols";
//     statusMessage.style.color = "red";
//   } else if (userNameInput.value.length > 10) {
//     statusMessage.textContent = "User Name shouldn't be more than 10 symbols";
//     statusMessage.style.color = "red";
//   } else {
//     statusMessage.textContent = "User Name is valid";
//     statusMessage.style.color = "green";
//   }
// });

//=========================================================

// const myHead = document.querySelector("h1");
// const clickBtn = document.querySelector("button");

// clickBtn.addEventListener("click", () => {
//   myHead.classList.remove("text");
//   myHead.classList.add("render");
//   myHead.classList.toggle("text");
// });

//==============Summary Session 5==========================

// 1. Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.

// let array = [];

// for (let i = 0; i <= 10; i++) {
//   array.push(i);
// }
// console.log(array);

// 2. Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.

// const array = [2, 7, 6, 9, 45, -81, 0];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 3. Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.

// const strings = ["Olha", "Nadiia", "Alex", "Liubov", "Oleh"];
// const searchString = "Nadiia";

// let i = 0;
// let found = false;

// do {
//   if (strings[i] === searchString) {
//     found = true;
//     break;
//   }
//   i++;
// } while (i < strings.length);

// console.log(found);

// 4. Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// 5. Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// let newNumbers = [];
// let y = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 5) {
//     newNumbers[y] = numbers[i];
//     y++;
//   }
// }

// console.log(newNumbers);

// 6. У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.

// const students = [
//   { name: "Анна", grades: [85, 90, 92] },
//   { name: "Иван", grades: [88, 75, 96] },
//   { name: "Мария", grades: [78, 82, 94] },
// ];

// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum = sum + grades[i];
//   }
//   return sum / grades.length;
// }

// function createStudentAverage(student) {
//   return {
//     name: student.name,
//     averageGrade: calculateAverage(student.grades),
//   };
// }

// const studentsWithAverages = [];

// for (let i = 0; i < students.length; i++) {
//   const studentAverage = createStudentAverage(students[i]);
//   studentsWithAverages.push(studentAverage);
// }

// console.log(studentsWithAverages);

// 7. Напишите функцию, которая вычисляет факториал числа.

// function countFactorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }

// const result = countFactorial(5);
// console.log(result);

// 8. Напишите функцию, которая переворачивает строку.

// function invertString(string) {
//   let reserved = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reserved = reserved + string[i];
//   }
//   return reserved;
// }

// const result = invertString("Nadiia");
// console.log(result);

//=========================================================

// 1. Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму

// const letSum = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// };

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// const result = letSum(numbers);
// console.log(result);

// 2. Напишите функцию, которая находит максимальный элемент в массиве чисел.

// function getMaxElement(numbers) {
//   let maxElement = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxElement) {
//       maxElement = numbers[i];
//     }
//   }
//   return maxElement;
// }

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// console.log(getMaxElement(numbers));

// 3. Напишите функцию, которая удваивает каждый элемент в массиве чисел.

// function getDoubleNumbers(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2;
//   }
// }

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// getDoubleNumbers(numbers);
// console.log(numbers);

// 4. Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.

// function checkElement(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       console.log("Такой элемент есть!");
//     } else {
//       console.log("Такого элемента нет!");
//     }
//   }
// }

// const array = ["Olha", 2, -45, 0, "Nadiia"];
// const element = "Nadiia";

// checkElement(array);

// 5. Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.

// function makeObject(keys, values) {
//   const result = {};
//   for (let i = 0; i < keys.length; i++) {
//     result[keys[i]] = values[i];
//   }
//   return result;
// }

// const keys = ["name", "age", "city"];
// const values = ["John", 25, "New York"];

// const person = makeObject(keys, values);
// console.log(person);

// 6. Напишите функцию, которая вычисляет среднее значение чисел в массиве.

// function calculateAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// }

// const numbers = [2, 7, 6, 9, 45, -81, 0];

// console.log(calculateAverage(numbers) / numbers.length);

// 7. Напишите функцию, которая сортирует массив чисел по возрастанию.

// function sortNumbers(numbers) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - i - 1; j++) {
//       if (numbers[j] > numbers[j + 1]) {
//         const temp = numbers[j];
//         numbers[j] = numbers[j + 1];
//         numbers[j + 1] = temp;
//       }
//     }
//   }
// }

// const numbers = [4, 2, 7, 1, 9];

// sortNumbers(numbers);
// console.log(numbers);

// 8. Напишите функцию, которая создает новый объект, включая только указанные свойства.

// function pickProperties(obj, properties) {
//   const result = {};
//   for (let i = 0; i < properties.length; i++) {
//     const currentProperty = properties[i];
//     if (obj.hasOwnProperty(currentProperty)) {
//       result[currentProperty] = obj[currentProperty];
//     }
//   }
//   return result;
// }

// const person = { name: "Alice", age: 30, city: "London" };

// const selectedProperties = pickProperties(person, ["name", "city"]);
// console.log(selectedProperties);

//======================submit=============================

// const form = document.querySelector("form");
// const emailInput = document.querySelector(".email");
// const statusMessage = document.querySelector(".statusMessage");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let found = null;
//   for (let i = 0; i < emailInput.value.length; i++) {
//     if (emailInput.value[i] === "@") {
//       found = true;
//     }
//   }
//   if (found === true) {
//     statusMessage.textContent = "Valid email. Form send";
//   } else {
//     statusMessage.textContent =
//       "Invalid email, pls add @ symbol. Form didn't send";
//   }
// });

//=========================================================

// 1. Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScriptфункцию, которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в противном случае выведите сообщение "Введите корректный email".

// const form = document.querySelector("form");
// const emailInput = document.querySelector(".email");
// const submitText = document.querySelector(".submitText");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let symbol = null;
//   for (let i = 0; i < emailInput.value.length; i++) {
//     if (emailInput.value[i] === "@") {
//       symbol = true;
//     }
//   }
//   if (symbol === true) {
//     submitText.textContent = "Форма отправлена";
//   } else {
//     submitText.textContent = "Введите корректный email";
//   }
// });

// 2. Создайте форму с выпадающим списком (select) для выбора языка и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение из выпадающего списка и выведите сообщение "Язык выбран: [выбранное значение]"

// const form = document.querySelector("form");
// const selectElement = document.querySelector("#languages");
// const result = document.querySelector(".result");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   result.textContent = "Язык выбран: " + selectElement.value;
// });

// 3. Создайте форму с радиокнопками для выбора цвета фона и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение радиокнопки и установите соответствующий цвет фона для страницы.

// const form = document.querySelector("form");
// const inputs = document.querySelectorAll("[name=color]");

// for (let input of inputs) {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const selectedColor = document.querySelector(
//       'input[name="color"]:checked'
//     ).value;
//     document.body.style.backgroundColor = selectedColor;
//   });
// }

// 4. Создайте форму с текстовым полем для ввода текста и элементом для отображения количества введенных символов (например, <span>). Напишите JavaScript-функцию, которая будет вызываться при вводе текста в поле. В функции подсчитайте количество символов в текстовом поле и обновите отображение на странице.

// const text = document.querySelector("#text");
// const count = document.querySelector(".count");

// document.querySelector("#text").addEventListener("input", function () {
//   count.textContent = text.value.length;
// });

// 5. Создайте простую форму с двумя текстовыми полями для ввода имени и фамилии пользователя и кнопкой “Отправить”. Добавьте обработчик события submit для формы. При отправке формы, текстовые поля должны очищаться, а введенные значения должны выводиться в консоли браузера.

// const form = document.querySelector("form");
// const name = document.querySelector(".name");
// const surname = document.querySelector(".surname");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Имя: " + name.value);
//   console.log("Фамилия: " + surname.value);
//   name.value = "";
//   surname.value = "";
// });

//=========================================================

// 1. Используя метод forEach(), выведите в консоль сумму всех элементов числового массива.

// const number = [1, 3, 7, -8, 44, 777, 0];

// let sum = 0;

// number.forEach((elem, ind, arr) => {
//   sum = sum + elem;
// });

// console.log(sum);

//=========================================================

// Home 11

// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".

// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).

// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

// const login = "olha_biekhtir";
// const password = "123*45";

// const form = document.querySelector("form");
// const loginNew = document.querySelector(".loginNew");
// const passwordNew = document.querySelector(".passwordNew");
// const messageText = document.querySelector(".messageText");

// console.log(passwordNew.value);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (loginNew.value === login && passwordNew.value === password) {
//     messageText.textContent = "Вход выполнен успешно!";
//   } else {
//     messageText.textContent =
//       "Не удалось войти в систему. Проверьте, пожалуйста, логин и пароль!";
//   }
// });

//=========================================================

// Home 11.1

// 1. Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// 2. Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// 3. При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

// const form = document.querySelector("form");
// const counter = document.querySelector("#counter");
// const text = document.querySelector("p");

// let sum = 0;

// function getColor() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + "," + g + "," + b + ")";
// }

// console.log(getColor());

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   sum = sum + 1;
//   counter.value = sum;
//   if (sum % 5 === 0) {
//     counter.style.backgroundColor = getColor(sum);
//   }
//   if (sum % 10 === 0) {
//     text.textContent = "Поздравляем! Вы достигли 10 кликов!";
//   }
// });

//=========================================================

// 1. Создайте пустой массив colors. Используйте метод push, чтобы добавить в него три цвета: "red", "green", "blue".

// const colors = [];

// colors.push("red", "green", "blue");

// console.log(colors);

// 2. Создайте массив numbers с элементами 1 и 2. Используйте метод push, чтобы добавить в него два новых числа: 3 и 4.

// const numbers = [1, 2];

// numbers.push(3, 4);

// console.log(numbers);

// 3. Используя метод forEach(), выведите в консоль сумму всех элементов числового массива.

// const numbers = [1, 0, 15, -7, 44];

// let sum = 0;

// numbers.forEach((element) => {
//   sum = sum + element;
// });

// console.log(sum);

// 4. Используя метод forEach(), умножьте каждый элемент числового массива на его индекс.

// const numbers = [1, 0, 15, -7, 44];

// function result(array) {
//   array.forEach((element, ind) => {
//     array[ind] = element * ind;
//   });
// }

// result(numbers);

// console.log(numbers);

// 5. Используя метод map(), создайте новый массив, содержащий длины каждого элемента исходного массива.

// const strings = ["Olha", "Nadiia", "Alex", "Liubov", "Oleh"];

// const newArray = strings.map((el, ind, arr) => {
//   return el.length;
// });

// console.log(newArray);

// 6. Используя метод map(), создайте новый массив, содержащий квадратный корень каждого элемента числового массива.

// const numbers = [1, 0, 15, -7, 44];

// const newArray = numbers.map((el, ind, arr) => {
//   return Math.sqrt(el);
// });

// console.log(newArray);

// 7. Создайте массив чисел. Используя метод forEach и условие, выведите в консоль только четные числа из массива.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((elem, ind, arr) => {
//   if (elem % 2 === 0) {
//     console.log(elem);
//   }
// });

// 8. Создайте массив чисел. Напишите функцию, используя метод forEach, чтобы определить и вывести в консоль среднее значение чисел в массиве.

// const numbers = [10, 20, 30, 40, 50];

// let sum = 0;

// numbers.forEach((el, ind, arr) => {
//   sum = sum + el;
// });

// console.log(sum / numbers.length);

// 9. Создайте массив чисел. Напишите функцию, используя метод map, чтобы создать новый массив, содержащий удвоенные значения каждого элемента из первого массива

// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map((el, ind, arr) => {
//   return el * 2;
// });

// console.log(newArray);

// 10. Создайте массив объектов с полями "name". Используйте метод map, чтобы создать новый массив, содержащий только имена из первого массива.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const newArray = people.map((el, ind, arr) => {
//   return { name: el.name };
// });

// console.log(newArray);

// 11. Создайте массив чисел. Используйте метод map, чтобы создать новый массив, содержащий эти же числа, но представленные в виде строк.

// const numbers = [42, 17, 8, 99, 23];

// const newArray = numbers.map((el, ind, arr) => {
//   return String(el);
// });

// console.log(newArray);

//=========================================================

// Home 12

// 1. Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map, чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 15 },
// ];

// let newProperty = "status";
// let statusAge = "";

// let newArray = people.map((item) => {
//   if (item.age < 18) {
//     statusAge = "child";
//   } else {
//     statusAge = "adult";
//   }
//   return {
//     name: item.name,
//     age: item.age,
//     [newProperty]: statusAge,
//   };
// });

// console.log(newArray);

// 2. Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

// const movies = [
//   { title: "Inception", rating: 4.9 },
//   { title: "The Dark Knight", rating: 5.0 },
//   { title: "Interstellar", rating: 4.8 },
//   { title: "The Matrix", rating: 3.5 },
// ];

// movies.forEach((el, ind, arr) => {
//   if (el.rating > 4) {
//     console.log(el.title);
//   }
// });

//=========================================================

// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.

// const animals = ["cat", "dog", "rabbit"];

// animals.pop();

// console.log(animals);

//=========================================================

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.

// const numbers = [-2, 5, -8, 10, -3, 7];

// const filterPositiveNumbers = numbers.filter((number) => {
//   return number > 0;
// });

// console.log(filterPositiveNumbers);

//=========================================================

// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.

// const colors = ["red", "green", "blue"];

// colors.shift();

// console.log(colors);

//=========================================================

// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".

// const fruits = ["banana", "orange"];

// fruits.unshift("apple", "grape");

// console.log(fruits);

//=========================================================

// const numbers = [4, -5, 2, -1];

// const newArray = numbers.reduce((acc, elem, ind, arr) => {
//   if (elem > 0) {
//     acc.push(elem);
//     return acc;
//   } else {
//     return acc;
//   }
// }, []);

// console.log(newArray);

//=========================================================

// 1. Создайте пустой массив stack. Реализуйте функцию pushToStack, которая добавляет числа 1, 2, 3 в стек, а затем реализуйте функцию popFromStack, которая удаляет последнее число из стека.

// const stack = [];

// const pushToStack = () => {
//   stack.push(1, 2, 3);
// };

// pushToStack();

// console.log(stack);

// const popFromStack = () => {
//   stack.pop();
// };

// popFromStack();

// console.log(stack);

// 2. Создайте массив чисел. Реализуйте функцию doubleEvenNumbers, используя методы map и filter, чтобы удвоить значения только четных чисел.

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((el, ind, arr) => {
//   return el % 2 === 0;
// });

// const doubleEvenNumbers = evenNumbers.map((el, ind, arr) => {
//   return el * 2;
// });

// console.log(doubleEvenNumbers);

// 3. Создайте массив строк. Реализуйте функцию addExclamation, используя метод forEach, чтобы добавить к каждой строке восклицательный знак "!".

// const phrases = ["Hello", "How are you", "Goodbye"];

// const addExclamation = (array) => {
//   array.forEach((elem, ind, arr) => {
//     arr[ind] = elem + "!";
//   });
// };

// addExclamation(phrases);

// console.log(phrases);

// 4. Cоздайте массив чисел. Реализуйте функцию calculateAverage, используя метод reduce, чтобы вычислить среднее значение чисел в массиве.

// const numbers = [10, 20, 30, 40, 50];

// const calculateAverage = numbers.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, 0);

// console.log(calculateAverage / numbers.length);

// 5. Создайте массив чисел. Реализуйте функцию addAndSort, используя методы unshift и sort, чтобы добавить число 5 в начало массива и отсортировать его по возрастанию.

// const numbers = [3, 1, 4, 2];

// function addAndSort(list) {
//   list.unshift(5);
//   return list.sort((a, b) => a - b);
// }

// const result = addAndSort(numbers);

// console.log(result);

// 6. Создайте массив строк. Реализуйте функцию concatenateAndCountChars, используя методы map или reduce, чтобы объединить строки в одну и подсчитать общее количество символов.

// const words = ["apple", "banana", "cherry"];

// const concatenateAndCountChars = words.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, "");

// console.log(concatenateAndCountChars);
// console.log(concatenateAndCountChars.length);

// 7. Создайте массив объектов с полями "name" и "age". Реализуйте функцию updateAges, используя методы map или filter, чтобы увеличить возраст на 1 для всех объектов с возрастом менее 30 лет.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 32 },
//   { name: "Charlie", age: 28 },
// ];

// const updateAges = people.map((elem, ind, arr) => {
//   if (elem.age < 30) {
//     return { ...elem, age: elem.age + 1 };
//   } else {
//     return { ...elem, age: elem.age };
//   }
// });

// console.log(updateAges);

// 8. Создайте массив чисел. Реализуйте функцию sumAndMultiplyByLast, используя методы reduce или map, чтобы вычислить сумму чисел и умножить ее на последний элемент массива.

// const numbers = [2, 4, 6, 8, 10];

// const sumAndMultiplyByLast = numbers.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, 0);

// const lastElement = numbers.pop();

// console.log(sumAndMultiplyByLast * lastElement);

// 9. Создайте массив строк. Реализуйте функцию filterAndSortStrings, используя методы filter и sort, чтобы оставить только строки длиной более 3 символов и отсортировать их по алфавиту.

// const words = ["apple", "pear", "banana", "kiwi", "fig"];

// const filterStrings = words.filter((elem, ind, arr) => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });

// console.log(filterStrings.sort());

//=========================================================

// 1. Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.

// const animals = ["cat", "dog", "rabbit"];

// const result = animals.pop();

// console.log(animals);

// 2. Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.

// const letters = ["A", "B", "C"];

// const lastLetter = letters.pop(letters);

// console.log(lastLetter);

// 3. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.

// const numbers = [-2, 5, -8, 10, -3, 7];

// const newArray = numbers.filter((number) => {
//   return number > 0;
// });

// console.log(newArray);

// 4. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.

// const numbers = [9, 12, 5, 18, 7, 24];

// const filterNumbers = numbers.filter((number) => {
//   return number % 3 === 0;
// });

// console.log(filterNumbers);

// 5. Используя метод sort(), отсортируйте числовой массив по убыванию.

// let array = [4, 2, 5, 1, 3];

// array.sort((a, b) => {
//   return b - a;
// });

// console.log(array);

// 6. Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.

// let array = [1, 2, 3, 4, 5];

// const filterArray = array.filter((elem, ind, arr) => {
//   if (elem % 2 === 0) {
//     return elem;
//   }
// });

// console.log(filterArray);

// 7. Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.

// const words = ["apple", "banana", "kiwi", "orange", "grape", "o"];

// const sortedWords = words.sort((a, b) => {
//   return a.length - b.length;
// });

// console.log(words);

// 8. Создайте массив чисел. Напишите функцию, используя метод sort, чтобы отсортировать числа в порядке убывания.

// const numbers = [10, 5, 8, 2, 7, 3];

// const sortedNumbers = numbers.sort((a, b) => {
//   return b - a;
// });

// console.log(numbers);

// 9. Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа в определенном диапазоне.

// const numbers = [15, 7, 28, 3, 42, 10];
// const minRange = 10;
// const maxRange = 30;

// const filteredNumbers = numbers.filter((elem, ind, arr) => {
//   if (minRange <= elem && elem <= maxRange) {
//     return elem;
//   }
// });

// console.log(filteredNumbers);

// 10. Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.

// const colors = ["red", "green", "blue"];

// const result = colors.shift();

// console.log(colors);

// 11. Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".

// const fruits = ["banana", "orange"];

// const result = fruits.unshift("apple", "grape");

// console.log(fruits);

// 12. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.

// const numbers = [5, 10, 15, 20];

// const sumNumbers = numbers.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, 0);

// console.log(sumNumbers);

// 13. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.

// const words = ["Hello", " ", "world", "!"];

// const sumWords = words.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, "");

// console.log(sumWords);

// 14. Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.

// const numbers = [14, 5, 22, 8, 45, 11];

// const maxNumber = numbers.reduce((acc, elem, ind, arr) => {
//   if (elem > acc) {
//     acc = elem;
//   }
//   return acc;
// }, 0);

// console.log(maxNumber);

// 15. Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.

// let numericArray = [1, 2, 3, 4, 5];

// const filteredNumericArray = numericArray.filter((elem, ind, arr) => {
//   if (elem % 2 === 0) {
//     return elem;
//   }
// });

// const sumFilteredNumericArray = filteredNumericArray.reduce(
//   (acc, elem, ind, arr) => {
//     return acc + elem;
//   },
//   0
// );

// console.log(sumFilteredNumericArray);

// 16. Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.

// const str = "hello";

// const newArray = Array.from(str);

// console.log(newArray);

// 17. Используя методы map(), sort() и reduce(), вычислите сумму квадратов всех положительных чисел в числовом массиве, отсортировать массив по возрастанию, последовательно используя filter() map() и reduce().

// let numericArray = [-2, 3, -5, 1, 4];

//=========================================================
// Home 12.1

// 1. Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.

// const movies = [
//   { title: "Inception", year: 2010 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "Interstellar", year: 2014 },
//   { title: "The Matrix", year: 1999 },
// ];

// const sortedMovies = movies.sort((a, b) => {
//   return a.year - b.year;
// });

// console.log(movies);

// 2. Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const togetherPeople = people.reduce((acc, elem, ind, arr) => {
//   return acc + elem.name + ", ";
// }, "");

// console.log(togetherPeople.slice(0, -2));

//=========================================================

//===========push/unshift (возвращает длину массива)=======
//===============добавляет элемент в конец/начало==========

// 1. Создайте пустой массив colors. Используйте метод push, чтобы добавить в него три цвета: "red", "green", "blue". (Попробовать решить с помощью цикла) const colors = []

// const arr = [];

// const colors = ["red", "green", "blue"];

// for (let i = 0; i < colors.length; i++) {
//   arr.push(colors[i]);
// }

// console.log(arr);

//=========pop/shift (возвращает удаленный элемент)========
//===========удаляет последний/первый элемент==============

// const arr = [1, 2, 3];

// const result = arr.pop();

// console.log(result);
// console.log(arr);

//==========forEach (возвращает undefined)=================

// const number = [1, 3, 7, -8, 44, 777, 0];

// number.forEach((elem, ind, arr) => {
//   if (elem % 2 === 0) {
//     console.log(elem);
//   }
// });

//==========map (возвращает новый массив)==================

// const numbers = [1, 3, 7, -8, 44, 777, 0];

// const newArray = numbers.map((el, ind, arr) => {
//   return el * 2;
// });

// console.log(newArray);
// console.log(numbers);

//===========filter (возвращает новый массив)==============
//====либо берет элемент в новый массив, либо не берет=====

// const numbers = [4, -5, 2, 1, -6, -2, 0, 4];

// const filteredResult = numbers.filter((el, ind, arr) => {
//   return el > 0;
// });

// console.log(filteredResult);

//==========sort (возвращает отсортированный массив)=======
//================(меняет оригинальный)====================
//===================ASCII Table===========================
//=============числа сравниваются как строки===============

// const numbers = [0, 1, 10, 2, 4, 11, 3, 5];

// numbers.sort();

// console.log(numbers);

//=====================sort================================

// const numbers = [0, 1, 10, 2, 4, 11, 3, 5];

// numbers.sort((a, b) => {
//   //   return a - b; // по возрастанию
//   return b - a; // по убыванию
// });

// console.log(numbers);

//======================sort===============================

// const words = ["hello", "a", "hi", "welcome", "buy"];

// words.sort((a, b) => {
//   return a.length - b.length;
// });

// console.log(words);

//=========================sort============================

// const users = [
//   { name: "Alice", age: 23 },
//   { name: "Mike", age: 29 },
//   { name: "Greg", age: 42 },
//   { name: "Bob", age: 18 },
// ];

// users.sort((a, b) => {
//   return a.age - b.age; // сортировка по возрасту
// });

// users.sort((a, b) => {
//   return a.name.charCodeAt(0) - b.name.charCodeAt(0);
// }); // сортировка по первой букве (индекс 0)

// console.log(users);

//===================reduce()==============================
//=====возвращает значение acc на последней итерации=======

// const numbers = [4, 5, 2, 1];

// const result = numbers.reduce((acc, elem, ind, arr) => {
//   return acc + elem;
// }, 0);

// console.log(result);

// const result = numbers.reduce((acc, elem, ind, arr) => {
//   return acc * elem;
// }, 1);

// console.log(result);

//======================some()=============================
//====если хотя-бы один элемент подходит под условие=======
//=============возвращает true/false=======================

// const numbers = [1, 4, -2, 2, 3, 9, 1, 10];

// const result = numbers.some((el, ind, arr) => {
//   return el > 0;
// });

// console.log(result);

//======================every()============================
//====если все элементы подходят под условие===============
//=============возвращает true/false=======================

// const numbers = [1, 4, -2, 3, 9, 1, 10];

// const result = numbers.every((el, ind, arr) => {
//   return el > 0;
// });

// console.log(result);

//=========================================================

// 1. Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().

// const numbers = [1, 2, -3, 4, 5];

// const findNegativeNumber = numbers.some((el, ind, arr) => {
//   return el < 0;
// });

// console.log(findNegativeNumber);

// 2. Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().

// const strings = ["apple", "banana", "orange", "watermelon"];

// const findString = strings.some((el, ind, arr) => {
//   return el.length > 10;
// });

// console.log(findString);

// 3. Проверьте, являются ли все элементы массива положительными числами с помощью метода every().

// const numbers = [1, 2, 3, 4, 5];

// const ifAllPositiveNumbers = numbers.every((el, ind, arr) => {
//   return el > 0;
// });

// console.log(ifAllPositiveNumbers);

// 4. Проверьте, являются ли все элементы массива четными числами с помощью метода every().

// const numbers = [2, 4, 6, 8, 10];

// const ifAllEvenNumbers = numbers.every((el, ind, arr) => {
//   return el % 2 === 0;
// });

// console.log(ifAllEvenNumbers);

// 5. Создайте массив чисел. Реализуйте функцию hasEvenNumber, используя метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.

// const numbers = [1, 3, 5, 6, 9];

// const hasEvenNumber = numbers.some((el, ind, arr) => {
//   return el % 2 === 0;
// });

// console.log(hasEvenNumber);

// 6. Создайте массив строк. Реализуйте функцию hasStringWithA, используя метод some, чтобы проверить, содержит ли массив хотя бы одну строку с буквой "a".

// const words = ["banana", "orange", "kiwi", "pear"];

// const hasStringWithA = (array) => {
//   return array.some((el, ind, arr) => {
//     for (let i = 0; i < el.length; i++) {
//       if (el[i] === "a") {
//         return true;
//       }
//     }
//     return false;
//   });
// };

// console.log(hasStringWithA(words));

// 7. Создайте массив чисел. Реализуйте функцию areAllMultiplesOfThree, используя метод every, чтобы проверить, что все числа в массиве кратны 3.

// const numbers = [3, 6, 9, 12];

// const areAllMultiplesOfThree = numbers.every((el, ind, arr) => {
//   return el % 3 === 0;
// });

// console.log(areAllMultiplesOfThree);

// 8. Создайте массив объектов с полями "name" и "age". Реализуйте функцию hasPersonWithAge, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с определенным возрастом.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 32 },
//   { name: "Charlie", age: 28 },
// ];

// const hasPersonWithAge = people.some((el, ind, arr) => {
//   return el.age === 32;
// });

// console.log(hasPersonWithAge);

//=========================================================

//=====================localstorage========================

//======================setitem()==========================
//=============для записи(ключ, значение)==================
//===============ничего не возвращает======================

// localStorage.setItem("age", 49);

// console.log(localStorage);

//======================getItem()==========================
//=================для чтения(ключ)========================
//==============возвращает значение ключа или null=========

// const myName = localStorage.getItem("name");

// console.log(myName);

//==================removeItem()===========================
//===============для удаления(ключ)========================
//=========удаляет пару ключ-значение по ключу=============
//===============ничего не возвращает======================

// localStorage.removeItem("age");

// console.log(localStorage);

//======================clear()============================
//===============очищает хранилище полностью===============

// localStorage.clear();

// console.log(localStorage);

//=========================================================

//=========================================================

// const counter = document.querySelector(".counter");
// const plusOneBtn = document.querySelector(".plusOne");

// const count = localStorage.getItem("count");

// if (count) {
//   counter.textContent = count;
// }

// plusOneBtn.addEventListener("click", () => {
//   counter.textContent = Number(counter.textContent) + 1;
//   localStorage.setItem("count", counter.textContent);
// });

// console.log(localStorage);

//=========================================================

// 1. Создадим кнопку, которая переключает значение localStorage из 1 в 0 и обратно.

// const counter = document.querySelector(".counter");
// const changeCounter = document.querySelector(".changeCounter");

// localStorage.setItem("count", counter.textContent);

// const change = changeCounter.addEventListener("click", () => {
//   if (counter.textContent === "1") {
//     localStorage.setItem("count", "0");
//     counter.textContent = "0";
//   } else {
//     localStorage.setItem("count", "1");
//     counter.textContent = "1";
//   }
// });

// console.log(localStorage);

//=========================================================
// Home 13

// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

// const products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: 55 },
//   { name: "Product 4", price: 25 },
//   { name: "Product 5", price: 30 },
// ];

// const hasExpensiveItem = products.some((el, ind, arr) => {
//   return el.price > 50;
// });

// console.log(hasExpensiveItem);

//=================dark/light theme========================

// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.querySelector("body");
//   const switchBtn = document.querySelector(".switch");

//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     body.classList.add("dark");
//   }

//   switchBtn.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     const check = body.classList.contains("dark");

//     if (check === true) {
//       localStorage.setItem("theme", "dark");
//     } else {
//       localStorage.setItem("theme", "light");
//     }
//   });
// });

//=========================JSON============================

// let num = 45;
// let username = "Alice";
// let admin = true;
// let hasAccess = null;

// localStorage.setItem("number", num);
// localStorage.setItem("username", username);
// localStorage.setItem("isAdmin", admin);
// localStorage.setItem("access", hasAccess);

// const userData = {
//   id: 454545,
//   city: "Tokio",
// };

// const result = JSON.stringify(userData);

// localStorage.setItem("userdata", result);

// const userData = localStorage.getItem("userdata");

// const result = JSON.parse(userData);

// console.log(result);

// const numbers = [4, 2, 1, 45, 3];

// localStorage.setItem("listOfNumbers", numbers);

// const usersData = [
//   4,
//   "hello",
//   { name: "Alice", age: 24 },
//   { name: "Greg", age: 25 },
//   { name: "Mike", age: 89 },
// ];

// localStorage.setItem("usersData", JSON.stringify(usersData));

// const getUsersData = JSON.parse(localStorage.getItem("usersData"));

// console.log(getUsersData);

//=========================================================

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

// const userNameInput = document.querySelector("#username");
// const saveNameBtn = document.querySelector("button");
// const savedName = document.querySelector(".savedName");

// const currentName = localStorage.getItem("username");

// savedName.textContent = currentName;

// saveNameBtn.addEventListener("click", () => {
//   localStorage.setItem("username", userNameInput.value);
//   savedName.textContent = userNameInput.value;
// });

//=========================================================

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

// const form = document.querySelector("form");

// const usersText = document.querySelector("#usersText");
// const btnSubmit = document.querySelector(".btnSubmit");

// btnSubmit.addEventListener("click", () => {
//   localStorage.setItem("usersText", usersText.value);
// });

// 3. К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

// const btnOldText = document.querySelector(".btnOldText");

// btnOldText.addEventListener("click", (event) => {
//   event.preventDefault();
//   const usersTextNew = localStorage.getItem("usersText");
//   usersText.value = usersTextNew;
// });

// 4. Добавить кнопку, которая очищает localStorage

// const clearLocalStorage = document.querySelector(".clearLocalStorage");

// clearLocalStorage.addEventListener("click", () => {
//   localStorage.clear();
// });

//=========================================================

// 1. Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.

// function writeLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// writeLocalStorage("age", 25);

// function readLocalStorage(key) {
//   let value = localStorage.getItem(key);
//   return JSON.parse(value);
// }

// console.log(readLocalStorage("age"));

//=========================================================

// 2. Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара. Реализовывать через массив с продуктами и localStorage.

//=========================================================
// Home 13.1

// Создайте простую веб-страницу, где пользователь может вводить текст заметки. Рядом с полем ввода должна быть кнопка "Сохранить", которая сохраняет введенный текст в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. При обновлении страницы заметка должна оставаться на месте.

// const originalText = document.querySelector("#originalText");
// const btn = document.querySelector("button");
// let oldText = document.querySelector("#oldText");

// oldText = localStorage.getItem("originalText");
// document.querySelector("#oldText").value = oldText;

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   localStorage.setItem("originalText", originalText.value);
//   oldText = localStorage.getItem("originalText");
//   document.querySelector("#oldText").value = oldText;
// });

//=======================Project===========================

// const body = document.querySelector("body");
// const signUpForm = document.querySelector("form");
// const userNameInput = document.querySelector(".username");
// const lastNameInput = document.querySelector(".lastname");
// const emailInput = document.querySelector(".email");
// const passwordInput = document.querySelector(".password");
// const users = JSON.parse(localStorage.getItem("users")) || [];
// signUpForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (
//     userNameInput.value &&
//     lastNameInput.value &&
//     emailInput.value &&
//     passwordInput.value
//   ) {
//     const newUser = {
//       name: userNameInput.value,
//       lastName: lastNameInput.value,
//       email: emailInput.value,
//       password: passwordInput.value,
//     };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//   } else {
//     console.log("there is an empty field");
//   }
// });

//================setTimeout/setInterval===================

// console.log(1111111111111);

// setTimeout(() => {
//   console.log("Hello after 2.5 seconds");
// }, 2500);

// console.log(2222222222222);

//====================Promise==============================

// console.log(1);

// const promise1 = new Promise((resolve, reject) => {
//   // fetch("url")
//   const data = {
//     id: 6554564,
//     status: "ok",
//   };

//   setTimeout(() => {
//     if (data.status === "ok") {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });

// promise1
//   .then(() => {
//     console.log("OK");
//     const errorMessage = document.createElement("h1");
//     document.body.append(errorMessage);
//     errorMessage.style.color = "green";
//     errorMessage.textContent = "EVERITHING OK";
//   })
//   .catch(() => {
//     const errorMessage = document.createElement("h1");
//     document.body.append(errorMessage);
//     errorMessage.textContent = "SERVER ERROR 404";
//   });

// console.log(2);
// console.log(3);

//=========================================================

// console.log(1);
// function getUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = {
//         name: "Alice",
//         id: 5644554,
//         status: "Serverv Error 404",
//       };
//       if (userData.status === "ok") {
//         resolve(userData);
//       } else {
//         reject(userData.status);
//       }
//     }, 3000);
//   });
// }
// getUserData()
//   .then((data) => {
//     const userName = document.createElement("h2");
//     document.body.append(userName);
//     userName.textContent = data.name;
//   })
//   .catch((error) => {
//     const errorStatus = document.createElement("h2");
//     document.body.append(errorStatus);
//     errorStatus.textContent = error;
//   });
// console.log(2);

//=========================================================

// 1. Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и возвращает Promise. Если число четное, выполните resolve с сообщением "Число четное", в противном случае выполните reject с сообщением "Число нечетное".

// function checkEvenNumber(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number % 2 === 0) {
//         resolve("Число четное");
//       } else {
//         reject("Число нечетное");
//       }
//     }, 1000);
//   });
// }

// const inputNumber = 4;

// checkEvenNumber(inputNumber)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 2. Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе выполните reject с сообщением об ошибке.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         resolve("Данные успешно загружены");
//       } else {
//         reject("Ошибка при загрузке данных");
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 3. Создайте функцию generateRandomNumber, которая возвращает Promise. Используйте setTimeout для имитации вычислений. Если число успешно сгенерировано, выполните resolve с числом, иначе выполните reject с сообщением об ошибке.

// function generateRandomNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() < 0.8;
//       if (success) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         resolve(randomNumber);
//       } else {
//         reject("Ошибка при генерации числа");
//       }
//     }, 1000);
//   });
// }

// generateRandomNumber()
//   .then((number) => {
//     console.log("Сгенерированное число:", number);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//========================Promise==========================

// function getData() {
//   return new Promise((resolve, reject) => {
//     let status = false;

//     const userData = {
//       name: "Alice",
//       id: 56846545645,
//     };

//     if (status) {
//       resolve(userData);
//     } else {
//       reject("Error 404");
//     }
//   });
// }

// console.log(1);

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(2);

//=========================================================

// После реализации основного функционала проекта “Регистрации и Авторизации с помощью localstorage” реализовать валидацию инпутов (Имя, Эмейл, Телефон, Пароль) с помощью JS.

// Имя {
// Минимум 2 символа
// Максимум 24 символа
// Только буквы
// }

// Эмейл {
// Наличие символа@
// Минимум 7 символов
// }

// Телефон {
// Первый символ +
// Максимум 12 чисел
// Минимум 8 чисел
// Только числа
// }

// Пароль {
// Минимум 5 символов
// максимум 26 символов
// }

// const body = document.querySelector("body");
// const signUpForm = document.querySelector(".signup");
// const userNameInput = document.querySelector(".username");
// const phoneInput = document.querySelector(".phone");
// const emailInput = document.querySelector(".email");
// const passwordInput = document.querySelector(".password");

// //====================validation===========================

// userNameInput.addEventListener("input", () => {
//   if (userNameInput.value.length < 2 || userNameInput.value.length > 24) {
//     userNameInput.setCustomValidity(
//       "The name must contain from 2 to 24 characters"
//     );
//   } else if (!/^[а-яА-Яa-zA-Z]+$/.test(userNameInput.value)) {
//     userNameInput.setCustomValidity("The name must contain only letters");
//   } else {
//     userNameInput.setCustomValidity("");
//   }
// });

// phoneInput.addEventListener("input", () => {
//   if (phoneInput.value[0] !== "+") {
//     phoneInput.setCustomValidity(
//       "The phone number must begin with the + symbol"
//     );
//   } else if (phoneInput.value.length < 9 || phoneInput.value.length > 13) {
//     phoneInput.setCustomValidity(
//       "The phone number must contain from 8 to 12 digits"
//     );
//   } else if (!/^\+[0-9]+$/.test(phoneInput.value)) {
//     phoneInput.setCustomValidity("The phone number must contain only numbers");
//   } else {
//     phoneInput.setCustomValidity("");
//   }
// });

// emailInput.addEventListener("input", () => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailInput.value.length < 7) {
//     emailInput.setCustomValidity(
//       "Email must contain a minimum of 7 characters"
//     );
//   } else if (!emailRegex.test(emailInput.value)) {
//     emailInput.setCustomValidity(
//       "Email must contain the @ symbol and be in the format example@example.com"
//     );
//   } else {
//     emailInput.setCustomValidity("");
//   }
// });

// passwordInput.addEventListener("input", () => {
//   if (passwordInput.value.length < 5) {
//     passwordInput.setCustomValidity(
//       "Password must contain at least 5 characters"
//     );
//   } else if (passwordInput.value.length > 26) {
//     passwordInput.setCustomValidity(
//       "The password must contain a maximum of 26 characters"
//     );
//   } else {
//     passwordInput.setCustomValidity("");
//   }
// });

// // ========================================================

// const logInForm = document.querySelector(".login");
// const loginEmailInput = document.querySelector(".loginEmail");
// const loginPasswordInput = document.querySelector(".loginPassword");

// const statusMessage = document.createElement("p");
// signUpForm.append(statusMessage);

// function setStatusMessage(element, type) {
//   element.textContent =
//     type === "ok"
//       ? "You have successfully registered!"
//       : "All fields must be filled in!";
//   element.style.color = type === "ok" ? "violet" : "red";
// }

// const users = JSON.parse(localStorage.getItem("users")) || [];

// //=========================================================

// signUpForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (
//     userNameInput.value &&
//     phoneInput.value &&
//     emailInput.value &&
//     passwordInput.value
//   ) {
//     const newUser = {
//       name: userNameInput.value,
//       phone: phoneInput.value,
//       email: emailInput.value,
//       password: passwordInput.value,
//     };

//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));
//     setStatusMessage(statusMessage, "ok");
//     userNameInput.value = "";
//     phoneInput.value = "";
//     emailInput.value = "";
//     passwordInput.value = "";
//   } else {
//     setStatusMessage(statusMessage, "error");
//   }
// });

// // ========================================================

// const statusMessage2 = document.createElement("p");
// logInForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const result = checkLogin(users);

//   if (result === true) {
//     statusMessage2.textContent = "You have successfully logged in!";
//     statusMessage2.style.color = "violet";
//     loginEmailInput.value = "";
//     loginPasswordInput.value = "";
//   } else {
//     statusMessage2.textContent = "You entered the wrong email or password!";
//     statusMessage2.style.color = "red";
//     loginEmailInput.value = "";
//     loginPasswordInput.value = "";
//   }
// });

// logInForm.append(statusMessage2);
// const oldP = document.querySelector("p");
// oldP.textContent = "";

// function checkLogin(listOfUsers) {
//   let result = false;

//   listOfUsers.forEach((user) => {
//     if (
//       user.email === loginEmailInput.value &&
//       user.password === loginPasswordInput.value
//     ) {
//       result = true;
//     }
//   });

//   return result;
// }

//=========================================================

// let a = 4;
// console.log(a);
// // const result = functionToServer("url"); // 15ms
// function getData() {
//   return new Promise((res, rej) => {
//     const data = { name: "Alice" };
//     if (data) {
//       res(data);
//     } else {
//       rej();
//     }
//   });
// }
// getData()
//   .then(() => {})
//   .catch(() => {});
// console.log(2);

//================методы Promice===========================
//=======================resolve===========================

// const myPromise = new Promise((resolve, reject) => {
//   resolve("Alice")
// })
// const myPromise = Promise.resolve([99, 2, 3, "Alice"]);
// myPromise.then((list) => {
//   list.forEach((el) => {
//     console.log(el);
//   });
// });

//======================reject=============================

// const myPromise = new Promise((resolve, reject) => {
//   reject("error 404")
// })
// const myPromise = Promise.reject("error 404");
// myPromise.catch((error) => {
//   console.log(error);
// });

//=================Promice.all()===========================
//==========reduce если все reduce=========================

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("123");
//     }, 1000);
//   });
// }
// function getData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("456");
//     }, 2500);
//   });
// }
// function getData3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("789");
//     }, 3200);
//   });
// }

// Promise.all([getData(), getData2(), getData3()]).then((data) => {
//   const password = data.reduce((acc, el) => acc + el, "");
//   console.log(password);
// });

//=================Promice.race()==========================
//==========reduce если один reduce========================

//=====================fetch()=============================

// const url = "https://jsonplaceholder.typicode.com/posts";

// const getPostsBtn = document.querySelector("button");

// getPostsBtn.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// });

//=========================================================

// 1. Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и возвращает Promise. Если число четное, выполните resolve с сообщением "Число четное", в противном случае выполните reject с сообщением "Число нечетное".

// function checkEvenNumber(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isEven = number % 2 === 0;
//       if (isEven) {
//         resolve("Число четное");
//       } else {
//         reject("Число нечетное");
//       }
//     }, 1000);
//   });
// }

// const inputNumber = 7;
// checkEvenNumber(inputNumber)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//=========================================================

// 2. Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе выполните reject с сообщением об ошибке.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const sucess = true;
//       if (sucess) {
//         resolve("Данные успешно загружены");
//       } else {
//         reject("Ошибка при загрузке данных");
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//=========================================================

// 3. Создайте функцию generateRandomNumber, которая возвращает Promise. Используйте setTimeout для имитации вычислений. Если число успешно сгенерировано, выполните resolve с числом, иначе выполните reject с сообщением об ошибке.

// function generateRandomNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const sucess = Math.random() < 0.8;
//       if (sucess) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         resolve(randomNumber);
//       } else {
//         reject("Ошибка при генерации числа");
//       }
//     }, 1000);
//   });
// }

// generateRandomNumber()
//   .then((number) => {
//     console.log("Сгенерированное число:", number);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//==============Promise.resolve(value)=====================

// const resolvedPromise = Promise.resolve("Значение успешно разрешено");
// resolvedPromise.then((result) => console.log(result));

//==============Promise.reject(reason)=====================

// const rejectedPromise = Promise.reject("Произошла ошибка");
// rejectedPromise.catch((error) => console.error(error));

//==============Promise.all()==============================
// возвращает массив значений от всех промисов, которые были ему переданы. Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта, но не порядок выполнения промисов.
// Если одно из переданных промисов будет отклонено, Promise.all будет немедленно отклонен со значением отклоненного промиса, не учитывая другие промисы, независимо выполнены они или нет.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "John");
// });

// const p2 = "Jane";
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values);
// });

//=========================================================

// Создайте три функции fetchData1, fetchData2 и fetchData3, каждая из которых возвращает Promise с имитацией загрузки данных с сервера, все три функции должны резолвиться через определенное кол-во времени: 2000 1500 и 1000 миллисекунд. Используя Promise.all(), создайте функцию loadAllData, которая одновременно загружает данные из всех трех ресурсов и возвращает массив с результатами.

// function fetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Данные из ресурса 1");
//     }, 2000);
//   });
// }
// function fetchData2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Данные из ресурса 2");
//     }, 1500);
//   });
// }
// function fetchData3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Данные из ресурса 3");
//     }, 1000);
//   });
// }

// function loadAllData() {
//   return Promise.all([fetchData1(), fetchData2(), fetchData3()]);
// }

// loadAllData().then((results) => {
//   console.log(results);
// });

//=========================================================

//================Promise.allSettled()=====================
// возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "John");
// });
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3]).then((values) => {
//   console.log(values);
// });

//===============Promise.any()=============================
// принимает итерируемый объект содержащий объекты промисов Promise. Является противоположностью для Promise.all().
// Как только один из промисов (Promise) выполнится успешно (fulfill), метод возвратит единственный объект Promise со значением выполненного промиса.
// Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращенный объект Promise будет отклонен (rejected) с одним из значений:
// Массив содержащий причины ошибки (отклонения)
// AggregateError (en-US) — подкласс Error, который объединяет выброшенные ошибки вместе

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "John");
// });
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve(3);

// Promise.any([p1, p2, p3]).then((values) => {
//   console.log(values);
// });

//===================Promise.race()========================
// возвращает Promise с результатом, первого завершенного из переданных промисов. Т.е. возвратит resolve или reject, в зависимости от того, что случится первым.

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, "один");
// });
// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, "два");
// });

// Promise.race([p1, p2]).then(function (value) {
//   console.log(value);
// });

//=========================================================

// Создайте две функции fetchDataFast и fetchDataSlow, каждая из которых возвращает промис с имитацией загрузки данных с сервера (например можно использовать setTimeout который срабатывает через 2 секунды). Используя Promise.race, определите, какая из функций загрузит данные быстрее. Выведите результат в консоль.

// function fetchDataFast() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Данные загружены быстро");
//     }, 1000);
//   });
// }

// function fetchDataSlow() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Данные загружены медленно");
//     }, 3000);
//   });
// }

// Promise.race([fetchDataFast(), fetchDataSlow()]).then((result) =>
//   console.log(result)
// );

//=========================================================

// Создайте три функции tryOperation1, tryOperation2, и tryOperation3, каждая из которых возвращает промис с имитацией попытки выполнить операцию (например можно использовать setTimeout который срабатывает через 2 секунды). Используя Promise.any, определите, какая из функций завершится успешно первой. Выведите результат в консоль.

// function tryOperation1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Операция 1 выполнена успешно");
//     }, 2000);
//   });
// }

// function tryOperation2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Операция 2 завершилась с ошибкой");
//     }, 1500);
//   });
// }

// function tryOperation3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Операция 3 выполнена успешно");
//     }, 1000);
//   });
// }

// Promise.any([tryOperation1(), tryOperation2(), tryOperation3()])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//==================fetch()================================

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//=========================================================

// Home 14.1
// Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено". Например через секунду, 3 или 5 секунд.

// function waitForTime(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Ожидание завершено");
//     }, ms);
//   });
// }

// waitForTime(1000).then((message) => console.log(message));
// waitForTime(3000).then((message) => console.log(message));
// waitForTime(5000).then((message) => console.log(message));

//====================method get===========================

// const photosUrl = "https://jsonplaceholder.typicode.com/photos";

// const getPhotosBtn = document.querySelector("button");

// getPhotosBtn.addEventListener("click", () => {
//   fetch(photosUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((listOfPhotos) => {
//       listOfPhotos.length = 10;

//       for (let i = 0; i < listOfPhotos.length; i++) {
//         const photoImage = document.createElement("img");
//         document.body.append(photoImage);
//         photoImage.setAttribute("src", listOfPhotos[i].thumbnailUrl);
//       }
//     });
// });

//=======================method post=======================

// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const sentPostBtn = document.querySelector("button");

// const user = {
//   name: "Alice",
//   age: 29,
//   idAdmin: true,
// };

// sentPostBtn.addEventListener("click", () => {
//   fetch(postsUrl, {
//     method: "GET",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
// });

//======================params=============================

// const url =
//   "https://jsonplaceholder.typicode.com/users?username=Bret&email=Sincere@april.biz";

// const getUserBtn = document.querySelector("button");

// getUserBtn.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((user) => {
//       console.log(user[0].company.name);
//     });
// });

//=========================================================

// const newPost = {
//   title: "Task",
//   body: "do something",
//   userId: 1,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(newPost),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//=========================================================

// const getAllDataBtn = document.querySelector("button");

// function getData(url) {
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getAllDataBtn.addEventListener("click", () => {
//   Promise.all([
//     getData("https://jsonplaceholder.typicode.com/pts"),
//     getData("https://jsonplaceholder.typicode.com/albums"),
//     getData("https://jsonplaceholder.typicode.com/users"),
//   ]).then((data) => {
//     console.log(data);
//   });
// });

//===================== Promise ===========================

// function getUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = {
//       name: "Alice",
//       id: 5644554,
//       status: "ok",
//     };

//     setTimeout(() => {
//       if (userData.status === "ok") {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// getUserData()
//   .then(() => {
//     console.log("ok");
//   })
//   .catch(() => {
//     console.log("error");
//   });

//=========================================================

// 1. Создайте простое приложение для сохранения списка задач. Пользователь должен иметь возможность добавлять и удалять задачи. Список задач должен сохраняться в localStorage.

// const form = document.querySelector("form");
// const taskInput = document.querySelector("input");
// const taskContainer = document.querySelector(".taskContainer");

// const tasks = [];

// function renderTasks(listOfTasks) {
//   taskContainer.textContent = "";

//   listOfTasks.forEach((task) => {
//     const p = document.createElement("p");
//     p.textContent = task;
//     taskContainer.append(p);
//   });
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   tasks.push(taskInput.value);

//   renderTasks(tasks);

//   taskInput.value = "";

//   localStorage.setItem("usertasks", JSON.stringify(tasks));
// });

//===================== fetch() ===========================
//====================== GET ==============================

// const photosUrl = "https://jsonplaceholder.typicode.com/photos";
// const getPhotosBtn = document.querySelector("button");

// getPhotosBtn.addEventListener("click", () => {
//   fetch(photosUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((listOfPhotos) => {
//       listOfPhotos.length = 10;
//       for (let i = 0; i < listOfPhotos.length; i++) {
//         const photoImage = document.createElement("img");
//         document.body.append(photoImage);
//         photoImage.setAttribute("src", listOfPhotos[i].thumbnailUrl);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

//===================== POST ==============================

// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const sentPostBtn = document.querySelector("button");

// const user = {
//   name: "Alice",
//   age: 29,
//   isAdmin: true,
// };

// sentPostBtn.addEventListener("click", () => {
//   fetch(postsUrl, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
// });

//=========================================================

// const url = "https://jsonplaceholder.typicode.com/posts?id=1";
// const getUserBtn = document.querySelector("button");

// getUserBtn.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((user) => {
//       console.log(user[0].title);
//     });
// });

//=========================================================

// Home 15
// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

// function fetchUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (users) {
//       renderUserCards(users);
//     });
// }

// function renderUserCards(users) {
//   const container = document.querySelector(".userCardsContainer");
//   users.forEach(function (user) {
//     const card = document.createElement("div");
//     card.className = "userCard";
//     card.innerHTML = `
//         <h2>${user.username}</h2>
//         <p><span>ID:</span> ${user.id}</p>
//         <p><span>Email:</span> ${user.email}</p>
//         <p><span>City:</span> ${user.address.city}</p>
//         <p><span>Phone:</span> ${user.phone}</p>
//         <p><span>Company:</span> ${user.company.name}</p>
//       `;
//     container.appendChild(card);
//   });
// }

// fetchUsers();

//=========================================================

// 1. Используя fetch для выполнения GET запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/users). Выведите список пользователей в консоль.

// const usersUrl = "https://jsonplaceholder.typicode.com/users";

// fetch(usersUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });

//=========================================================

// 2. Используя fetch для выполнения POST запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/users). Создайте объект пользователя с полями name, username, и email. Отправьте POST запрос с созданным объектом пользователя. Выведите ответ сервера в консоль.

// const usersUrl = "https://jsonplaceholder.typicode.com/users";

// const userData = {
//   id: "64sd",
//   name: "Alice",
//   age: 23,
// };

// fetch(usersUrl, {
//   method: "POST",
//   data: JSON.stringify(userData),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//=========================================================

// function getData(url) {
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getData("https://jsonplaceholder.typicode.com/users");

//================== async/await ==========================

// async function getData() {
//   return "hello";
// }

// const result = getData();

// console.log(result);

//=========================================================

// const url = "https://jsonplaceholder.typicode.com/posts";

// // function getData() {
// //   return fetch(url)
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((data) => {
// //       return data;
// //     });
// // }

// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(data);
// }

// getData();

//=========================================================

// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const usersUrl = "https://jsonplaceholder.typicode.com/users";
// const todosUrl = "https://jsonplaceholder.typicode.com/todos";

// async function getData() {
//   const postsResponse = await fetch(postsUrl);
//   const postsData = await postsResponse.json();

//   const usersResponse = await fetch(usersUrl);
//   const usersData = await usersResponse.json();

//   const todosResponse = await fetch(todosUrl);
//   const todosData = await todosResponse.json();

//   const result = {
//     posts: postsData,
//     users: usersData,
//     todos: todosData,
//   };

//   console.log(result);
// }

// getData();

//=========================================================
// 1. Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.all. Дождаться выполнения всех запросов и вернуть массив результатов в том порядке, в котором они были отправлены. Использовать новый синтаксис(async/await) в этой во всех последующих задачах.

// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// async function fetchData() {
//   const todosResponse = await fetch(urls[0]);
//   const todosDara = await todosResponse.json();
//   const commentsResponse = await fetch(urls[1]);
//   const commentsData = await commentsResponse.json();
//   const usersResponse = await fetch(urls[2]);
//   const usersData = await usersResponse.json();
//   console.log([todosDara, commentsData, usersData]);
// }

// fetchData();

//=========================================================
// 3. Создать функцию, которая будет отправлять асинхронные запросы на сервер каждые 5 секунд, используя setInterval и await. Продолжать отправку запросов до тех пор, пока не будет получен определенный результат(например ошибка) или не пройдет определенное количество попыток.

// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
// getData();

//=========================================================
// 1. Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/ с использованием синтаксиса async/await.

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUsers();

// async function getUserPosts(userId) {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId=${userId}"
//     );
//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUserPosts(1);

// async function createPost(title, body, userId) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, body, userId }),
//     });
//     const post = await response.json();
//     console.log(post);
//   } catch (error) {
//     console.error(error);
//   }
// }

// createPost("New post", "This is a new post", 1);

//=========================================================

// Home 16

// 1. Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

// async function getTodo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// }

// getTodo();

// 2. Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

// async function getPosts() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const data = await response.json();
//   console.log(data);
// }

// getPosts();

//=========================================================

// const string = "hello";

// function solution(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     newString = str[i] + newString;
//   }
//   return newString;
// }

// const result = solution(string);
// console.log(result);

//======================= try/catch =======================

// try {
//   console.lg("1");
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("finally");
// }

//===================== Todo-list =========================

// const todosContainer = document.querySelector(".todosContainer");

// async function getAllTodos() {
//   try {
//     const response = await fetch("https://dummyjson.com/todos");
//     const allTodos = await response.json();
//     return allTodos.todos;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function renderTodos() {
//   // 1. make a request to get data
//   const todosList = await getAllTodos();

//   // 2. show all todos in UI

//   // 2.1 go througth list of todos

//   todosList.forEach((elTodo) => {
//     // 2.1.1 make an element todo
//     const todoElement = document.createElement("li");

//     // 2.1.2 map to DOM tree
//     todosContainer.append(todoElement);
//     todoElement.textContent = elTodo.id + " " + elTodo.todo;
//   });
// }

// renderTodos();

//=========================================================

// Home 16.1

// 1. Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "hhttps://jsonplaceholder.typicode.com/posts?userId=1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Произошла ошибка:", error.message);
//   }
// }

// fetchData();

// 2. Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

// function divideNumbers(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Деление на ноль невозможно");
//     }
//     const result = a / b;
//     console.log(`Результат деления ${a} на ${b} равен ${result}`);
//     return result;
//   } catch (error) {
//     console.error(`Ошибка: ${error.message}`);
//   }
// }

// divideNumbers(100, 5);
// divideNumbers(100, 0);

//=========================================================

// 1. Необходимо сделать запрос к API и получить данные об альбоме(albums) по его идентификатору. Используйте fetch для получения данных. Обработайте возможные ошибки с помощью try/catch. Используем https://jsonplaceholder.typicode.com/albums. Получить данные об 1, 7 и 12 альбоме и все полученную информацию используйте для отрисовки карточек на веб странице.

// const url = "https://jsonplaceholder.typicode.com/albums";
// const body = document.querySelector("body");
// async function albums() {
//   try {
//     const response = await fetch(url);
//     const responseData = await response.json();
//     console.log(responseData);
//     const filterAlbums = responseData.filter((album) => {
//       if (album.id === 1 || album.id === 7 || album.id === 12) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     filterAlbums.forEach((album) => {
//       const container = document.createElement("p");
//       container.textContent = album.title;
//       body.append(container);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
// albums();

//=========================================================

// 2. Необходимо написать функцию parseJSON, которая должна распарсить строку '{"name": "John", "age": 30}' в формате JSON. Обработайте возможные ошибки с помощью try/catch.

// function parseJSON(jsonString) {
//   try {
//     const data = JSON.parse(jsonString);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }

//=========================================================

// Home 17
// Создать переменную и использовать ее в стилях.
// Требования:
// Создайте переменную с именем primary-color и присвойте ей значение #FF0000.
// Используйте переменную primary-color для установки цвета текста в элементе с классом .heading.

// $primary-color: #FF0000;
// .heading {
//  color: $primary-color;
// }

//=========================================================

// async function dataFetch() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const response = await data.json();
//     return response;
//   } catch (errr) {
//     console.log(errr);
//   }
// }

//==== Соединение синхронной и несинхронной функций =======

// const limitPostsUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10";

// async function getTenPosts() {
//   try {
//     const response = await fetch(limitPostsUrl);
//     const postsData = await response.json();
//     return postsData;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderPosts(data) {
//   data.forEach((el) => {
//     console.log(el);
//   });
// }

// async function getLogic() {
//   const listOfPosts = await getTenPosts();
//   renderPosts(listOfPosts);
// }

// getLogic();

//============= создание своих ошибок =====================

// const limitPostsUrl = "https://jsonplaceholder.typicode.com/posts";

// async function getTenPosts() {
//   try {
//     const response = await fetch(limitPostsUrl);

//     console.log(response);

//     if (response.status > 399) {
//       throw new Error("Bad Status");
//     }

//     if (response.ok === false) {
//       throw new Error("Error with status: Status OK is false!");
//     }

//     const postsData = await response.json();

//     // if (postsData.length === 0) {
//     //   throw new Error("list of posts should not be empty!");
//     // }

//     return postsData;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTenPosts();

//===================== this =======================

// function hello() {
//   console.log(this);
// }

// hello();

// let name = "Alice";

// const user = {
//   name: "Bob",
//   hello() {
//     console.log(this.name);
//   },
// };

// user.hello();

//==================================================
// 1.Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

//==================================================
// 2. Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.

// const calculator = {
//   add(num1, num2) {
//     this.result = num1 + num2;
//   },
//   multiply(num1, num2) {
//     this.rsult = num1 * num2;
//   },
//   result: 0,
// };

// calculator.add(4, 2);
// console.log(calculator.result);

//==================================================
// 3.Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.

// function getRandomRGBColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   this.style.backgroundColor = getRandomRGBColor();
// });

//=================== this =========================

// let name = "Alice";

// const user = {
//   name: "Bob",
//   age: 26,
//   address: {
//     country: "Germany",
//     name: "Tokio",
//     city: {
//       name: "Berlin",
//       showCity() {
//         console.log(this.name);
//       },
//     },
//   },
// };

// user.address.city.showCity();

// ============== construction functions ===========

// function Person(myName, myAge) {
//   this.name = myName;
//   this.age = myAge;
//   this.idAdmin = false;
//   this.printName = function () {
//     console.log(this.name);
//   };
// }

// const user1 = new Person("Alice", 26);
// const user2 = new Person("Bob", 29);
// const user3 = new Person("Mike", 23);

// user3.idAdmin = true;

// console.log(user1);
// console.log(user2);
// console.log(user3);

// user1.printName();
// user2.printName();
// user3.printName();

//==================================================

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.print = function () {
//     return `Brand: ${this.brand}, \nModel: ${this.model}, \nYear: ${this.year}`;
//   };
// }

// const car1 = new Car("mustang", "127-b", 2001);

// const result = car1.print();
// console.log(result);

//================= call() =========================

// function greet(welcomeWord) {
//   console.log(welcomeWord + " " + this.name);
// }

// const user = {
//   name: "Alice",
// };

// const person = {
//   name: "Bob",
// };

// greet.call(user, "hello");
// greet.call(person, "hi");

//==================================================

// const user1 = {
//   name: "Alice",
//   printName() {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: "Bob",
// };

// user1.printName.call(user2);

//==================================================

// const mathFunction = {
//   sum() {
//     console.log(this.num1 + this.num2);
//   },
//   mult() {
//     console.log(this.num1 * this.num2);
//   },
// };

// const data1 = {
//   num1: 12,
//   num2: 42,
// };

// const data2 = {
//   num1: 5,
//   num2: 4,
// };

// mathFunction.sum.call(data1);
// mathFunction.mult.call(data2);

//==================================================
// 1. Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

// const person = {
//   name: "John",
//   age: 42,
//   myAge: function () {
//     console.log(`I am ${this.age} years old`);
//   },
// };
// person.myAge();

//==================================================
// 2. Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.

// const calculator = {
//   result: 0,
//   add: function(a, b) {
//   return a + b;
//   },
//   multiply: function(a, b) {
//   return a * b;
//   }
//   };
//   calculator.add(2, 3);
//   console.log(calculator.result);

//==================================================
// 3. Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log(this);
//   this.style.backgroundColor = "pink";
// });

//==================================================
// 4. Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.print = function () {
//     console.log(this.brand + " " + this.model + " " + this.year);
//   };
// }

// const car1 = new Car("BMW", "X1", 2024);
// const result = car1.print();

//=================== call() =======================

// function greet() {
//   console.log(`Hello, ${this.name}`);
// }
// let user = { name: "Alex" };
// greet.call(user);

// function greet(age) {
//   console.log(`Name: ${this.name}, age: ${age}`);
// }
// user = { name: "Alex" };
// greet.call(user, 19);

//================ apply() =========================

// function sayHello(greeting, age) {
//   console.log(`${greeting}, меня зовут ${this.name}, мне 25`);
// }

// const person = { name: "John" };
// sayHello.apply(person, ["Привет", 25]);

//================ bind() ==========================

// function sayHello() {
//   console.log(`Привет, меня зовут ${this.name}`);
// }
// const person = { name: "John" };
// const boundFunction = sayHello.bind(person);
// boundFunction();

//==================================================
// 1. Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().

// function sum(a, b) {
//   this.result = a + b;
// }

// const counter = {
//   result: 0,
// };

// sum.call(counter, 2, 3);

// console.log(counter.result);

//==================================================
// 2. Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().

// function divide(a, b) {
//   this.result = a / b;
// }
// const counter = {
//   result: 0,
// };

// divide.apply(counter, [6, 2]);
// console.log(counter.result);

//==================================================
// 3. Написать функцию counter, которая будет прибавлять 1 к текущему значению.

// function addOne() {
//   this.value += 1;
// }
// const counter = {
//   value: 0,
// };
// const countFunction = addOne.bind(counter);
// countFunction();

// console.log(countFunction(5));

//==================================================
// Home 19
// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) и методы increment и decrement для увеличения и уменьшения значения count соответственно.

//Пример вызова методов increment и decrement

// counter.increment();

// console.log(counter.count); // Ожидаемый вывод: 1

// counter.decrement();

// console.log(counter.count); // Ожидаемый вывод: 0

// function Counter() {
//   this.count = 0;

//   this.increment = function () {
//     this.count++;
//   };

//   this.decrement = function () {
//     this.count--;
//   };
// }

// let counter = new Counter();

// counter.increment();
// console.log(counter.count);

// counter.decrement();
// console.log(counter.count);

//=================== ООП ==========================

// class Car {
//   constructor(carModel, carYear) {
//     this.model = carModel;
//     this.year = carYear;
//     this.printModel = function () {
//       console.log(`Model: ${this.model}`);
//     };
//   }
// }

// const car1 = new Car("mustang", 2011);
// const car2 = new Car("MB", 2018);

//==================================================
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
//   }

//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
//   }

//   class BioTeacher extends Teacher {
//     constructor(name, age, classSize, bioLabSize) {
//       super(name, age, classSize);
//       this.bioLabSize = bioLabSize;
//     }
//   }

//   class GeoTeacher extends Teacher {
//     constructor(name, age, classSize) {
//       super(name, age, classSize);
//       this.mapsAccess = true;
//     }
//   }

//   class MathTeacher extends Teacher {
//     constructor(name, age, classSize, mathLabSize) {
//       super(name, age, classSize);
//       this.mathLabSize = mathLabSize;
//     }
//   }

//   const mathTeacher1 = new Person("Mike", 42, 21, 45);

//   console.log(mathTeacher1);

// const student1 = new Student("Bob", 13, 3.8);
// const teacher1 = new Teacher("Greg", 42, 28);

// console.log(student1);
// console.log(teacher1);

//================================================

// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sound = function () {
//     //   console.log("moew");
//     // };
//   }

//   sound() {
//     console.log("moew");
//   }
// }

// const cat1 = new Cat("Tom", 12);

// console.log(cat1);
// // cat1.sound();

//==================================================

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`${this.name} says hello`);
//   }
// }

// class Customer extends User {
//   constructor(name, age, bill) {
//     super(name, age);
//     this.bill = bill;
//   }

//   sayHello() {
//     console.log(`Customer ${this.name} says hello`);
//   }
// }

// class Worker extends User {
//   constructor(name, age, typeOfCar) {
//     super(name, age);
//     this.typeOfCar = typeOfCar;
//   }

//   sayHello() {
//     console.log(`Worker ${this.name} says hello`);
//   }
// }

// const customer1 = new Customer("Mike", 24, "12$");
// const worker1 = new Worker("Bob", 54, "mustang");

// customer1.sayHello();
// worker1.sayHello();

//==================================================

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     hello() {
//       console.log("hello!");
//     }
//   }

//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }

//     hello() {
//       super.hello();
//       console.log("What's up!");
//     }
//   }

//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }

//     hello() {
//       super.hello();
//       console.log("Welcome to class!");
//     }
//   }

//   const student1 = new Student("Mike", 14, 3.2);
//   student1.hello();

//   const teacher1 = new Teacher("Greg", 42, 30);
//   teacher1.hello();

//==================================================

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   register() {
//     console.log("simple account");
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.isAdmin = true;
//   }

//   register() {
//     console.log("admin's account");
//   }
// }

// class Manager extends User {
//   constructor(name, age, bill) {
//     super(name, age);
//     this.bill = bill;
//   }

//   register() {
//     console.log("manager's account");
//   }
// }

// const manager1 = new Manager("Mike", 41, true);

// manager1.register();

//==================================================

// class User {
//   #isAdmin = false;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user1 = new User("Mike", 24);

// console.log(user1.isAdmin);

//==================================================

// class Admin {
//   #account = 56;
//   #hasVIP = false;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get account() {
//     return this.#account;
//   }

//   get hasVIP() {
//     return this.#hasVIP;
//   }

//   set account(newValue) {
//     if (newValue === 0) {
//       console.log("u can't transfer zero dollars");
//     } else {
//       this.#account += newValue;
//     }
//   }
// }

// const user1 = new Admin("Mike", 28);

// user1.account = 25;
// user1.account = 60;
// user1.account = 100;
// user1.account = 0;

// console.log(user1);

//==================================================

// class User {
//   #bill = 0;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get bill() {
//     return this.#bill;
//   }

//   set bill(newSum) {
//     if (type === "admin") {
//       this.#bill = newSum;
//     } else {
//       console.log("Only admin can set thier bills");
//     }
//   }
// }

// class Manager extends User {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

//==================================================
// 1. Создайте базовый класс Animal, который имеет два свойства: name (имя животного) и type (тип животного). Затем создайте класс Dog, который наследуется от класса Animal. Класс Dog должен иметь дополнительное свойство breed (порода собаки). При создании экземпляра класса Dog, вызовите конструктор родительского класса Animal, передав в него имя и тип собаки. Используйте ключевое слово super для доступа к методам и свойствам родительского класса.

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
// }

// class Dog extends Animal {
//   constructor(name, type, breed) {
//     super(name, type); // Вызов конструктора класса Animal
//     this.breed = breed;
//   }
// }

// // Пример создания экземпляра класса Dog
// const dog = new Dog("Шарик", "собака", "лабрадор");

// console.log(`Имя собаки: ${dog.name}`); // Имя собаки: Шарик
// console.log(`Тип животного: ${dog.type}`); // Тип животного: собака
// console.log(`Порода собаки: ${dog.breed}`); // Порода собаки: лабрадор

//==================================================
// 2. Создайте базовый класс User, у которого есть свойства name и age. Добавьте метод displayInfo(), который выводит в консоль информацию о пользователе. Создайте наследника класса User под названием Admin, который будет представлять пользователя с административными правами. Добавьте в класс Admin дополнительное свойство role и метод displayRole(), который выводит в консоль роль администратора.

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   displayInfo() {
//     console.log(`Имя: ${this.name}`);
//     console.log(`Возраст: ${this.age}`);
//   }
// }

// class Admin extends User {
//   constructor(name, age, role) {
//     super(name, age); // Вызов конструктора класса User
//     this.role = role;
//   }

//   displayRole() {
//     console.log(`Роль: ${this.role}`);
//   }
// }

//==================================================
// 3. Создайте базовый класс Account, представляющий банковский счет, у которого есть свойства id, balance и методы deposit() и withdraw(), для пополнения и снятия средств со счета соответственно. Создайте наследника класса Account под названием SavingsAccount, который представляет собой сберегательный счет. Добавьте в класс SavingsAccount дополнительное свойство interestRate, представляющее годовую процентную ставку, а также метод addInterest(), который добавляет на счет проценты по прошествии определенного времени.

// class Account {
//   constructor(id, balance) {
//     this.id = id;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`На счет ${this.id} внесено ${amount} рублей.`);
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.error("Недостаточно средств на счете.");
//       return;
//     }

//     this.balance -= amount;
//     console.log(`Со счета ${this.id} снято ${amount} рублей.`);
//   }
// }

// class SavingsAccount extends Account {
//   constructor(id, balance, interestRate) {
//     super(id, balance); // Вызов конструктора класса Account
//     this.interestRate = interestRate;
//   }

//   addInterest() {
//     const interestAmount = this.balance * (this.interestRate / 100);
//     this.balance += interestAmount;
//     console.log(
//       `На счет ${this.id} начислены проценты: ${interestAmount} рублей.`
//     );
//   }
// }

//==================================================
// 4. Создайте базовый класс Library, у которого есть свойство books, представляющее массив объектов книг. Добавьте методы addBook() для добавления книги в библиотеку и removeBook() для удаления книги по названию. Создайте наследника класса Library под названием DigitalLibrary, который представляет собой цифровую библиотеку с дополнительными методами searchByAuthor() и searchByTitle() для поиска книг по автору и названию соответственно.

// class Library {
//     constructor() {
//       this.books = [];
//     }

//     addBook(book) {
//       this.books.push(book);
//     }

//     removeBook(title) {
//       const bookIndex = this.books.findIndex(book => book.title === title);
//       if (bookIndex !== -1) {
//         this.books.splice(bookIndex, 1);
//         console.log(`Книга "${title}" удалена из библиотеки.`);
//       } else {
//         console.warn(`Книга "${title}" не найдена в библиотеке.`);
//       }
//     }
//   }

//   class DigitalLibrary extends Library {
//     searchByAuthor(author) {
//       return this.books.filter(book => book.author === author);
//     }

//     searchByTitle(title) {
//       return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
//     }
//   }

//=============== call/apply/bind ==================

// const user = {
//   name: "Bob",
//   render() {
//     console.log(this.name);
//   },
// };
// const user2 = {
//   name: "Max",
// };

// user.render.call(user2);

// user.render.apply(user2);

// const showName = user.render.bind(user2);
// showName();

//==================================================

// function showGreeting(greetWord, symbol) {
//   console.log(`${greetWord} ${this.username} ${symbol}`);
// }

// const user1 = {
//   username: "Alice",
// };

// const user2 = {
//   username: "Mike",
// };

// // showGreeting.call(user1, "Hello", "!");
// // showGreeting.call(user2, "What's up", "!!!");

// // showGreeting.apply(user1, ["Hello", "!"]);
// // showGreeting.apply(user2, ["What's up", "!!!"]);

// const showNameOfUser1 = showGreeting.bind(user1, "Hello", "!");
// const showNameOfUser2 = showGreeting.bind(user2, "Hi", "!!!");

// showNameOfUser1();
// showNameOfUser2();

//==================================================

// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   const cat = new Animal("Tom", 15);
//   const dog = new Animal("Tim", 8);

//   console.log(cat, dog);

//=================== OOP ==========================

// class

// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     sound() {
//       console.log(`${this.name} is making sound...`);
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, age) {
//       super(name, age);
//     }

//     sound() {
//       console.log(`${this.name} is barking...`);
//     }
//   }

//   class Cat extends Animal {
//     constructor(name, age) {
//       super(name, age);
//     }

//     sound() {
//       console.log(`${this.name} is moewing...`);
//     }
//   }

//==================================================

// class User {
//   #VIPToken = "45lsdsd6v56sdv6sd6v56sd4v561sd614v";

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.pay = function () {};
//   }

//   // pay() {}

//   // #pay() {}

//   get VIPToken() {
//     return this.#VIPToken;
//   }

//   set VIPToken(newToken) {
//     this.#VIPToken = newToken;
//   }

//   get VIPToken() {
//     return this.#VIPToken;
//   }

//   set VIPToken(newToken) {
//     this.#VIPToken = newToken;
//   }
// }

// const user1 = new User("Max", 29);
// console.log(user1);

//==================================================
//==================================================
//=============== async / await ====================

// async function dataFetch() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const response = await data.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

//======== стандартный запрос на сервер ============

// async function getTenPosts() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=10"
//     );
//     const postsData = await response.json();
//     return postsData;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// getTenPosts();

//============ генерация ошибки вручную ============

// function divideByZero(num1, num2) {
//   if (num2 === 0) {
//     throw new Error("u can't divide number by zero");
//   }
//   return num1 / num2;
// }

// divideByZero(45, 0);

//============ генерация ошибок вручную ============

// async function getTenPosts() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=10"
//     );

//     if (response.status > 399) {
//       throw new Error("Bad Status");
//     }

//     if (response.ok === false) {
//       throw new Error("Error with status: Status OK is false!");
//     }
//     const postsData = await response.json();

//     if (postsData.length === 0) {
//       throw new Error("list of posts should not be empty!");
//     }

//     return postsData;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// getTenPosts();

//==================================================
//=================== this =========================

//==================================================
//=============== функции-конструкторы =============

// function Person(myName, myAge) {
//   this.name = myName;
//   this.age = myAge;
//   this.idAdmin = false;
//   this.printName = function () {
//     console.log(this.name);
//   };
// }

// const user1 = new Person("Alice", 26);
// const user2 = new Person("Bob", 29);
// const user3 = new Person("Mike", 24);

// user3.idAdmin = true;

// user1.printName();
// user2.printName();
// user3.printName();

//==================================================
//============== определение контекста =============
//===== вызов функции с определением контекста =====
//================= method call() ==================

// function greet(welcomeWorld) {
//   console.log(welcomeWorld + " " + this.name);
// }

// const user = {
//   name: "Alice",
// };

// const person = {
//   name: "Bob",
// };

// greet.call(user, "Hello");
// greet.call(person, "Hi");

//==================================================

// const user1 = {
//   name: "Alice",
//   printName() {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: "Bob",
// };

// user1.printName.call(user2);

//================== method apply() ================

// const mathFunction = {
//   sum(a, b, c) {
//     console.log(this.num1 + this.num2);
//   },
//   mult(a, b, c) {
//     console.log(this.num1 * this.num2);
//   },
// };

// const data1 = {
//   num1: 12,
//   num2: 42,
// };

// const data2 = {
//   num1: 5,
//   num2: 4,
// };

// mathFunction.sum.call(data1, 5, 2, 1);
// mathFunction.mult.apply(data2, [5, 2, 1]);

//==================================================
//==================== OOP =========================
//=================== class ========================

// class Car {
//   constructor(carModel, carYear) {
//     this.model = carModel;
//     this.year = carYear;
//     this.printModel = function () {
//       console.log(`Model: ${this.model}`);
//     };
//   }
// }

// const car1 = new Car("BMW", 2024);

// car1.year = 2023;
// car1.printModel();

// console.log(car1);

//==================================================
//================= наследрвание ===================

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, age, gpa) {
//     super(name, age);
//     this.gpa = gpa;
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, classSize) {
//     super(name, age);
//     this.classSize = classSize;
//   }
// }

// class MathTeacher extends Teacher {
//   constructor(name, age, classSize, mathLabSize) {
//     super(name, age, classSize);
//     this.mathLabSize = mathLabSize;
//   }
// }

// const student1 = new Student("Bob", 13, 3.8);
// const mathTeacher1 = new MathTeacher("Mike", 42, 21, 45);

// console.log(student1);
// console.log(mathTeacher1);

//==================================================
//===================== methods ====================

// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sound() {
//     console.log("moew");
//   }
// }

// const cat1 = new Cat("Tom", 12);

// console.log(cat1);

//==================================================
//=================== полиморфизм ==================

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`${this.name} says hello`);
//   }
// }

// class Customer extends User {
//   constructor(name, age, bill) {
//     super(name, age);
//     this.bill = bill;
//   }
//   sayHello() {
//     console.log(`Customer ${this.name} says hello`);
//   }
// }

// class Worker extends User {
//   constructor(name, age, typeOfCar) {
//     super(name, age);
//     this.typeOfCar = typeOfCar;
//   }
//   sayHello() {
//     console.log(`Worker ${this.name} says hello`);
//   }
// }

// const customer1 = new Customer("Mike", 24, "12$");
// const worker1 = new Worker("Bob", 54, "Mustang");

// customer1.sayHello();
// worker1.sayHello();

//==================================================
//========= наследование + полиморфизм =============

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   hello() {
//     console.log("Hello!");
//   }
// }

// class Student extends Person {
//   constructor(name, age, gpa) {
//     super(name, age);
//     this.gpa = gpa;
//   }
//   hello() {
//     super.hello();
//     console.log("What's up!");
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, classSize) {
//     super(name, age);
//     this.classSize = classSize;
//   }
//   hello() {
//     super.hello();
//     console.log("Welcome to class!");
//   }
// }

// const student1 = new Student("Mike", 14, 3.2);
// student1.hello();

// console.log(student1);

//==================================================
//================== инкапсуляция ==================
//=================== get / set ====================

// class User {
//   #hasVip = false;
//   #account = "$56";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get account() {
//     return this.#account;
//   }
//   get hasVip() {
//     return this.#hasVip;
//   }
//   set account(newValue) {
//     this.#account = newValue;
//   }
// }

// const user1 = new User("Mike", 28);
// user1.account = "78$";

// console.log(user1);

//==================================================
// Home20
// Создайте класс Shape, у которого есть метод draw(). Создайте два наследника класса Shape: Rectangle и Circle. У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса. Создайте массив, содержащий экземпляры классов Rectangle и Circle. Используйте цикл для вызова метода draw() для каждого элемента массива.

// class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }
// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing a rectangle");
//   }
// }
// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// const shapes = [new Rectangle(), new Circle(), new Shape()];

// shapes.forEach((shape) => shape.draw());

//==================================================

// class Button {
//   constructor(title, bgColor, textColor) {
//     this.title = title;
//     this.bgColor = bgColor;
//     this.textColor = textColor;
//   }
//   createButton() {
//     const btn = document.createElement("button");
//     btn.textContent = this.title;
//     document.body.append(btn);
//     btn.style.backgroundColor = this.bgColor;
//     btn.style.color = this.textColor;
//     btn.style.width = "120px";
//     btn.style.cursor = "pointer";
//   }
// }

// const btn1 = new Button("register", "teal", "white").createButton();
// const btn2 = new Button("login", "blue", "white").createButton();
// const btn3 = new Button("pay", "green", "white").createButton();

//==================================================
//=============== статичные методы =================

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayMyName() {
//     console.log(this.name);
//   }
//   static showClassName() {
//     console.log("THIS IS USER CLASS");
//   }
//   static TYPE = "TYPE:USER";
// }

// const user1 = new User("Alice", 42);
// // user1.sayMyName();
// // User.showClassName();
// console.log(User.TYPE);

//==================================================
// Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }

// const result = Calculator.add(3, 5);
// console.log(result);

//==================================================
// Создайте класс RandomNumberGenerator, у которого будет статический метод generate(), который будет генерировать случайное число в заданном диапазоне.

// class RandomNumberGenerator {
//   static generate(min, max) {
//     if (min > max) {
//       throw new Error("Min must be less than or equal to Max");
//     }
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// }

// // Пример использования:
// const randomNumber = RandomNumberGenerator.generate(1, 10);
// console.log(randomNumber); // Вывод: случайное число в диапазоне от 1 до 10 включительно

//==================================================

// let num1 = 78;
// let num2 = 615651;
// let num3 = 566265989865656;

// Number.prototype.getLength = function () {
//   console.log(this.toString().length);
// };

// num1.getLength();
// num2.getLength();
// num3.getLength();

//==================================================
//=================== forEach() ====================

// const arr = [4, 2, 1, 0];

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// arr.myForEach((el, ind, arr) => {
//   console.log(el * 2);
// });

//======================= map() ====================

// const arr = [4, 1, 2, 1];

// Array.prototype.mySuperMap = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// const result = arr.mySuperMap((elem, ind, arr) => {
//   return elem * 3;
// });

// console.log(result);

//==================================================
// Home 21
// Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.
// Например:
// const arr1 = [1, 2, 3];
// const arr2 = CopyEntity.copyObject(arr1);
// arr1[0] = 999;
// console.log(arr1);
// console.log(arr2);

// class CopyEntity {
//   static copyObject(obj) {
//     return JSON.parse(JSON.stringify(obj));
//   }
// }

// const arr1 = [1, 2, 3];
// const arr2 = CopyEntity.copyObject(arr1);

// arr1[0] = 999;

// console.log(arr1);
// console.log(arr2);

//==================================================
//=============== элемент canvas ===================

// const canvas = document.querySelector("#canvas");

// const context = canvas.getContext("2d");

// context.fillStyle = "violet";
// context.fillRect(10, 10, 55, 50);

// context.fillStyle = "rgb(66, 135, 245";
// context.fillRect(120, 60, 120, 50);

// context.strokeRect(10, 10, 55, 50);
// context.strokeRect(120, 60, 120, 50);

// context.beginPath();
// context.moveTo(150, 10);
// context.lineTo(290, 10);
// context.lineTo(290, 40);
// context.lineTo(150, 40);
// context.lineTo(150, 10);

// context.strokeStyle = "green";
// context.stroke();

// context.beginPath();
// context.moveTo(75, 50);
// context.lineTo(100, 75);
// context.lineTo(120, 10);

// context.fillStyle = "red";
// context.fill();

//==================================================

// const canvas = document.querySelector("#canvas");
// const context = canvas.getContext("2d");

// context.fillStyle = "#FD0";
// context.fillRect(0, 0, 75, 75);

// context.fillStyle = "#6C0";
// context.fillRect(75, 0, 75, 75);

// context.fillStyle = "#09F";
// context.fillRect(0, 75, 75, 75);

// context.fillStyle = "#F30";
// context.fillRect(75, 75, 75, 75);

// context.globalAlpha = 0.2;

// for (let i = 0; i < 7; i++) {
//   context.beginPath();
//   context.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2);
//   context.fillStyle = "white";
//   context.fill();
// }

//==================================================
// Home 22
// Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов. const colors = ['#ff0000', '#00ff00', '#0000ff'];

// const canvas = document.querySelector("#canvas");
// canvas.width = 500;
// canvas.height = 500;
// const colors = ["#ff0000", "#00ff00", "#0000ff"];
// const ctx = canvas.getContext("2d");

// function changeBackgroundColor() {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   const randomColor = colors[randomIndex];
//   ctx.fillStyle = randomColor;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// setInterval(changeBackgroundColor, 1000);

//==================================================
//============ Переключатель постов ================

// const postContainer = document.querySelector("#container");
// const leftTrigger = document.querySelector(".left");
// const rightTrigger = document.querySelector(".right");

// const postURL = "https://jsonplaceholder.typicode.com/posts/";

// let postIndex = 1;

// async function fetchPost(url) {
//   try {
//     const response = await fetch(url + postIndex);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createPost(post) {
//   postContainer.textContent = "";
//   const idInfo = document.createElement("p");
//   const titleInfo = document.createElement("h3");
//   const bodyInfo = document.createElement("p");

//   idInfo.textContent = post.id;
//   titleInfo.textContent = post.title;
//   bodyInfo.textContent = post.body;

//   postContainer.append(idInfo, titleInfo, bodyInfo);
// }

// async function loadPost() {
//   const newPost = await fetchPost(postURL);
//   createPost(newPost);
// }

// loadPost();

// leftTrigger.addEventListener("click", () => {
//   if (postIndex > 1) {
//     postContainer.textContent = "Loading ...";
//     postIndex--;
//     loadPost();
//   }
// });
// rightTrigger.addEventListener("click", () => {
//   postContainer.textContent = "Loading ...";
//   postIndex++;
//   loadPost();
// });

//==================================================
// Home 23
// Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.

// const data = ["Element 1", "Element 2", "Element 3", "Element 4"];

// function createList(data) {
//   const list = document.querySelector("#dataList");
//   list.innerHTML = "";

//   data.forEach((elem, ind, arr) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = elem;

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.onclick = () => {
//       data.splice(ind, 1);
//       createList(data);
//     };

//     listItem.appendChild(deleteButton);
//     list.appendChild(listItem);
//   });
// }

// createList(data);

//==================================================
//==================================================
// 1. Создать класс "Калькулятор" с использованием статических методов и свойств. Класс должен иметь статическое свойство "PI", содержащее значение числа Пи, и статический метод "add", который принимает произвольное количество чисел и возвращает их сумму.

// class Calculator {
//   static PI = 3.14;
//   static add(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
// }

// const arr = [4, 100];
// const result = Calculator.add(arr);
// console.log(result);

//==================================================
// 2. Реализовать класс "Банковский счет" с использованием статического метода "generateAccountNumber". Метод должен генерировать и возвращать уникальный номер счета. Уникальный номер должен состоять из префикса "ACC" и случайного числа, а также должен быть уникальным для каждого экземпляра класса.

// class BankAccount {
//   constructor() {
//     this.accountNumber = BankAccount.generateAccountNumber();
//   }
//   static generateAccountNumber() {
//     return "ACC" + Math.random() * 9999999;
//   }
// }

// const user1 = new BankAccount();
// const user2 = new BankAccount();
// const user3 = new BankAccount();

// console.log(user1);
// console.log(user2);
// console.log(user3);

//==================================================
//================ Модальное окно ==================

// const openModalBtn = document.querySelector("button");
// const modalWindow = document.querySelector(".modalContainer");
// const modalBody = document.querySelector(".modalBody");

// function toggelModalWindow() {
//   modalWindow.classList.toggle("modalHidden");
// }

// openModalBtn.addEventListener("click", toggelModalWindow);

// modalWindow.addEventListener("click", toggelModalWindow);

// modalBody.addEventListener("click", (event) => {
//   event.stopPropagation();
// });

//=========================================================
