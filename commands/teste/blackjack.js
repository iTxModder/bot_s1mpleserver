 var cards = require('cards');

class B {
  constructor() {
    this.deck = new cards.PokerDeck();
    this.deck.shuffleAll();
    this.players = {};
    this.house = [];
    this.state = "esperando por apostas";
  }

  // object: string | undefined
  render(object) {
    if(!object) object = this;
    var result = "";
    if(object instanceof B) {
      // render table.
      result += "House: " + this.house.map((c) => {
        return c.unicodeString();
      }).join(" ") + ` = ${this.sum(this.house)}\n`;
      for(var player in this.players) {
        result += this.render(player) + "\n";
      }
    } else {
      if(!this.players[object]) return `${object} não está a jogar.`;
      result += this.players[object].name +": "+ this.players[object].hand.map((c) => {
        return c.unicodeString();
      }).join(" ") + ` = ${this.sum(this.players[object].hand)}`;
    }
    return result;
  }

  isdone() {
    if(this.state === 'esperando por apostas') return false;
    for(var key in this.players) {
      if(!this.players[key].done) return false;
    }

    while(this.sum(this.house) < 18) {
      this.house.push(this.deck.draw());
    }
    this.state = "complete";
    var houseSum = this.sum(this.house);
    var houseBlackjack = houseSum == 21 && this.house.length == 2;
    for(var player in this.players) {
        var p = this.players[player];
        if(p.bust) { continue; }
        var sum = this.sum(p.hand);
        var blackjack = sum == 21 && p.hand.length == 2;
        if(houseBlackjack) {
            if(blackjack) {
                p.awarded = p.bet; // push
            } else { continue; } // you lose.
        } else {
            if(houseSum < 22) {
                if(sum > houseSum) {
                    if(blackjack) {
                        p.awarded = p.bet * 2.5;
                    } else {
                        p.awarded = p.bet * 2;
                    }
                } else if (sum == houseSum) {
                    p.awarded = p.bet; // push
                }
            } else {
                p.awarded = p.bet * 2;
            }
        }
    }
    return true;
  }

  // player: string
  stand(player) {
    if(this.state === 'esperando por apostas') return 'nós ainda não estamos a jogar';
    if(!this.players[player]) return `${player} is not playing.`;
    if(this.players[player].bust) return `${player} you're bust.`;
    this.players[player].done = true;
    return player + " stands";
  }

  deal() {
  	if(this.state !== 'esperando por apostas') return 'Jogo já está a decorrer.';
    if(Object.keys(this.players).length == 0) return 'necessário pelo menos uma pessoa.';
    this.state = 'esperando em '
        + Object.keys(this.players).map((p) => { return this.players[p].name }).join(', ');
    this.house.push(this.deck.draw());
    for(var player in this.players) {
        this.players[player].hand = this.deck.draw(2);
    }
  	return this.state;
  }

  // player: string
  giveCard(player) {
    var p = this.players[player];
    if(!p) return `${player} não está a jogar.`;
    if(p.done || p.bust) return `${player} terminou.`;

    p.hand.push(this.deck.draw());
    var sum = this.sum(p.hand);
    if(sum > 21) p.bust = p.done = true;
    return this.render(player);
  }

  // player: string, amount: number
  takeBet(player, amount) {
    if(this.state !== 'esperando por apostas') return 'Jogo já está a decorrer.';
    this.players[player] = new P(player, amount);
  }

  // hand array
  sum(hand) {
    var hasAce = false;
    var result = hand.reduce((prev, cur) => {
      switch(cur.value) {
        case 'A':
          hasAce = true;
          return prev + 1;
        case 'K':
        case 'Q':
        case 'J':
          return prev + 10;
        default:
          return prev + parseInt(cur.value);
      }
    }, 0);
    if(result < 12 && hasAce) {
        result += 10;
    }
    return result;
  }
}

class P {
  constructor(name, bet) {
    this.name = name;
    this.bet = bet;
    this.hand = [];
    this.done = false;
    this.bust = false;
    this.awarded = 0;
  }
}
module.exports.run = B //async (bot, message, args) => {}

exports.command = {
    name: 'blackjack',
    permission: "Nenhuma",
    description: 'Joga blackjack!',
    category: "teste",
    usage: ['blackjack <quantia>'],
    enabled: false
}