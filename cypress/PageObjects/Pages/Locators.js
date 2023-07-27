///<reference types="cypress-xpath"/>
import 'cypress-iframe';

/*Class & Function*/
export class Locators {

  /*Locator*/
  username = "#username";
  continue = "//span[contains(text(),'Continue')]";
  password = "#password";
  login = "#login-submit";
  apps = "//span[contains(text(),'Apps')]";
  more = '[data-testid="overflow-menu-trigger"] > .css-178ag6o'
  support_time_contract_management = "//span[contains(text(),'Support Time Contract Management')]";
  create_contract = "//span[normalize-space()='Create Contract']";
  iframe = '.css-1eyf319';
  name = '//input[@placeholder="Service Contract"]';
  description = '//textarea[@placeholder="Enter description"]';
  contact_type_btn = "(//button[@class='css-1leee2m'])[1]";
  fixed = "(//span[normalize-space()='Fixed'])[2]";
  start_date = "(//div[@class=' css-1b6odlt'])[1]";
  end_date = "(//div[@class=' css-1b6odlt'])[2]";
  contracted_hour = "(//input[@class='css-mfjdp3'])[3]";
  advanched_checkbox = "(//label[@class='css-1fbdzj8'])[1]";
  show_in_portal_checkbox = "(//label[@class='css-1fbdzj8'])[1]";
  create = "(//button[@class='css-217pnw'])[2]";
  action = '//button[@class="css-beza88"]';
  profile_icon = ".css-1gr7gcv";
  logout = "//a[@href='/logout']";
  logout_final = ".css-178ag6o";
  recurring = "(//span[normalize-space()='Recurring'])[2]";
  fixed = "(//button/span[normalize-space()='Fixed'])[2]";
  action_icon = '(//button[@class="css-beza88"])[1]';
  delete = "(//div[normalize-space()='Delete'])[1]";

  verifyContract(contract) {
    const recurring = "(//span[normalize-space()='Recurring'])[2]";
    const fixed = "(//button/span[normalize-space()='Fixed'])[2]";
    const contact_type_btn = "(//button[@class='css-1leee2m'])[1]";

    switch (contract) {
      case "Fixed":
        cy.iframe().xpath(contact_type_btn, { timeout: 10000 }).click({ force: true });
        cy.iframe().xpath(fixed, { timeout: 10000 }).click({ force: true });
        break;
      case "Recurring":
        cy.iframe().xpath(contact_type_btn, { timeout: 10000 }).click({ force: true });
        cy.iframe().xpath(recurring, { timeout: 10000 }).click({ force: true });
        break;
      default:
        cy.log("Never Found !!")
    }
  }
}