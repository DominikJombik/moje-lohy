  it('.sholud()', () => {
        cy.viewport(1440, 1200)
        cy.visit('https://atp-lms.metis.academy/')
        cy.get('li:nth-of-type(3) > div > a:nth-of-type(1)').click({force: true})
        cy.wait(2000)
        cy.get('input').eq(0).type('Anthony')
        cy.contains('Search').click()
        
        cy.get('tbody tr').should('not.be.visible')

        cy.contains('Add member').click({force: true})

        cy.get('input').eq(0).type('Anthony')
        cy.get('input').eq(1).type('Bayer')
        cy.get('input').eq(2).type('XX112233')
        cy.get('input').eq(3).type('1989-11-22')

        cy.get('form#form > .addButton').click({force: true})
        cy.on('window:alert', () => {})

        cy.go('back')
        cy.get('[placeholder="First name"]').clear().type('Anthony')
        cy.contains('Search').click()
        cy.get('tbody tr').not('[style="display: none;"]').should('have.length', 1).find('td')
            .should('contain', 'Anthony')
            .and('contain', 'Bayer')
            .and('contain', 'XX112233')
            .and('contain', '1989-11-22')
        cy.get('tbody tr').not('[style="display: none;"]').find('.delete').click({force: true})
        
        cy.on('window:alert', () => {})

    })