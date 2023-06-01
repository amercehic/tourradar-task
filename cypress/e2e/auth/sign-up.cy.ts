import { AccountPage } from "../../pages/account.page";
import SignUpPage from "../../pages/auth/sign-up.page";
import { BasePage } from "../../pages/base.page";
import { HeaderPage } from "../../pages/common/header.page";
import { generateEmail } from "../../support/helpers/utils";

describe("auth - sign up", () => {
  beforeEach(() => {
    BasePage.open();
  });

  after(() => {});

  it("Valid registration with complete information as a Traveller", () => {
    HeaderPage.clickOnSignUpButton();

    cy.fixture("auth").then((authData) => {
      SignUpPage.enterFullName(authData.fullName);

      SignUpPage.enterEmail(generateEmail(10));
      SignUpPage.enterPassword(authData.password);
      SignUpPage.enterRepeatPassword(authData.password);

      SignUpPage.clickSignUpSubmitButton();

      AccountPage.verifyGreetingMessage(`Hello ${authData.fullName}`);

      HeaderPage.clickLogoutButton();
    });
  });
});
