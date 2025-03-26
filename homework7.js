//Task_1:
function removeSpaces ( text ) {
    let result = text.replace( /^\s/g, '' ).replace( /\s$/g, '' );
    return result;
}

console.log( removeSpaces( ' textWithSpaces ' ) );
console.log( removeSpaces( ' more text with spaces ' ) );


//Task_2:
function findCapitalWords ( sentence ) {
    let arr = sentence.match( /[A-Z]\S+/g );
    if ( arr == null ) {
        return arr = [];
    }
    return arr;
}

console.log( findCapitalWords( "The Quick Brown Fox jumps over the Lazy Dog" ) );
console.log( findCapitalWords( "no capital letter here" ) );


//Task_3:
function getLetterCount ( text ) {
    let lettersArr = text.toLowerCase().match( /[A-Za-z]/g );
    let lettersObj = new Object();
    for ( let letter of lettersArr ) {
        if ( lettersObj[ letter ] ) {
            lettersObj[ letter ]++;
        } else {
            lettersObj[ letter ] = 1;
        }
    }
    return lettersObj;
}

console.log( getLetterCount( "banana" ) ); // { b: 1, a: 3, n: 2 }
console.log( getLetterCount( "The short text" ) ); // { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }


//Task_4:
async function getEmailsList () {
    let response = await fetch( 'https://fakestoreapi.com/users' ).then( function ( response ) { if ( /5\d+/g.test( response.status ) ) { throw new Error( `Server error - ${ response.statusText }` ); }; return response.json(); } );
    console.log( response );
    for ( user in response ) {
        let userEmail = response[ user ].email;
        let newLine = document.createElement( 'h2' );
        newLine.innerHTML = `${ userEmail }`;
        document.getElementById( 'resp' ).append( newLine );
    }
}

const getEmailsButton = document.getElementById( 'btn' );
getEmailsButton.addEventListener( 'click', getEmailsList );


//Task_5:
/* async function getUserCity () {
    let userInput = document.getElementById( 'userNameInput' ).value;
    let userCityHere = document.getElementById( 'userCity' );
    userInput = userInput.replace( /^\s/g, '' ).replace( /\s$/g, '' );
    if ( userInput.length == 0 ) {
        userCityHere.innerHTML = 'Please, Enter your name';
        console.log( 'No name entered!' );
    } else {
        let response = await fetch( 'https://jsonplaceholder.typicode.com/users' ).then( response => response.json() ).catch( ( error ) => console.log( `Error while GET request - ${ error }` ) ).then( json => { return json; } );
        for ( user in response ) {
            if ( response[ user ].name == userInput ) {
                userCityHere.innerHTML = response[ user ].address.city;
                console.log( response[ user ] );
                return;
            } else {
                userCityHere.innerHTML = 'No such User found';
                console.log( 'No such User found' );
            }
        }
    }
}

const getUserCityButton = document.getElementById( 'getUserButton' );
getUserCityButton.addEventListener( 'click', getUserCity );
 */