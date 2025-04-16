import test, { expect } from '@playwright/test';


test( ( 'Task 1' ), async ( { request } ) => {
    const response = await request.get( 'https://reqres.in/api/users/2' );
    const responseContent = JSON.parse( await response.text() );

    expect( response ).toBeOK();
    expect( responseContent.data.first_name ).toEqual( 'Janet' );
    expect( responseContent.data.last_name ).toEqual( 'Weaver' );
    expect( responseContent.data.email ).toEqual( 'janet.weaver@reqres.in' );
} );

test( ( 'Task 2' ), async ( { request } ) => {
    const response = await request.post( 'https://dummyjson.com/posts/add', {
        data: {
            title: 'Awesome title',
            userId: 10
        }
    } );
    expect( response.status() ).toBe( 201 );
    const responseContent = await response.json();

    expect( responseContent.title ).toEqual( 'Awesome title' );
    expect( responseContent.userId ).toEqual( 10 );
} );

test( ( 'Task 3' ), async ( { request } ) => {
    const response = await request.get( 'https://dummyjson.com/products', {
        params: {
            skip: 10,
            limit: 5
        }
    } );
    const responseContent = await response.json();

    const productsQuatity = await responseContent.products.length;
    expect( productsQuatity ).toEqual( 5 );
    expect( responseContent.products[ 0 ].price ).toEqual( 1899.99 );
    expect( responseContent.products[ 1 ].rating ).toBeLessThan( 4 );
    expect( responseContent.products[ productsQuatity - 1 ].stock ).toBeGreaterThan( 10 );
    expect( responseContent.products[ 0 ] ).toHaveProperty( 'returnPolicy' );
} );