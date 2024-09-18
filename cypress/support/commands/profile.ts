export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('editProfile-editButton').click();
  cy.getByTestId('profileCard-firstName').clear().type(firstName);
  cy.getByTestId('profileCard-lastName').clear().type(lastName);
  cy.getByTestId('editProfile-saveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '1',
      firstName: 'Denys',
      lastName: 'Badaka',
      age: 100,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Dnipro',
      userName: 'admin',
      avatar:
        'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
