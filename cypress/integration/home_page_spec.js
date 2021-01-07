describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
    it('has visible hero image', () => {
        cy.get('.hero').should('be.visible')
    })
    it('has page header', () => {
        cy.get('.page-header')
    })
    it('page header matches intro title', () => {
        cy.get('.page-header').should('have.text', 'Welcome To Grace Baptist Church of Blue Bell')
    })
  })