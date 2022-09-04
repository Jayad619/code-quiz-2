const startBtn = document.getElementById("js-quiz-start");

  // start state of game
  let game = null;


  /**
   * Generic event listeners
   */
  window.addEventListener("load", () => {
      game = new Game();
  });