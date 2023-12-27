if (who === 'player') {
  while (true) {
    prompt('Enter 1 = hit, 2 = stay');
    let input = READLINE.question();

    if (input === '1') hit(who, deck, handTracker);

    displayHands(handTracker);

  }
}