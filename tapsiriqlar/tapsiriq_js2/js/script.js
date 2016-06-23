// 1.
   
// || ve ya demekdir. sertlerden en azi biri true olarsa cvb true olr.

//!true || !false   
// cvb: true

// (true && !false) && (false || !true) 
//  cvb:false 

// (4 > 5) || true 
// cvb: true

// document.write(("this" != "that") && ("zebra" > "aardvark"))
// cvb: false

// ((4 >= 6) || ("grass" != "green")) && !(((12 * 2) == 144) && true)
// cvb: false



//2.
// myColor = ["Red", "Green", "White", "Black"];

// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"

//cvb:
   // console.log(myColor.join("+"));

   // console.log(myColor.join(","));



// 3.
// var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

// // Sample Output : -4,-3,1,2,3,5,6,7,8

 //cvb:

//  var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
// function fun(){
// 	arr1.sort(function(a, b){return a-b});
// 	console.log(arr1);
// }
// fun();



//4.

//var array = [1, 2, 3, 4, 5, 6];

 /*
Expected Output : 21 
*/

//cvb: 

//1ci usul

// function getSum(total, num) {
//     return total + num;
// }
// function myFunction(item) {
//  console.log(array.reduce());
// }
// myFunction();

// 2ci usul

// var array = [1, 2, 3, 4, 5, 6];

// function toplama(){
// 	var top = 0;
// for (i=0; i<array.length; i++){
// 			top+=array[i];
// }
// console.log(top);
// }
// toplama();



//5.

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };

// Sample Output : name,sclass,rollno



// cvb:
// console.log(Object.getOwnPropertyNames(student));









//6.

// Example x = 32243;
// Expected Output : 34223	



//cvb: 

// var x = 32243;
// var y = x.toString();
// var z = y.split("").reverse().join("");
// var aa = Number(z);
// document.write(aa);




//7.

/*
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
*/

//cvb:

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));











//8.

/* 
Example string: Ttttrevaaaniannnn;
Expected Output : 4t,3a,4n
*/

//cvb:



