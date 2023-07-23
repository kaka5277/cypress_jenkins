describe('google search', () => {
  it('google1', () => {
    cy.visit('https://google.com.au')
   cy.get('[name="q"]').type('jenkins cypress12{enter}')
   cy.url().should('contain','jenkins')
  })
})