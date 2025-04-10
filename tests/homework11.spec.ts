import test, { expect } from '@playwright/test';

test.describe( 'test suit for Homework 11', () => {
    test( 'Task1', async ( { page } ) => {
        await page.goto( 'https://example.com/' );
        const pageNameLocator = page.locator( 'css=h1' );
        const pageNameString = await pageNameLocator.textContent();

        expect( pageNameString ).toBe( 'Example Domain' );

        expect( page.url() ).toContain( 'example.com' );

        const allPageContents = await page.locator( 'css=p' ).allTextContents();
        expect( allPageContents[ 0 ] ).toMatch( /\w*\s*This domain is for use in illustrative examples\w*\s*/ );
        expect( pageNameLocator ).toHaveText( 'Example Domain' );

    } );

    test( 'Task2', async ( { page } ) => {
        await page.goto( 'https://playwright.dev' );

        expect( page.url().startsWith( 'https://playwright.dev' ) ).toBeTruthy();

        const getStartedLocator = page.getByText( 'Get started' );
        await expect( getStartedLocator ).toHaveCount( 1 );
    } );

    test( 'Task3', async ( { page } ) => {
        await page.goto( 'https://www.google.com' );
        const searchField = page.getByRole( 'combobox', { name: 'Search' } );
        await searchField.fill( 'Playwright' );

        const searchResult = page.getByText( 'playwright', { exact: true } );
        searchResult.click();

        const pageUrl = page.url();
        const response = await page.request.get( pageUrl );
        await expect( response ).toBeOK();
    } );

    test( 'Task4', async ( { page } ) => {
        await page.goto( 'https://playwright.dev' );
        const pageTitle = await page.locator( '.highlight_gXVj' ).textContent();
        expect( pageTitle ).toEqual( 'Playwright' );

        const getStartedButton = page.getByText( 'Get started' );
        await getStartedButton.click();
        expect( page.url() ).toContain( '/docs' );

    } );
} )

