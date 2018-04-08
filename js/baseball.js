function main() {
    function Player(name, position) {
        this.name = name;
        this.position = position;
    }

    function Team(players) {
        this.active = players;
        this.score = 0;
    }

    function Game(home, away) {
        this.home = home;
        this.away = away;
        this.innings = 0;
        this.outs = 0;
        this.strikes = 0;
        this.balls = 0;
        this.gameOver = function () {
            return this.innings == 10;
        }

        this.playInning = function () {

            while (this.outs < 3) {
                if (this.pitch(.50)) {
                    console.log("Out!");
                    this.outs++;
                } else {
                    console.log("Score!");
                    this.home.score++;
                }
            }
            console.log("Bottom of the " + this.innings);
            while (this.outs < 6) {
                if (this.pitch(.50)) {
                    this.outs++;
                    console.log("Out!");
                } else {
                    console.log("Score!");
                    this.away.score++;
                }
            }
            this.innings++;
            this.reset();
        }
        this.pitch = function (hitchance) {
            return (Math.random() > hitchance);
        }
        this.reset = function () {
            this.outs = 0;
            this.strikes = 0;
            this.balls = 0;
        }

        this.play = function () {
            while (!this.gameOver()) {
                console.log('inning number: ' + this.innings);
                this.playInning();
            }
        }

    }

    var players = [];
    var home, away, game;

    for (var i = 0; i < 10; i++) {
        players.push(new Player('Carlos' + i, 'C'));
    }
    home = new Team(players);

    players = [];
    for (var i = 0; i < 10; i++) {
        players.push(new Player('Eduardo' + i, 'P'));
    }

    away = new Team(players);

    for (i = 0; i < home.active.length; i++) {
        console.log(home.active[i].name, home.active[i].position + " vs. " + away.active[i].name, away.active[i].position);
    }
    game = new Game(home, away);
    game.play();

    console.log("Home team had " + game.home.score + " to the away team's " + game.away.score + "!!!");



}

main();
