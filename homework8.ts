//Task_1:
const employee: { name: string, profession: string, worworkingHoursPerDay: number; } = {
    name: "Alex Brown",
    profession: "doctor",
    worworkingHoursPerDay: 10
};

const premiumData: { isPremium: boolean, premium: number; } = {
    isPremium: true,
    premium: 1000
};

const payPerHour: number = 32;
const worworkingDays: number = 14;
const experienceСoefficients: number[] = [ 1, 1.1, 1.2, 1.3, 1.5, ];

const getSalaryInfo = ( employeeData: { name: string, profession: string, worworkingHoursPerDay: number; }, premiumData: { isPremium: boolean, premium: number; }, payPerHour: number, worworkingDays: number, experienceСoefficients: number ) => {
    let salary: number;
    if ( premiumData.isPremium ) {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
    } else {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
    }
    return `${ employee.profession } ${ employee.name } has a salary of ${ salary }$ this month`;
};

const salaryInfo = getSalaryInfo( employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[ 2 ] );
console.log( salaryInfo );

//Task_2:
function processData ( param: string | number | boolean | number[] ): string | number | boolean | number[] {
    if ( typeof param === 'string' ) {
        return param.toUpperCase();
    } else if ( typeof param === 'number' ) {
        return param ** 2;
    } else if ( typeof param === 'boolean' ) {
        if ( param === false ) {
            return true;
        } else {
            return false;
        }
    } else {
        if ( param.length == 0 ) {
            return 'Empty array: []';
        } else {
            for ( let elem in param ) {
                param[ elem ] = param[ elem ] ** 2;
            }
            return param;
        }
    }
}

console.log( processData( "text data" ) ); // "TEXT DATA"
console.log( processData( 3 ) ); // 9
console.log( processData( false ) ); // true
console.log( processData( [ 1, 2, 3, 4 ] ) ); // [1, 4, 9, 16]
console.log( processData( [] ) ); // Empty array: []


//Task_3:
type Triangle = { type: string, base: number, height: number; };
type Rectangle = { type: string, width: number, height: number; };
type Circle = { type: string, radius: number; };

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

function getFigureInfo ( param: Triangle | Rectangle | Circle ): string {
    if ( param[ 'type' ] == 'triangle' ) {
        const triangle_area = ( param[ 'base' ] * param[ 'height' ] ) / 2;
        return `Triangle with base ${ param[ 'base' ] } and height ${ param[ 'height' ] } has an area of ${ triangle_area }.`;
    } else if ( param[ 'type' ] == 'rectangle' ) {
        const rectangle_area = param[ 'width' ] * param[ 'height' ];
        return `Rectangle with width ${ param[ 'width' ] } and height ${ param[ 'height' ] } has an area of ${ rectangle_area }.`;
    } else if ( param.type == 'circle' ) {
        const circle_area = ( Math.PI * ( param[ 'radius' ] ** 2 ) ).toFixed( 2 );
        return `Circle with radius ${ param[ 'radius' ] } has an area of ${ circle_area }.`;

    } else {
        return 'No such figure found!';
    }
}

console.log( getFigureInfo( triangle ) );  // Output: " Triangle with base 5 and height 10 has an area of 25"
console.log( getFigureInfo( rectangle ) );  // Output: " Rectangle with width 8 and height 14 has an area of 112"
console.log( getFigureInfo( circle ) );  // Output: " Circle with radius 8 has an area of 201.06"