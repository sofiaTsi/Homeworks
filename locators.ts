import { Page } from '@playwright/test';

export class LocatorsTask1 {
    readonly userNameField = this.page.getByText( 'Username', { exact: true } );
    readonly passwordField = this.page.getByText( 'Password', { exact: true } );
    readonly loginButton = this.page.getByRole( 'button', { name: ' Login' } );
    readonly logoutButton = this.page.getByRole( 'link', { name: 'Logout' } );
    readonly messageLocator = this.page.locator( '#flash' );
    constructor ( public readonly page: Page ) {
    }
}

export class LocatorsTask4 {
    readonly firstName = this.page.getByRole( 'textbox', { name: 'First name' } );
    readonly lastName = this.page.getByRole( 'textbox', { name: 'Last name' } );
    readonly jobTitle = this.page.getByRole( 'textbox', { name: 'Job title' } );
    readonly educationRadioButton = this.page.locator( '#radio-button-2' );
    readonly sexCheckBox = this.page.locator( '#checkbox-1' );
    readonly yearsOfExperience = this.page.getByLabel( 'Years of experience:' );
    readonly date = this.page.getByPlaceholder( 'mm/dd/yyyy' );
    readonly submitButton = this.page.getByRole( 'button', { name: 'Submit' } );

    constructor ( public readonly page: Page ) {
    }
}

export class LocatorsTask5 {
    readonly sectionTitle = this.page.locator( 'h1' );
    readonly minPrice = this.page.locator( '#mz-filter-panel-0-0' ).getByRole( 'spinbutton', { name: 'Minimum Price' } );
    readonly maxPrice = this.page.locator( '#mz-filter-panel-0-0' ).getByRole( 'spinbutton', { name: 'Maximum Price' } );
    readonly iteam = this.page.locator( '.text-ellipsis-2' );
    readonly iteamName = this.page.locator( '.text-ellipsis-2' );
    readonly iteamImage = this.page.locator( '#mz-product-grid-image-28-212408' );
    readonly toCartButton = this.page.locator( '.product-action > button' );
    readonly checkout = this.page.getByRole( 'link', { name: 'Checkout ' } );
    readonly totalPrice = this.page.locator( '#content' );

    constructor ( public readonly page: Page ) {
    }
}