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
	return {
		firstName,
		lastName,
		email,
		phone,
		city
	};
}
console.log( gettUserInfo( user ) );


//Task_2:
function countCars ( cars ) {
	const carsMap = new Map();
	for ( const car of cars ) {
		let carsAmount = carsMap.get( car );
		if ( carsAmount == undefined ) {
			carsMap.set( car, 1 );
			continue;
		} else {
			carsAmount++;
			carsMap.set( car, carsAmount );
		}
	}
	return carsMap;
}
const cars = [ "BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW" ];
console.log( countCars( cars ) );

//Task_2_Option_2:
/* function countCars ( cars ) {
	const carsMap = new Map();
	cars.forEach((car) => {
		carsMap.set(car, cars.filter((c) => c == car).length)
	});
	return carsMap;
} */


//Task_3:
function checkLogin ( username, password ) {
	return new Promise( function ( resolve, reject ) {
		setTimeout( function () {
			if ( username === 'admin' && password === 'qwerty123456' ) {
				resolve( `Welcome, ${ username }!` );
			} else {
				reject( 'Invalid username or password!' );
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
	return new Promise( function ( resolve, reject ) {
		const data = {
			profile: fetchUserProfile( userId ),
			posts: fetchUserPosts( userId )
		};
		resolve( data );
		const reason = new Error( 'Error loading user data' );
		reject( reason );
	} );
}

loadUserProfile( 1 )
	.then( ( data ) => console.log( data ) )
	.catch( ( error ) => console.log( error ) );

//Task_4_Option_2:
/* async function loadUserProfile ( userId ) {
	try{
		const profile = await fetchUserProfile( userId ),
		const posts = await fetchUserProfile( userId ),
		return {profile, posts}
	} catch(error){
		return 'Error loading user data'
	}
}
loadUserProfile( 1 )
	.then( ( data ) => console.log( data ) )
	.catch( ( error ) => console.log( error ) ); */

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

//Task_5_Option_2:
/* function updateCart ( cart, newItem ) {
	const updatedCart = [...cart]
	const itemIndex = updatedCart.findIndex( ( item ) => item.id === newItem.id)
	if ( itemIndex !== -1){
		updatedCart[ itemIndex ].quantity += newItem.quantity
	} else{
		updatedCart.push( newItem )
	}
	return updatedCart;
} */