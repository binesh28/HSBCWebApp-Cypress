class BranchesPage {

    validateURL(text) {
        cy.validateURL(text)
    }

    getHeader() {
        return cy.get('h1')
    }

    getBranchLocatorButton() {
        return cy.get('a[href=\'/branch-finder/\']')
    }            

}

export default BranchesPage