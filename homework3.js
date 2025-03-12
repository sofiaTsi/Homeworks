//Task_1:
let nameVal = document.getElementsByName( 'fio' )[ 0 ].value;
console.log( nameVal );
const phoneNumber = document.getElementsByName( 'phone' )[ 0 ].value;
console.log( phoneNumber );
const dateOfBirth = document.getElementsByName( 'birthday' )[ 0 ].value;
console.log( dateOfBirth );
const emailAddres = document.getElementsByName( 'email' )[ 0 ].value;
console.log( emailAddres );

//Task_2:
/* function addStyle () {
    let h2Tag = document.getElementsByTagName( 'h2' );
    h2Tag[ 0 ].style.color = "red";
    h2Tag[ 0 ].style.textDecoration = "underline";

    let pTag = document.getElementById( 'data' );
    pTag.style.color = "brown";
    pTag.style.fontSize = "18px";
    pTag.style.fontFamily = "Comic Sans MS";

    let spanTag = document.getElementsByTagName( 'span' );
    spanTag[ 0 ].style.color = "green";
    spanTag[ 0 ].style.fontFamily = "Cursive";


    let divTag = document.getElementsByTagName( 'div' );
    divTag[ 0 ].innerHTML = '';
}
let styleButton = document.getElementById( "btn" );
styleButton.addEventListener( 'click', addStyle ); */

//Task_3:
/* function createNewRecord ( newElement, message ) {
    newElement.className = 'newClass';
    newElement.innerHTML = ( message );
    let recordsList = document.getElementsByTagName( 'h3' );
    recordsList[ recordsList.length - 1 ].after( newElement );
}

function onClick () {
    let newElement = document.createElement( 'h3' );
    createNewRecord( newElement, 'I was pressed!' );
}

function mouseOver () {
    let newElement = document.createElement( 'h3' );
    createNewRecord( newElement, 'Mouse on me!' );
}

function mouseOut () {
    let newElement = document.createElement( 'h3' );
    createNewRecord( newElement, 'Mouse is not on me!' );
}

let liveButton = document.getElementById( "btn" );
liveButton.addEventListener( 'click', onClick );
liveButton.addEventListener( 'mouseover', mouseOver );
liveButton.addEventListener( 'mouseout', mouseOut ); */

//Task_4:
/* let articleTag = document.createElement( 'article' );
articleTag.className = 'article postList';
document.body.prepend( articleTag );
let divTag = document.createElement( 'div' );
divTag.id = 'container';
document.getElementsByClassName( 'article postList' )[ 0 ].prepend( divTag );
function createPTag ( text ) {
    let pTag = document.createElement( 'p' );
    pTag.innerHTML = ( text );
    document.getElementById( 'container' ).append( pTag );
}
createPTag( 'Post 1' );
createPTag( 'Post 2' );
createPTag( 'Post 3' ); */

//Task_5:
/* const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
};

function createDate () {
    let date = new Intl.DateTimeFormat( 'ua-UA', options ).format( new Date() );
    let newDateRecord = document.createElement( 'h4' );
    newDateRecord.className = 'newDate';
    newDateRecord.style = 'text-align: right';
    newDateRecord.innerHTML = date;
    return newDateRecord;
}

function createRecord () {
    let userInput = document.getElementById( 'input' ).value;
    let newRecord = document.createElement( 'div' );
    newRecord.className = 'newClass';
    newRecord.innerHTML = userInput;
    return newRecord;
}

function createLine () {
    let horizontLine = document.createElement( 'hr' );
    horizontLine.className = 'newLine';
    horizontLine.style = 'color: black';
    return horizontLine;
}

function onClick () {
    let newRecord = createRecord();
    let newDateRecord = createDate();
    let horizontLine = createLine();
    let recordsList = document.getElementsByTagName( 'hr' );
    recordsList[ recordsList.length - 1 ].after( newRecord );
    newRecord.after( newDateRecord );
    newDateRecord.after( horizontLine );
}

let sendButton = document.getElementById( "btn" );
sendButton.addEventListener( 'click', onClick );
sendButton.addEventListener( 'click', function () { document.getElementById( 'input' ).value = ''; } ); */


