import { Actions } from "../../support/wrappers/actions";

export default class SignUpPage {
  // ### PAGE ELEMENTS ###

  private static fullNameInput() {
    return cy.get(`[data-cy="sign-up--name"]`);
  }

  private static emailInput() {
    return cy.get(`[data-cy="sign-up--email"]`);
  }

  private static passwordInput() {
    return cy.get(`[data-cy="sign-up--password"]`);
  }

  private static repeatPasswordInput() {
    return cy.get(`[data-cy="sign-up--password-repetition"]`);
  }

  private static signUpSubmitButton() {
    return cy.get(`[data-cy="sign-up--submit"]`);
  }

  // ### PAGE ACTIONS ###
  public static enterFullName(fullName: string): void {
    Actions.typeInput(this.fullNameInput(), fullName);
  }

  public static enterEmail(email: string): void {
    Actions.typeInput(this.emailInput(), email);
  }

  public static enterPassword(password: string): void {
    Actions.typeInput(this.passwordInput(), password);
  }

  public static enterRepeatPassword(repeatPassword: string): void {
    Actions.typeInput(this.repeatPasswordInput(), repeatPassword);
  }

  public static clickSignUpSubmitButton(): void {
    Actions.click(this.signUpSubmitButton());
  }
}
