/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/
// function removeDuplicate(array = []) {
//     // write code here...
//       var arrayOutput = array.filter(function(item , index ,arr){
//           // console.log(item , index)
//           if(index == arr.indexOf(item)){
//               return true
//           }
//           return false
//       })
//       return arrayOutput
      
//   }
//   console.log(removeDuplicate([1, 1, 2, 3, 3 ,4,4,5]))


//   MATH OBJECT

// Math.round() : lam tron gia tri
// Math.ceil() : Lam tron len
// Math.floor() : lam tron xuong
// Math.abs( ) : tri tuyet doi
// Math. max() : tim gia tri lơn nhat
// Math. random : tra 0 ~ 1
// var a = 5.5
// a = Math.round(a)
// console.log(a)

// Bai 1
// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

// function powerup(arr) {
//     // your code here!
//     return arr.map(function(item){
//         if(item % 2 == 0) return Math.pow(item , 2)
//         return item
//     })
//   }
//   console.log(powerup([1,3,2,5,6]))

// Bai 2
/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

// function average(arr) {
//     return Math.round(arr.reduce(function(total , currentvalue){
//         return total + currentvalue
//     },0) / arr.length)
// }

// console.log(average([8, 8 , 6.75])) // 8

// Bai 3
/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

// function positiveNumber(arr) {
//     // your code here
//       return arr.map(function(item){
//           return Math.abs(item)
//       })
//   }
//   console.log(positiveNumber([1,-2,-3,-4,5,6,7,-8]))

// Bai 4
/** 
     * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
     * Cho biết đó có phải là tam giác vuông hay không? 
    */
    // function rightTriangle(a, b, c) {
    //   // your code here
    //   if(Math.pow(a , 2) == (Math.pow(b , 2) + Math.pow(c , 2))){
    //       return "day la tam giac vuong"
    //   }else{
    //       return "day khong phai la tam giac vuong"
    //   }
    // }
    // console.log(rightTriangle(7,3,4))

//   OBJECT HANDLE

// var cat = {
//     name : 'Meo meo',
//     weight : '3 kg',
//     getWeight : function(){
//         console.log(this.weight)
//     }
// }
// constructor function
// camelcase : quy luat dat ten bien
// function Animal(name , weight){
//     this.name = name
//     this.weight = weight
//     this.eat = function(food){
//         console.log(food)
//     }
// }
// var cat2 = new Animal("cat",2)
// console.log(cat2.name)
// console.log(cat2.weight)
// cat2.boss = "Nguyen Van A"
// console.log(cat2.boss)
// **
//  * Viết hàm countProperty để in ra độ dài của một đối tượng
//  * @param {object}
//  * @return {number}
//  * 
//  * Example: 
//  * var student = {
//  *      name: "Jerry", 
//  *      age: 14,
//  *      role: "student"
//  *  }
//  * lengthObj(student); // length: 3
// }
// */

// function countProperty(obj) {
//     // viết code ở đây
//     return Object.keys(obj).length
//   }
//   var student = {
//       name: "Jerry", 
//       age: 14,
//       role: "student"
//   }
//   console.log(countProperty(student))

// PROTOPYES IN JAVASCRIP

// Bai 1
// function Animal(name , weight){
//     this.name = name
//     this.weight = weight
//     this.eat = function(food){
//         console.log(food)
//     }
// }
// var cat = new Animal('Meo meo',2)
// var cat2 = new Animal('Meo 1' , 3)
// Animal.prototype.run = function(){
//     console.log("run")
// }

// console.log(cat2.run == cat.run)

// Bai 2
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.
*/
// function Student(diemToan, diemLy, diemHoa) {
//         this.diemToan = diemToan;
//         this.diemLy = diemLy;
//         this.diemHoa = diemHoa;
//     }
//     Student.prototype.average = function(){
//         return Math.round((this.diemToan + this.diemHoa + this.diemLy) /3)
//     }
//     var student1 = new Student(6, 7, 7);
//     var student2 = new Student(8, 9, 6);

//     console.log(student1.average()); // 7
//     console.log(student2.average()); // 8

// TERBARY OPERATOR

// Bai 1
// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
// var ketqua = (a > b) ? "a lon hon b" : "a khac b"
// console.log(ketqua)
// function doSomething(a) {
//     var b;
//     if (a > 0) {
//       b = 1;
//     } else if (a < 0) {
//       b = 2;
//     } else {
//       b = 3;
//     }
//     return b;
//   }
//   function doSomethingTernary(a) {
//     var b
//     b = (a > 0) ? 1 : a < 0 ? 2 : 3
//     return b
// }
//   console.log(doSomethingTernary(-1))
//   console.log(doSomething(-1))
  
  // Test 2 hàm trên với cùng đầu vào

//   SCOPE

// global scope
// local scope
// block scope
// var a = 5
// function tinhCong(a){
//     console.log(a * 5)
// }
// tinhCong(a)
// console.log(a)
// Ví dụ
// var a = 1;

// function foo() {
//   var a = 2;
//   return a;
// }

// function bar() {
//   a = 2;
//   return a;
// }

// foo();
// console.log(a); // Kết quả?
// bar();
// console.log(a); // Kết quả?
// Ví dụ
// var a = 1;

// var b = {
//   a: 2,
//   foo: function() {
//     console.log(this.a);
//   }
// };

// b.foo();
// var fooCopy = b.foo;
// fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13

// HOISTING

// var a
// function show(){
//     var b 
//     console.log(b)
//     var b = 10
// }
// show()
  
// VAR LET CONST
// khai bao
// hoisting
// block scope

// let a = 5
// function show(){
//     let a = 10
//     console.log(a)
// }
// show()
// console.log(a)

// for(let i = 0 ; i <5 ; i++){

// }
// console.log(i)

// FUNCTION CONTEXT, BIND

// const mouse = {
//     name : 'Mickey',
//     sayHi : function(){
//         console.log(this.name + " say hi")
//     }
// }
// // mouse.sayHi()
// let coppySayhi = mouse.sayHi
// coppySayhi.bind({name : 'Jerry'})()

// function run(cb){
//     cb()
//     console.log("running finish")
    
// }
// const mouse = {
//     name : 'Mickey',
//     run : function(){
//         console.log(this.name + ' running')
//     }
// }

// run(mouse.run.bind(mouse))

// ARROW FUNCTION (FAT ARROW)

// const arraynumber = [1,2,3,4,5,6,7,8,9,10]
// const newArray = arraynumber.map( (item , index)  => item * 2)
// console.log(newArray)
/**
     * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
     * 2. Sử dụng map method và hàm tripple để nhân 3 các phần 
     * tử trong mảng dưới đây
     */
    // Khai báo tripple function ở đây
    // function tripple(num){
    //     return num * 3
    // }
    // var numbers = [10, 5, 8];
    // var newNumbers = numbers.map((item , index) => item * 3)
    // console.log(newNumbers)

    // 25 : ARROW FUNCTION AND FUNCTION

// const a = {
//     name : 'A', 
//     run : function(){
//         const that = this
//         console.log(this.name + ' running')
//         var run2 =  function() {
//             console.log(that.name + ' running second')
//         }
//         run2()
//     }
// }
// a.run()

// TEMPLATE SRING : BACKTICK

// const a = {
//     name : 'Nguyen Van A',
//     location : 'Quan 10',
//     sayHello : function(){
//         console.log(`  I ' m  ${this.name}`)
//     }
// }
// a.sayHello()

// ARGUMENTS
    // Array like object
    // function tinhcong(){
    //     const array = Array.from(arguments)
    //     return array
    // }
    // console.log(tinhcong(5,6,1,1,1,1,1,1,3,2,4))

// REST SPREAT

//rest
// function tinh(...number){
//     console.log(number)
// }
// tinh(2,3,4,5,6,7)
//spread
// const a = [1,2,3,4,5]
// const b = [...a,6,7,8,9,10]
// console.log(b)
