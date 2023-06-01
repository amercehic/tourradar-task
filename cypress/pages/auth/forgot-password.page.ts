import { Actions } from "../../support/wrappers/actions";
import { Assertions } from "../../support/wrappers/assertions";

export default class ForgotPasswordPage {
  // ### PAGE ELEMENTS ###

  private static emailInput() {
    return cy.get(`[id=g_email]`);
  }

  private static submitButton() {
    return cy.get(`[id=g_send]`);
  }

  private static confirmationMessage() {
    return cy.get(`form.clearfix h2`);
  }

  private static newPasswordInput() {
    return cy.get(`[id=g_password]`);
  }

  // ### PAGE ACTIONS ###
  public static clickSubmitButton(): void {
    Actions.click(this.submitButton());
  }

  public static enterNewPassword(newPassword: string): void {
    Actions.typeInput(this.newPasswordInput(), newPassword);
  }

  public static enterEmail(forgotPasswordEmail: string): void {
    Actions.typeInput(this.emailInput(), forgotPasswordEmail);
  }

  public static getResetPasswordLink(links: any): string {
    const foundLink = links.find((link: any) => {
      return (
        link.text &&
        typeof link.text === "string" &&
        link.text.includes("Reset Password")
      );
    });

    return foundLink.href;
  }

  // ### PAGE ASSERTIONS ###
  public static verifyConfirmationMessage(expectedMessage: string): void {
    Assertions.elementShouldContainText(
      this.confirmationMessage(),
      expectedMessage
    );
  }
}
