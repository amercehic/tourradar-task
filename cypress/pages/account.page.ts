import { Assertions } from "../support/wrappers/assertions";

export class AccountPage {
  // ### PAGE ELEMENTS ###

  private static greetingLabel() {
    return cy.get(`h1.ao-profile-top__profile-details-greeting`);
  }

  // ### PAGE ACTIONS ###

  // ### PAGE ASSERTIONS ###
  public static verifyGreetingMessage(expectedText: string): void {
    Assertions.elementShouldContainText(this.greetingLabel(), expectedText);
  }
}
