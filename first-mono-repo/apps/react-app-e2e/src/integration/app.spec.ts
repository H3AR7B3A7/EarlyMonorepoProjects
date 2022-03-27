import { getGreeting } from '../support/app.po'

describe('react-app', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to PageTitle!')
  })
})
