var reste, de, position;
var deText = "La valeur du dé est:";
var player = "player.png";
var winner = "winner.png";
var trophy = "trophy.png";

function image(img) {
    return '<img src="img/' + img + '" />';
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function () {
    nouveau();
});

function nouveau() {
    reste = 2000;
    position = 0;
    for(var i = 1; i < 7 ; i++){
        $("#s" + i).empty();
    }
    $("#s" + position).empty().append(image(player));
    $("#game").empty().append("<p id='deText'></p><p>Reste: <span id='reste'></span> DH</p>");
    $("#reste").append(reste);
}

function jouer() {
    if (reste > 0) {
        reste -= 300;
        $("#reste").empty().append(reste);

        de = random(1, 6);
        $("#deText").empty().append(deText + "<h1 id='de'></h1>");
        $("#de").empty().append(de);

        $("#s" + position).empty();
        position = de;

        if (de == 6) {
            $("#s" + position).empty().append(image(winner));
            alert("Jeu terminé, vous avez gagné!");
        } else {
            $("#s" + position).empty().append(image(player));
        }
    } else {
        alert("Jeu terminé, vous avez perdu!");
    }
}

function mouvement(direction) {
    if (reste > 0) {
        reste -= 500;
        console.log("Solde:" + reste);
        $("#reste").empty().append(reste);
        switch (direction) {
            case "+":
                if (position < 6) {
                    $("#s" + position++).empty();
                }
                break;
            case "-":
                if (position > 0) {
                    $("#s" + position--).empty();
                }
                break;
        }
        if (position == 6) {
            $("#s" + position).empty().append(image(winner));
        }else{
            $("#s" + position).empty().append(image(player));
        }
    } else {
        alert("Jeu terminé, vous avez perdu!");
    }

    switch (direction) {
        case "+":

            break;
        case "-":

            break;
    }
}
