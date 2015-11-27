console.log('Bootstrap --');

var matriz = (function (){
    var array = [];
    for(var i=0; i<13; i++){
        array[i] = [];
        for(var j=0;j<13; j++){
            var number = Math.floor((Math.random() * 10) + 1)
            if (i == 5 && j == 5){
                array[i][j] = 'P';
            } else  if (number % 3 == 0 && number % 2 ==0){
                array[i][j] = 'X';
            } else {
                array[i][j] = '_';
            }
       }
    }
    return array;
})();

var string = '';
var table = document.getElementById("myTable");
for(var i=0; i<13; i++){
    var row = table.insertRow(i);
    for(var j=0;j<13; j++){
        var cell = row.insertCell(j);
        cell.innerHTML = matriz[i][j];
    }
}

document.getElementById("map").innerHTML = string;

var personaX = 5;
var personaY = 5;

var hund = new Hund();
hund.playSong = function(){/*none*/};
hund.huntObstacles = function (circle) {
    var obstacles = [];
    var array = [];

    console.log('   Process Zone A');
    array = this.processZoneA(circle, personaX, personaY);
    obstacles.concat(array);

    console.log('   Process Zone E');
    array = this.processZoneE(circle, personaX, personaY);
    obstacles.concat(array);

    console.log('   Process Zone I');
    array = this.processZoneI(circle, personaX, personaY);
    obstacles.concat(array);

    console.log('   Process Zone O');
    array = this.processZoneO(circle, personaX, personaY);
    obstacles.concat(array);

    return obstacles;
}

hund.processZoneA = function (circle, personaX, personaY){
    var line  = personaX - circle;
    var start = personaY - circle;
    var end   = personaY + circle;
    var obstacles = [];
    var fonetic = null;

    for (var index = start; index <= end; index++) {
        if(matriz[line][index] == 'X'){
            fonetic = createFoneticForX(circle, start, end, index, (line < personaX));
            obstacles.push(fonetic);
            console.log('     Obstacle found : ' + fonetic);
        }
    }
    return obstacles;
}

hund.processZoneI = function (circle, personaX, personaY){
    var line  = personaX + circle;
    var start = personaY - circle;
    var end   = personaY + circle;
    var obstacles = [];
    var fonetic = null;

    for (var index = end; index >= start; index--) {
        if(matriz[line][index] == 'X'){
            fonetic = createFoneticForX(circle, start, end, index, (line < personaX));
            obstacles.push(fonetic);
            console.log('     Obstacle found : ' + fonetic);
        }
    }
    return obstacles;
}

hund.processZoneE = function (circle, personaX, personaY){
    var column = personaY + circle;
    var start = personaX - circle;
    var end   = personaX + circle;
    var obstacles = [];
    var fonetic = null;

    for (var index = start; index <= end; index++) {
        if(matriz[index][column] == 'X'){
            fonetic = createFoneticForY(circle, start, end, index, (column > personaY));
            obstacles.push(fonetic);
            console.log('     Obstacle found : ' + fonetic);
        }
    }
    return obstacles;
}

hund.processZoneO = function (circle, personaX, personaY){
    var column = personaY - circle;
    var start = personaX - circle;
    var end   = personaX + circle;
    var obstacles = [];
    var fonetic = null;

    for (var index = start; index <= end; index++) {
        if(matriz[index][column] == 'X'){
            fonetic = createFoneticForY(circle, start, end, index, (column > personaY));
            obstacles.push(fonetic);
            console.log('     Obstacle found : ' + fonetic);
        }
    }
    return obstacles;
}

hund.start();
////
//console.log('Circulo 1');
//hund.huntObstacles(1);
//console.log('Circulo 2');
//hund.huntObstacles(2);
//console.log('Circulo 3');
//hund.huntObstacles(3);

//console.log(hund.huntObstacles);
