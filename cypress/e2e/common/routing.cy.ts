import { selectByTestId } from '../../helpers';

describe('Routing', () => {
  describe('The user is not authorized', () => {
    it('Go to the next page', () => {
      cy.visit('/');
      cy.get(selectByTestId('test-main-page')).should('exist');
    });
    it('Go to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('test-main-page')).should('exist');
    });
    it('Open not found page', () => {
      cy.visit('/fasfasfasf');
      cy.get(selectByTestId('test-not-found')).should('exist');
    });
  });

  describe('The user is authorized', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Go to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('test-profile-page')).should('exist');
    });

    it('Go to the Articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('test-articles-page')).should('exist');
    });
  });
});
