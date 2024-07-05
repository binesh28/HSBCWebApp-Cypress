class CompareCardsPage {
    static firstCreditCardOption = 'cashback-credit-card'
    static secondCreditCardOption = 'visa-platinum-credit-card'
    static thirdCreditCardOption = 'premier-mastercard-credit-card'

    validateURL(text) {
        cy.validateURL(text)
    }

    getHeader() {
        return cy.get('h2')
    }

    getCloseButton() {
        return cy.get('.close-button')
    }

    getTileSelector() {
        return cy.get('div.tile-selector')
    }

    getFirstCreditCardCheckBox() {
        return cy.get(`div[data-product-type=${CompareCardsPage.firstCreditCardOption}] div.modal-checkbox`);
    }

    getSecondCreditCardCheckBox() {
        return cy.get(`div[data-product-type=${CompareCardsPage.secondCreditCardOption}] div.modal-checkbox`);

    }

    getThirdCreditCardCheckBox() {
        return cy.get(`div[data-product-type=${CompareCardsPage.thirdCreditCardOption}] div.modal-checkbox`);

    }

    getCompareButton() {
        return cy.get('div.modal-button span')
    }

    getCreditCardSelectionList() {
        return cy.get('div.product-images-container>div[class=\'image-select\']')
    }

    getRemoveCreditCardLinks() {
        return cy.get('div[class=\'product-select\'] span[aria-hidden=true]')
    }

    getAddCardLink() {
        return cy.get('span')
    }

    getRemoveCardLink()
    {
        return cy.get('span[aria-hidden=true')
    }

}
export default CompareCardsPage
