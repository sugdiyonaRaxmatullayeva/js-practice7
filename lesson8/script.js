"use script";
// while
// let i=1;
// while (i<=10) {
//  console.log(i);

// if (i ===5) {
// break;
// }
// i++;
// }
//ichma ich for
// const arr =[
//     ["yanvar","fevral","mart","aprel","may"],
//     [10,11,12,13,14,15],
//     [true,false],
// ];

// for (let i = 0; i < arr.length; i++) {
//     for (let j=0; j < arr[i].length;j++){
//         console.log(arr[i][j]);
//     }

// }

//string methods

// let str="frontend react developer"

// console.log(str.length);
// console.log(str[0], str[8]);
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

//string methods
let str = "frontend react developer";
let str2 ="AI";
//indexof
console.log(str.indexOf("v"));   //shu harfni qaysi raqmda turganini korsatadi

//last indexof
console.log(str.lastIndexOf("f"));

//startsWith
console.log(str.startsWith("frontend"));  //rostan ham shu so'z strda bolsa true,bomasa false chiqaradi

//endsWith
console.log(str.endsWith("developer")); // shu so'z strni oxrda rostam ham bolsa true, bolmasa false chiqaredi

//slice
console.log(str.slice(-10, -3)); // consolega biz elon qlgan sonlarni chiqaradi va bunda (-)ham ishlatsa boladi bu textni oxiridan o'qidi
console.log(str.slice(0, 8));

//substring
console.log(str.substring(4, 0)); //bu slice bn bir xil vazifani bajaradi faqat bunda sonlarni teskari yozsak ham ozi tog'irlab oladi yani(5,0)
console.log(str.substring(0, 5));

//substr
console.log(str.substr(0, 6));

//replace
console.log(str.replace("react","angular"));

//toUpperCase
console.log(str.toUpperCase());  // matni kata harfga otkazadi

//toLowerCase
console.log(str.toLowerCase()); // matni kichkina harfga otkazadi

//concat
console.log(str.concat("  " ,str2, "  " ,"qoshimcha"));

//trim
console.log(str.trim());

//charAt
console.log(str.charAt(7));

console.log(str.toLocaleUpperCase().split(" ")); //string methods ni bittada qollash ham mumkin

//join
arr =["s","a","l","o","m"]

console.log(arr.join());// arrey ni ochib bitta strin qb yozib beradi vergullari bn
console.log(arr.join(" "));//arreyni ochib ortasidagi vergullarni yoqotib bitta gap qberadi
console.log(arr.join("  "));// arreyni ochib vergullarni yoq qlib harflar ortasda joy tashab yozadi

//split
console.log(str.split(" "));//bu matni arreyga oladi .agar ("") qoysak har bir harfni alohida alohida qlib vergul bilan arreyga oladi.agar("probel") tashlab yozsak har bir gap alohida vergul bn ajratiladi
