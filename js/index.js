// IIFE ga oid 4ta misol va u o'zi nimaga kerakligi uchun izoh

// 1. Example:
// (() => {
//     console.log('This is an IIFE using arrow function');
// })();


// 2. Example:
// ((name) => {
//     console.log(`Hello, ${name}! This is an IIFE with parameters`);
// })('John');


// 3. Example:
// const counter = (() => {
//     let count = 0;
    
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         getCount: () => count
//     };
// })();

// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.getCount());


// 4. Example:
// (async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
    
//     console.log(data);
// })();


// Izoh

// IIFE bir necha sabablarga ko'ra kerak:
// 1. Inkapsulyatsiya: IIFElar mahalliy miqyosda kodni inkapsulyatsiya qilishda yordam beradi, o'zgaruvchan to'qnashuvlar va global nomlar maydonining ifloslanishini oldini oladi.
// 2. Ma'lumotlar maxfiyligi: Yopishlarni yaratish orqali IIFElar funktsiyadan tashqaridan kirish imkoni bo'lmagan shaxsiy o'zgaruvchilarni saqlashga imkon beradi.
// 3. Darhol bajarish: IIFElar aniqlangandan so'ng darhol amalga oshiriladi, bu kodni ishga tushirish yoki vazifalarni kechiktirmasdan bajarish uchun foydalidir.
// 4. Modulizatsiya: IIFE-lardan foydalanish osongina qayta ishlatilishi yoki kod bazasining boshqa qismlariga import qilinadigan o'z-o'zidan tuzilgan modullarni yaratishga imkon beradi.
// 5. Asinxron operatsiyalar: Oxirgi misolda ko'rsatilganidek, asinxron vazifalarni asinxron IIFE ichida osongina boshqarish mumkin, bu esa ketma-ket bajarilishini ta'minlaydi va try/catch bloklari yordamida xatolarni oson hal qiladi.







// Pure function da ishlangan misollar

// 1-Misol

// function filterNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterNumbers(numbers);

// console.log(evenNumbers);



// 2-Misol

// function calculateSum(arr) {
//   return arr.reduce((num1, num2) => num1 + num2, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(calculateSum(numbers));



// 3-Misol

// function fifthPower(num) {
//     return Math.pow(num, 5);
// }

// console.log(fifthPower(2));



// Pure function nima ekanligini batafsil izohi

// Sof funktsiya dasturlashda ikkita asosiy xususiyatga ega bo'lgan funksiya turidir:

// 1. Deterministik: sof funksiya bir xil kirish berilganda har doim bir xil chiqishni qaytaradi. Bu shuni anglatadiki, funktsiyaning xatti-harakatlarida tasodifiy yoki oldindan aytib bo'lmaydigan elementlar mavjud emas. Bu determinizm sof funksiyalar haqida mulohaza yuritishni va disk raskadrovka qilishni osonlashtiradi, chunki siz ularning xatti-harakatlarini faqat kiritilgan ma'lumotlarga asoslanib bashorat qilishingiz mumkin.

// 2. Nojo'ya ta'sirlar yo'q: Sof funksiya bajarilganda hech qanday tashqi holatni o'zgartirmaydi yoki kuzatilishi mumkin bo'lgan yon ta'sirga ega emas. Bu shuni anglatadiki, sof funktsiya o'z doirasidan tashqarida hech qanday o'zgaruvchini o'zgartirmaydi, fayl tizimi bilan o'zaro aloqada bo'lmaydi, tarmoq so'rovlarini bajarmaydi yoki dastur holati yoki muhitiga ta'sir qilishi mumkin bo'lgan boshqa harakatlarni bajarmaydi. Sof funktsiya qila oladigan yagona narsa bu uning kiritilishini olish va chiqishni ishlab chiqarishdir.

// Ushbu xususiyatlar tufayli sof funktsiyalarni tekshirish va saqlash odatda yashirin bog'liqliklar yoki kutilmagan yon ta'sirlarga ega bo'lishi mumkin bo'lgan nopok funksiyalarga qaraganda osonroqdir. Bundan tashqari, sof funktsiyalar funktsional dasturlash paradigmalariga ko'proq yordam beradi, chunki ular o'zgarmas ma'lumotlar va tuziladigan funktsiyalarga tayanadigan dasturlash uslubini rag'batlantiradi.

// Xulosa qilib aytadigan bo'lsak, sof funksiya - bu ma'lum bir kirish uchun har doim bir xil natijani beradigan hech qanday yon ta'siri bo'lmagan deterministik funktsiya.





// Callback function ga oid 4 ta funksiya 

// 1-Example

// function delayedExecution(callback, delay) {
//   setTimeout(callback, delay);
// }


// 2-Example

// function applyCallbackToArray(arr, callback) {
//   arr.forEach((value) => {
//     callback(value);
//   });
// }


// 3-Example

// function conditionalCallback(condition, callback) {
//   return function() {
//     if (condition) {
//       callback();
//     }
//   };
// }


// 4-Example

// function fetchDataFromAPI(callback) {
//   setTimeout(() => {
//     const data = { message: "Data fetched successfully" };
//     callback(data);
//   }, 2000);
// }



// Asinxron vazifalarda setTimeout() orqali chaqiriladigan callback function.

// function myCallbackFunction() {
//   console.log("This is the callback function being called after 2 seconds!");
// }

// setTimeout(myCallbackFunction, 2000);


// Callback function  funktsiyasi - bu boshqa funktsiyaga argument sifatida uzatiladigan va ma'lum bir vazifa bajarilgandan so'ng bajariladigan funksiya. Callback function funktsiyalari odatda asinxron dasturlashda qo'llaniladi, bu erda vazifalar asosiy dastur oqimidan mustaqil ravishda amalga oshiriladi.

// Callback function  funksiyalariga ehtiyoj paydo bo'lishining bir necha sabablari bor:

// 1. Asinxron operatsiyalar: Ko'pgina dasturlash stsenariylarida serverdan ma'lumotlarni olish yoki diskdan faylni o'qish kabi vazifalarni bajarish biroz vaqt talab qilishi mumkin. Asosiy dastur oqimini blokirovka qilish va ushbu operatsiyalar tugashini kutish o'rniga, Callback function funktsiyalari asinxron vazifani qayta ishlash paytida dasturning qolgan qismini bajarishni davom ettirishga imkon beradi. Vazifa bajarilgandan so'ng, natijani qayta ishlash uchun Callback function funktsiyasi ishga tushiriladi.

// 2. Voqealarni boshqarish: Callback function  funktsiyalari ko'pincha foydalanuvchi o'zaro ta'siriga yoki tizim hodisalariga javob berish uchun voqealarga asoslangan dasturlashda qo'llaniladi. Masalan, tugmani bosish hodisasi foydalanuvchi interfeysini yangilaydigan yoki boshqa amallarni bajaradigan Callback function  funksiyasini ishga tushirishi mumkin.

// 3. Modulli kod dizayni: Callback function  funktsiyalari dasturning turli qismlarini amalga oshirish tafsilotlarini mahkam bog'lamasdan bir-biri bilan aloqa qilish imkonini berish orqali modullilik va kodning qayta ishlatilishini ta'minlaydi. Callback function funktsiyalarini parametr sifatida o'tkazish orqali ishlab chiquvchilar osongina o'zgartirilishi yoki kengaytirilishi mumkin bo'lgan moslashuvchan va kengaytiriladigan kodni yaratishi mumkin.

// 4. Xatolarni qayta ishlash: Callback function  funktsiyalari vazifani bajarish paytida yuzaga kelishi mumkin bo'lgan xatolar yoki istisnolarni boshqarish uchun ham ishlatilishi mumkin. Natija ma'lumotlari bilan bir qatorda xato parametrini o'tkazish orqali Callback function funktsiyalari xatolarni nozik tarzda boshqarishi va ularni butun dasturning ishdan chiqishini oldini olishi mumkin.

// Umuman olganda, Callback function funktsiyalari funktsional dasturlash va hodisalarga asoslangan arxitektura kabi zamonaviy dasturlash paradigmalarida hal qiluvchi rol o'ynaydi. Ular asenkron operatsiyalarni boshqarish, hodisalarga javob berish, kod modulligini targ'ib qilish va xatolarni samarali boshqarish uchun kuchli mexanizmni taqdim etadi.






// Obyekt metodlariga oid masalalar.


// 1-Misol

// const someObject = {a: 1, b: 2, c: 3};
// function getAllKeys(obj) {
//   return Object.keys(obj);
// }

// const keys = getAllKeys(someObject);
// console.log(keys);



// 2-Misol

// const object = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// function getAllValues(obj) {
//     return Object.values(obj);
// }

// console.log(getAllValues(object));



// 3-Misol

// const someObject = { 
//   name: 'John',
//   age: 20,
//   city: 'London'
// };
// function getAllKeyValue(obj) {
//   return Object.entries(obj);
// }

// const keyValuePairs = getAllKeyValue(someObject);
// console.log(keyValuePairs);



// 4-Misol

// const someObject = {name: "John", age: 30};

// Object.freeze(someObject);

// someObject.name = "Jane";
// someObject.age = 40;

// console.log(someObject);





// Massiv metodlariga oid masalalar.


// 1-Misol

// const array = [1, 2, 3, 4, 5, 6, 7];
// function sliceMiddleThree(arr) {
//     if (arr.length < 5) {
//         return "Array is too small to slice middle 3 elements";
//     }
    
//     const start = Math.floor(arr.length / 2) - 1;
    
//     return arr.slice(start, start + 3);
// }

// console.log(sliceMiddleThree(array));




// 2-Misol

// function spliceValues(arr, numAdd, index) {
//     for (let i = 0; i < numAdd; i++) {
//         const randomNum = Math.floor(Math.random() * 90 + 10);
//         arr.splice(index + i, 0, randomNum);
//     }
    
//     return arr;
// }

// const array = [1, 2, 3, 4, 5];
// const newArray = spliceValues(array, 3, 2);
// console.log(newArray);




// 3-Misol

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// function concatArrays(arr1, arr2, arr3) {
//   return arr1.concat(arr3, arr2);
// }

// const concatenatedArray = concatArrays(array1, array2, array3);
// console.log(concatenatedArray);




// 4-Misol

// function indexCube(arr, value) {
//     const index = arr.indexOf(value);
//     if (index !== -1) {
//         return index ** 3;
//     } else {
//         return false;
//     }
// }

// const array = [1, 2, 3, 4, 5];
// console.log(indexCube(array, 3));




// 5-Misol

// function lastIndexOf(arr, element) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// }

// const array = [1, 2, 3, 4, 2];
// const elementToSearch = 2;
// console.log(lastIndexOf(array, elementToSearch));




// 6-Misol

// function checkArrays(arr1, arr2, element) {
//   let someArray = arr1.concat(arr2);
  
//   return someArray.indexOf(element) !== -1 && arr1.indexOf(element) !== -1 && arr2.indexOf(element) !== -1;
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const elementToSearchFor = 3;

// console.log(checkArrays(array1, array2, elementToSearchFor));




// 7-Misol

// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }

// const array = [1, 2, 3, 4, 5];
// const elementToSearch = 3;

// if (searchElement(array, elementToSearch)) {
//     console.log(`Element ${elementToSearch} found in the array`);
// } else {
//     console.log(`Element ${elementToSearch} not found in the array`);
// }




// 8-Misol

// function averageOdd(numbers) {
//     let oddThreeDigits = numbers.filter(num => num % 2 !== 0 && num.toString().length === 3);
    
//     let sum = 0;
//     let count = 0;
    
//     oddThreeDigits.forEach(num => {
//         sum += num;
//         count++;
//     });
    
//     if (count === 0) {
//         return "No odd three-digit numbers found";
//     }
    
//     return sum / count;
// }

// const numbers = [123, 456, 789, 321, 654, 987];
// console.log(averageOdd(numbers));




// 9-Misol

// function transformArray(arr) {
//     const oddCubes = arr.filter(num => num % 2 !== 0).map(num => Math.pow(num, 3));
//     const evenSquares = arr.filter(num => num % 2 === 0).map(num => Math.pow(num, 2));

//     return { oddCubes, evenSquares };
// }

// const numbers = [1, 2, 3, 4, 5];
// const transformedArrays = transformArray(numbers);

// console.log("Original Array:", numbers);
// console.log("Odd elements cubed:", transformedArrays.oddCubes);
// console.log("Even elements squared:", transformedArrays.evenSquares);




// 10-Misol

// function getLastElements(arr) {
//   return arr.map(entry => entry[entry.length - 1]);
// }

// const entries = [[1, 2, 3], ['a', 'b', 'c'], [true, false]];
// const result = getLastElements(entries);

// console.log(result);




// 11-Misol

// const entries = ['apple', 'banana', 'car', 'dog', 'cherry'];
// function filterEntries(arr) {
//   return arr.filter(entry => entry.length >= 4);
// }

// const filteredEntries = filterEntries(entries);
// console.log(filteredEntries);



// 12-Misol

// let user = [
//     { name: 'John', age: 5 },
//     { name: 'Doe', age: 20 },
//     { name: 'Alex', age: 50 }
// ];
// function findAge18(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age > 18) {
//             return true;
//         }
//     }
//     return false;
// }

// const result = findAge18(user);
// console.log(result);




// 13-Misol

// function findNameJohn(names) {
//     return names.every(name => name.toLowerCase().endsWith('john'));
// }

// const uzbekNames = ['Abdulajon', 'Mahmudjon', 'Jamalxon'];
// console.log(findNameJohn(uzbekNames));

// const otherNames = ['Ali', 'Sara', 'Diana'];
// console.log(findNameJohn(otherNames)); 




// 14-Misol

// function findElement(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 100 && arr[i] <= 999 && arr[i] % 5 === 0) {
//             return arr[i];
//         }
//     }
//     return "No element found";
// }

// const numbers = [105, 220, 315, 430];
// const result = findElement(numbers);
// console.log(result);




// 15-Misol

// function findIndex(names) {
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].toLowerCase().includes("back")) {
//             return i;
//         }
//     }
//     return -1;
// }

// const names = ["John Backer", "Alice Backman", "Michael Jackson"];
// console.log(findIndex(names)); 