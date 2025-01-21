class StudentHogwarts {
    #privateScore = 0;
    #name = null;

    changeScoreBy(points) {
        this.#privateScore += points;
    }

   
    setName(newName) {
        this.#name = newName;
    }

    
    rewardStudent() {
        this.changeScoreBy(1);
    }

  
    penalizeStudent() {
        this.changeScoreBy(-1);
    }

   
    getScore() {
        return `${this.#name}: ${this.#privateScore}`;
    }
}


let harry = new StudentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.penalizeStudent();
console.log(harry.getScore());


let draco = new StudentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); 
