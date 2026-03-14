let result1=[]
let nums = [2, 6, 8, 10, 11, 14, 21, 27];
for(let i=0; i<8; i++){
    if(nums[i] % 2 === 0){
        result1.push(nums[i]+2)
    }
    else{
        // nums[i]+5;
        result1.push(nums[i]+5)
    
    }
}
console.log(result1)

// let result2=[]
// let nums2 = [2, 6, 8, 10, 11, 14, 21, 27];
// nums2.forEach(num => {
//     if(num % 2 === 0){
//         result2.push(num + 2);
//     } else {
//         result2.push(num + 5);
//     }
// });
// console.log(result2);

// let res= nums.indexOf(10);
// console.log(res);

let res=nums.find(num => num == 2);
console.log(res);

let i=nums.filter(num => num >10);
console.log(i);

let j=nums.map(num => {
    if(num%2 ===0){
        return num+2;

    }
    else{
        return num+5;
    }
});
console.log(j);

let sum=nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

let fruits = ["Mango", "Apple", "Banana", "Orange"];
fruits.map((x,y) => console.log(x,y));

let num = [8, 12, 18, 28, 34, 62, 128, 218, 517, 810];
let total = num.reduce((x,y) => x + y, 0);
console.log("Sum: " + total);
num.reverse();
console.log("Reversed: " + num);
console.log(fruits, num);
console.log(...fruits, ...num);
let [a,b,c,d] = fruits;
console.log(a,b,c,d);

