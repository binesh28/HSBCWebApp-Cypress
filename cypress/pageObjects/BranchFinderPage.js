class BranchFinderPage {

    validateURL(text) {
        cy.validateURL(text)
    }

    getGoogleMapPlugin() {
        return cy.get('div.Eyq4nm4_cyYKN6vuLJQu[aria-label*="Google Map Plugin"]', {timeout: 10000})
    }

    getPostcodeOrTownInput() {
        return cy.get('input#searchInput', {timeout: 10000})
    }

    getSearchResult() {
        return cy.get('button.S4y5MRLMz5P7VsczpZwj', {timeout: 5000})
                 .find('p')
               
    }

    getShowMoreResultsButton() {
        return cy.get('button[aria-label=\'Show more results\']')
    }

    getShowMoreResultsListItems() {
        return cy.get('ul.Hpg0JwLRv6K46BiIEAil', {timeout: 10000})
    }
    
    getSecondATMBranchTooltip() {
        return cy.get('span.yWQITJvVOSElgOOsYgyM')
    }
    
    getInstagramLink() {
        return cy.get('a[href = \'https://instagram.com/hsbc_in/\']')
    }

    getFacebookLink() {
        return cy.get('a[href = \'https://www.facebook.com/HSBCIndia/\']')
    }

    getTwitterLink() {
        return cy.get('a[href = \'https://www.twitter.com/HSBC_IN\']')
    }

    getYoutubeLink() {
        return cy.get('a[href = \'https://www.youtube.com/channel/UC3Nt_U6gzLlKdAL9Evq0KXQ/featured\']')
    }   

}

export default BranchFinderPage
