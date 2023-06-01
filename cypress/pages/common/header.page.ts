import { Actions } from "../../support/wrappers/actions";
import { Assertions } from "../../support/wrappers/assertions";

export class HeaderPage {
  // ### PAGE ELEMENTS ###

  private static headerNavigation() {
    return cy.get(`[data-cy="common-header--navigation"]`);
  }

  private static profileHeaderIcon() {
    return cy.get(`div.js-ao-header-navigation__profile-placeholder`);
  }

  private static profileHeaderInitials() {
    return cy.get(`a.ao-header-navigation__profile-initials`);
  }

  private static signUpButton() {
    return cy.get(`a.js-ao-header-navigation__dropdown-button-signup`);
  }

  private static loginButton() {
    return cy.get(`a.js-ao-header-navigation__dropdown-button-login`);
  }

  private static logoutButton() {
    return cy.get(
      `[data-cy="common-header--navigation"] a.ao-header-navigation__dropdown-link--logout`
    );
  }

  // ### PAGE ACTIONS ###
  public static hoverOnProfileHeaderIcon(): void {
    this.profileHeaderIcon().realHover({ position: "center" });
  }

  public static clickOnSignUpButton(): void {
    this.profileHeaderIcon()
      .realHover({ position: "center" })
      .then(() => {
        this.headerNavigation().within(() => {
          Actions.click(this.signUpButton());
        });
      });
  }

  public static clickOnLoginButton(): void {
    this.profileHeaderIcon()
      .realHover({ position: "center" })
      .then(() => {
        this.headerNavigation().within(() => {
          Actions.click(this.loginButton());
        });
      });
  }

  public static clickLogoutButton(): void {
    this.profileHeaderInitials()
      .realHover({ scrollBehavior: "center" })
      .then(() => {
        Actions.click(this.logoutButton());
      });
  }

  // ### PAGE ASSERTIONS ###
  public static verifyUserInitials(expectedInitials: string): void {
    Assertions.elementShouldContainText(
      this.profileHeaderInitials(),
      expectedInitials
    );
  }
}
