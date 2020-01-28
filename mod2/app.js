// const a=5;
// const b=6;
// if (a===b){
//     console.log('it is ok');
// }
// else{
//     console.log('it is not ok');
// }

//
// const  str = 'abc';
// if (str.length > 0){
//     console.log('it is ok');
// }
// else{
//     console.log('it is not ok')

// const a = 1;
// console.log('level 1, a:' , a);
// if (true){
//     console.log('level 2, a:' , a);
//
//     const b=2;
//     console.log('level 2, b:' , b);
// }


// for (let i = 3; i < 7; i+=1){
//     console.log(i);
// }
//
// let i = 0;
// while (i < 10){
//     console.log(i+=1)
//
// }
// let i=0;
// do {
//     console.log(i);
//     i+=10;
// }while (i<50);


//
//
// for (let i=0; i<5; i+=1){
//     console.log('before breake', i);
//     break;
//     // continue;
//     console.log('after breake', i);
// }


//game
console.log('start');
let userNumber;
let numberX=Math.random() * 100;
numberX=Math.round(numberX);
console.log(numberX);

do {
    userNumber = prompt('Enter number [0..100]');
    userNumber =Number.parseInt(userNumber, 10);
    console.log(userNumber);
    if (userNumber===null){
        break;
    }

    if (numberX < userNumber){
        console.log('<', userNumber);
    }
    if (numberX > userNumber){
        console.log('>',userNumber);
    }
}
while (userNumber !== numberX);
// while (false)

console.log( 'WINNER', userNumber);
console.log('end');
