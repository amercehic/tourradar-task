import LoginPage from "../../pages/auth/login.page";
import { BasePage } from "../../pages/base.page";
import { HeaderPage } from "../../pages/common/header.page";

describe("auth - login", () => {
  beforeEach(() => {
    BasePage.open();
  });

  after(() => {});

  it("Login with valid credentials as Traveller", () => {
    cy.fixture("auth").then((authData) => {
      HeaderPage.clickOnLoginButton();

      LoginPage.enterEmail(authData.email);
      LoginPage.enterPassword(authData.password);
      LoginPage.clickOnLoginButton();

      HeaderPage.verifyUserInitials(authData.initials);

      HeaderPage.clickLogoutButton();
    });
  });
});
