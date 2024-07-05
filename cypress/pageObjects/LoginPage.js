class LoginPage {

    validateURL(text) {
        cy.validateURL(text)
    }

    getContinueToLogonWithBrowserLink() {
        return cy.get('span.crh-chevron-link__text.crh-chevron-link__text--forward')
    }

    getContinueButton() {
        return cy.get('button[name="continue"]>span')
    }

    getUsername() {
        return cy.get('input#username')
    }

    getRememberMeCheckbox() {
        return cy.get('label[for=\'rememberMe\']')
    }

    getToolTip() {
        return cy.get('span[class=\'icon icon-circle-help-solid help-icon\']')
    }

    getUsernameHeader() {
        return cy.get('div#help_content_1>h3>span')
    }

    getCloseButton() {
        return cy.get('div>a.close-btn>span>span.icon.icon-delete')
    }
}

export default LoginPage
