let friends=["penny","chandler","ross","rachel","monica","sheldon"];
friends.shift("penny");
friends.unshift("phoebe");
friends.pop("sheldon");
friends.push("joey");
friends.splice(3,0,"justin");
console.log(friends);

let arr =[5,4,6,8];
console.log(arr);
console.log(arr[2]);
console.log(arr[4]);//undefined
arr[4]=15;
console.log(arr[4]);
arr[10]=45;
console.log(arr);
arr[-11]=55;
console.log(arr[-11]);
console.log(arr[-2]);
console.log(typeof arr);



arr=[1,2,3,4,5,6];
console.log(arr.length);
//arr.length=0;
console.log(arr);
arr.length = 2;
console.log(arr);
//indexof ,last indexof, concat
arr=[1,2,3,4,5,3,2];
console.log(arr.indexOf(3), arr.lastIndexOf(3),arr[2]);
let y = arr.concat([11,12]);
console.log(y);


arr=[1,2];
arr.push(6,7,8,9,44);
console.log(arr);
arr.pop();//removes last element
arr.shift();//removes first element

arr.unshift(10,20);//append new elements to the start of an array
arr.splice(1,1,99,22)
console.log(arr);
let arr2=[1,2,3,4,5,6,7];
console.log(arr2);
console.log(arr2.length);
console.log(arr2.indexOf(3), arr2.lastIndexOf(3),arr2[2]);
let a = arr2.concat([11,12]);
console.log(a);
arr2.push(444);
console.log(arr2);
console.log(a);
arr2.pop();
arr2.shift();
console.log(arr2);
let arr3=[2,4,8,10];
console.log(arr3);
arr3.pop();
console.log(arr3);
arr3.shift();
console.log(arr3);
arr3.unshift(22);
console.log(arr3);

//foreach
arr=[1,2,3,4,5]
arr.forEach(function(ele,ind)
{
    console.log(ele,ind)
}
)
//print 1st letter of an array
let friends1=["divya","rahul","kavi","sita"]
friends1.forEach(function(ele){
    console.log(ele[0])
})
//foreach cant return any value
let x= friends1.forEach(function(ele){
    return ele.length
});
console.log(x);
//map will return for  every element of array
let x1= friends1.map(function(ele){
    return ele.length
});
console.log(x1);
let x2=friends1.map((ele)=>ele.length);
console.log(x2);
// return even values (true/false)
 let arr4=[2,4,6,8,9];
 let z = arr4.map((ele)=>ele%2==0);
console.log(z);
//filter prints only even numbers 
let z1=arr4.filter((ele)=>ele%2==0)
console.log(z1)
 //some :-like logical or atleast one should be true whole will be true
 let z2=arr4.some((ele)=>ele>3)
 console.log(z2)
//every:- one condition is false whole will be false (logical and)
let z3=arr4.every((ele)=>ele>6)
console.log (z3)
//find:- the first true value taken by find
let z4=arr4.find((ele)=>ele%3==0)
console.log(z4)
//reduce:-
let k=[11,22,33,44]
let z5=k.reduce((prev,ele)=>{
    return prev+ele
},0)
console.log(z5)
// max
let z6=arr4.reduce((prev,ele)=>{
    return Math.max(prev,ele)
},0)
console.log(z6)
/*two dimentional array to single dimention through flatenning
let array=[[1,2],[3,4],[5,6]];
let z7 = array.reduce(function(prev,ele){
   return prev.push(...ele)
},[]);
console.log(z7)*/
 friends1=["divya","rahul","kavi","sita"];
let z8= friends1.sort();//bubble sort
console.log(z8);
 let arr7=[1,4,11,44,79];
let z9=arr7.sort()
console.log(z9);
console.log(arr7.reverse());