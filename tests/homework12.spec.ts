import test, { expect } from '@playwright/test';
import { LocatorsTask1, LocatorsTask4, LocatorsTask5 } from 'locators';


test.describe( 'test suit for Task 1', () => {
    test.beforeEach( async ( { page } ) => {
        await page.goto( 'https://the-internet.herokuapp.com/login' );
    } );

    test( 'Task1 - negative scenario', async ( { page } ) => {
        const locators = new LocatorsTask1( page );
        await locators.userNameField.fill( '123' );
        await locators.passwordField.fill( '123' );
        await locators.loginButton.click();
        await expect( locators.messageLocator ).toContainText( /Your username is invalid!\s*\w*/ );
    } );

    test( 'Task1 - positive scenario', async ( { page } ) => {
        const locators = new LocatorsTask1( page );
        await locators.userNameField.fill( 'tomsmith' );
        await locators.passwordField.fill( 'SuperSecretPassword!' );
        await locators.loginButton.click();
        await expect( locators.messageLocator ).toContainText( /You logged into a secure area!\s*\w*/ );

        await locators.logoutButton.click();
        await expect( locators.messageLocator ).toContainText( /You logged out of the secure area!\s*\w*/ );
    } );
} );

test( 'Task2', async ( { page } ) => {
    await page.goto( 'https://demo.guru99.com/test/radio.html' );
    const checkboxes: string[] = [ '#vfb-6-0', '#vfb-6-1', '#vfb-6-2' ];

    for ( let c in checkboxes ) {
        await page.locator( checkboxes[ c ] ).check();
    }
    for ( let c in checkboxes ) {
        await expect( page.locator( checkboxes[ c ] ) ).toBeChecked();
    }

    for ( let c in checkboxes ) {
        await page.locator( checkboxes[ c ] ).uncheck();
    }
    for ( let c in checkboxes ) {
        await expect( page.locator( checkboxes[ c ] ) ).not.toBeChecked();
    }
} );

test( 'Task3', async ( { page } ) => {
    await page.goto( 'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select' );
    await page.getByText( 'Accept all & visit the site' ).click();
    const carsDropDown = page.locator( 'iframe[name="iframeResult"]' ).contentFrame().getByLabel( 'Choose a car:' );
    await carsDropDown.selectOption( 'saab' );
    await expect( carsDropDown ).toHaveValue( 'saab' );
    await page.locator( 'iframe[name="iframeResult"]' ).contentFrame().getByRole( 'button', { name: 'Submit' } ).click();
    await expect( page.locator( 'iframe[name="iframeResult"]' ).contentFrame().locator( 'h1' ) ).toContainText( 'Submitted Form Data' );
} );


test( 'Task4', async ( { page } ) => {
    const locators = new LocatorsTask4( page );
    await page.goto( 'https://formy-project.herokuapp.com/form' );

    await fillField( locators.firstName, 'Sam' );
    await fillField( locators.lastName, 'Robertson' );
    await locators.jobTitle.click();
    await fillField( locators.jobTitle, 'Test Automation Engineer' );
    await locators.educationRadioButton.check();
    await locators.sexCheckBox.check();
    await locators.yearsOfExperience.selectOption( '3' );
    await fillField( locators.date, '12/14/2024' );
    await locators.submitButton.click();

    await expect( page.getByRole( 'alert' ) ).toHaveText( /\s*The form was successfully submitted!\s*/ );

} );
async function fillField ( locator, data: string ) {
    await locator.clear();
    await locator.click();
    await locator.fill( data );
}

test( 'Task5', async ( { page } ) => {
    const locators = new LocatorsTask5( page );
    await page.goto( 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home' );
    await page.getByRole( 'link' ).filter( { hasText: 'Phones & PDAs' } ).click();
    await expect( locators.sectionTitle ).toContainText( 'Phones & PDAs' );
    await fillField( locators.minPrice, '135' );
    await fillField( locators.maxPrice, '165' );
    await page.keyboard.press( 'Enter' );

    const iteams = await locators.iteam.all();
    expect.soft( iteams.length ).toEqual( 8 );
    expect( await locators.iteamName.first() ).toHaveText( /HTC Touch HD/ );

    await locators.iteamImage.hover();
    await locators.toCartButton.first().click();

    await locators.checkout.click();
    await expect( locators.totalPrice ).toContainText( '$146.00' );

} );

