import { AccountPage } from "../../pages/account.page";
import ForgotPasswordPage from "../../pages/auth/forgot-password.page";
import LoginPage from "../../pages/auth/login.page";
import { BasePage } from "../../pages/base.page";
import { HeaderPage } from "../../pages/common/header.page";
import { getEmailById, getEmails } from "../../support/api/mailosaur.service";

describe("auth - forgot password", () => {
  beforeEach(() => {
    BasePage.open();
  });

  it("Reset password for existing Traveller account", () => {
    cy.fixture("auth").then((authData) => {
      HeaderPage.clickOnLoginButton();

      LoginPage.clickOnForgotPasswordLink();
      ForgotPasswordPage.enterEmail(authData.forgotPasswordEmail);
      ForgotPasswordPage.clickSubmitButton();

      ForgotPasswordPage.verifyConfirmationMessage("Please, check your email");

      // This wait is need because it takes time to receive an email form TourRadar server
      cy.wait(20000);

      getEmails(
        "1",
        "received",
        authData.forgotPasswordEmail,
        "Reset Password"
      ).then((response: any) => {
        const emailId = response.body.items[0].id;
        getEmailById(emailId).then((emailResponse: any) => {
          const links = emailResponse.body.html.links;
          const link = ForgotPasswordPage.getResetPasswordLink(links);
          cy.task(`log`, link);
          cy.visit(link);

          ForgotPasswordPage.enterNewPassword("Lorry123!");

          ForgotPasswordPage.clickSubmitButton();

          AccountPage.verifyGreetingMessage(`Hello ${authData.fullName}`);

          HeaderPage.clickLogoutButton();
        });
      });
    });
  });
});
