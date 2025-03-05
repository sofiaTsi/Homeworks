//Task_1:
const result1 = function ( inputValue ) {
    const hour = Math.floor( inputValue / 60 );
    const min = inputValue % 60;
    const timeString = `${ hour }:${ min }`;
    return timeString;
};
console.log( result1( 100 ) );

//Task_2:
const firstNumberStr = prompt( 'Please, Enter the first number: ' );
const secondNumberStr = prompt( 'Please, Enter the second number: ' );
const firstNumberNum = parseFloat( firstNumberStr );
const secondNumberNum = parseFloat( secondNumberStr );
const sum2 = ( firstNumberNum + secondNumberNum );
const subtraction = Math.abs( firstNumberNum - secondNumberNum );
const multiplication = firstNumberNum * secondNumberNum;
const division = secondNumberNum == 0 ? `Immposible divide by ${ secondNumberNum }` : firstNumberNum / secondNumberNum;
const result2 = `Sum(+) = ${ sum2 }.\nSubtraction(-) = ${ subtraction }\nMultiplication(*) = ${ multiplication }\nDivision(/) = ${ division }`;
alert( result2 );


//Task_3:
let x = 1;
let y = 2;

let res1 = String( x ) + y;
console.log( res1 ); // "12"
console.log( typeof res1 ); //"string" 

let res2 = 'true' + y;
console.log( res2 ); // "true2"
console.log( typeof res2 ); // "string"

let res3 = x === 1;
console.log( res3 ); // true
console.log( typeof res3 ); // "boolean"

let res4 = toString( x ) / y;
console.log( res4 ); // NaN
console.log( typeof res4 ); // "number"


//Task_4:
const points = [ 10, 20, 43 ];
let sum4 = 0;
for ( let point of points ) {
    sum4 = sum4 + point;
};
console.log( sum4 );
if ( sum4 >= 0 && sum4 < 50 ) {
    console.log( 'Unsatisfied' );
} else if ( sum4 >= 50 && sum4 <= 70 ) {
    console.log( 'Satisfied' );
} else if ( sum4 > 70 && sum4 <= 87 ) {
    console.log( 'Good' );
} else if ( sum4 >= 88 && sum4 <= 100 ) {
    console.log( 'Excellent' );
} else {
    console.log( 'Incorrect assessment!!' );
};

switch ( sum4 ) {
    case ( sum4 >= 0 && sum4 < 50 ):
        console.log( 'Unsatisfied!' );
        break;
    case ( sum4 >= 50 && sum4 <= 70 ):
        console.log( 'Satisfied!' );
        break;
    case ( sum4 > 70 && sum4 <= 87 ):
        console.log( 'Good!' );
        break;
    case ( sum4 >= 88 && sum4 <= 100 ):
        console.log( 'Excellent!' );
        break;
    default:
        console.log( 'Incorrect assessment!!' );
}


//Task_5:
for ( let i = 1; i <= 50; i++ ) {
    if ( i % 2 == 0 && i % 4 == 0 ) {
        console.log( `${ i } kratne 2 & 4!` );
    } else if ( i % 2 == 0 ) {
        console.log( `${ i } kratne 2!` );
    } else if ( i % 4 == 0 ) {
        console.log( `${ i } kratne 4!` );
    } else {
        console.log( i );
    }
}


//Task_6:
function primeNum ( num ) {
    if ( num <= 1 ) {
        console.log( `${ num } IS NOT a prime number!` );
    } else if ( num == 2 || num == 3 ) {
        console.log( `${ num } IS a prime number!` );
    } else if ( num % 2 == 0 ) {
        console.log( `${ num } IS NOT a prime number!` );
    } else if ( num % 3 == 0 ) {
        console.log( `${ num } IS NOT a prime number!` );
    } else {
        console.log( `${ num } IS a prime number!` );
    }
}
console.log( primeNum( 7 ) )

