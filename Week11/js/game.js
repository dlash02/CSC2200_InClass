const gameBoard = {
    size: 4,
    board: [],
    playerPosition: { row: 0, col: 0 }, // Starting position
    obstacles: [],
    collectibles: [],
    score: 0,
    moves: 0, // Track the number of moves

    icons: {
        player: '<i class="fas fa-user player-icon"></i>',
        obstacle: '<i class="fas fa-times obstacle-icon"></i>',
        collectible: '<i class="fas fa-star collectible-icon"></i>'
    },

    // Initialize the board
    init() {
        this.createEmptyBoard();
        this.setupBoard();
        this.render();
    },

    createEmptyBoard() {
        for (let i = 0; i < this.size; i++) {
            // Step 3: For each row, create a new array of 'this.size' columns filled with empty strings
            const row = Array(this.size).fill('');

            // Step 4: Add the row to the board array
            this.board.push(row);
        }
    },

    setupBoard() {
        // Place obstacles and collectibles randomly
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (Math.random() < 0.2) { // 20% chance of being an obstacle
                    this.board[i][j] = 'O'; // O for obstacle
                    this.obstacles.push({ row: i, col: j });
                } else if (Math.random() < 0.2) { // 20% chance of being collectible
                    this.board[i][j] = 'C'; // C for collectible
                    this.collectibles.push({ row: i, col: j });
                }
            }
        }
        // Place player at starting position
        this.board[this.playerPosition.row][this.playerPosition.col] = 'P'; // P for player
    },

    move(direction) {
        let newRow = this.playerPosition.row;
        let newCol = this.playerPosition.col;

        switch (direction) {
            case 'up':
                newRow = Math.max(0, newRow - 1);
                break;
            case 'down':
                newRow = Math.min(this.size - 1, newRow + 1);
                break;
            case 'left':
                newCol = Math.max(0, newCol - 1);
                break;
            case 'right':
                newCol = Math.min(this.size - 1, newCol + 1);
                break;
        }

        // Check for obstacles
        if (this.board[newRow][newCol] !== 'O') {
            // Update player's position
            this.board[this.playerPosition.row][this.playerPosition.col] = ''; // Clear old position
            this.playerPosition = { row: newRow, col: newCol }; // Update to new position
            this.moves++; // Increment the move count

            // Check for collectibles
            if (this.board[newRow][newCol] === 'C') {
                this.score++;
                this.collectibles = this.collectibles.filter
                        (collectible => !(collectible.row === newRow && collectible.col === newCol));
                this.board[newRow][newCol] = ''; // Clear collectible after collecting
                this.showNotification("Collected an item!");
            }

            this.board[this.playerPosition.row][this.playerPosition.col] = 'P'; // Update new position
            this.render();
        }
    },

    render() {
        const gameBoardElement = document.getElementById('game-board');
        gameBoardElement.innerHTML = ''; // Clear the board before rendering

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const tile = document.createElement('div');
                tile.className = 'tile';

                // Use icons from the object
                if (this.board[row][col] === 'P') {
                    tile.innerHTML = this.icons.player; // Player icon
                } else if (this.board[row][col] === 'O') {
                    tile.innerHTML = this.icons.obstacle; // Obstacle icon
                } else if (this.board[row][col] === 'C') {
                    tile.innerHTML = this.icons.collectible; // Collectible icon
                }

                gameBoardElement.appendChild(tile);
            }
        }

        // Update the move count display
        document.getElementById('move-count').textContent = `Moves: ${this.moves}`;
        console.log(`Score: ${this.score}`);
    },

    showNotification(message) {
        const notificationElement = document.getElementById('notification');
        notificationElement.textContent = message;

        // Clear notification after a short time
        setTimeout(() => {
            notificationElement.textContent = '';
        }, 2000);
    }
};

// Wait for the DOM to fully load before initializing the game
document.addEventListener('DOMContentLoaded', () => {
    gameBoard.init(); // Initialize the game

    // Add event listener for player movement
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                gameBoard.move('up');
                break;
            case 'ArrowDown':
                gameBoard.move('down');
                break;
            case 'ArrowLeft':
                gameBoard.move('left');
                break;
            case 'ArrowRight':
                gameBoard.move('right');
                break;
        }
    });
});

