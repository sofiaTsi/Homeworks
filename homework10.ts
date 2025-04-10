//Task_1:
/* function display ( a: string | string[] ): void;
function display ( a: string, b: string ): void;

function display ( a: string | string[], b?: string ): void {
    if ( a !== undefined && typeof a === "object" ) {
        for ( let el in a ) {
            console.log( a[ el ] );
        }
    } else if ( a && b ) {
        console.log( a + '\n' + b );
    } else if ( a ) {
        console.log( a );
    }
}

console.log(
    console.log(
        console.log(
            console.log( display( 'Sofia' ) ) ) ) );

display( "Hello, World!" );
display( "Hello", "World!" );
display( [ "Hello", "World", "!" ] ); */


//Task_2:
/* interface ArrayWise {
    rating: number;
}

function identity<T extends ArrayWise> ( arr: T[] ) {
    let ratingSum = 0;
    for ( let el in arr ) {
        ratingSum += arr[ el ].rating;
    }
    let ratingAverage = ratingSum / arr.length;
    return ratingAverage;
}

console.log( identity( [ { name: "Anna", rating: 3 } ] ) ); // 3
console.log( identity( [ { title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 } ] ) ); // 4 */


//Task_3:
/* function WithEmploymentDate<T extends { new( ...args: any[] ): {}; }> ( constructor: T ) {
    return class extends constructor {
        employmentDate = new Date( "2024-04-12" );
    };
}

@WithEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';

    constructor () {
        console.log( 'Initializing the Manager class' );
    }

}

const manager = new Manager();
console.log( manager ); */

// Output
//{ "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z"; }