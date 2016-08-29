var game = new Phaser.Game(800, 550);


var screenYear; //year that show up on screen
var money;
var yearMod;
var tools;
var plows;
var cattle;
var horses;
var corn;
var wheat;
var potatoes;
var tomatoes;
var cornYield;
var wheatYield;
var potatoesYield;
var tomatoesYield;
var Yields;
var priceMod; //Price times experience
var sellMod; // Sell times experiance
var slaves;
var hands;
var cropSale;
var cropBuy;
var cropBuys;
var cropSales;
var consoleMessage;
var season;
var Cseason;

function start() {
    screenYear = 0; //year that show up on screen
    money = 500;
    yearMod = 1.1;
    tools = 0;
    plows = 0;
    cattle = 0;
    horses = 0;
    corn = 100;
    wheat = 100;
    potatoes = 100;
    tomatoes = 100;
    cornYield = 1;
    wheatYield = 1;
    potatoesYield = 1;
    tomatoesYield = 1;
    Yields = 1;
    priceMod = 3; //Price times experience
    sellMod = 5; // Sell times experiance
    slaves = 0;
    hands = 0;
    cropSale = 6;
    cropBuy = 10;
    cropBuys = new Array(5, 5, 5, 5);
    cropSales = new Array(3, 3, 3, 3);
    consoleMessage = "";
    season = new Array('Winter', 'Spring', 'Summer', 'Fall');
    Cseason = 0;
}

start();

// use to color main screen
var box = function (options) {
    var bmd = game.add.bitmapData(options.length, options.width);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, options.length, options.width);
    bmd.ctx.fillStyle = options.color;
    bmd.ctx.fill();
    return bmd;
};

//http://phaser.io/examples/v2/buttons/action-on-click
// Use this for all the UI with updatign labels

var mainState = {
    preload: function () {
        game.load.image('buybutton', 'images/buy.jpg');
        game.load.image('runbutton', 'images/run.jpg');
        game.load.image('buycropsbutton', 'images/buycrops.jpg');
    },

    create: function () {
        //var noTech = [];
        //this.makeTech();
        var expData = new Array(2);

        function randomActsOfNature() {
            return Math.random() * (1.3 - (0.6)) + (0.6);
        }

        function roundToTwo(num) {
            return +(Math.round(num + "e+2") + "e-2");
        }

        var runButton = game.add.button(500, 64, 'runbutton', runSeason, this, 2, 1, 0);
        var buyButton = game.add.button(650, 64, 'buybutton', buy, this, 2, 1, 0);
        var buycropsButton = game.add.button(575, 64, 'buycropsbutton', buyCrops, this, 2, 1, 0);

        function buy() {
            game.state.start('buy');
        }

        function buyCrops() {
            game.state.start('buyCrops');
        }

        function triggerWinter() {
            var pickRandom = Math.floor(Math.random() * (10 - (1) + 1)) + (1);
            if (pickRandom === 1) {
                consoleNessage = "An uneventful " + season[Cseason] + '.';
            } // do nothing
            else if (pickRandom === 2) {
                consoleMessage = "This was a very cold winter. Your crops and slaves\ntook a hit.";
                slaves = Math.floor(slaves / 2);
                wheat = wheat * 0.8;
                corn = corn * 0.8;
                tomatoes = tomatoes * 0.8;
                potatoes = potatoes * 0.8;
            } else if (pickRandom === 3) {
                if (slaves > 1 && hands > 5) {
                    consoleMessage = "There is a slave Revolt, You stop it but they\nkill some of your farm hands.";
                    hands *= 0.8;
                    slaves *= 0.6;
                } else if (hands > 10) {
                    consoleMessage = "The flu runs through your farm, you lost some\nfarm hands.";
                    hands -= 5;
                } else {
                    consoleMessage = "Some corn was stolen.";
                    corn -= 10;
                    if (corn < 0) corn = 0;
                }
            } else if (pickRandom === 4) {
                consoleMessage = "You got Robbed!";
                money -= 50;
            } else if (pickRandom === 5) {
                consoleMessage = "Starving Animals eat a lot of your food.";
                wheat = wheat * 0.6;
                corn = corn * 0.6;
                tomatoes = tomatoes * 0.6;
                potatoes = potatoes * 0.6;
            } else if (pickRandom === 6) {
                if (cattle > 0) {
                    consoleMessage = 'Wolves attacked your cattle.';
                    cattle *= 0.7;
                    cattle = cattle | 0;
                } else if (horses > 0) {
                    consoleMessage = 'Wolves attacked your horses.';
                } else
                    triggerWinter();
            } else if (pickRandom === 7) {
                if (horses > 0) {
                    consoleMessage = 'You left your fence unlocked and some horses got away';
                    horses *= 0.5;
                    horses = horses | 0;
                } else
                    triggerWinter();
            } else if (pickRandom === 8) {
                consoleMessage = 'A religous radical from you village stole some money';
                money -= 100;
            } else if (pickRandom === 9) {
                if (plows > 0) {
                    consoleMessage = 'The Snow ruined your plows';
                    plows = 0;
                } else
                    triggerWinter();
            } else if (pickRandom === 10) {
                if (tomatoes > 0) {
                    tomatoes = 0;
                    consoleMessage = 'Bugs destroyed the Tomatoes';
                } else if (corn > 0) {
                    corn = 0;
                    consoleMessage = 'Bugs destroyed the Corn';
                } else if (wheat > 0) {
                    wheat = 0;
                    consoleMessage = 'Bugs destroyed the Wheat';
                } else if (potatoes > 0) {
                    potatoes = 0;
                    consoleMessage = 'Bugs destroyed the Potatoes';
                } else triggerWinter();
            }
        }

        function triggerSpring() {
            var pickRandom = Math.floor(Math.random() * (10 - (1) + 1)) + (1);
            if (pickRandom === 1) {
                consoleMessage = 'You found some abandoned tools.';
                tools += 10;
            } else if (pickRandom === 2) {
                consoleMessage = 'You found a wild horse.';
                horses++;
            } else if (pickRandom === 3) {
                consoleMessage = 'You found a dead corpse will a full purse.';
                money += 200;
            } else if (pickRandom === 4) {
                consoleMessage = 'A good samaritan sees your kids and give you\nsome tools and cow from his heard.';
                tools += 2;
                cattle++;
            } else if (pickRandom === 5) {
                consoleMessage = 'A trader caravan left behind a plow.';
                plow++;
            } else if (pickRandom === 6) {
                consoleMessage = 'A friendly native give you some seeds.';
                corn *= 1.2;
                wheat *= 1.2;
                tomatoes *= 1.2;
                potatoes *= 1.2;
            } else if (pickRandom === 7) {
                consoleMessage = "A passerby gives you some potatoes.";
                potatoes += 25;
            } else if (pickRandom === 8) {
                consoleMessage = 'You find a abandoned plow and fix it.';
                plow++;
            } else if (pickRandom === 9) {
                if (horses > 1) {
                    consoleMessage = 'Some horses give birth.';
                    horses += 1 + (horses % 4);
                } else
                    consoleMessage = 'Nothing of note happened this spring.';
            } else if (pickRandom === 10) {
                if (cattle > 1) {
                    consoleMessage = 'Some cattle give birth.';
                    cattle += 1 + (cattle % 4);
                } else
                    consoleMessage = 'Nothing of note happened this spring.';
            }
        }

        function triggerSummer() {
            var pickRandom = Math.floor(Math.random() * (10 - (1) + 1)) + (1);
            if (pickRandom === 1) {
                consoleMessage = 'You found some abandoned tools.';
                tools += 10;
            } else if (pickRandom === 2) {
                consoleMessage = 'You found a wild horse.';
                horses++;
            } else if (pickRandom === 3) {
                if (slaves > 1 && hands > 5) {
                    consoleMessage = "There is a slave Revolt, You stop it but they\nkill some of your farm hands.";
                    hands *= 0.8;
                    slaves *= 0.6;
                } else if (hands > 10) {
                    consoleMessage = "The flu runs through your farm, you lost some\nfarm hands.";
                    hands -= 5;
                } else {
                    consoleMessage = "Some corn was stolen.";
                    corn -= 10;
                    if (corn < 0) corn = 0;
                }
            } else if (pickRandom === 4) {
                consoleMessage = "You got Robbed!";
                money -= 50;
            } else if (pickRandom === 5) {
                consoleMessage = "Starving Animals eat a lot of your food.";
                wheat = wheat * 0.6;
                corn = corn * 0.6;
                tomatoes = tomatoes * 0.6;
                potatoes = potatoes * 0.6;
            } else if (pickRandom === 6) {
                consoleMessage = 'A friendly native give you some seeds.';
                corn *= 1.2;
                wheat *= 1.2;
                tomatoes *= 1.2;
                potatoes *= 1.2;
            } else if (pickRandom === 7) {
                if (horses > 0) {
                    consoleMessage = 'You left your fence unlocked and some horses got away';
                    horses *= 0.5;
                    horses = horses | 0;
                } else
                    triggerWinter();
            } else if (pickRandom === 8) {
                consoleMessage = 'You find a abandoned plow and fix it.';
                plow++;
            } else if (pickRandom === 9) {
                if (horses > 1) {
                    consoleMessage = 'Some horses give birth.';
                    horses += 1 + (horses % 4);
                } else
                    consoleMessage = 'Nothing of note happened this summer.';
            } else if (pickRandom === 10) {
                if (tomatoes > 0) {
                    tomatoes = 0;
                    consoleMessage = 'Bugs destroyed the Tomatoes';
                } else if (corn > 0) {
                    corn = 0;
                    consoleMessage = 'Bugs destroyed the Corn';
                } else if (wheat > 0) {
                    wheat = 0;
                    consoleMessage = 'Bugs destroyed the Wheat';
                } else if (potatoes > 0) {
                    potatoes = 0;
                    consoleMessage = 'Bugs destroyed the Potatoes';
                } else triggerWinter();
            }

        }

        function checkFood() {
            var starveCost = 0;
            if (wheat < 10) {
                starveCost += 5;
            }
            if (corn < 10) {
                starveCost += 5;
            }
            if (tomatoes < 10) {
                starveCost += 5;
            }
            if (potatoes < 10) {
                starveCost += 5;
            }
            return starveCost;
        }

        function runSeason() {
            money -= checkFood();
            cornYield = roundToTwo(cornYield * (randomActsOfNature() + ((0.005 * slaves) + (0.03 * hands) + (0.002 * tools) + (0.008 * horses) + (0.01 * plows) + (0.02 * cattle))));
            wheatYield = roundToTwo(wheatYield * (randomActsOfNature() + ((0.01 * slaves) + (0.03 * hands) + (0.002 * tools) + (0.008 * horses) + (0.01 * plows) + (0.02 * cattle))));
            potatoesYield = roundToTwo(potatoesYield * (randomActsOfNature() + ((0.005 * slaves) + (0.02 * hands) + (0.002 * tools) + (0.008 * horses) + (0.01 * plows) + (0.02 * cattle))));
            tomatoesYield = roundToTwo(tomatoesYield * (randomActsOfNature() + ((0.005 * slaves) + (0.02 * hands) + (0.002 * tools) + (0.008 * horses) + (0.01 * plows) + (0.02 * cattle))));
            if(cornYield > 2)cornYield = 2;
            if(wheatYield > 2)wheatYield = 2;
            if(potatoesYield > 2)potatoesYield = 2;
            if(tomatoesYield > 2)tomatoesYield = 2;
            Cseason++;
            money -= (hands * 2);
            if (Cseason === 1) {
                triggerSpring();
            }
            if (Cseason === 2) {
                triggerSummer();
            }
            if (Cseason === 4) {
                Cseason = 0;
                slaves = Math.floor(slaves * 0.8);
                triggerWinter();
                tomatoesYield = 1;
                potatoesYield = 1;
                wheatYield = 1;
                cornYield = 1;
            }
            if (Cseason === 3) {
                consoleMessage = 'You harvested your crops';
                corn *= cornYield;
                wheat *= wheatYield;
                tomatoes *= tomatoesYield;
                potatoes *= potatoesYield;
                screenYear++;
                for (var i = 0; i < 4; i++) {
                    cropBuys[i] = cropBuy;
                    cropSales[i] = cropSale;
                    var v = Math.floor(Math.random() * (2 - (0 - 2) + 1)) + (0 - 2);
                    var v2 = Math.floor(Math.random() * (1 - (0 - 1) + 1)) + (0 - 1);
                    cropBuys[i] += v;
                    cropSales[i] += v2;
                }
            }
            corn = corn | 0;
            wheat = wheat | 0;
            tomatoes = tomatoes | 0;
            potatoes = potatoes | 0;
            slaves = slaves | 0;
            game.state.start('main');
        }

        this.headBar = game.add.sprite(0, 0, box({
            length: 800,
            width: 64,
            color: '#A5DE92'
        }));
        this.cropView = game.add.sprite(0, 64, box({
            length: 500,
            width: 300,
            color: '#427A30'
        }));
        this.TreeB = game.add.sprite(725, 64, box({
            length: 75,
            width: 75,
            color: '#B0BD42'
        }));
        this.console = game.add.sprite(500, (64 + 75), box({
            length: 300,
            width: 225,
            color: '#2CA898'
        }));
        yeildL = game.add.text(164, 86, 'Yields: ', {
            font: '32px Arial',
            fill: '000',
        });
        coins = game.add.text(32, 12, 'Coins: ' + money, {
            font: '16px Arial',
            fill: '000',
        });
        year1 = game.add.text(32, 32, 'Year: ' + screenYear, {
            font: '16px Arial',
            fill: '000',
        });
        slavelabel = game.add.text(128 + 32, 12, 'Slaves: ' + slaves, {
            font: '16px Arial',
            fill: '000',
        });
        handlabel = game.add.text(128 + 32, 32, 'Farm Hands: ' + hands, {
            font: '16px Arial',
            fill: '000',
        });
        Toollabel = game.add.text(128 + 32 + 128 + 32, 12, 'Tools: ' + tools, {
            font: '16px Arial',
            fill: '000',
        });
        Plowlabel = game.add.text(128 + 32 + 128 + 32, 32, 'Plows: ' + plows, {
            font: '16px Arial',
            fill: '000',
        });
        Cornlabel = game.add.text(128 + 32 + 128 + 32 + 128, 12, 'Corn: ' + corn, {
            font: '16px Arial',
            fill: '000',
        });
        Wheatlabel = game.add.text(128 + 32 + 128 + 32 + 128, 32, 'Wheat: ' + wheat, {
            font: '16px Arial',
            fill: '000',
        });
        Potatoeslabel = game.add.text(128 + 32 + 128 + 32 + 128 + 64 + 32, 12, 'Potatoes: ' + potatoes, {
            font: '16px Arial',
            fill: '000',
        });
        Tomatoeslabel = game.add.text(128 + 32 + 128 + 32 + 128 + 64 + 32, 32, 'Tomatoes: ' + tomatoes, {
            font: '16px Arial',
            fill: '000',
        });
        Cattlelabel = game.add.text(128 + 32 + 128 + 32 + 128 + 64 + 32 + 128, 12, 'Cattle: ' + cattle, {
            font: '16px Arial',
            fill: '000',
        });
        Horselabel = game.add.text(128 + 32 + 128 + 32 + 128 + 64 + 32 + 128, 32, 'Horses: ' + horses, {
            font: '16px Arial',
            fill: '000',
        });

        Cornlabel2 = game.add.text(64, 128, 'Corn: ' + cornYield, {
            font: '24px Arial',
            fill: '000',
        });
        Wheatlabel2 = game.add.text(64, 256, 'Wheat: ' + wheatYield, {
            font: '24px Arial',
            fill: '000',
        });
        Potatoeslabel2 = game.add.text(256, 128, 'Potatoes: ' + potatoesYield, {
            font: '24px Arial',
            fill: '000',
        });
        Tomatoeslabel2 = game.add.text(256, 256, 'Tomatoes: ' + tomatoesYield, {
            font: '24px Arial',
            fill: '000',

        });

        Consolelabel = game.add.text(580, 150, 'Console', {
            font: '32px Arial',
            fill: '000',
        });
        ConsoleMsg = game.add.text(520, 200, consoleMessage, {
            font: '12px Arial',
            fill: '000',
        });
        seasonlabel = game.add.text(300, 400, season[Cseason], {
            font: '64px Arial',
            fill: '#FFFFFF',
        });
    },

    update: function () {

        Cornlabel2.setText('Corn: ' + cornYield);
        Wheatlabel2.setText('Wheat: ' + wheatYield);
        Potatoeslabel2.setText('Potatoes: ' + potatoesYield);
        Tomatoeslabel2.setText('Tomatoes: ' + tomatoesYield);
        Cornlabel.setText('Corn: ' + corn);
        Wheatlabel.setText('Wheat: ' + wheat);
        Potatoeslabel.setText('Potatoes: ' + potatoes);
        Tomatoeslabel.setText('Tomatoes: ' + tomatoes);
        seasonlabel.setText(season[Cseason]);
        coins.setText('Coins: ' + money);
        year1.setText('Year: ' + screenYear);
        ConsoleMsg.setText(consoleMessage);

        if (money < 0) {
            game.state.start('death');
        }
        if (screenYear === 30) {
            game.states.start('win');
        }
    },
};

var buyState = {
    preload: function () {
        game.load.image('lessbutton', 'images/less.jpg');
        game.load.image('morebutton', 'images/more.jpg');
        game.load.image('Backbutton', 'images/back.jpg');
    },
    create: function () {

        this.bg = game.add.sprite(0, 0, box({
            length: 800,
            width: 550,
            color: '#66FFBB'
        }));

        var lessSlavesButton = game.add.button(150, 12, 'lessbutton', lessSlaves, this, 2, 1, 0);
        var moreSlavesButton = game.add.button(600, 12, 'morebutton', moreSlaves, this, 2, 1, 0);
        var lessPlowButton = game.add.button(150, 12 + 75, 'lessbutton', lessPlow, this, 2, 1, 0);
        var morePlowButton = game.add.button(600, 12 + 75, 'morebutton', morePlow, this, 2, 1, 0);
        var lessToolsButton = game.add.button(150, 12 + 150, 'lessbutton', lessTools, this, 2, 1, 0);
        var moreToolsButton = game.add.button(600, 12 + 150, 'morebutton', moreTools, this, 2, 1, 0);
        var lessHorseButton = game.add.button(150, 12 + 225, 'lessbutton', lessHorse, this, 2, 1, 0);
        var moreHorseButton = game.add.button(600, 12 + 225, 'morebutton', moreHorse, this, 2, 1, 0);
        var lessCattleButton = game.add.button(150, 12 + 300, 'lessbutton', lessCattle, this, 2, 1, 0);
        var moreCattleButton = game.add.button(600, 12 + 300, 'morebutton', moreCattle, this, 2, 1, 0);
        var lessHandsButton = game.add.button(150, 12 + 375, 'lessbutton', lessHands, this, 2, 1, 0);
        var moreHandsButton = game.add.button(600, 12 + 375, 'morebutton', moreHands, this, 2, 1, 0);
        var BackButton = game.add.button(0, 550 - 75, 'Backbutton', back, this, 2, 1, 0);

        //TODO: more ifs
        function back() {
            game.state.start('main');
        }

        function lessSlaves() {
            if (slaves > 0) {
                slaves--;
                money += 6;
            }
        }

        function moreSlaves() {
            slaves++;
            money -= 12;
        }

        function lessPlow() {
            if (plows > 0) {
                plows--;
                money += 12;
            }
        }

        function morePlow() {
            plows++;
            money -= 30;
        }

        function lessTools() {
            if (tools > 0) {
                tools--;
                money += 3;
            }
        }

        function moreTools() {
            tools++;
            money -= 5;
        }

        function lessHorse() {
            if (horses > 0) {
                horses--;
                money += 8;
            }
        }

        function moreHorse() {
            horses++;
            money -= 14;
        }

        function lessCattle() {
            if (cattle > 0) {
                cattle--;
                money += 20;
            }
        }

        function moreCattle() {
            cattle++;
            money -= 45;
        }

        function lessHands() {
            if (hands > 0) hands--;
        }

        function moreHands() {
            hands++;
        }


        slavelabel2 = game.add.text(400, 32 + 10, 'Slaves: ' + slaves, {
            font: '32px Arial',
            fill: '000',
        });
        slavelabel2.anchor.set(0.5);
        handlabel2 = game.add.text(400, 32 + 375 + 20, 'Farm Hands: ' + hands, {
            font: '32px Arial',
            fill: '000',
        });
        handlabel2.anchor.set(0.5);
        Plowlabel2 = game.add.text(400, 32 + 75 + 20, 'Plows: ' + plows, {
            font: '32px Arial',
            fill: '000',
        });
        Plowlabel2.anchor.set(0.5);
        Toolslabel2 = game.add.text(400, 32 + 150 + 20, 'Tools: ' + tools, {
            font: '32px Arial',
            fill: '000',
        });
        Toolslabel2.anchor.set(0.5);
        Horselabel2 = game.add.text(400, 32 + 225 + 20, 'Horses: ' + horses, {
            font: '32px Arial',
            fill: '000',
        });
        Horselabel2.anchor.set(0.5);
        Cattlelabel2 = game.add.text(400, 32 + 300 + 20, 'Cattle: ' + cattle, {
            font: '32px Arial',
            fill: '000',
        });
        Cattlelabel2.anchor.set(0.5);
        moneylabel2 = game.add.text(400, 500, 'Coins: ' + money, {
            font: '32px Arial',
            fill: '000',
        });
        selllabel2 = game.add.text(50, 32, "+" + "6" + "\n\n+" + "12" + "\n\n+" + "3" + "\n\n+" + "8" + "\n\n+" + "20" + "\n\n+" + "2/mo", {
            font: '28px Arial',
            fill: '000',
        });
        buylabel2 = game.add.text(700, 32, "-" + "12" + "\n\n-" + "30" + "\n\n-" + "5" + "\n\n-" + "14" + "\n\n-" + "45" + "\n\n-" + "2/mo", {
            font: '28px Arial',
            fill: '000',
        });
        moneylabel2.anchor.set(0.5);
    },
    update: function () {
        slavelabel2.setText('Slaves: ' + slaves);
        handlabel2.setText('Farm Hands: ' + hands);
        moneylabel2.setText('Coins: ' + money);
        Plowlabel2.setText('Plows: ' + plows);
        Toolslabel2.setText('Tools: ' + tools);
        Horselabel2.setText('Horses: ' + horses);
        Cattlelabel2.setText('Cattle: ' + cattle);

    }
};



var buyCropsState = {
    preload: function () {
        game.load.image('lessbutton', 'images/less.jpg');
        game.load.image('morebutton', 'images/more.jpg');
        game.load.image('Backbutton', 'images/back.jpg');
    },
    create: function () {


        this.bg = game.add.sprite(0, 0, box({
            length: 800,
            width: 550,
            color: '#66FFBB'
        }));


        var lessWheatButton = game.add.button(150, 12, 'lessbutton', lessWheat, this, 2, 1, 0);
        var moreWheatButton = game.add.button(600, 12, 'morebutton', moreWheat, this, 2, 1, 0);
        var lessCornButton = game.add.button(150, 12 + 75, 'lessbutton', lessCorn, this, 2, 1, 0);
        var moreCornButton = game.add.button(600, 12 + 75, 'morebutton', moreCorn, this, 2, 1, 0);
        var lesspotatoesButton = game.add.button(150, 12 + 150, 'lessbutton', lessPotatoes, this, 2, 1, 0);
        var morepotatoesButton = game.add.button(600, 12 + 150, 'morebutton', morePotatoes, this, 2, 1, 0);
        var lesstomatoesButton = game.add.button(150, 12 + 225, 'lessbutton', lessTomatoes, this, 2, 1, 0);
        var moretomatoesButton = game.add.button(600, 12 + 225, 'morebutton', moreTomatoes, this, 2, 1, 0);
        var BackButton = game.add.button(0, 550 - 75, 'Backbutton', back, this, 2, 1, 0);

        //TODO: more ifs
        function back() {
            game.state.start('main');
        }

        function lessWheat() {
            if (wheat > 10) {
                wheat -= 10;
                money += cropSales[0];
            }
        }

        function moreWheat() {
            wheat += 10;
            money -= cropBuys[0];
        }

        function lessCorn() {
            if (corn > 10) {
                corn -= 10;
                money += cropSales[1];
            }
        }

        function moreCorn() {
            corn += 10;
            money -= cropBuys[1];
        }

        function lessPotatoes() {
            if (potatoes > 10) {
                potatoes -= 10;
                money += cropSales[2];
            }
        }

        function morePotatoes() {
            potatoes += 10;
            money -= cropBuys[2];
        }

        function lessTomatoes() {
            if (tomatoes > 10) {
                tomatoes -= 10;
                money += cropSales[3];
            }
        }

        function moreTomatoes() {
            tomatoes += 10;
            money -= cropBuys[2];
        }


        selllabel2 = game.add.text(50, 32, "+" + cropSales[0] + "\n\n+" + cropSales[1] + "\n\n+" + cropSales[2] + "\n\n+" + cropSales[3], {
            font: '32px Arial',
            fill: '000',
        });
        buylabel2 = game.add.text(700, 32, "-" + cropBuys[0] + "\n\n-" + cropBuys[1] + "\n\n-" + cropBuys[2] + "\n\n-" + cropBuys[3], {
            font: '32px Arial',
            fill: '000',
        });
        wheatlabel3 = game.add.text(400, 32, 'Wheat: ' + wheat, {
            font: '32px Arial',
            fill: '000',
        });
        wheatlabel3.anchor.set(0.5);
        cornlabel3 = game.add.text(400, 32 + 75 + 15, 'Corn: ' + corn, {
            font: '32px Arial',
            fill: '000',
        });
        cornlabel3.anchor.set(0.5);
        potatoeslabel3 = game.add.text(400, 32 + 150 + 25, 'Potatoes: ' + potatoes, {
            font: '32px Arial',
            fill: '000',
        });
        potatoeslabel3.anchor.set(0.5);
        tomatoeslabel3 = game.add.text(400, 32 + 225 + 35, 'Tomatoes: ' + tomatoes, {
            font: '32px Arial',
            fill: '000',
        });
        tomatoeslabel3.anchor.set(0.5);

        moneylabel2 = game.add.text(400, 500, 'Coins: ' + money, {
            font: '32px Arial',
            fill: '000',
        });
        moneylabel2.anchor.set(0.5);
    },
    update: function () {
        wheatlabel3.setText('Wheat: ' + wheat);
        cornlabel3.setText('Corn: ' + corn);
        potatoeslabel3.setText('Potatoes: ' + potatoes);
        tomatoeslabel3.setText('Tomatoes: ' + tomatoes);
        moneylabel2.setText('Coins: ' + money);
    }
};


//Text only screens

var intro1State = {
    preload: function () {
        game.load.image('nextbutton', 'images/next.jpg');
    },
    create: function () {
        var NextButton = game.add.button(725, 550 - 75, 'nextbutton', next, this, 2, 1, 0);

        function next() {
            game.state.start('into2');
        }
        var string1 = 'You\'re a single father of two and the priest in \nyour coloney has slandered you as cursed. Tired of\nhow you are shunned and you\'re children made fun\nof you pack your wagon and leave the village with\nyour kids.';
        narrative = game.add.text(32, 112, string1, {
            font: '32px Arial',
            fill: '#fff',
        });
    },
    update: function () {}
};

var intro2State = {
    preload: function () {
        game.load.image('nextbutton', 'images/next.jpg');
    },
    create: function () {
        var NextButton = game.add.button(725, 550 - 75, 'nextbutton', next, this, 2, 1, 0);

        function next() {
            game.state.start('main');
        }
        var string1 = 'After a few days travel your wagon breaks, later that\nevenning you find a clearing not far from the trade\nroute you were traveling towards with a clean river\nonly a mile away. You have a purse filled with change\nand four sacks of seeds. Can you keep the children\nfed until they can survive by themselves?';
        narrative = game.add.text(32, 64, string1, {
            font: '32px Arial',
            fill: '#fff',
        });
    },
    update: function () {}
};

var deathState = {
    preload: function () {
        game.load.image('nextbutton', 'images/next.jpg');
    },
    create: function () {
        var NextButton = game.add.button(725, 550 - 75, 'nextbutton', next, this, 2, 1, 0);

        function next() {
            game.state.start('credits');
        }
        var string1 = 'You throw dirt onto the shallow grave which conceals\nyour daughter. Your son who is so thin he looks like\na skeleton watches you as you toss the shovel as far\nas you can with tears streaming down your face.\nYou know it will take a miracle to save yourself.';
        narrative = game.add.text(32, 96, string1, {
            font: '32px Arial',
            fill: '#fff',
        });
    },
    update: function () {}
};

var winState = {
    preload: function () {
        game.load.image('nextbutton', 'images/next.jpg');
    },
    create: function () {
        var NextButton = game.add.button(725, 550 - 75, 'nextbutton', next, this, 2, 1, 0);

        function next() {
            game.state.start('credits');
        }
        var string1 = 'As you grow too sickly to work you son take\nover the farm and the next two harvest were more\nbountiful then ever. You daughter is now holding your\nhand in her own while holding her plump stomach in\nher other hand. She is crying and here husband is\nconforting her. You can\'t hold back a grin\nas you pass away.';
        narrative = game.add.text(32, 96, string1, {
            font: '32px Arial',
            fill: '#fff',
        });
    },
    update: function () {}
};

var creditState = {
    preload: function () {
        game.load.image('resetbutton', 'images/restart.jpg');
    },
    create: function () {
        var resetButton = game.add.button(650, 475, 'resetbutton', resetf, this, 2, 1, 0);

        function resetf() {
            start();
            game.state.start('main');
        }
        var string1 = 'Credits';
        var string2 = 'Creator: Dominik Yakouek(Kingdiepie a.k.a K Legacy)\n\nProgrammer: Dominik Yakoubek(Kingdiepie a.k.a K Legacy)\n\nCreated for Ludum Dare 36';
        creditsTittle = game.add.text(400, 64, string1, {
            font: '48px Arial',
            fill: '#fff',
        });
        creditsTittle.anchor.set(0.5);
        credits = game.add.text(400, 256, string2, {
            font: '24px Arial',
            fill: '#fff',
        });
        credits.anchor.set(0.5);
    },
    update: function () {}
};

game.state.add('main', mainState);
game.state.add('buy', buyState);
game.state.add('buyCrops', buyCropsState);
game.state.add('into1', intro1State);
game.state.add('into2', intro2State);
game.state.add('death', deathState);
game.state.add('win', winState);
game.state.add('credits', creditState);
game.state.start('into1');
