console.log('Hund --');

// Hundesprechschule
// as Class
function Hund(){

    var hunt = false;
    var numberOfCircle = 5;
    
    var obstacles = [];
    
    this.start = function () {
        hunt = true;
        console.log('Star - Hund');
        while(hunt){
//            this.progressiveResonance();
//            this.assaultResonance();
            this.novaResonance();
            this.stop();
        }
    };
    
    this.stop = function () {
        hunt = false;
        obstacles = [];
    };
        
    this.progressiveResonance = function (){
        for (var circle = 1; circle <= numberOfCircle; circle++){
            for(var index = 1; index <= circle; index++){
                console.log('Circle: ' + index);
                obstacles = this.huntObstacles(index);
                this.bark(obstacles);
            }
        }
    };
    
    this.assaultResonance = function (){
        for (var index = 1; index <= numberOfCircle; index++){
            console.log('Circle: ' + index);
            obstacles = this.huntObstacles(index);
            this.bark(obstacles);
        }
    };
    
    this.novaResonance = function (){
        for (var circle = 2; circle <= numberOfCircle; circle++){
            
            console.log('Circle: 1');
            obstacles = this.huntObstacles(1);
            this.bark(obstacles);
            console.log('Circle: 2');
            obstacles = this.huntObstacles(2);
            this.bark(obstacles);
            
            for(var index = 3; index <= circle; index++){
                console.log('Circle: ' + circle);
                obstacles = this.huntObstacles(index);
                this.bark(obstacles);
            }
        } 
    };
    
    /**
    * Function to reade the map and return a array of obstacles
    * Parameter 1: index - Number of circle to search
    * Return: obstacles - Array of obstacles in fonetic format
    */
    this.huntObstacles = null;// function() {}; //Need be implement
    
    this.bark = function (obstacles) {
      for (var index in obstacles) {
          console.log('     song: ' + obstacles[index]);
          this.playSong(obstacles[index]);
      }
    };
    
    /**
    * Function to play a song in the selected plataform
    * Parameter 1: fonetic - Name of song to play
    */
    this.playSong = null; //Need be implement
    
};


