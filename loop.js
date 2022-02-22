//Exercise-1
// let num=1;

// while (num<=10) {
//     console.log(num)
//     num+=2;
// }

//Exercise-2
// let num=1;

// while (num<=20) {
//     if (num % 4===0) {
//         console.log(num)
//     }
//     num++;
// }

//Exercise-3
// let num=100;

// while (num<150) {
//     console.log(num+1);
//     num++;
// }

//Exercise-4
// let num=0;

// while (num<100) {
//     console.log(num+1)
//     num++
// }

// for (let num = 0; num < 100; num++) {
//     const element = num+1;
//     console.log(element)
// }

//Exercise-5
// let object=['$', '$$', '$$$']
// for (const value of object) {
    
// }

//Exercise-6

let show;
for (let i = 1; i < 100; i++) {
    if(i%3===0 && i%5===0){
        console.log(`Buzz- ${i}`)
    }
    else if (i%3===0) {
        console.log(`Fizz- ${i}`)
    } 
    else if(i%5===0){
        console.log(`Buzz- ${i}`)
    }
    else{
        console.log(i)
    }
}


let num = 10;
for (var i = 0; i < num; i++) {
console.log(i)
}