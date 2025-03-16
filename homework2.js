//Task_1:
function processData ( num1 = 0, num2 = 0, action = 'sum' ) {
    let result;
    if ( action == 'sum' ) {
        result = num1 + num2;
    } else if ( action == 'product' ) {
        result = num1 * num2;
    } else if ( action == 'square' ) {
        result = num1 ** num2;
    } else {
        result = 'Incorect action!';
    }
    return result;

}
console.log( processData( 10, 4, 'product' ) ); // 40

//Task_2:
function findElem ( arr, el ) {
    const result = arr.includes( el );
    return result;
}

const arr = [ 1, 2, 3, 4, "Alex", 10, "Nick" ];
console.log( findElem( arr, 7 ) ); // false
console.log( findElem( arr, "Alex" ) ); // true

//Task_3:
function deleteItem ( arr, item ) {
    const indexOfItem = arr.indexOf( item );
    if ( arr.indexOf( item ) !== -1 ) {
        arr.splice( indexOfItem, 1 );
    }
    return arr;
}
console.log( deleteItem( [ 3, 12, 16, 19, 21, 33 ], 17 ) );

//Task_4:
function getCircleLength ( r ) {
    const circleLength = 2 * Math.PI * r;
    if ( typeof ( r ) != 'number' || r <= 0 ) {
        throw new Error( 'Incorrect radius - please, enter a positive numeric value!' );
    }
    return circleLength;
}
try {
    console.log( getCircleLength( 'five' ) );
} catch ( error ) {
    console.error( error.message );
}

//Task_5:
function checkID () {
    try {
        const id = prompt( 'Please, Enter your ID: ' );
        const idNum = parseFloat( id );
        if ( isNaN( idNum ) ) {
            alert( `${ id } is not a number! Please enter your ID` );
            throw new Error( `${ id } is not a number! Please enter your ID` );
        } else if ( id.length == 0 ) {
            alert( 'The field is empty! Please enter your ID' );
            throw new Error( 'The field is empty! Please enter your ID' );
        } else if ( idNum <= 0 || idNum > 1000 ) {
            alert( `${ idNum } is invalid! Please enter your ID` );
            throw new Error( `${ idNum } is invalid! Please enter your ID` );
        }
        alert( `Thank you! Your ID (${ id }) is valid.` );
    } catch ( error ) {
        console.error( error.name );
        console.error( error.message );
    }
}

//Task_6:
function findArrDiff ( arr1, arr2 ) {
    const uniqueArr1 = arr1.filter( ( el ) => arr2.indexOf( el ) == -1 );
    const uniqueArr2 = arr2.filter( ( el ) => arr1.indexOf( el ) == -1 );
    return uniqueArr1.concat( uniqueArr2 );
}
console.log( findArrDiff( [ 5, 10, 20 ], [ 0, 10, 20, 30 ] ) ); // ["5", "0", "30"]