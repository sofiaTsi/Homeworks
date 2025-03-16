//Task_1:
const scores = {
    programming: 88,
    design: 74,
    jurisprudence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81
};

for ( let elem in scores ) {
    if ( typeof scores[ elem ] !== 'number' ) {
        delete scores[ elem ];
    }
}
console.log( scores );


//Task_2:
class Student {
    constructor ( fullName, direction ) {
        this.fullName = fullName;
        this._direction = direction;
    }

    showFullName () {
        return this.fullName;
    }

    nameIncludes ( data ) {
        return this.fullName.includes( data );
    }

    static studentBuilder () {
        return new Student( 'Ihor Kohut', 'qc' );
    }

    get direction () {
        return this._direction;
    }

    set direction ( value ) {
        this._direction = value;
    }
}

const stud1 = new Student( 'Ivan Petrenko', 'web' );
const stud2 = new Student( 'Sergiy Koval', 'python' );
const stud3 = Student.studentBuilder();

console.log( stud1.nameIncludes( 'Ivan' ) ); // true
console.log( stud1.nameIncludes( 'Denysenko' ) ); // false
console.log( stud3.nameIncludes( 123 ) ); //false 


//Task_3:
class Plane {
    constructor ( model, fuelSupply, fuelConsumption ) {
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }
    calcFlightRange () {
        return this.fuelSupply / this.fuelConsumption * 100;
    }
    static sortFlightRange ( planesArray ) {
        planesArray.sort( ( o1, o2 ) => o1.calcFlightRange() - o2.calcFlightRange() );
        for ( let pl of planesArray ) {
            console.log( pl.model + ': ' + pl.calcFlightRange() );
        }
    }
}

class TransportPlane extends Plane {
    constructor ( model, fuelSupply, fuelConsumption, cargo, addTank ) {
        super( model, fuelSupply, fuelConsumption );
        this.cargo = cargo;
        this.addTank = addTank;
    }
    calcFlightRange () {
        return ( this.fuelSupply + this.addTank ) / this.fuelConsumption * 100;
    }
}

class PassengerPlane extends Plane {
    constructor ( model, fuelSupply, fuelConsumption, passengers, refueling ) {
        super( model, fuelSupply, fuelConsumption );
        this.passengers = passengers;
        this.refueling = refueling;
    }
    calcFlightRange () {
        return ( this.fuelSupply + this.refueling ) / this.fuelConsumption * 100;
    }
}

class WarPlane extends Plane {
    constructor ( model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef ) {
        super( model, fuelSupply, fuelConsumption );
        this.missiles = missiles;
        this.aerodynamicsKoef = aerodynamicsKoef;
    }
    calcFlightRange () {
        const result = super.calcFlightRange() * this.aerodynamicsKoef;
        return result;
    }
}

const plane1 = new TransportPlane( "An-225 Mriya", 105000, 5000, 500, 300000 );
const plane2 = new PassengerPlane( "Boeing-747", 193000, 2500, 410, 90000 );
const plane3 = new WarPlane( "F-22 Raptor", 8200, 320, 20, 1.2 );

console.log( "Unsorted range of planes:" );
console.log( plane1.model, plane1.calcFlightRange() );
console.log( plane2.model, plane2.calcFlightRange() );
console.log( plane3.model, plane3.calcFlightRange() );
console.log( "Sorted range of planes:" );
const planesArray = [ plane1, plane2, plane3 ];
console.log( Plane.sortFlightRange( planesArray ) );


//Task_4:
class Library {
    constructor ( name ) {
        this.name = name;
        this.books = [];
    }

    addBook ( book ) {
        this.books.push( book );
        console.log( `Book ${ book } added to ${ this.name }.` );
    }

    removeBook ( book ) {
        const bookIndex = this.books.indexOf( book );
        if ( bookIndex == -1 ) {
            console.log( `Book ${ book } does not exist in ${ this.name }.` );
        } else {
            this.books.splice( this.books.indexOf( book ), this.books.indexOf( book ) + 1 );
            console.log( `Book ${ book } removed from ${ this.name }.` );
        }
    }

    displayBooks () {
        console.log( `Books in ${ this.name }:` );
        if ( this.books.length == 0 ) {
            console.log( 'No books available.' );
        } else {
            for ( let book of this.books ) {
                const number = this.books.indexOf( book ) + 1;
                console.log( `${ number }. ${ book } ` );
            }
        }
    }
}

const library = new Library( "JS library" );
const libraryQA = new Library( "QA library" );
const libraryAQA = new Library( "AQA library" );
library.displayBooks();
library.addBook( "Javascript: The Definitive Guide - David Flanagan" );
library.addBook( "You don`t know JS - Kyle Simpson" );
library.addBook( "Eloquent JavaScript, 4th Edition - Marijn Haverbeke" );
library.displayBooks();
library.removeBook( "Javascript: The Definitive Guide - David Flanagan" );
library.displayBooks();
