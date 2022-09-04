const startBtn = document.getElementById("js-quiz-start");

  // start state of game
  let game = null;


  /**
   * Generic event listeners
   */
  window.addEventListener("load", () => {
      game = new Game();
  });

  document.querySelector("#js-view-leaderboard").addEventListener("click", () => {
    if (!game.timer) {
        document.querySelector("#js-section-intro").classList.remove("active");
        HighScores.viewHighScores();
    }
});

document.querySelector(".highscore-actions__back").addEventListener("click", () => {
    document.querySelector("#js-section-leaderboard").classList.remove("active");
    document.querySelector("#js-section-intro").classList.add("active");
});


document.querySelector(".highscore-actions__clear").addEventListener("click", () => {
    if (confirm("Do you really want to remove all your highscores?")) {
        HighScores.clear();
        HighScores.viewHighScores();
    }
    
});

startBtn.addEventListener("click", () => {
    game.startQuiz(70, true);
});


class Timer {
    constructor (remainingTime = 60, game) {
        if (game) {
            this.remainingTime = remainingTime;
            this.timer = null;
        }   
    }

    start () {
        document.querySelector(".remaining-time--visible").classList.add('js-is-counting');

        if (this.timer === null) {
            clearTimeout(this.timer);
        }

        this.tick();
    }

    modifyTime (change) {
        this.remainingTime += change;
    }

    tick () {
        this.remainingTime -= 1;


        if (this.remainingTime <= 0) {
            // time up!
            game.timerElement.innerHTML = 0;

            clearTimeout(this.timer);
            game.endQuiz();
        } else {
            game.timerElement.innerHTML = this.remainingTime;

            this.timer = setTimeout(() => {
                this.tick();
            }, 1000);
        }        
    }

    end () {
        clearTimeout(this.timer);
        this.timer = null;
        document.querySelector(".remaining-time--visible").classList.remove('js-is-counting');
    }
}
