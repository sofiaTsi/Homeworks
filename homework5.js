//Task_1:
const user = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	contact: {
		email: "john.doe@example.com",
		phone: "123-456-7890"
	},
	address: {
		city: "New York",
		country: "USA"
	}
};

function gettUserInfo ( obj ) {
	const { firstName, lastName, contact: { email, phone }, address: { city } } = obj;
	const result = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		phone: phone,
		city: city
	};
	return result;
}
console.log( gettUserInfo( user ) );


//Task_2:
function countCars ( cars ) {
	const carMap = new Map( [] );
	for ( let car of cars ) {
		let carAmount = carMap.get( car );
		if ( carAmount == undefined ) {
			carMap.set( car, 1 );
			continue;
		} else {
			carAmount++;
			carMap.set( car, carAmount );
		}
	}
	return carMap;
}
const cars = [ "BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW" ];
console.log( countCars( cars ) );


//Task_3:
function checkLogin ( username, password ) {
	return new Promise( function ( resolve, reject ) {
		setTimeout( function () {
			if ( username == 'admin' && password == 'qwerty123456' ) {
				resolve( `Welcome, ${ username }!` );
			} else {
				const reason = new Error( 'Invalid username or password!' );
				reject( reason );
			}
		}, 2000 );
	} );
}
checkLogin( "admin", "qwerty123456" )
	.then( ( message ) => console.log( message ) )
	.catch( ( error ) => console.log( error.message ) );


//Task_4:
async function fetchUserProfile ( userId ) {
	return new Promise( ( resolve ) => {
		setTimeout( () => {
			resolve( { userId, name: "John Doe", age: 30 } );
		}, 1000 );
	} );
}

async function fetchUserPosts ( userId ) {
	return new Promise( ( resolve ) => {
		setTimeout( () => {
			resolve( [
				{ postId: 1, content: "Hello, world!" },
				{ postId: 2, content: "Loving this app!" }
			] );
		}, 2000 );
	} );
}

function loadUserProfile ( userId ) {
	return new Promise( async function ( resolve, reject ) {
		const data = {
			profile: await fetchUserProfile( userId ),
			posts: await fetchUserPosts( userId )
		};
		resolve( data );
		const reason = new Error( 'Error loading user data' );
		reject( reason );
	} );
}

loadUserProfile( 1 )
	.then( ( data ) => console.log( data ) )
	.catch( ( error ) => console.log( error ) );


//Task_5:
const cart = [
	{ id: 1, name: "Laptop", price: 1200, quantity: 1 },
	{ id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

function updateCart ( cart, newItem ) {
	let itemExist = false;
	const updatedCart = cart.map( function ( item ) {
		if ( item[ 'id' ] == newItem[ 'id' ] ) {
			itemExist = true;
			item[ 'quantity' ] = item[ 'quantity' ] + newItem[ 'quantity' ];
		}
		return item;
	} );

	if ( itemExist == false ) {
		updatedCart.push( newItem );
	}
	return updatedCart;
}

console.log( updateCart( cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 } ) );
console.log( updateCart( cart, { id: 3, name: "Tablet", price: 600, quantity: 1 } ) );