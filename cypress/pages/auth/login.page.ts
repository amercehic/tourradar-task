import { Actions } from "../../support/wrappers/actions";

export default class LoginPage {
  // ### PAGE ELEMENTS ###

  private static emailInput() {
    return cy.get(`[data-cy="login--email`);
  }

  private static passwordInput() {
    return cy.get(`[data-cy="login--password"]`);
  }

  private static loginSubmitButton() {
    return cy.get(`[data-cy="login--submit"]`);
  }

  private static forgotPasswordLink() {
    return cy.get(`div.b-lnk.forgot`);
  }

  // ### PAGE ACTIONS ###
  public static enterEmail(email: string): void {
    Actions.typeInput(this.emailInput(), email);
  }

  public static enterPassword(password: string): void {
    Actions.typeInput(this.passwordInput(), password);
  }

  public static clickOnLoginButton(): void {
    Actions.click(this.loginSubmitButton());
  }

  public static clickOnForgotPasswordLink(): void {
    Actions.click(this.forgotPasswordLink());
  }
}
