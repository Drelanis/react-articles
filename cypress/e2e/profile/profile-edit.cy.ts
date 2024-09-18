let profileId = '';

describe('The user open profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Profile upload successful', () => {
    cy.getByTestId('profileCard-firstName').should('have.value', 'Denys');
  });
  it('Edit profile', () => {
    const newFirstName = 'newFirstName';
    const newLastName = 'newLastName';
    cy.updateProfile(newFirstName, newLastName);
    cy.getByTestId('profileCard-firstName').should('have.value', newFirstName);
    cy.getByTestId('profileCard-lastName').should('have.value', newLastName);
  });
});
