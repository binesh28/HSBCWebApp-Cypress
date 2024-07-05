class CreditCardsPage {

    validateURL(text) {
        cy.validateURL(text)
    }

    getHeader() {
        return cy.get('h1')
    }

    getCreditCardOptions() {
        return cy.get('div#chp_main_container_1 div.M-CNT-ITEM-ART-DEV')
    }

    getFirstCreditCardImage() {
        return cy.get('div#chp_main_container_1>div.container-content>div>div#chp_main_container_item_1 img')
    }

    getFirstCreditCardHeaderText() {
        return cy.get('div#chp_main_container_item_content_1 span[class=\'link text\']')
    }

}
export default CreditCardsPage