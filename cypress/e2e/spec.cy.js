describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('displays input text fields for user name and password and a login button', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('button').contains('Login')
  })
})