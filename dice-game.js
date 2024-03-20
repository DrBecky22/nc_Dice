function rollDice() {
    let goldCoins = 0;
    for (i=0; i > 10; i ++) {
      const roll = Math.floor(Math.random() *6) +1;
      if (roll === 1) {
        alert('Game over, no more rolls!');
        break;
      } else if (roll < 5) {
        alert('roll again');
        continue;
      } else if (roll === 5) {
        goldCoins += roll;
        alert ('Congratulations, you win 5 gold coins');
      } else {
        goldCoins += roll;
        alert('Congratulations, you win 6 gold coins')
      }
    }
    alert('You have ' + goldCoins);
  }