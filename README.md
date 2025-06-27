# Tic-Tac-Toe Automated Tests
Uses Cypress framework and Javascript to run some basic data-driven tests as a player of React-based Tic-Tac-Toe game at: [Tic-Tac-Toe](https://eric-g.github.io/my-app/)

Test data describes moves to make for each test resulting in a different outcome of the game.

Assertions are made during game play and upon game conclusion.
- Board is initialized correctly.
- Player turn indications are alternating in UI.
- Game winner is declared correctly or 'Tie Game!' is displayed.
- Game can be reset using reset button.

Test Data is JSON: [/cypress/e2e/fixtures/tictac.json](https://github.com/eric-g/cypress-test/blob/main/cypress/fixtures/tictac.json)

Note: These tests are not intended to be a complete test of game play. This is just an example of using test data in a fixture to drive automated game play and make some assertions along the way. Consider as a smoke test.

## Instructions
1. Clone repo using:

- `git clone git@github.com:eric-g/cypress-test.git` (SSH)
- `git clone https://github.com/eric-g/cypress-test.git` (HTTPS)
2. Navigate into project: `cd cypress-test`
2. Install dependencies: `npm install`
3. Run it! `npx cypress run --headed` (run headed optionally to observe in browser)

### Related
TicTacToe repo: https://github.com/eric-g/my-app