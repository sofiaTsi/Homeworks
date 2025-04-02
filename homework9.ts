//Task_1:
type SortFunction = ( arr: string[], direction: 'asc' | 'desc' ) => string[];

function superSort ( arr: string[], direction: 'asc' | 'desc' ): string[] {
    let sortedArr = arr;
    sortedArr.sort();
    if ( direction === "asc" ) {
        return sortedArr;
    } else {
        sortedArr.reverse();
        return sortedArr;
    }
}

const names = [ "Vlad", "Ira", "Nina", "Alex" ];
console.log( superSort( names, "asc" ) );  // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func( [ "A", "C", "D", "B" ], "desc" );
console.log( result );  // [ 'D', 'C', 'B', 'A' ]


//Task_2:
enum PackageStatus {
    Pending = 'PENDING',
    InTransit = 'INTRANSIT',
    Delivered = 'DELIVERED',
    Lost = 'LOST'
}

interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Parcel {
    readonly id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;
    sender: number | string;
    status: PackageStatus;
    deliver: ( isSucces: boolean ) => void;
    get statusName (): string;
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver ( isSuccess ) {
        this.status = isSuccess
            ? PackageStatus.Delivered
            : PackageStatus.Lost;
    },
    get statusName () {
        return this.status;
    }
};
item.deliver( true );
console.log( item.statusName ); // Delivered


//Task_3:
abstract class User {
    readonly id: number;
    email: string;
    private password: string;
    static idCounter = 1000;

    constructor ( email: string, password: string ) {
        this.email = email;
        this.changePassword( password );
        this.id = User.idCounter++;
    }

    get passwordPreview (): string {
        for ( let i = 1; i < ( this.password.length - 1 ); i++ ) {
            this.password = this.password.replace( this.password[ i ], '*' );
        }
        return this.password;
    }

    changePassword ( value: string ): void {
        if ( value.length < 6 ) {
            throw new Error( 'Password is too short!' );
        }
        this.password = value;
    }

    abstract showProfile (): void;

}

interface Printable {
    print (): void;
}

class Admin extends User implements Printable {
    isActive: boolean;

    constructor ( email: string, password: string, isActive?: boolean ) {
        super( email, password );
        this.isActive = isActive;
    }

    showProfile (): void {
        if ( this.isActive ) {
            console.log( `https://softserve/profile/${ this.id }` );
        } else {
            console.log( 'https://softserve/login' );
        }
    }

    print (): void {
        console.log( this.constructor.name );
    }

}
try {
    const admin = new Admin( 'admin@gmail.com', 'Qwerty' );
    admin.changePassword( 'Weak' );
    console.log( admin.passwordPreview );
    admin.changePassword( 'Super-Pass' );
    console.log( admin.passwordPreview );
} catch ( error ) {
    console.error( 'Password too short!' );
}