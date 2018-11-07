function PageLoaded() {

    //=============== DECLARATIONS ==================================================================================//

    window.onload = document.getElementById("titleScreen").open = true;

    var cardValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "plus2", "plus4", "reverse", "skip", "wild"];
    var colors = ["blue", "green", "red", "yellow"];
    var counter = 0;
    var endGame = false;
    var plus2counter = 0;
    var plus4counter = 0;
    var clockwiseFlow = true;
    //Audios
    var soundCard = new Audio("sound/card-effect.mp3")
    var soundtrack = new Audio("sound/main-soundtrack.mp3")
    var soundMenuSelection = new Audio("sound/menu-validate.mp3")
    var soundSkip = new Audio("sound/skip.wav")
    var soundReverse = new Audio("sound/reverse.wav")
    var soundVictory = new Audio("sound/victory.flac")
    var soundDraw = new Audio("sound/draw.mp3")
    var soundLose = new Audio("sound/lose.mp3")
    //Elements
    var arrowLeft = document.querySelectorAll(".flow-indicator")[0]
    var arrowRight = document.querySelectorAll(".flow-indicator")[1]
    var indicatorPlayer1 = document.getElementById("player1-indicator")
    var indicatorPlayer2 = document.getElementById("player2-indicator")
    var indicatorPlayer3 = document.getElementById("player3-indicator")
    var indicatorPlayer4 = document.getElementById("player4-indicator")
    var btnPass = document.getElementById("btnPass")
    //In game card colors
    var cardBlue = "rgb(42, 127, 255)"
    var cardGreen = "rgb(44, 160, 90)"
    var cardRed = "rgb(212, 0, 0)"
    var cardYellow = "rgb(255, 204, 0)"
    //Players
    var player;
    var startingPlayer = 1;
    var player1win = 0;
    var player2win = 0;
    var player3win = 0;
    var player4win = 0;
    var player1Name = document.getElementById("playerBottomLabel")
    var player2Name = document.getElementById("playerLeftLabel")
    var player3Name = document.getElementById("playerTopLabel")
    var player4Name = document.getElementById("playerRightLabel")


    //=============== MAIN FUNCTIONS ================================================================================//



    function FirstToPlay() {
        document.getElementById("playerBottomImg").style.borderColor = cardRed;
        document.getElementById("playerLeftImg").style.borderColor = cardGreen;
        document.getElementById("playerTopImg").style.borderColor = cardYellow;
        document.getElementById("playerRightImg").style.borderColor = cardBlue;
        document.getElementById("playerTopScore").style.opacity = 1;
        document.getElementById("playerLeftScore").style.opacity = 1;
        document.getElementById("playerRightScore").style.opacity = 1;
        document.getElementById("playerBottomScore").style.opacity = 1;
        document.getElementById("layer").open = true;
        var c1 = document.getElementById("player1-slot0");
        var c2 = document.getElementById("player2-slot0");
        var c3 = document.getElementById("player3-slot0");
        var c4 = document.getElementById("player4-slot0");
        var draw = false;
        do {
            RenderizeCard(c1); RenderizeCard(c2); RenderizeCard(c3); RenderizeCard(c4);
            setTimeout(function () {
                c2.style.backgroundImage = GetImage(c2.style.backgroundColor, c2.innerHTML);
                c3.style.backgroundImage = GetImage(c3.style.backgroundColor, c3.innerHTML);
                c4.style.backgroundImage = GetImage(c4.style.backgroundColor, c4.innerHTML);
            }, 200)
            var P1Value = GetValueOfCard(c1)
            var P2Value = GetValueOfCard(c2)
            var P3Value = GetValueOfCard(c3)
            var P4Value = GetValueOfCard(c4)
            var name

            if (P1Value > P2Value && P1Value > P3Value && P1Value > P4Value) {
                startingPlayer = 1; draw = false; name = player1Name.innerHTML + " BEGIN!";
            }
            else if (P2Value > P1Value && P2Value > P3Value && P2Value > P4Value) {
                startingPlayer = 2; draw = false; name = player2Name.innerHTML + " BEGINS!";
            }
            else if (P3Value > P1Value && P3Value > P2Value && P3Value > P4Value) {
                startingPlayer = 3; draw = false; name = player3Name.innerHTML + " BEGINS!";
            }
            else if (P4Value > P1Value && P4Value > P2Value && P4Value > P3Value) {
                startingPlayer = 4; draw = false; name = player4Name.innerHTML + " BEGINS!";
            }
            else { draw = true }

            setTimeout(function () { ShowLabel(name.toUpperCase()) }, 1000)

        }
        while (draw === true);
    }


    function GetValueOfCard(card) {
        if (card.innerHTML === "1") { value = 1 }
        else if (card.innerHTML === "2") { value = 2 }
        else if (card.innerHTML === "3") { value = 3 }
        else if (card.innerHTML === "4") { value = 4 }
        else if (card.innerHTML === "5") { value = 5 }
        else if (card.innerHTML === "6") { value = 6 }
        else if (card.innerHTML === "7") { value = 7 }
        else if (card.innerHTML === "8") { value = 8 }
        else if (card.innerHTML === "9") { value = 9 }
        else if (card.innerHTML === "plus2") { value = 10 }
        else if (card.innerHTML === "skip") { value = 10 }
        else if (card.innerHTML === "reverse") { value = 10 }
        else if (card.innerHTML === "plus4") { value = 11 }
        else if (card.innerHTML === "wild") { value = 11 }
        else { value = 0 }
        return value;
    }



    function StartGame() {
        var p1_card0 = document.getElementById("player1-slot0"); var p3_card0 = document.getElementById("player3-slot0");
        var p1_card1 = document.getElementById("player1-slot1"); var p3_card1 = document.getElementById("player3-slot1");
        var p1_card2 = document.getElementById("player1-slot2"); var p3_card2 = document.getElementById("player3-slot2");
        var p1_card3 = document.getElementById("player1-slot3"); var p3_card3 = document.getElementById("player3-slot3");
        var p1_card4 = document.getElementById("player1-slot4"); var p3_card4 = document.getElementById("player3-slot4");
        var p1_card5 = document.getElementById("player1-slot5"); var p3_card5 = document.getElementById("player3-slot5");
        var p1_card6 = document.getElementById("player1-slot6"); var p3_card6 = document.getElementById("player3-slot6");
        var p2_card0 = document.getElementById("player2-slot0"); var p4_card0 = document.getElementById("player4-slot0");
        var p2_card1 = document.getElementById("player2-slot1"); var p4_card1 = document.getElementById("player4-slot1");
        var p2_card2 = document.getElementById("player2-slot2"); var p4_card2 = document.getElementById("player4-slot2");
        var p2_card3 = document.getElementById("player2-slot3"); var p4_card3 = document.getElementById("player4-slot3");
        var p2_card4 = document.getElementById("player2-slot4"); var p4_card4 = document.getElementById("player4-slot4");
        var p2_card5 = document.getElementById("player2-slot5"); var p4_card5 = document.getElementById("player4-slot5");
        var p2_card6 = document.getElementById("player2-slot6"); var p4_card6 = document.getElementById("player4-slot6");
        var tc = document.getElementById("tableCard");

        document.getElementById("colorSelector").open = false
        document.getElementById("colorSelector").classList.remove('zoomIn');
        document.getElementById("colorSelector").classList.remove('zoomOut');
        endGame = false; player = startingPlayer; plus2counter = 0; plus4counter = 0;

        EraseCard(tc);
        for (var x = 1; x <= 4; x++) {
            for (var y = 0; y < 20; y++) {
                let card = document.getElementById("player" + x + "-slot" + y);
                EraseCard(card);
            }
        }

        setTimeout(function () { RenderizeCard(p2_card5); RenderizeCard(p2_card3); RenderizeCard(p2_card1); }, 250);
        setTimeout(function () { RenderizeCard(p3_card5); RenderizeCard(p3_card3); RenderizeCard(p3_card1); }, 500);
        setTimeout(function () { RenderizeCard(p4_card5); RenderizeCard(p4_card3); RenderizeCard(p4_card1); }, 750);
        setTimeout(function () { RenderizeCard(p1_card5); RenderizeCard(p1_card3); RenderizeCard(p1_card1); }, 1000);
        setTimeout(function () { RenderizeCard(p2_card0); RenderizeCard(p2_card2); }, 1250);
        setTimeout(function () { RenderizeCard(p3_card0); RenderizeCard(p3_card2); }, 1500);
        setTimeout(function () { RenderizeCard(p4_card0); RenderizeCard(p4_card2); }, 1750);
        setTimeout(function () { RenderizeCard(p1_card0); RenderizeCard(p1_card2); }, 2000);
        setTimeout(function () { RenderizeCard(p2_card4); RenderizeCard(p2_card6); }, 2250);
        setTimeout(function () { RenderizeCard(p3_card4); RenderizeCard(p3_card6); }, 2500);
        setTimeout(function () { RenderizeCard(p4_card4); RenderizeCard(p4_card6); }, 2750);
        setTimeout(function () { RenderizeCard(p1_card4); RenderizeCard(p1_card6); }, 3000);
        setTimeout(function () { RenderizeCard(tc); }, 4000);

        setTimeout(function () {
            arrowLeft.style.opacity = "0.15";
            arrowRight.style.opacity = "0.15";
            document.getElementById("btnUno").style.opacity = "1";
        }, 4300);


        setTimeout(function () { CallPlayer(player); }, 4600);
    }



    function EndGame() {
        arrowLeft.style.opacity = "0"; arrowRight.style.opacity = "0";
        indicatorPlayer1.style.visibility = "hidden"; indicatorPlayer2.style.visibility = "hidden";
        indicatorPlayer3.style.visibility = "hidden"; indicatorPlayer4.style.visibility = "hidden";

        RemoveHighlight();
        if (player === 1) { soundVictory.play(); } else { soundLose.play(); }

        var winner; var endGameWindow = document.getElementById("menu");
        if (player === 1) { endGameWindow.style.color = cardRed; player1win++; winner = player1Name.innerHTML }
        else if (player === 2) { endGameWindow.style.color = cardGreen; player2win++; winner = player2Name.innerHTML }
        else if (player === 3) { endGameWindow.style.color = cardYellow; player3win++; winner = player3Name.innerHTML }
        else { endGameWindow.style.color = cardBlue; player4win++; winner = player4Name.innerHTML }

        var text = winner.toUpperCase() + " WON!";
        document.getElementById("endGameTitle").innerHTML = text;
        endGameWindow.open = true;
        endGameWindow.classList.add('zoomIn');

        document.getElementById("playerBottom-counter").innerHTML = player1win;
        document.getElementById("playerLeft-counter").innerHTML = player2win;
        document.getElementById("playerTop-counter").innerHTML = player3win;
        document.getElementById("playerRight-counter").innerHTML = player4win;
    }


    function RenderizeCard(card) {
        if (card === document.getElementById("tableCard")) { card.innerHTML = RandomCardValue(10) }
        else { card.innerHTML = RandomCardValue(15) }

        let cardColor;
        if (card.innerHTML === "plus4" || card.innerHTML === "wild") { cardColor = "black"; }
        else { cardColor = RandomColor(); }
        card.style.backgroundColor = cardColor;
        card.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 1)";
        card.style.visibility = "visible";
        card.style.backgroundImage = GetImage(cardColor, card.innerHTML);
        DrawCardAnimation(card);
    }


    function EraseCard(card) {
        card.style.removeProperty('transition');
        card.style.removeProperty('transform');
        card.innerHTML = "";
        card.style.backgroundColor = null;
        card.style.backgroundImage = null;
        card.style.visibility = "hidden";
    }




    //=============== PLAYING ACTIONS ===============================================================================//

    function PlayerTurn() {
        var canPlay = false; document.getElementById("layer").open = true;

        if (plus2counter !== 0 && plus4counter === 0) {
            for (x = 0; x < 20; x++) {
                let card = document.getElementById("player" + player + "-slot" + x);
                if (IsPlus2(card) || IsPlus4(card)) { canPlay = true; counter = 1; break; }
            }
        }
        else if (plus4counter !== 0) {
            for (x = 0; x < 20; x++) {
                let card = document.getElementById("player" + player + "-slot" + x);
                if (IsPlus4(card)) { canPlay = true; counter = 1; break; }
            }
        }
        else { canPlay = true; }

        if (canPlay) { if (player === 1) { HighlightPlayableCards(); } else { setTimeout(CPUPlay, 1100) } }
        else {
            setTimeout(function () {
                let numberOfCards = (plus2counter * 2) + (plus4counter * 4);
                DrawCard(numberOfCards); plus4counter = 0; plus2counter = 0; soundDraw.play();
                PlayerAction(player, "+" + numberOfCards); CallNextPlayer();
            }, 400)
        }
    }


    function Play(cardID) {
        var card = document.getElementById("player" + player + "-slot" + cardID);
        if (IsPlayable(card)) { SetCard(card) } else { Hint("This card doesn't match!") };
    }


    function SetCard(card) {
        btnPass.style.opacity = 0;
        SetCardAnimation(card);
        setTimeout(function () {
            var tableCard = document.getElementById("tableCard");
            if (Victory()) { endGame = true; EndGame(); }
            else if (IsBlack(tableCard)) { ColorChooseMenu(); }
            else { ContinueGame(); }
        }, 500)
    }


    function DeckClick() {
        if (counter === 0) {
            DrawCard(1);
            if (HasPlayableCards()) {
                if (player === 1) {
                    counter = 1; HighlightPlayableCards();
                    setTimeout(function () { btnPass.style.opacity = "1"; }, 400)
                }
                else { setTimeout(CPUPlay, 700) }
            }
            else { setTimeout(CallNextPlayer, 500) }
        }
        else (Hint("You can't draw."))
    }


    function DrawCard(numberOfCards) {
        let a = 1
        do {
            for (x = 0; x < 20; x++) {
                let card = document.getElementById("player" + player + "-slot" + x)
                if (IsEmptyCard(card)) { RenderizeCard(card); break; }
            }
            a++
        } while (a <= numberOfCards)
    }


    function GetColor(e) {
        var tc = document.getElementById("tableCard");
        let newColor = e.target.innerHTML;
        tc.style.backgroundColor = newColor;
        tc.style.backgroundImage = GetImage(newColor, tc.innerHTML);

        var menu = document.getElementById("colorSelector");
        menu.classList.add('zoomOut');
        setTimeout(function () {
            menu.open = false;
            menu.classList.remove('zoomIn');
            menu.classList.remove('zoomOut');
        }, 300);

        soundMenuSelection.play();
        ContinueGame();
    }


    function CPUPlay() {
        if (endGame === false) {
            var canPlay = false; var card;
            for (var x = 0; x < 20; x++) {
                card = document.getElementById("player" + player + "-slot" + x);
                if (IsPlayable(card)) { canPlay = true; break; }
            }
            if (canPlay) { CPUSetCard(card); } else { DeckClick(); }
        }
    }

    function CPUSetCard(card) {
        if (IsBlack(card)) { card.style.backgroundColor = CPUBlackCardColorSet(); }
        SetCardAnimation(card);
        setTimeout(function () {
            if (Victory()) { endGame = true; EndGame() }
            else { ContinueGame(); }
        }, 500);
    }

    function CPUBlackCardColorSet() {
        var newColor = RandomColor();
        for (var x = 0; x < 20; x++) {
            let cardColor = document.getElementById("player" + player + "-slot" + x).style.backgroundColor
            if (cardColor !== "" && cardColor !== "black") { newColor = cardColor; break }
        }
        return newColor;
    }



    //=============== SECONDARY FUNCTIONS ==========================================================================//


    function RandomCardValue(x) {
        let value = cardValues[Math.floor(Math.random() * x)];
        return value;
    }

    function RandomColor() {
        let color = colors[Math.floor(Math.random() * 4)];
        return color;
    }

    function GetImage(color, value) {
        var imagePath = "url('cards/" + color + "-" + value + ".png')"
        return imagePath;
    }

    function HideCard(card) {
        card.style.backgroundImage = "url('cards/back.png')";
    }

    function ReverseFlow() {
        if (clockwiseFlow) { clockwiseFlow = false }
        else { clockwiseFlow = true }

        var rotateX;
        if (clockwiseFlow) { rotateX = "rotateX(0deg)" }
        else { rotateX = "rotateX(180deg)" }

        arrowLeft.style.opacity = "1";
        arrowRight.style.opacity = "1";

        setTimeout(function () {
            arrowLeft.style.setProperty("transform", rotateX)
            arrowRight.style.setProperty("transform", rotateX)

            setTimeout(function () {
                arrowLeft.style.opacity = "0.15";
                arrowRight.style.opacity = "0.15";
            }, 800)
        }, 100)

        soundReverse.pause(); soundReverse.currentTime = 0; soundReverse.play();
        ShowLabel("REVERSE!");
    }

    function SkipNextPlayer() {
        if (clockwiseFlow === true) { if (player < 4) { player++ } else { player = 1 }; }
        else { if (player > 1) { player-- } else { player = 4 }; }
        PlayerAction(player, "skip")
        ShowLabel("SKIP!")
    }

    function CallNextPlayer() {
        if (clockwiseFlow) { if (player < 4) { player++ } else { player = 1 } }
        else { if (player > 1) { player-- } else { player = 4 } }
        counter = 0;
        CallPlayer(player);
    }

    function CallPlayer(player) {
        indicatorPlayer1.style.visibility = "hidden";
        indicatorPlayer2.style.visibility = "hidden";
        indicatorPlayer3.style.visibility = "hidden";
        indicatorPlayer4.style.visibility = "hidden";
        RemoveHighlight();
        document.getElementById("layer").open = true;
        if (player === 1) { indicatorPlayer1.style.visibility = "visible"; }
        else if (player === 2) { indicatorPlayer2.style.visibility = "visible"; }
        else if (player === 3) { indicatorPlayer3.style.visibility = "visible"; }
        else { indicatorPlayer4.style.visibility = "visible"; }
        PlayerTurn();
    }

    function Victory() {
        var victory = true;
        for (var x = 0; x < 20; x++) {
            let card = document.getElementById("player" + player + "-slot" + x);
            if (!IsEmptyCard(card)) { victory = false; break; }
        }
        if (victory) { return true } else { return false }
    }

    function ContinueGame() {
        var tableCard = document.getElementById("tableCard");
        if (IsSkip(tableCard)) { SkipNextPlayer(); }
        if (IsReverse(tableCard)) { ReverseFlow(); }
        if (IsPlus2(tableCard)) { plus2counter++; }
        if (IsPlus4(tableCard)) { plus4counter++; }
        RemoveHighlight();
        CallNextPlayer();
    }




    //=============== CARDS TESTING ================================================================================//


    function IsPlayable(card) {
        if (plus2counter === 0 && plus4counter === 0) {
            let tc = document.getElementById("tableCard")
            if (card.style.backgroundColor === tc.style.backgroundColor ||
                card.innerHTML === tc.innerHTML ||
                card.style.backgroundColor === "black")
                return true;
            else
                return false;
        }
        else if (plus2counter !== 0 && plus4counter === 0) {
            if (IsPlus2(card) || IsPlus4(card))
                return true;
            else
                return false;
        }
        else {
            if (IsPlus4(card))
                return true;
            else
                return false;
        }
    }

    function IsTableCard(card) { if (card === document.getElementById("tableCard")) { return true } else { return false } }
    function IsReverse(card) { if (card.innerHTML === "reverse") { return true } else { return false } }
    function IsSkip(card) { if (card.innerHTML === "skip") { return true } else { return false } }
    function IsPlus2(card) { if (card.innerHTML === "plus2") { return true } else { return false } }
    function IsPlus4(card) { if (card.innerHTML === "plus4") { return true } else { return false } }
    function IsBlack(card) { if (card.style.backgroundColor === "black") { return true } else { return false } }
    function IsEmptyCard(card) { if (card.innerHTML === "") { return true } else { return false } }

    function HasPlayableCards() {
        var canPlay = false;
        for (x = 0; x < 20; x++) {
            let card = document.getElementById("player" + player + "-slot" + x)
            if (IsPlayable(card)) { canPlay = true; break }
        }
        if (canPlay) { return true } else { return false }
    }

    function ContainsClass(card, className) {
        if (card.classList.contains(className)) { return true } else { return false }
    }




    //=============== INTERFACE ====================================================================================//



    //Play Game Button
    document.getElementById("btnPlayGame").addEventListener("click", function () {
        document.getElementById("titleScreen").classList.add('zoomOut');
        setTimeout(function () {
            document.getElementById("titleScreen").style.visibility = "hidden";
            document.getElementById("titleScreen").classList.remove('bounceIn');
            document.getElementById("titleScreen").classList.remove('zoomOut');
            document.getElementById('deck').style.visibility = "visible"
            document.getElementById('deck').classList.add("flipInY")
        }, 800);
        setTimeout(function () {
            document.getElementById("deck").classList.remove('flipInY');
            FirstToPlay();
        }, 1600);
        setTimeout(StartGame, 4000);
        soundMenuSelection.play();

    })


    //Play Music Button
    document.getElementById("playMusic").addEventListener("click", function () {
        if (soundtrack.paused) {
            soundtrack.play(); soundtrack.loop = true;
            document.getElementById("playMusic").innerHTML = "Music: on";
            document.getElementById("optPlayMusic").innerHTML = "Music: on";
        }
        else {
            soundtrack.pause();
            soundtrack.currentTime = 0;
            document.getElementById("playMusic").innerHTML = "Music: off";
            document.getElementById("optPlayMusic").innerHTML = "Music: off";
        }
    })

    document.getElementById("optPlayMusic").addEventListener("click", function () {
        if (soundtrack.paused) {
            soundtrack.play(); soundtrack.loop = true;
            document.getElementById("optPlayMusic").innerHTML = "Music: on";
        }
        else {
            soundtrack.pause();
            soundtrack.currentTime = 0;
            document.getElementById("optPlayMusic").innerHTML = "Music: off";
        }
    })


    //Rules Button
    document.getElementById("btnRules").addEventListener("click", function () {
        document.getElementById("rulesBox").open = true;
        document.getElementById("rulesBox").classList.add('zoomIn');
        soundMenuSelection.play();
    })
    //Close Rules Button
    document.getElementById("btnCloseRules").addEventListener("click", function () {
        document.getElementById("rulesBox").classList.add('zoomOut');
        setTimeout(function () {
            document.getElementById("rulesBox").open = false
            document.getElementById("rulesBox").classList.remove('zoomIn');
            document.getElementById("rulesBox").classList.remove('zoomOut');
        }, 300);
    })

    //Options Button
    document.getElementById("btnOptions").addEventListener("click", function () {
        document.getElementById("optionsBox").open = true;
        document.getElementById("optionsBox").classList.add('zoomIn');
    })
    //Close Options Button
    document.getElementById("btnCloseOptions").addEventListener("click", function () {
        document.getElementById("optionsBox").classList.add('zoomOut');
        setTimeout(function () {
            document.getElementById("optionsBox").open = false
            document.getElementById("optionsBox").classList.remove('zoomIn');
            document.getElementById("optionsBox").classList.remove('zoomOut');
        }, 300);
    })



    //Play Again Button
    document.getElementById("btnPlayAgain").addEventListener("click", function () {
        document.getElementById("menu").classList.add('zoomOut');

        indicatorPlayer1.style.visibility = "hidden";
        indicatorPlayer2.style.visibility = "hidden";
        indicatorPlayer3.style.visibility = "hidden";
        indicatorPlayer4.style.visibility = "hidden";

        if (!clockwiseFlow) { 
            clockwiseFlow = true;
            arrowLeft.style.removeProperty("transform")
            arrowRight.style.removeProperty("transform")
         }

        setTimeout(function () {
            document.getElementById("menu").open = false
            document.getElementById("menu").classList.remove('zoomIn');
            document.getElementById("menu").classList.remove('zoomOut');
        }, 300);

        if (startingPlayer < 4) { startingPlayer++; }
        else { startingPlayer = 1; }
        player = startingPlayer;

        setTimeout(StartGame, 700)
    })


    //Color Selection Buttons
    var btnBlue = document.getElementById("btnBlue")
    var btnGreen = document.getElementById("btnGreen")
    var btnRed = document.getElementById("btnRed")
    var btnYellow = document.getElementById("btnYellow")
    btnBlue.addEventListener("click", GetColor)
    btnGreen.addEventListener("click", GetColor)
    btnRed.addEventListener("click", GetColor)
    btnYellow.addEventListener("click", GetColor)

    //Menu for choosing color
    function ColorChooseMenu() {
        RemoveHighlight();
        document.getElementById("layer").open = true
        document.getElementById("colorSelector").classList.add('zoomIn');
        document.getElementById("colorSelector").open = true;
    }

    //Player bottom cards
    document.getElementById("player1-slot0").addEventListener("click", function () { Play(0) })
    document.getElementById("player1-slot1").addEventListener("click", function () { Play(1) })
    document.getElementById("player1-slot2").addEventListener("click", function () { Play(2) })
    document.getElementById("player1-slot3").addEventListener("click", function () { Play(3) })
    document.getElementById("player1-slot4").addEventListener("click", function () { Play(4) })
    document.getElementById("player1-slot5").addEventListener("click", function () { Play(5) })
    document.getElementById("player1-slot6").addEventListener("click", function () { Play(6) })
    document.getElementById("player1-slot7").addEventListener("click", function () { Play(7) })
    document.getElementById("player1-slot8").addEventListener("click", function () { Play(8) })
    document.getElementById("player1-slot9").addEventListener("click", function () { Play(9) })
    document.getElementById("player1-slot10").addEventListener("click", function () { Play(10) })
    document.getElementById("player1-slot11").addEventListener("click", function () { Play(11) })
    document.getElementById("player1-slot12").addEventListener("click", function () { Play(12) })
    document.getElementById("player1-slot13").addEventListener("click", function () { Play(13) })
    document.getElementById("player1-slot14").addEventListener("click", function () { Play(14) })
    document.getElementById("player1-slot15").addEventListener("click", function () { Play(15) })
    document.getElementById("player1-slot16").addEventListener("click", function () { Play(16) })
    document.getElementById("player1-slot17").addEventListener("click", function () { Play(17) })
    document.getElementById("player1-slot18").addEventListener("click", function () { Play(18) })
    document.getElementById("player1-slot19").addEventListener("click", function () { Play(19) })

    document.getElementById('deck').addEventListener("click", DeckClick)

    //Uno Button
    document.getElementById("btnUno").addEventListener("click", function () {
        Hint("This don't work yet!")
    })

    //Pass Button
    btnPass.addEventListener("click", function () {
        CallNextPlayer();
        btnPass.style.opacity = "0";
    })





    //=============== ANIMATIONS ===================================================================================//

    function SetCardAnimation(card) {
        var tcPosition = document.getElementById("tableCard").getBoundingClientRect();
        var cardPosition = card.getBoundingClientRect();
        var tc_x;
        var tc_y;
        if (ContainsClass(card, "card-bottom")) {
            tc_x = tcPosition.x + 10;
            tc_y = tcPosition.y - 2;
        }
        else if (ContainsClass(card, "card-left")) {
            tc_x = tcPosition.x - 3.5;
            tc_y = tcPosition.y + 27;
            setTimeout(function () { card.style.backgroundImage = GetImage(card.style.backgroundColor, card.innerHTML) }, 150)
        }
        else if (ContainsClass(card, "card-right")) {
            tc_x = tcPosition.x - 3.5;
            tc_y = tcPosition.y + 27.2;
            setTimeout(function () { card.style.backgroundImage = GetImage(card.style.backgroundColor, card.innerHTML) }, 150)
        }
        else {
            tc_x = tcPosition.x + 10;
            tc_y = tcPosition.y + 13;
            setTimeout(function () { card.style.backgroundImage = GetImage(card.style.backgroundColor, card.innerHTML) }, 150)
        }
        var moveX = tc_x - cardPosition.x;
        var moveY = tc_y - cardPosition.y;

        if (ContainsClass(card, "card-bottom") || ContainsClass(card, "card-top")) {
            card.style.setProperty('transition', 'transform 0.4s');
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.3 )');
        }
        else {
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.3 ) rotateY(180deg)');
            setTimeout(function () {
                card.style.setProperty('transition', 'transform 0.4s');
                card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.3 )')
            }, 10)
        }

        setTimeout(function () {
            var tc = document.getElementById("tableCard")
            tc.innerHTML = card.innerHTML;
            tc.style.backgroundColor = card.style.backgroundColor;
            tc.style.backgroundImage = GetImage(tc.style.backgroundColor, tc.innerHTML)
            EraseCard(card);
        }, 500)

        soundCard.play();
    }


    function DrawCardAnimation(card) {
        var deckPosition = document.getElementById("deck").getBoundingClientRect();
        var cardPosition = card.getBoundingClientRect();
        var dec_x;
        var dec_y;
        if (ContainsClass(card, "card-bottom")) {
            deck_x = deckPosition.x + 10;
            deck_y = deckPosition.y + 14;
        }
        else if (IsTableCard(card)) {
            deck_x = deckPosition.x + 1;
            deck_y = deckPosition.y;
        }
        else {
            deck_x = deckPosition.x + 10;
            deck_y = deckPosition.y + 14;
        }
        var moveX = deck_x - cardPosition.x;
        var moveY = deck_y - cardPosition.y;

        card.style.removeProperty('transition')

        if (ContainsClass(card, "card-bottom") || IsTableCard(card)) {
            card.style.backgroundImage = "url('cards/back-inverse.png')";
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.299 ) rotateY(180deg)');
            if (IsTableCard(card)) { card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) rotateY(180deg)'); }
            setTimeout(function () {
                card.style.setProperty('transition', 'transform 0.4s');
                card.style.setProperty('transform', 'rotateY(0deg)');
            }, 10)
            setTimeout(function () { card.style.backgroundImage = GetImage(card.style.backgroundColor, card.innerHTML) }, 140);
            setTimeout(function () {
                card.style.removeProperty('transform');
                card.style.setProperty('transition', 'transform 0.15s');
            }, 510)
        }
        else if (ContainsClass(card, "card-left")) {
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.299 )');
            HideCard(card);
            setTimeout(function () {
                card.style.setProperty('transition', 'transform 0.4s');
                card.style.removeProperty('transform');
            }, 10)
        }
        else if (ContainsClass(card, "card-right")) {
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.299 )');
            HideCard(card);
            setTimeout(function () {
                card.style.setProperty('transition', 'transform 0.4s');
                card.style.removeProperty('transform');
            }, 10)
        }
        else {
            card.style.setProperty('transform', 'translate(' + moveX + 'px, ' + moveY + 'px) scale( 1.299 )');
            HideCard(card);
            setTimeout(function () {
                card.style.setProperty('transition', 'transform 0.4s');
                card.style.setProperty('transform', 'rotateY(180deg) rotateZ(180deg)');
            }, 10)
            setTimeout(function () { card.style.backgroundImage = "url('cards/back-inverse.png')"; }, 140);
        }
        soundCard.play();
    }


    function HighlightPlayableCards() {
        for (var x = 0; x < 20; x++) {
            let card = document.getElementById("player" + player + "-slot" + x);
            ChangeBrightness(card);
        }
        function ChangeBrightness(card) {
            if (IsPlayable(card)) { card.style.filter = "brightness(100%)"; card.classList.add("playable") }
            else { card.style.filter = "brightness(60%)"; }
        }
        document.getElementById("layer").open = false;
    }

    function RemoveHighlight() {
        var cards = document.querySelectorAll(".card-bottom");
        for (var x = 0; x < cards.length; x++) { BackToNormalState(cards[x]); }
        function BackToNormalState(card) {
            card.style.filter = "initial"; card.classList.remove("playable");
        }
        document.getElementById("layer").open = true;
    }

    function Hint(message) {
        document.getElementById("hint").innerHTML = message;
        document.getElementById("hint").style.visibility = "visible";
        document.getElementById("hint").classList.add("fadeIn");

        setTimeout(function () { document.getElementById("hint").classList.add("fadeOut"); }, 1200)
        setTimeout(function () {
            document.getElementById("hint").classList.remove("fadeIn");
            document.getElementById("hint").classList.remove("fadeOut");
            document.getElementById("hint").style.visibility = "hidden";
            document.getElementById("hint").innerHTML = "";
        }, 1500)
    }


    function PlayerAction(player, text) {
        var element = document.getElementById("action-player" + player)
        let color = document.getElementById("tableCard").style.backgroundColor;
        if (text === "skip") {
            soundSkip.play();
            element.innerHTML = "<img src='images/skip-icon-" + color + ".png' style='width: 80px;' />"
        }
        else {
            if (color === "blue") { color = cardBlue }
            if (color === "green") { color = cardGreen }
            if (color === "red") { color = cardRed }
            if (color === "yellow") { color = cardYellow }
            element.style.color = color;
            element.innerHTML = text;
        }
        element.style.visibility = "visible";
        element.classList.add("bounceIn");
        setTimeout(function () { element.classList.add("fadeOut"); }, 1000)
        setTimeout(function () {
            element.classList.remove("bounceIn");
            element.classList.remove("fadeOut");
            element.style.visibility = "hidden";
            element.innerHTML = "";
        }, 1300)
    }

    function ShowLabel(text) {
        var label = document.getElementById("label")
        let color = document.getElementById("tableCard").style.backgroundColor;
        if (color === "blue") { color = cardBlue }
        if (color === "green") { color = cardGreen }
        if (color === "red") { color = cardRed }
        if (color === "yellow") { color = cardYellow }

        label.style.color = color;
        label.innerHTML = text;
        label.style.visibility = "visible";
        label.classList.add("flipInX");


        setTimeout(function () { label.classList.add("flipOutX"); }, 800)
        setTimeout(function () {
            label.classList.remove("flipInX");
            label.classList.remove("flipOutX");
            label.style.visibility = "hidden";
            label.innerHTML = "";
        }, 1100)
    }
}