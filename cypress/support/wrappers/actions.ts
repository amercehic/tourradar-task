export class Actions {
  /**
   * Click on element
   * @param {any} element DOM element selector
   * @return Cypress.Chainable object
   */
  public static click(element: any): Cypress.Chainable {
    return element.click();
  }

  /**
   * Type text into an input field
   * @param {any} element Input field selector
   * @param {string} text Text to type into the input field
   */
  public static typeInput(element: any, text: string): void {
    element.clear();
    element.type(text);
  }
}
