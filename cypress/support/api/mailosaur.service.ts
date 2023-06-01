const mailosaurUrl: string = Cypress.env("mailosaurUrl");
const mailosaurApiKey: string = Cypress.env("mailosaurApiKey");
const mailosaurServer: string = Cypress.env("mailosaurServer");

/**
 * @param {string} itemsPerPage items per page
 * @param {string} dir received or sent
 * @param {string} sentTo id attribute of module configuration from /configuration API response
 * @param {string} subject authToken value of signed in patient
 */
export const getEmails = (
  itemsPerPage: string,
  dir: string,
  sentTo: string,
  subject: string
): any =>
  cy.request({
    method: "POST",
    url:
      `${mailosaurUrl}/api/messages/search` +
      `?server=${mailosaurServer}&itemsPerPage=${itemsPerPage}&dir=${dir}`,
    headers: {
      Authorization: `Basic ${mailosaurApiKey}`,
    },
    body: {
      sentTo: sentTo,
      subject: subject,
    },
  });

export const getEmailById = (emailId: string): any =>
  cy.request({
    method: "GET",
    url: `${mailosaurUrl}/api/messages/${emailId}`,
    headers: {
      Authorization: `Basic ${mailosaurApiKey}`,
    },
  });
