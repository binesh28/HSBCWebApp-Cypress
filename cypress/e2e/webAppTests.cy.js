import HomePage from "../pageObjects/HomePage"
import LoginPage from "../pageObjects/LoginPage"
import BranchesPage from "../pageObjects/BranchesPage"
import BranchFinderPage from "../pageObjects/BranchFinderPage"
import PrivacyStatementPage from "../pageObjects/PrivacyStatementPage"
import CreditCardsPage from "../pageObjects/CreditCardsPage"
import CompareCardsPage from "../pageObjects/CompareCardsPage"

import testData from "../fixtures/data.json"

const homePage = new HomePage()
const loginPage = new LoginPage()
const branchesPage = new BranchesPage()
const branchFinderPage = new BranchFinderPage()
const creditCardsPage = new CreditCardsPage()
const privacyStatementPage = new PrivacyStatementPage()
const compareCardsPage = new CompareCardsPage()

beforeEach(() => {

  cy.viewport(1280, 720)
  cy.visit('/')
})

describe('HSBC Web App Tests', () => {
  
  it('validate login scenario', () => {
    homePage.getLogo()
      .should('exist')
    homePage.getTitle()
      .contains(testData.homePageTitle)
    homePage.clickLogonButton()
    loginPage.getContinueToLogonWithBrowserLink()
      .contains(/Continue to log on with browser/i).click()
    loginPage.validateURL("/security/")
    loginPage.getContinueButton()
      .should('exist')
    loginPage.getContinueButton()
      .should('not.be.enabled')
    loginPage.getUsername()
      .type(testData.email)
    loginPage.getContinueButton()
      .should('not.be.disabled')
    loginPage.getRememberMeCheckbox()
      .should('not.be.checked')
    loginPage.getToolTip()
      .should('exist')
    loginPage.getToolTip()
      .click({force : true})
    loginPage.getUsernameHeader()
      .contains(/Username/i)
    loginPage.getCloseButton()
      .should('exist')
    loginPage.getCloseButton()
      .click()
    
  })

  it('validate ATM search scenario', () => {
    cy.scroll('bottom')
    homePage.getFindYourNearestBranchLink()
      .contains(testData.footerLink).click({ force: true })
    branchesPage.validateURL("/ways-to-bank/branches/")
    branchesPage.getHeader()
      .contains(testData.branchesPageTitle)
    branchesPage.getBranchLocatorButton()
      .click({force : true})
    branchFinderPage.validateURL("/branch-finder/")    
    branchFinderPage.getPostcodeOrTownInput()
      .should('be.visible')
    branchFinderPage.getGoogleMapPlugin()
      .should('be.visible')  
    branchFinderPage.getPostcodeOrTownInput()
      .should('not.be.disabled')  
    branchFinderPage.getPostcodeOrTownInput()
      .type(testData.postcodeOrTownInput, {force: true, delay : 1000})
    branchFinderPage.getPostcodeOrTownInput()
      .type('{downArrow}{enter}')
    branchFinderPage.getSearchResult()
      .should('be.visible')
      .contains(testData.branchLocation)
    branchFinderPage.getShowMoreResultsButton()
      .should('be.visible')  
    branchFinderPage.getShowMoreResultsButton()
      .click()
    branchFinderPage.getShowMoreResultsListItems()
      .should('be.visible')
    branchFinderPage.getSecondATMBranchTooltip()
      .contains(/2/)
    cy.scroll('bottom')
    branchFinderPage.getInstagramLink()
      .should('be.visible')
    branchFinderPage.getFacebookLink()
      .should('be.visible')
    branchFinderPage.getTwitterLink()
      .should('be.visible')
    branchFinderPage.getYoutubeLink()
      .should('be.visible')
    homePage.getLogo()
      .click()
    homePage.getTitle()
      .contains(testData.homePageTitle)
    cy.scroll('bottom')
    homePage.getPrivacyStatementLink()
      .should('be.visible')
    homePage.getPrivacyStatementLink()
      .click()
    privacyStatementPage.getHeader()
      .contains(testData.privacyPageTitle)

  })

  it('validate Credit card flow', () => {    
    homePage.getBankingMenu()
      .contains(/Banking/i).click()
    homePage.getCreditCardsLink()
      .contains(/Credit Cards/i)
      .should('be.visible')
      .click({force : true})
    creditCardsPage.validateURL("/credit-cards/")
    creditCardsPage.getHeader()
      .contains(/Credit cards/i)
    creditCardsPage.getCreditCardOptions()
      .should('have.length', 3)
    creditCardsPage.getFirstCreditCardImage()
      .should('have.attr', 'src')
      .should('include', 'premier-card')
    creditCardsPage.getFirstCreditCardHeaderText()
      .contains(testData.firstCreditCardOption)
    homePage.getBankingMenu()
      .contains(/Banking/i).click()
    homePage.getCompareCardsLink()
      .contains('Compare cards').click({force : true})
    compareCardsPage.validateURL("/compare/")
    compareCardsPage.getCloseButton()
      .should('be.visible')
    compareCardsPage.getHeader()
      .contains(/Select cards to compare/i)
    compareCardsPage.getTileSelector()
      .should('have.length', 3)
    compareCardsPage.getFirstCreditCardCheckBox()
      .click()
    compareCardsPage.getSecondCreditCardCheckBox()
      .click()
    compareCardsPage.getCompareButton()
      .click({ force: true })
    compareCardsPage.validateURL("/compare/")
    compareCardsPage.getCreditCardSelectionList()
      .should('have.length', 2)
    compareCardsPage.getRemoveCreditCardLinks()
      .should('have.length', 2)
      .contains(/Remove card/i)
    compareCardsPage.getAddCardLink()
      .contains('Add card')
      .click({ force: true })
    compareCardsPage.getThirdCreditCardCheckBox()
      .click()
    compareCardsPage.getCompareButton()
      .contains('Compare')
      .click()
    compareCardsPage.getCreditCardSelectionList()
      .should('have.length', 3)
    compareCardsPage.getRemoveCreditCardLinks()
      .should('have.length', 3)
      .contains(/Remove card/i)
    compareCardsPage.getRemoveCardLink()
      .contains('Remove card')
      .click()
    compareCardsPage.getCreditCardSelectionList()
      .should('have.length', 2)
    compareCardsPage.getAddCardLink()
      .contains('Add card')
      .click({ force: true })
    compareCardsPage.getCloseButton()
      .should('be.visible')
    compareCardsPage.getCloseButton()
      .click()
    compareCardsPage.getCloseButton()
      .should('not.be.visible')

  })
})