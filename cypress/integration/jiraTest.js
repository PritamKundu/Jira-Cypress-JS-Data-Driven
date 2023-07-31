import 'cypress-iframe';
import { Locators } from "../PageObjects/Pages/Locators";

describe("Jira Contract Management Tools Check", () => {
  const jira = new Locators();
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      return false;
    });
    cy.visit("https://e2e-automation.atlassian.net/");
  })

  
  it("Jira Contract Management Tools Check", () => {
    cy.readFile('cypress/fixtures/utils.json').then((Utils) => {
      cy.parseXlsx('cypress/fixtures/credentials.xlsx')
        .then(
          jsonData => {
            const rowLength = Cypress.$(jsonData[0].data).length
            for (let i = 1; i < rowLength; i++) {

              let value = jsonData[0].data[i];
              cy.get(jira.username).type(value[0]);
              cy.xpath(jira.continue).click({ force: true });
              cy.get(jira.password).type(value[1]);
              cy.get(jira.login).click({ force: true });

              cy.wait(3000);
              cy.get(jira.more, { timeout: 10000 }).click({ force: true });
              cy.wait(3000);
              cy.xpath(jira.apps, { timeout: 10000 }).click({ force: true });
              cy.wait(3000);
              cy.xpath(jira.support_time_contract_management, { timeout: 10000 }).click({ force: true });
              
              cy.wait(10000);
              cy.frameLoaded(jira.iframe, { timeout: 10000 });
              cy.iframe().xpath(jira.create_contract, { timeout: 60000 }).click({ force: true });
              cy.iframe().xpath(jira.name, { timeout: 10000 }).type(Utils.name);
              cy.iframe().xpath(jira.description, { timeout: 10000 }).type(Utils.description);
              jira.verifyContract(Utils.contact_type);
              cy.wait(3000);
              cy.iframe().xpath(jira.create, { timeout: 10000 }).click({ force: true });
              
              cy.wait(2000);
              cy.iframe().xpath(jira.action_icon, { timeout: 10000 }).click({ force: true });
              cy.iframe().xpath(jira.delete, { timeout: 10000 }).click({ force: true });
              cy.get(jira.profile_icon, { timeout: 10000 }).click({ force: true });
              cy.xpath(jira.logout, { timeout: 10000 }).click({ force: true });
              cy.get(jira.logout_final, { timeout: 10000 }).click({ force: true });
            }
          }
        )
    });
  })
})