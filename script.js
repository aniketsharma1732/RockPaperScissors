let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,  
        losses: 0,
        ties: 0,
    }
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;

    document.querySelector('.rock').addEventListener('click', () => {
        function2('rock');
    });
    document.querySelector('.paper').addEventListener('click', () => {
        function2('paper');
    });
    document.querySelector('.scissors').addEventListener('click', () => {
        function2('scissors');
    });

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            function2('rock');
        } else if (event.key === 'p') {
            function2('paper');
        } else if (event.key === 's') {
            function2('scissors');
        }
    });

    function function2(playerMove) {
        const computerMove = function1();
        let result = '';

        if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'you lose';
            } else if (computerMove === 'paper') {
                result = 'you win';
            } else if (computerMove === 'scissors') {
                result = 'its a tie';
            }
        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'you win';
            } else if (computerMove === 'paper') {
                result = 'its a tie';
            } else if (computerMove === 'scissors') {
                result = 'you lose';
            }
        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'its a tie';
            } else if (computerMove === 'paper') {
                result = 'you lose';
            } else if (computerMove === 'scissors') {
                result = 'you win';
            }
        }

        if (result === 'you lose') {
            score.losses += 1;
        } else if (result === 'you win') {
            score.win += 1;
        } else if (result === 'its a tie') {
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You <div class="js-result-div"><img src="/photos/${playerMove}.webp" class="js-result-img"></div> Computer <div class="js-result-div"><img src="/photos/${computerMove}.webp" class="js-result-img"></div>`;
        document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function reset() {
        score.win = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
        document.querySelector('.js-result').innerHTML = '';
        document.querySelector('.js-moves').innerHTML = '';
    }

    function function1() {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber < 0.4 && randomNumber >= 0) {
            computerMove = 'rock';
        } else if (randomNumber < 0.7 && randomNumber >= 0.4) {
            computerMove = 'paper';
        } else if (randomNumber >= 0.7) {
            computerMove = 'scissors';
        }

        return computerMove;
    }