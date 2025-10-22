class TicTacToe {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.bindEvents();
        this.updateDisplay();
    }
    
    bindEvents() {
        const cells = document.querySelectorAll('.cell');
        const resetBtn = document.getElementById('reset-btn');
        
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });
        
        resetBtn.addEventListener('click', () => this.resetGame());
    }
    
    handleCellClick(event) {
        const cell = event.target;
        const index = parseInt(cell.getAttribute('data-index'));
        
        if (this.board[index] !== '' || !this.gameActive) {
            return;
        }
        
        this.makeMove(index);
    }
    
    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.updateCell(index);
        
        if (this.checkWin()) {
            this.handleWin();
        } else if (this.checkTie()) {
            this.handleTie();
        } else {
            this.switchPlayer();
        }
    }
    
    updateCell(index) {
        const cell = document.querySelector(`[data-index="${index}"]`);
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());
    }
    
    checkWin() {
        return this.winningConditions.some(condition => {
            const [a, b, c] = condition;
            return this.board[a] && 
                   this.board[a] === this.board[b] && 
                   this.board[a] === this.board[c];
        });
    }
    
    checkTie() {
        return this.board.every(cell => cell !== '');
    }
    
    handleWin() {
        this.gameActive = false;
        this.scores[this.currentPlayer]++;
        this.updateScore();
        this.highlightWinningCells();
        this.updateGameStatus(`${this.currentPlayer} wins!`);
    }
    
    handleTie() {
        this.gameActive = false;
        this.updateGameStatus('It\'s a tie!');
    }
    
    highlightWinningCells() {
        const winningCondition = this.winningConditions.find(condition => {
            const [a, b, c] = condition;
            return this.board[a] && 
                   this.board[a] === this.board[b] && 
                   this.board[a] === this.board[c];
        });
        
        if (winningCondition) {
            winningCondition.forEach(index => {
                const cell = document.querySelector(`[data-index="${index}"]`);
                cell.classList.add('winning');
            });
        }
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateDisplay();
    }
    
    updateDisplay() {
        document.getElementById('current-player').textContent = this.currentPlayer;
    }
    
    updateScore() {
        document.getElementById('score-x').textContent = this.scores.X;
        document.getElementById('score-o').textContent = this.scores.O;
    }
    
    updateGameStatus(message) {
        const statusElement = document.getElementById('game-status');
        statusElement.textContent = message;
        
        if (message.includes('wins')) {
            statusElement.classList.add('win');
        } else if (message.includes('tie')) {
            statusElement.classList.add('tie');
        }
    }
    
    resetGame() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.gameActive = true;
        
        // Clear visual board
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning');
        });
        
        // Clear game status
        document.getElementById('game-status').textContent = '';
        document.getElementById('game-status').classList.remove('win', 'tie');
        
        this.updateDisplay();
    }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
