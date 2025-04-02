//Task_1:
function removeSpaces ( text ) {
    if ( typeoftext === 'string' ) {
        let result = text.replace( /^\s+|\s+$/g, '' );
        return result;
    } else {
        return 'Invaid value!';
    }
}

console.log( removeSpaces( ' textWithSpaces ' ) );
console.log( removeSpaces( ' more text with spaces ' ) );


//Task_2:
function findCapitalWords ( sentence ) {
    const capitalWordPattern = /\b[A-Z][a-z]*\b/g;
    return sentence.match( capitalWordPattern ) || [];
}

console.log( findCapitalWords( "The Quick Brown Fox jumps over the Lazy Dog" ) );
console.log( findCapitalWords( "no capital letter here" ) );


//Task_3:
function getLetterCount ( text ) {
    let lowerCaseString = text.toLowerCase();
    let lettersObj = new Object();

    for ( let char of lowerCaseString ) {
        if ( /^[a-z]$/.test( char ) ) {
            lettersObj[ char ] = ( lettersObj[ char ] || 0 ) + 1;

        }
    }
    return lettersObj;
}

console.log( getLetterCount( "banana" ) ); // { b: 1, a: 3, n: 2 }
console.log( getLetterCount( "The short text" ) ); // { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }


//Task_4:
async function getEmailsList () {
    const emailList = document.getElementById( 'resp' );
    emailList.innerHTML = '';

    try {
        const response = await fetch( 'https://fakestoreapi.com/users' );
        if ( !response.ok ) {
            throw new Error( `HTML error - ${ response.status }` );
        }

        const users = await response.json();
        users.forEach( ( user ) => {
            let newLine = document.createElement( 'h2' );
            newLine.textContent = user.email;
            emailList.appendChild( newLine );
        } );
    } catch ( error ) {
        console.log( 'Error with fetching emails:', error );
    }
}

const getEmailsButton = document.getElementById( 'btn' );
getEmailsButton.addEventListener( 'click', getEmailsList );


//Task_5:
async function getUsers () {
    const users = await ( await fetch( 'https://jsonplaceholder.typicode.com/users' ) ).json();
    return users;
}

const userInput = document.getElementById( 'userNameInput' ).value.trim();
const userCityField = document.getElementById( 'userCity' );
const getUserCityButton = document.getElementById( 'getUserButton' );

async function getUserCity () {
    ( async () => {
        const users = await getUsers();
        const result = await users.filter( ( el ) => {
            el.name.toLowerCase().includes( userInput.toLowerCase() );
        } );
        userCityField.innerText = `User's city: ${ result[ 0 ].address.city }`;
    } )();
}

getUserCityButton.addEventListener( 'click', getUserCity );
