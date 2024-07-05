class HomePage {
    
    getLogo() {
        return cy.get('div.row.wrapper img[src*="HSBC_MASTERBRAND"]')
    }
    
    getTitle() {
        return cy.get('title')
    }

    getBankingMenu() {
        return cy.get('nav[class=\'header-main-navigation lg-10\']')
    }

    getMainNavigationItem() {
        return cy.get('nav li.header-main-navigation-item')
    }

    getCreditCardsLink() {
        return cy.get('h2[class=\'doormat-heading\']')
    }

    getCompareCardsLink() {
        return cy.get('a')
    }

    getLogonButton() {
        return cy.get('div[aria-label="Log on options"]>a:first-child')
    }

    getFindYourNearestBranchLink() {
        return cy.get('a[href="/ways-to-bank/branches/"]')
    }

    getPrivacyStatementLink() {
        return cy.get('nav[aria-label=\'Bottom Footer\'] a[href = \'/privacy-statement/\']')
    }
    
    clickLogonButton() {
        this.getLogonButton().click({force : true})
    }    

}
export default HomePage