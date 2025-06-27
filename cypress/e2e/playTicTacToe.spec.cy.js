
import playerMoves from '../fixtures/tictac.json'

describe('When we play the game', () => {
  beforeEach(() => {
    console.log('Starting a new game');
    cy.visit('https://eric-g.github.io/my-app/')
  })

  it('inits the board as empty', () => {
    // 'X' always starts the game
    cy.get('.status').invoke('text').should('contain', 'X');
    cy.get('.square')
      .each(($el) => {
        cy.wrap($el).should('have.text', ''); // should be empty
      })
  })

  it('can click squares and show alternating player turn', () => {
    let player = 'X';
    cy.get('.square')
      .each((button, idx, list) => {
        cy.get(button).click();
        cy.wait(150); // only to slow down the test for visibility
        cy.get(button).should('have.text', player);
        // Check alternating player turn as 'Next playa'
        player = player == 'X' ? 'O' : 'X';
        cy.get('.status').should('have.text', 'Next playa: ' + player);
        if (idx > 4) { return false; } // stop short of 'X' winning diagonally
      })
  })

  it('can determine win or tie, declare winner and reset the board', () => {
    const numGames = playerMoves.length;
    let player = 'X';
    cy.get('.status').should('have.text', 'Next playa: ' + player);
    for (let game = 0; game < numGames; game++) {
      const winner = playerMoves[game].winner;
      const moves = playerMoves[game].moves;
      for (let i = 0; i < moves.length; i++) {
        cy.get('.square')
          .eq(moves[i]).click();
          cy.wait(150);
      }
      // Check the winner of the game
      cy.get('.status').invoke('text').should('contain', winner);
      // Reset the board for next game
      if (game < numGames - 1) { cy.wait(1000); cy.get('#reset').click(); }
    }
  })
})