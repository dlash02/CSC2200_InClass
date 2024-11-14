let deck = {
    cards : [
        { 'img' : '2C.png', 'value': 2, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '2D.png', 'value': 2, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '2H.png', 'value': 2, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '2S.png', 'value': 2, 'suit' : 'spades', 'dealt': false},

        { 'img' : '3C.png', 'value': 3, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '3D.png', 'value': 3, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '3H.png', 'value': 3, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '3S.png', 'value': 3, 'suit' : 'spades', 'dealt': false},

        { 'img' : '4C.png', 'value': 4, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '4D.png', 'value': 4, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '4H.png', 'value': 4, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '4S.png', 'value': 4, 'suit' : 'spades', 'dealt': false},
        //
        { 'img' : '5C.png', 'value': 5, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '5D.png', 'value': 5, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '5H.png', 'value': 5, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '5S.png', 'value': 5, 'suit' : 'spades', 'dealt': false},

        { 'img' : '6C.png', 'value': 6, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '6D.png', 'value': 6, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '6H.png', 'value': 6, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '6S.png', 'value': 6, 'suit' : 'spades', 'dealt': false},

        { 'img' : '7C.png', 'value': 7, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '7D.png', 'value': 7, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '7H.png', 'value': 7, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '7S.png', 'value': 7, 'suit' : 'spades', 'dealt': false},

        { 'img' : '8C.png', 'value': 8, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '8D.png', 'value': 8, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '8H.png', 'value': 8, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '8S.png', 'value': 8, 'suit' : 'spades', 'dealt': false},
        //
        { 'img' : '9C.png', 'value': 9, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '9D.png', 'value': 9, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '9H.png', 'value': 9, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '9S.png', 'value': 9, 'suit' : 'spades', 'dealt': false},

        { 'img' : '10C.png', 'value': 10, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '10D.png', 'value': 10, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '10H.png', 'value': 10, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '10S.png', 'value': 10, 'suit' : 'spades', 'dealt': false},
        //
        { 'img' : 'JC.png', 'value': 10, 'suit' : 'clubs', 'dealt': false},
        { 'img' : 'JD.png', 'value': 10, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : 'JH.png', 'value': 10, 'suit' : 'hearts', 'dealt': false},
        { 'img' : 'JS.png', 'value': 10, 'suit' : 'spades', 'dealt': false},
        //
        // { 'img' : 'QC.png', 'value': 10, 'suit' : 'clubs', 'dealt': false},
        // { 'img' : 'QD.png', 'value': 10, 'suit' : 'diamonds', 'dealt': false},
        // { 'img' : 'QH.png', 'value': 10, 'suit' : 'hearts', 'dealt': false},
        // { 'img' : 'QS.png', 'value': 10, 'suit' : 'spades', 'dealt': false},

        // { 'img' : 'KC.png', 'value': 10, 'suit' : 'clubs', 'dealt': false},
        // { 'img' : 'KD.png', 'value': 10, 'suit' : 'diamonds', 'dealt': false},
        // { 'img' : 'KH.png', 'value': 10, 'suit' : 'hearts', 'dealt': false},
        // { 'img' : 'KS.png', 'value': 10, 'suit' : 'spades', 'dealt': false},

        { 'img' : 'AC.png', 'value': 11, 'suit' : 'clubs', 'dealt': false},
        { 'img' : 'AD.png', 'value': 11, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : 'AH.png', 'value': 11, 'suit' : 'hearts', 'dealt': false},
        { 'img' : 'AS.png', 'value': 11, 'suit' : 'spades', 'dealt': false}
    ],
    dealtCt : 0,
    getCard : function(){

        let gotGoodCard = false;
        while ( !gotGoodCard ){
            let rNum = Math.floor( Math.random() * this.cards.length );
            let card = deck.cards[rNum];
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCt += 1;
                return deck.cards[rNum];
            } else if ( this.dealtCt == deck.cards.length ){
                //ToDo: Fix this to look into existing hands
                let resp = prompt("Out of cards ... shall I reshuffle?");
                return null;
            }
        }
        return card;
    }
}
let User = {
    bet : 0,
    hand : [], // array of cards
    balance : 1000,
    attempts : 0,
    totalWins : 0,
    totalLoss : 0,
    numHits : 0,
    sumHand: 0,
    numGames: 0,
    setBalance : function ( payOut, winType ) {
        if ( payOut == 0 ){
            // Lost
            this.balance -= this.bet;
            this.totalLoss += 1;
        } else {
            //Winner
            this.balance += payOut*this.bet;
            this.totalWins += 1;
        }
        this.attempts += 1;
    }
}
let Dealer = {
    hand : [], // array of cards
    nDealerTurns : 0,
    numHits: 0,
    sumHand: 0,
}
let Game = {
    PayOuts : new Map ( [
      ['Pair', 1.25],
      ['3OfAKind', 1.5]
    ]),
    nCards : 2,  // cards in a hanud
    buildAHand : function() {
        let h = [];
        for ( let i=0; i<this.nCards; i++){
            let c = deck.getCard();
            // console.log( c );
            h.push( c );
        }
        return h;
    },
    gotBust : function( sum ) {
        if ( sum  > 21 ) return true;
        return false;
    },
    gotBlackJack: function (hand, from = "User") {
        let sum = 0;
        let aces = 0;
        let jacks = 0;

        if (hand.length == 2) {
            for (let i = 0; i < hand.length; i++) {
                let cardImg = hand[i].img;
                let c = cardImg.substring(0, 1);
                if (c == "J") jacks++;
                if (c == "A") aces++;
            }
            if (aces == 1 && jacks == 1) {
                return true;
            }
        }
        return false;
    },
    sumHand : function( hand, from = "User" ) {
        let sum = 0;
        let aces = 0;
        for ( let i=0; i<hand.length; i++ ){
            let v = hand[i].value;
            sum += v;
            if ( v == 11) {
                aces += 1;
            }
        }
        alert( `FL1: From Usersum:${sum} aces:${aces} from:${from}`);
        if ( from == 'User' && sum > 21 ){
            alert( `FL2: From User and > 21 sum:${sum} aces:${aces} from:${from}`);
            for ( let i=0; i<aces; i++ ){
                sum -= 10;
                alert( "Ace Hand! Reduce")
                if ( sum <= 21) break;
            }
        }
        alert( `FL3: returning sum:${sum} aces:${aces} from:${from}`);

        return sum;
    }
}
let UI = {
    getBet : function ( betId, betDisId ){
        //ToDo: Implement a MAX_BET
        let betRes = {
            notGotError: true,
            bet: 0
        }
        let betObj = document.getElementById( betId );
        let bet = betObj.value;
        let msg = ""
        betRes.notGotError = true;
        if ( bet <= 0 ||  isNaN( bet ) || bet == undefined || bet == null ) {
            msg = `<span style='color:red'> Illegal Bet:${bet} </span> `;
            betRes.notGotError = false;
        } else {
            msg = `<span style='color:blue'>  Bet:${bet} </span> `;
            betRes.bet = bet;
        }
        document.getElementById(betDisId).innerHTML = msg;
        return betRes;
    },
    displayHand( hand, id, title, direction ){
        let resObj = document.getElementById( id );
        let oStr = `<h2> ${title} </h2>`;
        for ( let i=0; i<hand.length; i++ ){
            if ( i == 0 && direction == "Down"){
                oStr += `<img src=imgs/purple_back.png width='80px' alt="Card" style="margin-left: 5px">`
            } else {
                let c = hand[i];
                oStr += `<img src=imgs/${c.img} width='80px' alt="Card" style="margin-left: 5px">`
            }
        }
        resObj.innerHTML = oStr;
    },
    displayId( id, dispType = "block" ) {
        let resObj = document.getElementById( id );
        resObj.style.display = dispType;
    },
    updateHandResult: function( User, payout, winType){
        let msg = ""
        if ( payout <= 0 ){
            msg += `<span style='color:red'> Loser!`
        } else {
            msg += `<span style='color:blue'> Winner!`
        }
        msg += `Bet:${User.bet} Winnings:${User.balance} WinType:${winType} </span>`;
        document.getElementById("Results").innerHTML = msg;
    },
    updateResultStatus : function ( msg ){
        msg += "<br />"
        msg += "<table>"
        msg += `<tr><td> Player </td><td>Hand Pts</td></td><td> Num Hits</td></tr>`;
        msg += `<tr><td> User </td><td>${User.sumHand}</td><td> ${User.numHits}</td></tr>`;
        msg += `<tr><td> Dealer </td><td>${Dealer.sumHand}</td><td> ${Dealer.numHits}</td></tr>`;
        msg += `</table>`;
        document.getElementById("Results").innerHTML = msg;
    },
    updatePlayerStatus : function ( msg ){
        msg += "<br />"
        msg += "<br />"
        msg += "<table>"
        msg += `<tr><td> Balance </td><td>Bet</td><td>Games </td><td>Wins</td><td>Loss</td></tr>`;
        msg += `<tr><td>${User.balance}</td><td> ${User.bet}</td><td> ${User.numGames}</td><td> ${User.totalWins}</td><td> ${User.totalLoss}</td></tr>`;
        // msg += `<tr><td> Dealer </td><td>${Dealer.sumHand}</td><td> ${Dealer.numHits}</td></tr>`;
        msg += `</table>`;
        document.getElementById("UserResults").innerHTML = msg;
    },
    busted : function( id ){
        let icon = `<br /> ${this.burst.icon}`;
        icon += `${this.bust.img} />`;
        icon += `${this.burst.icon}`;

        this.displayId( "Hit", "None" )
        this.displayId( "Stick", "None" )

        document.getElementById(id).innerHTML += icon ;
        UI.displayId("Bet", "Block");
    },
    winner: function( id, winType = 'regular' ){
        let icon = `<br /> ${this.win.img}`;
        if ( winType == "BlackJack"){
            icon += `<img src='imgs/blackJack.png' height='100px'/>`
        }
        document.getElementById(id).innerHTML += icon ;

        UI.displayId("Bet", "Block");
    },
    loser: function( id ){
        let icon = `<br /> ${this.loss.img}`;
        document.getElementById(id).innerHTML += icon ;
        UI.displayId("Bet", "Block");
    },
    win: {
        // icon: "<i class=\"fa-sharp fa-solid fa-trophy fa-beat-fade fa-lg\" style=\"color: gold\"></i>"
        icon: "<i class=\"fa-sharp fa-solid fa-trophy fa-beat-fade fa-lg\" style=\"color: gold\"></i>",
        img: "<img src='imgs/winner.png' alt='winner' style='height:50px' />"
    },
    bust : {
        img: "<img src='imgs/busted.png' alt='Busted' style='height:70px' />"
    },
    loss: {
        img: "<img src='imgs/looser.png' alt='Loser' style='height:100px' />"
    },
    burst : {
        icon: `<i class='fas fa-solid fa-burst fa-spin-pulse' style='font-size:44px; color:red'>`
    }
}
function doHit() {
    User.hand.push( deck.getCard());
    UI.displayHand( User.hand, "PlayerCards", "User Cards", "Up");
    User.sumHand = Game.sumHand( User.hand, "User" );
    User.numHits += 1;
    let msg = "";
    if ( Game.gotBust(User.sumHand)){
            UI.busted( "PlayerCards" );
            UI.winner( "DealerCards" );
            User.setBalance( 0, 'Loss');
             msg = "Player Takes a Hit ... and BUSTS!";
    } else {
        msg = `Player Takes Hit ${User.numHits}. Click  Hit or Stick`;
    }
    UI.updateResultStatus(  msg );
    UI.updatePlayerStatus( "Overall Status");
}
function doStick() {
    UI.displayId("Stick", "none");
    UI.displayId("Hit", "none");
    UI.displayId("DealerTurn", "block");
    let msg = `Player Sticks at ${User.sumHand}`;
    UI.updateResultStatus(  msg );
}
function startGame() {
    // alert( "Starting games")
    UI.updatePlayerStatus( "Overall Status");
    let r =  UI.getBet( "uBet","Results" );
    if ( r.notGotError ) {
        UI.displayId("Bet", "none");

        // let daCard = deck.getCard();
        User.bet = r.bet;
        User.hand = Game.buildAHand();
        Dealer.hand = Game.buildAHand();
        UI.displayHand( User.hand, "PlayerCards", "User Cards", "Up");
        if ( Game.gotBlackJack(User.hand)){
            alert( "BlackJack user");
            UI.winner("PlayerCards", "BlackJack");
            UI.loser("DealerCards");
            let msg = "BLACKJACK  Player Wins 2x bet"
            User.setBalance(2, 'Win');
            UI.updateResultStatus(  msg );
            UI.updatePlayerStatus( "BlackJack! Current Status");
            return;
        }
        UI.displayId(  'Hit', 'inline' );
        UI.displayId(  'Stick', 'inline');
        if ( Game.gotBlackJack(Dealer.hand)){
            alert( "BlackJack Dealer");
        }
        Dealer.sumHand = Dealer.hand[1].value;
        UI.displayHand( Dealer.hand, "DealerCards", "Dealer Cards", "Down");
        // let res = Game.checkHandForWinner( User.hand );
        User.sumHand = Game.sumHand( User.hand, "User" );
        let msg = `Bet:${User.bet} Click Stick or Hit to Continue`;
        UI.updateResultStatus(  msg );
        User.numGames += 1;
        UI.updatePlayerStatus( "Overall Status");

    }
}
function doDealerTurn() {
    // The dealer must count their ace as 11.
    // The dealer is the last to reveal their second card.
    // The dealer hits on 16 and below and stands on 17 and above.
    // The dealer can only flip their face-down card after
    //              all players have finished their turns.
    //   The dealer can check if their hole card is an ace.
    //              If they get a blackjack, they turn over their cards
    //              and take the losing bets from the table.
    if ( Dealer.nDealerTurns == 0){
        UI.displayHand( Dealer.hand, "DealerCards", "Dealer Cards", "Up");
        Dealer.nDealerTurns += 1;
        Dealer.sumHand = Game.sumHand( Dealer.hand, "Dealer" );
        UI.updateResultStatus(  `Dealer Plays showing ${Dealer.sumHand}` );
        if ( Game.gotBlackJack(Dealer.hand)){
            alert( "BlackJack Dealer");
            UI.winner("DealerCards", "BlackJack");
            UI.loser("PlayerCards");
            let msg = "BLACKJACK Dealer Loss"
            User.setBalance(1, 'Loss');
            UI.updateResultStatus(  msg );
            UI.updatePlayerStatus( "Dealer BlackJack! Current Status");
            UI.displayId("DealerTurn", "none");

            return;
        }
        if ( Dealer.sumHand >= 17 ){
            if (Dealer.sumHand >= User.sumHand) {
                UI.winner("DealerCards", "Regular");
                UI.loser("PlayerCards");
                msg += " Dealer Wins By Points!"
                User.setBalance(0, 'Loss');
            } else {
                UI.winner("PlayerCards","Regular");
                UI.loser("DealerCards");
                msg += " Player Wins on Points!"
                User.setBalance(1, 'Win');
            }
        }
    } else {
        Dealer.hand.push(deck.getCard());
        Dealer.numHits += 1;
        UI.displayHand(Dealer.hand, "DealerCards", "Dealer Cards", "Up");
        UI.updateResultStatus("Dealer Takes a Hit");
        if (Game.gotBust(Dealer.sumHand)) {
            User.setBalance(1, 'Win');
            UI.busted("DealerCards");
            UI.winner("PlayerCards", "Regular");
            UI.displayId("DealerTurn", "none");
            UI.updateResultStatus("Dealer Takes a Hit ... and BUSTS!");
            User.setBalance(1, 'Win');
            UI.updatePlayerStatus("Play Again!")
            return null;
        }
        Dealer.sumHand = Game.sumHand(Dealer.hand, "Dealer");
        if (Dealer.sumHand < 17) {
            document.getElementById("DealerTurn").innerHTML = "Dealer must hit ";
        } else {
            UI.displayId("DealerTurn", "None");
            let msg = `Bet:${User.bet} Game Over`;
            if (Game.gotBust(Dealer.sumHand)) {
                UI.busted("DealerCards");
                UI.winner("PlayerCards");
                msg += " Dealer Busts! Player  Wins!"
                User.setBalance(1, 'Win');
            } else if (Dealer.sumHand >= User.sumHand) {
                UI.winner("DealerCards");
                UI.loser("PlayerCards");
                msg += " Dealer Wins By Points!"
                User.setBalance(0, 'Loss');
            } else {
                UI.winner("PlayerCards");
                UI.loser("DealerCards");
                msg += " Player Wins on Points!"
                User.setBalance(1, 'Win');
            }
            UI.updateResultStatus(msg);
            UI.updatePlayerStatus("Play Again!")
        }
    }
}
function resetGame() {
    User.balance = 1000;
    document.getElementById("uBalance").innerHTML = `Enter Bet to Start`;
    UI.updatePlayerStatus( "Overall Status");
    let msg = "Enter Bet to Start"
    UI.updateResultStatus(msg);
}