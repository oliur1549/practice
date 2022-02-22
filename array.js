// array and string split & join difference

// const product1=[1,2,3,4]
// const product2="I am a job holder, I am very good person."

// // const result=product1.join(',')  //Using join i can get Array to string value

// const result=product2.split(',') //Using split i can get String to Array value.
// console.log(result)

// copy array

// const product=["Rice", 60, 5, 'Nijhum']

// // const result=[...product]
// const result= product

// product.splice(1,product.length, 'oliur')

// console.log(result)

// const months=['jan','Feb', 'April','June','May']

// const copyArr=months;
// months.splice(2,0,'March')

// console.log(copyArr)

// const numbers=[1,4,6,10]

// const result=numbers.reduce((accu,curr)=>{
//     return accu+curr;
// }, 10)

// console.log(result)

// const numbers=[1,4,6,10]

// const result=numbers.every((accu)=>{
//     return accu>=1;
// })
// console.log(result)

// const numbers=[1,4,6,10]
// const result=numbers.some((accu)=>{
//     return accu>10;
// })
// console.log(result)

const products=[2, 65, 5]
const result=products
.map(product => product*5)
.concat(35)
.splice(0)
.reduce((num,cou)=> num+cou)

console.log(result)

