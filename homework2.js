//Task_1:
function processData ( num1 = 0, num2 = 0, action = 'sum' ) {
    let result;
    if ( action == 'sum' ) {
        result = num1 + num2;
    } else if ( action == 'product' ) {
        result = num1 * num2;
    } else if ( action == 'square' ) {
        result = num1 ** num2;
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
    arr.splice( indexOfItem, 1 );
    return arr;
}
console.log( deleteItem( [ 3, 12, 16, 19, 21, 33 ], 16 ) );

//Task_4:
function getCircleLength ( r ) {
    const circleLength = 2 * 3.14 * r;
    if ( typeof ( r ) != 'number' || r <= 0 ) {
        throw new Error( 'Incorrect radius - please, enter a positive numeric value!' );
    }
    return circleLength;
}

console.log( getCircleLength( 'five' ) );

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
        return idNum;
    } catch ( error ) {
        console.log( error.name );
        console.log( error.message );
    }
}

//Task_6:
function findArrDiff ( arr1, arr2 ) {
    const differenceArr = [];
    for ( let el of arr1 ) {
        if ( arr2.includes( el ) ) {
            continue;
        } else {
            differenceArr.push( el );
        }
    }
    for ( let el of arr2 ) {
        if ( arr1.includes( el ) ) {
            continue;
        } else {
            differenceArr.push( el );
        }
    }
    return differenceArr;
}
console.log( findArrDiff( [ 5, 10, 20 ], [ 0, 10, 20, 30 ] ) ); // ["5", "0", "30"]
