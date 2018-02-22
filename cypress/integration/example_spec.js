describe('as a not logged in - visitor I can place an order', function() {
    beforeEach(function(){
      cy.setCookie('_svs', 'x');
      cy.setCookie('_svtri', 'y');
      cy.setCookie('_syn', 'z');
    })
    it('check if logged in user can place an order', function() {
        cy.visit('http://localhost:8000/index.html');
        cy.contains('link').click();
    });
});
