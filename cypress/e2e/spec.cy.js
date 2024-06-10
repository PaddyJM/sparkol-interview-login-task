describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('redirects to /login when the user is not logged in', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/login')
  });

  it('displays input text fields for user name and password and a login button', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').contains('Login to your account')
    cy.get('form').should('exist')
    cy.get('label').contains('Username')
    cy.get('input[name="username"]').should('exist')
    cy.get('label').contains('Password')
    cy.get('input[name="password"]').should('exist')
    cy.get('button').contains('Login')
  })

  it('Displays a welcome message when the user successfully logs in', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('jeff1967')
    cy.get('input[name="password"]').type('hotdog')
    cy.get('button').click()
    cy.get('h1').contains('Welcome!')
  })
})