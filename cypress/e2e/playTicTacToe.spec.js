
import playerMoves from '../fixtures/tictac.json'

describe('When we play the game', () => {
  beforeEach(() => {
    cy.visit('https://eric-g.github.io/my-app/')
    //cy.visit('http://localhost:3000')
  })

  it('inits the board as empty', () => {
    var player = '';
    cy.get('.status').invoke('text').should('contain', 'X');
    cy.get('.square')
      .each((button) => {
        cy.get(button)
        cy.get(button).should('have.text', player);

      })
  })

  it('can click squares and show player turn', () => {
    let player = 'X';
    cy.get('.square')
      .each((button, idx, list) => {
        cy.get(button).click();
        cy.wait(150);
        cy.get(button).should('have.text', player);
        player = player == 'X' ? 'O' : 'X';
        cy.get('.status').should('have.text', 'Next playa: ' + player);
        if (idx > 4) { return false; } // stop short of winning
      })
  })

  it.only('can win or tie, declare winner and reset the board', () => {

    const numGames = playerMoves.length;
    let player = 'X';
    for (let game = 0; game < numGames; game++) {
      const winner = playerMoves[game].winner;
      const moves = playerMoves[game].moves;
      for (let i = 0; i < playerMoves[game].moves.length; i++) {
        cy.get('.square')
          .each(($el, index, $list) => {
            if (index == moves[i]) {
              $el.click();
              cy.wait(150);
            }
          })
      }
      cy.get('.status').invoke('text').should('contain', winner);
      if (game < numGames -1) { cy.wait(1000); cy.get('#reset').click(); }
    }
  })
})