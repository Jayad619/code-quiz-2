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